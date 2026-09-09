import { useEffect, useMemo, useState } from "react";
import type { ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./GithubReadme.module.css";

type Props = {
  /** e.g. "bowyani/Production_Monitoring" */
  repo: string;
  branch?: string;
  file?: string;
  heading?: string;
  /** collapsed height cap; pass 0 to always show full */
  clampHeight?: number;
};

type State =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; text: string };

function isAbsolute(url: string) {
  return /^(https?:)?\/\//i.test(url) || url.startsWith("mailto:");
}

export function GithubReadme({
  repo,
  branch = "main",
  file = "README.md",
  heading = "README",
  clampHeight = 560,
}: Props) {
  const [state, setState] = useState<State>({ status: "loading" });
  const [expanded, setExpanded] = useState(clampHeight === 0);

  const rawBase = `https://raw.githubusercontent.com/${repo}/${branch}/`;
  // raw.githubusercontent.com serves .svg as text/plain, so <img> won't render
  // it — jsDelivr mirrors the same files with correct content types.
  const cdnBase = `https://cdn.jsdelivr.net/gh/${repo}@${branch}/`;
  const blobBase = `https://github.com/${repo}/blob/${branch}/`;
  const repoUrl = `https://github.com/${repo}${
    file === "README.md" ? "" : `/blob/${branch}/${file}`
  }`;

  useEffect(() => {
    let alive = true;
    setState({ status: "loading" });
    fetch(rawBase + file)
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.text();
      })
      .then((text) => alive && setState({ status: "ready", text }))
      .catch(() => alive && setState({ status: "error" }));
    return () => {
      alive = false;
    };
  }, [rawBase, file]);

  const components = useMemo(
    () => ({
      a({ href = "", ...props }: ComponentProps<"a">) {
        let resolved = href;
        if (href.startsWith("#")) resolved = repoUrl + href;
        else if (!isAbsolute(href)) resolved = blobBase + href.replace(/^\.?\//, "");
        return (
          <a href={resolved} target="_blank" rel="noopener noreferrer" {...props} />
        );
      },
      img({ src = "", alt = "", ...props }: ComponentProps<"img">) {
        const resolved = isAbsolute(src)
          ? src
          : cdnBase + src.replace(/^\.?\//, "");
        return <img src={resolved} alt={alt} loading="lazy" {...props} />;
      },
      table({ ...props }: ComponentProps<"table">) {
        return (
          <div className={styles.tableScroll}>
            <table {...props} />
          </div>
        );
      },
    }),
    [cdnBase, blobBase, repoUrl],
  );

  const canClamp = clampHeight > 0 && state.status === "ready" && !expanded;

  return (
    <section className={styles.wrap}>
      <div className={styles.head}>
        <h2 className={styles.heading}>{heading}</h2>
        <a
          className={styles.ghLink}
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          อ่านฉบับเต็มบน GitHub ↗
        </a>
      </div>

      <div
        className={`${styles.panel} ${canClamp ? styles.clamped : ""}`}
        style={canClamp ? { maxHeight: clampHeight } : undefined}
      >
        {state.status === "loading" && (
          <p className={styles.state}>กำลังโหลด README…</p>
        )}
        {state.status === "error" && (
          <p className={styles.state}>
            โหลด README ไม่สำเร็จ —{" "}
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              เปิดบน GitHub
            </a>
          </p>
        )}
        {state.status === "ready" && (
          <div className={styles.md}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
              {state.text}
            </ReactMarkdown>
          </div>
        )}
      </div>

      {clampHeight > 0 && state.status === "ready" && (
        <div className={styles.toggleRow}>
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? "ย่อ README" : "แสดง README ทั้งหมด"}
          </button>
        </div>
      )}
    </section>
  );
}

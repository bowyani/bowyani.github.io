import { disciplines } from "@/data/profile";
import type { Discipline } from "@/types";
import styles from "./DisciplineTabs.module.css";

interface Props {
  active: Discipline | "all";
  onChange: (d: Discipline | "all") => void;
}

export function DisciplineTabs({ active, onChange }: Props) {
  return (
    <div
      className={styles.tabs}
      role="group"
      aria-label="Filter projects by discipline"
    >
      <button
        type="button"
        aria-pressed={active === "all"}
        className={`${styles.tab} ${active === "all" ? styles.active : ""}`}
        style={{
          ["--accent" as string]:
            "var(--accent-violet)" /* ใช้สี Accent เดียวกันกับระบบ */,
        }}
        onClick={() => onChange("all")}
      >
        All
      </button>

      {disciplines.map((d) => (
        <button
          key={d.id}
          type="button"
          aria-pressed={active === d.id}
          className={`${styles.tab} ${active === d.id ? styles.active : ""}`}
          style={{
            ["--accent" as string]: `var(${d.accentVar})`,
          }}
          onClick={() => onChange(d.id)}
        >
          {d.label}
        </button>
      ))}
    </div>
  );
}

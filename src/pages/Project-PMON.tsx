import styles from "./Project.module.css";
import { PdfViewer } from "@/components/PdfViewer";
import { GithubReadme } from "@/components/GithubReadme";

export function ProjectPMON() {
  return (
    <section id="work" className={`container ${styles.work}`}>
      <article className={styles.card}>
        <div className={styles.body}>
          <h1 className={styles.title}>Production Monitoring</h1>
          <p className={styles.description} lang="en">
            Real-time production tracking system for automated factories. It
            ingests machine data via MQTT to display operational status and
            output metrics, while triggering real-time alerts when issues arise.
            I built a prototype demo and documented the design rationale in 4
            days, taking a holistic approach across BA, Engineering, and
            Developer perspectives. While it isn't fully polished—and won't be
            until it's deployed for real user feedback—feel free to explore it.
            This project serves as a proof of concept, keeping Industry 4.0 core
            principles and IT/OT integration at its center.
          </p>

          <div className={styles.links}>
            <a
              className={`${styles.link}`}
              href="https://production-monitoring-demo.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Prototype (opens in new tab)"
            >
              Prototype
            </a>
            <a
              className={styles.link}
              href="https://github.com/bowyani/Production_Monitoring"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Documentation on GitHub (opens in new tab)"
            >
              Documentation
            </a>
          </div>
        </div>
        <a
          href="https://production-monitoring-demo.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.previewContainer}
          aria-label="View Prototype (opens in new tab)"
        >
          <img
            src="/projects/product_factory.png"
            alt="Production Monitoring Prototype Preview"
            className={styles.previewImg}
          />
          <div className={styles.overlay}>
            <span>View Prototype</span>
          </div>
        </a>
      </article>

      <GithubReadme repo="bowyani/Production_Monitoring" clampHeight={560} />

      <PdfViewer
        src="/projects/production-monitoring/Presentation.pdf"
        title="Production Monitoring — Presentation"
      />
    </section>
  );
}

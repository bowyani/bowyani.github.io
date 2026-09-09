import styles from "./ProjectPM.module.css";
import { GithubReadme } from "@/components/GithubReadme";

export function ProjectPVM() {
  return (
    <section id="work" className={`container ${styles.work}`}>
      <article className={styles.card}>
        <div className={styles.body}>
          <h1 className={styles.title}>Preventive Maintenance</h1>
          <p className={styles.description} lang="en">
            A Preventive Maintenance (PM) platform designed for site supervisors
            and field technicians. It streamlines maintenance workflows, tracks
            task completion via custom checksheets, and connects directly with
            operational data (like{"Production Monitoring"}
            <a href="/production-monitoring" className={styles.linkInline}>
              Production Monitoring
            </a>
            ) to analyze equipment lifecycles, maintenance costs, and machine
            replacement ROI.
          </p>

          <div className={styles.links}>
            <a
              className={`${styles.link}`}
              href="https://prototype-pm.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Prototype (opens in new tab)"
            >
              Prototype
            </a>
            <a
              className={styles.link}
              href="https://github.com/bowyani/preventive-maintenance"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Documentation on GitHub (opens in new tab)"
            >
              Documentation
            </a>
          </div>
        </div>
        <a
          href="https://prototype-pm.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.previewContainer}
          aria-label="View Prototype (opens in new tab)"
        >
          <img
            src="/projects/product_PM.png"
            alt="Preventive Maintenance Prototype Preview"
            className={styles.previewImg}
          />
          <div className={styles.overlay}>
            <span>View Prototype</span>
          </div>
        </a>
      </article>
      <GithubReadme repo="bowyani/preventive-maintenance" clampHeight={560} />
    </section>
  );
}

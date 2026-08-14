import styles from "./ProjectPM.module.css";

export function ProjectPM() {
  return (
    <section id="work" className={`container ${styles.work}`}>
      <article className={styles.card}>
        <div className={styles.body}>
          <span className={styles.tag}>PROJECT · PREVENTIVE MAINTENANCE</span>

          <h3 className={styles.title}>Preventive Maintenance</h3>

          <p className={styles.description}>
            ระบบสำหรับวางแผน ติดตาม และจัดการงาน Preventive Maintenance
            เพื่อช่วยลด downtime และทำให้การบำรุงรักษาเป็นระบบมากขึ้น
          </p>

          <div className={styles.links}>
            {/* Primary Action */}
            <a
              className={`${styles.link} ${styles.primaryLink}`}
              href="https://prototype-pm.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Prototype (opens in new tab)"
            >
              Prototype
              <span className={styles.linkIcon} aria-hidden="true">
                ↗
              </span>
            </a>

            {/* Secondary Action */}
            <a
              className={styles.link}
              href="https://github.com/bowyani/preventive-maintenance"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Documentation on GitHub (opens in new tab)"
            >
              Documentation
              <span className={styles.linkIcon} aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

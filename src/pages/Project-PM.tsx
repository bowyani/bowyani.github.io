import styles from "./ProjectPM.module.css";

export function ProjectPM() {
  return (
    <section id="work" className={`container ${styles.work}`}>
      <article className={styles.card}>
        <div className={styles.body}>
          <h3 className={styles.title}>Preventive Maintenance</h3>
          <p className={styles.description}>
            ระบบสำหรับวางแผน ติดตาม และจัดการงาน Preventive Maintenance
            เพื่อช่วยลด downtime และทำให้การบำรุงรักษาเป็นระบบมากขึ้น
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
    </section>
  );
}

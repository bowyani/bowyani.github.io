import styles from "./ProjectPM.module.css";

export function ProjectPM() {
  return (
    <article className={styles.card}>
      <div className={styles.body}>
        <span className={styles.tag}>PROJECT · PREVENTIVE MAINTENANCE</span>

        <h3 className={styles.title}>Preventive Maintenance</h3>

        <p className={styles.description}>
          ระบบสำหรับวางแผน ติดตาม และจัดการงาน Preventive Maintenance
          เพื่อช่วยลด downtime และทำให้การบำรุงรักษาเป็นระบบมากขึ้น
        </p>

        <div className={styles.links}>
          <a
            className={styles.link}
            href="https://github.com/bowyani/preventive-maintenance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>↗</span>
            Documentation
          </a>

          <a
            className={styles.link}
            href="https://prototype-pm.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>↗</span>
            Prototype
          </a>
        </div>
      </div>
    </article>
  );
}

import styles from "./ProjectPM.module.css";

export function ProjectJAS() {
  return (
    <section id="work" className={`container ${styles.work}`}>
      <article className={styles.card}>
        <div className={styles.body}>
          <h3 className={styles.title}>Job Acceptance System</h3>
          <p className={styles.description}>
            Outsource Maintenance & SLA Management Platform - Corporate Digital
            Transformation KPI
          </p>
          <img
            src="/projects/project_JAS.png"
            alt="Outsource Maintenance & SLA Management Platform Preview"
            className={styles.previewImg}
          />
        </div>
      </article>
    </section>
  );
}

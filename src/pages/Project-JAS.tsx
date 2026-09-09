import styles from "./Project.module.css";

export function ProjectJAS() {
  return (
    <section id="work" className={`container ${styles.work}`}>
      <article className={styles.card}>
        <div className={styles.body}>
          <h1 className={styles.title}>Job Acceptance System</h1>
          <p className={styles.description}>
            Outsource Maintenance &amp; SLA Management Platform - Corporate
            Digital Transformation KPI
          </p>
          <img
            src="/projects/project_JAS.png"
            alt="Outsource Maintenance & SLA Management Platform preview"
            className={styles.standaloneImg}
            loading="lazy"
          />
        </div>
      </article>
    </section>
  );
}

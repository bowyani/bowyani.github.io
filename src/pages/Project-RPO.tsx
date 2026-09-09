import styles from "./Project.module.css";

export function ProjectRPO() {
  return (
    <section id="work" className={`container ${styles.work}`}>
      <article className={styles.card}>
        <div className={styles.body}>
          <h1 className={styles.title}>Price Optimization by ML</h1>
          <p className={styles.description}>
            Forecasted 500M THB in procurement savings
          </p>
          <img
            src="/projects/project_RPO_1.png"
            alt="Price Optimization by ML — overview"
            className={styles.standaloneImg}
            loading="lazy"
          />
          <img
            src="/projects/project_RPO_2.png"
            alt="Price Optimization by ML — model results"
            className={styles.standaloneImg}
            loading="lazy"
          />
          <img
            src="/projects/project_RPO_3.png"
            alt="Price Optimization by ML — savings forecast"
            className={styles.standaloneImg}
            loading="lazy"
          />
        </div>
      </article>
    </section>
  );
}

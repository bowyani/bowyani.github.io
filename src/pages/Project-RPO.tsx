import styles from "./ProjectPM.module.css";

export function ProjectRPO() {
  return (
    <section id="work" className={`container ${styles.work}`}>
      <article className={styles.card}>
        <div className={styles.body}>
          <h3 className={styles.title}>Price Optimization by ML</h3>
          <p className={styles.description}>
            Forecasted 500M THB in procurement savings
          </p>
          <img
            src="/projects/project_RPO_1.png"
            alt="Price Optimization by ML Preview"
            className={styles.previewImg}
          />
          <img
            src="/projects/project_RPO_2.png"
            alt="Price Optimization by ML Preview"
            className={styles.previewImg}
          />
          <img
            src="/projects/project_RPO_3.png"
            alt="Price Optimization by ML Preview"
            className={styles.previewImg}
          />
        </div>
      </article>
    </section>
  );
}

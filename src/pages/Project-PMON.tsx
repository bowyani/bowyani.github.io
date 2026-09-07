import styles from "./ProjectPM.module.css";

export function ProjectPMON() {
  return (
    <section id="work" className={`container ${styles.work}`}>
      <article className={styles.card}>
        <div className={styles.body}>
          <h1 className={styles.title}>Production Monitoring</h1>
          <p className={styles.description} lang="th">
            ระบบติดตามสายการผลิตแบบเรียลไทม์ในโรงงานอัตโนมัติ รับข้อมูลจากเครื่องจักร
            ผ่าน MQTT เพื่อแสดงสถานะการทำงาน ปริมาณการผลิต และแจ้งเตือนเมื่อเกิดปัญหา
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
    </section>
  );
}

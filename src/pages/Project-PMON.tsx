import styles from "./Project.module.css";
import { ProjectHero } from "@/components/ProjectHero";
import { GithubReadme } from "@/components/GithubReadme";
import { PdfViewer } from "@/components/PdfViewer";

export function ProjectPMON() {
  return (
    <>
      <ProjectHero
        eyebrow="Product Building · Industry 4.0"
        title="Production Monitoring"
        image="/projects/product_factory.jpg"
        description={
          <p>
            Real-time production tracking system for automated factories. It
            ingests machine data via MQTT to display operational status and
            output metrics, while triggering real-time alerts when issues arise.
            This project serves as a proof of concept, keeping Industry 4.0 core
            principles and IT/OT integration at its center.
          </p>
        }
      />

      <section id="work" className={`container ${styles.work}`}>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <p className={styles.railLabel}>Explore</p>
            <a
              className={styles.primaryLink}
              href="https://production-monitoring-demo.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the prototype (opens in new tab)"
            >
              Open Prototype ↗
            </a>
            <a
              className={styles.sideLink}
              href="https://github.com/bowyani/Production_Monitoring"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View documentation on GitHub (opens in new tab)"
            >
              Documentation ↗
            </a>
          </aside>

          <div className={styles.content}>
            <GithubReadme
              repo="bowyani/Production_Monitoring"
              heading="Project write-up"
              clampHeight={0}
            />

            <PdfViewer
              src="/projects/production-monitoring/Presentation.pdf"
              title="Production Monitoring — Presentation"
            />
          </div>
        </div>
      </section>
    </>
  );
}

import styles from "./Project.module.css";
import { ProjectHero } from "@/components/ProjectHero";
import { GithubReadme } from "@/components/GithubReadme";

export function ProjectPVM() {
  return (
    <>
      <ProjectHero
        eyebrow="Product Building · Maintenance Ops"
        title="Preventive Maintenance"
        image="/projects/product_PM.png"
        description={
          <p>
            A Preventive Maintenance (PM) platform designed for site supervisors
            and field technicians. It streamlines maintenance workflows, tracks
            task completion via custom checksheets, and connects directly with
            operational data (like{" "}
            <a href="#/production-monitoring">Production Monitoring</a>) to
            analyze equipment lifecycles, maintenance costs, and machine
            replacement ROI.
          </p>
        }
      />

      <section id="work" className={`container ${styles.work}`}>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <p className={styles.railLabel}>Explore</p>
            <a
              className={styles.primaryLink}
              href="https://prototype-pm.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the prototype (opens in new tab)"
            >
              Open Prototype ↗
            </a>
            <a
              className={styles.sideLink}
              href="https://github.com/bowyani/preventive-maintenance"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View documentation on GitHub (opens in new tab)"
            >
              Documentation ↗
            </a>
          </aside>

          <div className={styles.content}>
            <GithubReadme
              repo="bowyani/preventive-maintenance"
              heading="Project write-up"
              clampHeight={0}
            />
          </div>
        </div>
      </section>
    </>
  );
}

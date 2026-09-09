import type { ReactNode } from "react";
import styles from "./ProjectHero.module.css";

type Props = {
  /** small mono label above the title */
  eyebrow?: string;
  title: string;
  /** lead paragraph — plain string or rich nodes */
  description: ReactNode;
  /** faint background image, e.g. "/projects/product_factory.jpg" */
  image?: string;
  /** optional CTA row rendered under the description */
  actions?: ReactNode;
};

export function ProjectHero({
  eyebrow,
  title,
  description,
  image,
  actions,
}: Props) {
  return (
    <section className={styles.hero}>
      {image && (
        <div
          className={styles.bg}
          style={{ backgroundImage: `url("${image}")` }}
          aria-hidden="true"
        />
      )}
      <div className={`container ${styles.inner}`}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.description} lang="en">
          {description}
        </div>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </section>
  );
}

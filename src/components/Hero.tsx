import { profile } from "@/data/profile";
import styles from "./Hero.module.css";

const linkedIn = profile.socials.find((s) => s.label === "LinkedIn")?.url;

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            <span className={styles.name}>Yanisa's showcase</span>
          </h1>
          <p className={styles.bio}>
            Business Analyst &amp; Product Builder — coding, UX research, and UI
            design work.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryBtn} href={profile.resumeUrl} download>
              Resume
            </a>
            {linkedIn && (
              <a
                className={styles.secondaryBtn}
                href={linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

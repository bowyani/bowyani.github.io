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
            I'm a Business Analyst with an engineering background <br />
            who loves finding solutions to problems and bringing product ideas
            to life. Please feel free to explore my projects. Feedback is always
            welcome—I love hearing from real users! If you want to know more
            about me, you can check my resume and LinkedIn profile below.
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

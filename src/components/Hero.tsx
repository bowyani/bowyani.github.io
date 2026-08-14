import { profile } from "@/data/profile";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            <span className={styles.name}>Yanisa's showcase</span>
          </h1>
        </div>
        {/* <div className={styles.avatarWrap}>
          <img src={profile.avatar} alt={profile.name} className={styles.avatar} />
        </div> */}
      </div>
    </section>
  );
}

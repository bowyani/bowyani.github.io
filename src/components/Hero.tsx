import { profile } from '@/data/profile';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className="eyebrow">Welcome to my showcase :)</p>
          <h1 className={styles.title}>
            <span className={styles.name}>I'm {profile.name.split(' ')[0]}</span>
          </h1>
          <p className={styles.bio}>{profile.bio}</p>
          <div className={styles.actions}>
            <a className={styles.primaryBtn} href={profile.resumeUrl} download>
              Download Resume
            </a>
            {profile.socials.map((s) => (
              <a key={s.label} className={styles.secondaryBtn} href={s.url} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
        {/* <div className={styles.avatarWrap}>
          <img src={profile.avatar} alt={profile.name} className={styles.avatar} />
        </div> */}
      </div>
    </section>
  );
}

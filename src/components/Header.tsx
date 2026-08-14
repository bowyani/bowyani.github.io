import { profile } from "@/data/profile";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <nav className={styles.nav}>
          <a href="/">Home</a>
        </nav>
        <nav className={styles.nav}>
          <a href={profile.resumeUrl} download>
            Resume
          </a>
          {profile.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

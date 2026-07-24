import { profile } from '@/data/profile';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          {profile.name}
        </a>
        <nav className={styles.nav}>
          <a href="#work">ผลงาน</a>
          <a href={profile.resumeUrl} download>
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

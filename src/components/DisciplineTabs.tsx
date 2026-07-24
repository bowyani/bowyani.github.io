import { disciplines } from '@/data/profile';
import type { Discipline } from '@/types';
import styles from './DisciplineTabs.module.css';

interface Props {
  active: Discipline | 'all';
  onChange: (d: Discipline | 'all') => void;
}

// Signature element: three overlapping "index cards", like tabbed dividers in a
// sketchbook, one per discipline. Order carries no meaning here (they're parallel
// practices, not steps), so no 01/02/03 numbering — the rotation + stacking is
// what signals "these are tabs you flip through."
export function DisciplineTabs({ active, onChange }: Props) {
  return (
    <div className={styles.stack} role="tablist" aria-label="Filter by discipline">
      <button
        role="tab"
        aria-selected={active === 'all'}
        className={`${styles.card} ${styles.all} ${active === 'all' ? styles.activeCard : ''}`}
        style={{ ['--rot' as string]: '-1.2deg' }}
        onClick={() => onChange('all')}
      >
        <span className={styles.label}>ทั้งหมด</span>
      </button>
      {disciplines.map((d, i) => (
        <button
          key={d.id}
          role="tab"
          aria-selected={active === d.id}
          className={`${styles.card} ${active === d.id ? styles.activeCard : ''}`}
          style={{
            ['--rot' as string]: `${i % 2 === 0 ? 1 : -1.5}deg`,
            ['--accent' as string]: `var(${d.accentVar})`,
          }}
          onClick={() => onChange(d.id)}
        >
          <span className={styles.label}>{d.label}</span>
          <span className={styles.tagline}>{d.tagline}</span>
        </button>
      ))}
    </div>
  );
}

import { disciplines } from '@/data/profile';
import type { Discipline } from '@/types';
import styles from './DisciplineTabs.module.css';

interface Props {
  active: Discipline | 'all';
  onChange: (d: Discipline | 'all') => void;
}

export function DisciplineTabs({ active, onChange }: Props) {
  return (
<div
  className={styles.tabs}
  role="tablist"
  aria-label="Filter by discipline"
>
  <button
    role="tab"
    aria-selected={active === "all"}
    className={`${styles.tab} ${active === "all" ? styles.active : ""}`}
    onClick={() => onChange("all")}
  >
    All
  </button>

  {disciplines.map((d) => (
    <button
      key={d.id}
      role="tab"
      aria-selected={active === d.id}
      className={`${styles.tab} ${active === d.id ? styles.active : ""}`}
      style={{
        ["--accent" as string]: `var(${d.accentVar})`,
      }}
      onClick={() => onChange(d.id)}
    >
      {d.label}
    </button>
  ))}
</div>
  );
}

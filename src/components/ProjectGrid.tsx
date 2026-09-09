import type { Discipline, Project } from '@/types';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectGrid.module.css';

interface Props {
  projects: Project[];
  filter: Discipline | 'all';
}

export function ProjectGrid({ projects, filter }: Props) {
  const visible = filter === 'all' ? projects : projects.filter((p) => p.discipline === filter);

  if (visible.length === 0) {
    return (
      <p className={styles.empty} lang="th">
        ยังไม่มีโปรเจกต์ในหมวดนี้ — เพิ่มได้ที่ src/data/projects.ts
      </p>
    );
  }

  return (
    <>
      <p className={styles.count} aria-live="polite">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>
      <div className={styles.grid}>
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </>
  );
}

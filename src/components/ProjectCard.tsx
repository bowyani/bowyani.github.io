import type { Project } from '@/types';
import { disciplines } from '@/data/profile';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: Project }) {
  const meta = disciplines.find((d) => d.id === project.discipline);
  const content = (
    <>
      {project.image && (
        <div className={styles.thumb}>
          <img src={project.image} alt="" loading="lazy" />
        </div>
      )}
      <div className={styles.body}>
        <span className={styles.tag} style={{ ['--accent' as string]: `var(${meta?.accentVar})` }}>
          {meta?.label}
        </span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>
        {project.date && (
          <p className={styles.date}>{project.date}</p>
        )}
        {project.tags.length > 0 && (
          <ul className={styles.tags}>
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );

  if (project.link) {
    return (
      <a className={styles.card} href={project.link} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return <div className={styles.card}>{content}</div>;
}

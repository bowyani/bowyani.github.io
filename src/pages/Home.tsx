import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { DisciplineTabs } from '@/components/DisciplineTabs';
import { ProjectGrid } from '@/components/ProjectGrid';
import { projects } from '@/data/projects';
import type { Discipline } from '@/types';
import styles from './Home.module.css';

export function Home() {
  const [filter, setFilter] = useState<Discipline | 'all'>('all');

  return (
    <>
      <Hero />
      <section id="work" className={`container ${styles.work}`}>
        <p className="eyebrow">ผลงาน</p>
        <h2 className={styles.heading}>เลือกดูตามสายงาน</h2>
        <DisciplineTabs active={filter} onChange={setFilter} />
        <ProjectGrid projects={projects} filter={filter} />
      </section>
    </>
  );
}

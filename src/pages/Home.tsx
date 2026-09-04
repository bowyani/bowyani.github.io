import { useState } from "react";
import { Hero } from "@/components/Hero";
import { DisciplineTabs } from "@/components/DisciplineTabs";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/data/projects";
import type { Discipline } from "@/types";
import styles from "./Home.module.css";

export function Home() {
  const [filter, setFilter] = useState<Discipline | "all">("all");

  return (
    <>
      <Hero />
      <section
        id="work"
        aria-label="Selected work"
        className={`container ${styles.work}`}
      >
        <div className={styles.layout}>
          {/* คอลัมน์ซ้าย: Sticky Sidebar Filter */}
          <aside className={styles.sidebar}>
            <DisciplineTabs active={filter} onChange={setFilter} />
          </aside>

          {/* คอลัมน์ขวา: รายการผลงาน */}
          <div className={styles.content}>
            <ProjectGrid projects={projects} filter={filter} />
          </div>
        </div>
      </section>
    </>
  );
}

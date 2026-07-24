import type { Project } from '@/types';

// เว็บ Wix เดิม (https://yanisa8483.wixsite.com/showcase) ไม่มีข้อความอธิบายโปรเจกต์แนบมากับรูป
// ด้านล่างนี้เป็นโครงที่ map ตามลำดับรูป/วิดีโอที่เจอในแต่ละ section — ให้แก้ title/description
// ให้ตรงกับโปรเจกต์จริง แล้วเซฟรูปจาก Wix (คลิกขวา > บันทึกรูป) ไปไว้ที่ public/projects/
export const projects: Project[] = [
  {
    id: 'coding-01',
    discipline: 'coding',
    title: 'Coding Project 1',
    description: 'TODO: อธิบายโปรเจกต์นี้ — ใช้เทคโนโลยีอะไร แก้ปัญหาอะไร',
    image: '/projects/project1.png',
    link: 'https://www.youtube.com/watch?v=6lBHCo0Hiqc&list=PLBv8NA8svAOWEOasPZ53OQIaiakTGm6eH&index=3',
    tags: ['TODO'],
  },
  {
    id: 'coding-02',
    discipline: 'coding',
    title: 'Coding Project 2',
    description: 'TODO: อธิบายโปรเจกต์นี้',
    image: '/projects/project2.png',
    tags: ['TODO'],
  },
  {
    id: 'research-01',
    discipline: 'research',
    title: 'Business Survey — UX Case Study',
    description: 'TODO: สรุปโจทย์วิจัย กลุ่มตัวอย่าง และ insight สำคัญที่ได้',
    image: '/projects/project3.png',
    tags: ['UX Research', 'Survey'],
  },
  {
    id: 'ui-01',
    discipline: 'ui',
    title: 'UI Design Project',
    description: 'TODO: อธิบายแนวคิดการออกแบบ เครื่องมือที่ใช้ (Figma ฯลฯ)',
    tags: ['UI Design'],
  },
];

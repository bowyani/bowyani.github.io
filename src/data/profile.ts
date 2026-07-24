import type { Profile, DisciplineMeta } from '@/types';

// TODO: แก้ bio ให้เป็นคำอธิบายตัวเองแบบเต็ม ๆ — ข้อมูลนี้ดึงมาจากโครงเว็บ Wix เดิม
export const profile: Profile = {
  name: 'Yanisa Verawongchai',
  role: 'Coding · UX Research · UI Design',
  bio: 'สวัสดี ยินดีต้อนรับสู่ผลงานของฉัน — ที่นี่รวบรวมงานสามด้านที่ฉันสนใจ ได้แก่ การเขียนโค้ด งานวิจัยเชิงธุรกิจ/UX และงานออกแบบ UI',
  avatar: '/profile.jpg',
  resumeUrl: '/resume.pdf',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yanisa-verawongchai/' },
    { label: 'YouTube', url: 'https://www.youtube.com/@yanisav/playlists' },
  ],
};

export const disciplines: DisciplineMeta[] = [
  {
    id: 'coding',
    label: 'Coding',
    tagline: 'โปรเจกต์และแบบฝึกหัดด้านการเขียนโปรแกรม',
    accentVar: '--accent-violet',
  },
  {
    id: 'research',
    label: 'Business Survey',
    tagline: 'UX case study จากงานวิจัยเชิงธุรกิจ',
    accentVar: '--accent-coral',
  },
  {
    id: 'ui',
    label: 'UI Design',
    tagline: 'งานออกแบบหน้าตาและประสบการณ์ผู้ใช้',
    accentVar: '--accent-moss',
  },
];

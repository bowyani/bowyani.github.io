export type Discipline = "usecase" | "product" | "coding" | "research" | "ui";

export interface DisciplineMeta {
  id: Discipline;
  label: string;
  tagline: string;
  accentVar: "--accent-violet" | "--accent-coral" | "--accent-moss";
}

export interface Project {
  id: string;
  discipline: Discipline;
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags: string[];
  date?: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  resumeUrl: string;
  socials: SocialLink[];
}

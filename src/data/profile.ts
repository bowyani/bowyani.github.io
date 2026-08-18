import type { Profile, DisciplineMeta } from "@/types";

export const profile: Profile = {
  name: "Yanisa Verawongchai",
  resumeUrl: "/resume.pdf",
  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/yanisa-verawongchai/",
    },
    { label: "YouTube", url: "https://www.youtube.com/@yanisav/playlists" },
    { label: "GitHub", url: "https://github.com/bowyani" },
  ],
};

export const disciplines: DisciplineMeta[] = [
  {
    id: "usecase",
    label: "Usecase",
    tagline: " ",
    accentVar: "--accent-violet",
  },
  {
    id: "product",
    label: "Product Building",
    tagline: " ",
    accentVar: "--accent-violet",
  },
  {
    id: "coding",
    label: "Coding",
    tagline: " ",
    accentVar: "--accent-violet",
  },
  {
    id: "research",
    label: "Business Survey",
    tagline: " ",
    accentVar: "--accent-violet",
  },
  {
    id: "ui",
    label: "UX/UI Design",
    tagline: " ",
    accentVar: "--accent-violet",
  },
];

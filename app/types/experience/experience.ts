export interface Experience {
  date: string;
  current?: boolean;
  role: string;
  company: string;
  summary: string;
  tech: string[];
  more: string[];
  active: string;
  rare: string;
  used: string;
}

export interface ExperienceItemProps {
  experience: Experience;
}

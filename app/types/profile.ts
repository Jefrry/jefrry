export interface Contact {
  name: string;
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  lines: readonly string[];
}

export interface Resume {
  href: string;
  label: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  introduction: string;
  technologies: readonly string[];
  resume: Resume;
  contacts: readonly Contact[];
  skills: readonly SkillGroup[];
}

import type { Language } from './language';

export type ProjectCategory = 'fullstack' | 'frontend' | 'personal';

export interface ProjectContent {
  title: string;
  summary: string;
  description: string;
  context: string;
  results?: string[];
  period?: string;
}

export interface PortfolioProject {
  id: string;
  category: ProjectCategory;
  technologies: string[];
  cover: string;
  externalUrl?: string;
  content: Record<Language, ProjectContent>;
}

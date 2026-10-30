import type { Language } from '../language/language';

export type ProjectCategory = 'fullstack' | 'frontend' | 'personal';

export interface ProjectContent {
  title: string;
  coverAlt?: string;
  summary: string;
  description: string;
  context: string;
  results?: string[];
  period?: string;
}

interface PortfolioProjectBase {
  id: string;
  category?: ProjectCategory;
  technologies: string[];
  externalUrl?: string;
}

export type PortfolioProject = PortfolioProjectBase & (
  | {
    cover: string;
    content: Record<Language, ProjectContent & { coverAlt: string }>;
  }
  | {
    cover?: never;
    content: Record<Language, ProjectContent>;
  }
);

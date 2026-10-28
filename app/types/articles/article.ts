import type { Language } from '../language/language';

export interface ArticleContent {
  title: string;
  description: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export interface Article {
  id: string;
  date: string;
  content: Record<Language, ArticleContent>;
}

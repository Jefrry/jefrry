import { PROJECTS } from '../projects/projects';
import type { RouteRecordNormalized } from 'vue-router';

export function getPublishedPages(routes: Pick<RouteRecordNormalized, 'meta'>[] = []): string[] {
  return ['/', ...['ru', 'en'].flatMap(language => [
    `/${language}/`,
    `/${language}/projects/`,
    ...PROJECTS.map(project => `/${language}/projects/${project.id}/`),
  ]), ...routes.flatMap(route => {
    const pages = route.meta.publishedPages;
    return Array.isArray(pages) ? pages.filter((page): page is string => typeof page === 'string') : [];
  })];
}

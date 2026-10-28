import { getPublishedPages } from '../constants/site/publishedPages';

export default defineNuxtPlugin(() => {
  prerenderRoutes(getPublishedPages(useRouter().getRoutes()));
});

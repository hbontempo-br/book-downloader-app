/**
 *
 * Asynchronously loads the component for book-table
 *
 */

// TODO: Fix lazyload import on src/components/book-table/loadable, for some reason absolute
//  path is not working
import { lazyLoad } from '../../../utils/loadable';

export const BookTable = lazyLoad(
  () => import('./index'),
  (module) => module.BookTable,
);

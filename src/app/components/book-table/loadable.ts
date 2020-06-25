/**
 *
 * Asynchronously loads the component for book-table
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BookTable = lazyLoad(
  () => import('./index'),
  module => module.BookTable,
);

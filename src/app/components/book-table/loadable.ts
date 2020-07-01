/**
 *
 * Asynchronously loads the component for book-table
 *
 */

// TODO: Not able to use absolute path on import. Fix.
import { lazyLoad } from '../../../utils/loadable';

export const BookTable = lazyLoad(
  () => import('./index'),
  (module) => module.BookTable,
);

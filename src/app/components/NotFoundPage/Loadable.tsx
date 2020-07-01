/**
 * Asynchronously loads the component for NotFoundPage
 */

// TODO: Not able to use absolute path on import. Fix.
import { lazyLoad } from '../../../utils/loadable';

export const NotFoundPage = lazyLoad(
  () => import('./index'),
  (module) => module.NotFoundPage,
);

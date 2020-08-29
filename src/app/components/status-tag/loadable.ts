/**
 *
 * Asynchronously loads the component for status-tag
 *
 */

// TODO: Fix lazyload import on src/components/status-tag/loadable, for some reason absolute
//  path is not working
import { lazyLoad } from '../../../utils/loadable';

export const GenericStatusTag = lazyLoad(
  () => import('./index'),
  (module) => module.GenericStatusTag,
);

export const FinishedTag = lazyLoad(
  () => import('./index'),
  (module) => module.FinishedTag,
);

export const PendingTag = lazyLoad(
  () => import('./index'),
  (module) => module.PendingTag,
);

export const ErrorTag = lazyLoad(
  () => import('./index'),
  (module) => module.ErrorTag,
);

/**
 *
 * Asynchronously loads the component for status-tag
 *
 */

// TODO: Not able to use absolute path on import. Fix.
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

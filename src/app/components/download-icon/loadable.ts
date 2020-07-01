/**
 *
 * Asynchronously loads the component for status-tag
 *
 */

// TODO: Not able to use absolute path on import. Fix.
import { lazyLoad } from '../../../utils/loadable';

export const GenericStatusTag = lazyLoad(
  () => import('./index'),
  (module) => module.DownloadIcon,
);

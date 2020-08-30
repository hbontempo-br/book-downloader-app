/**
 *
 * Asynchronously loads the component for status-tag
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GenericStatusTag = lazyLoad(
  () => import('./index'),
  (module) => module.DownloadIcon,
);

/**
 *
 * Asynchronously loads the component for status-tag
 *
 */

// TODO: Fix lazyload import on src/components/download-icon/loadable, for some reason absolute
//  path is not working
import { lazyLoad } from '../../../utils/loadable';

export const GenericStatusTag = lazyLoad(
  () => import('./index'),
  (module) => module.DownloadIcon,
);

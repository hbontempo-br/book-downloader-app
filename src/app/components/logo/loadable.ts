/**
 *
 * Asynchronously loads the component for status-tag
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Logo = lazyLoad(
  () => import('./index'),
  (module) => module.Logo,
);

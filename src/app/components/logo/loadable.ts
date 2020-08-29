/**
 *
 * Asynchronously loads the component for status-tag
 *
 */

// TODO: Fix lazyload import on src/components/logo/loadable, for some reason absolute
//  path is not working
import { lazyLoad } from '../../../utils/loadable';

export const Logo = lazyLoad(
  () => import('./index'),
  (module) => module.Logo,
);

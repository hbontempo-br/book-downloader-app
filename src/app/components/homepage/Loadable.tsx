/**
 * Asynchronously loads the component for HomePage
 */

// TODO: Fix lazyload import on src/components/homepage/loadable, for some reason absolute
//  path is not working
import { lazyLoad } from '../../../utils/loadable';

export const HomePage = lazyLoad(
  () => import('./index'),
  (module) => module.HomePage,
);

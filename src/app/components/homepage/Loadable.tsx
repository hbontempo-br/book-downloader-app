/**
 * Asynchronously loads the component for HomePage
 */

// TODO: Not able to use absolute path on import. Fix.
import { lazyLoad } from '../../../utils/loadable';

export const HomePage = lazyLoad(
  () => import('./index'),
  (module) => module.HomePage,
);

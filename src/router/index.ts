import router from './router';
import NProgress from '@/config/nprogress';
import { GlobalStore } from '~/store';

router.beforeEach((to, from, next) => {
  NProgress.start();
  axiosCanceler.removeAllPending();
  const globalStore = GlobalStore();

  if (to.name === 'entrance' && globalStore.isLogin) {
    if (to.params.code === globalStore.entrance) {
      globalStore.setLogStatus(false);
      next({
        name: 'entrance',
        params: { code: globalStore.entrance },
      });
      NProgress.done();
      return;
    }
    next({ name: '404' });
    NProgress.done();
    return;
  }

  if (!to.matched.some((record) => record.meta.requiresAuth)) return next();
  return next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;

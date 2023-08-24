import router from './router';
import NProgress from '~/config/nprogress';
import { GlobalStore } from '~/store';
import { AxiosCanceler } from '~/api/utils/axios-canel';

const axiosCanceler = new AxiosCanceler();

// 每次路由切换之前都会执行
router.beforeEach((to, from, next) => {
  // 启动进度条 
  NProgress.start();
  // 取消所有未完成的 axios 请求 
  axiosCanceler.removeAllPending();
  // 获取全局状态对象
  const globalStore = GlobalStore();

  if (to.name === 'entrance' && globalStore.isLogin) {
    if (to.params.code === globalStore.entrance) {
      globalStore.setLoginStatus(false);
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

// 路由切换之后执行
router.afterEach(() => {
  // 进度条完成 
  NProgress.done();
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '~/views/home/index.vue';
import Layout from '~/views/layout/index.vue';
import NotFound from '~/views/NotFound.vue';

// 通用路由
const constantRouterMap: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    meta: {title: '首页', icon: 'home'},
    children: [{
      path: '/home',
      name: 'home',
      component: Home,
      meta: {title: '仪表盘', icon: 'dashboard'}
    }]
  },
  { // 404 界面
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  }
];

// 路由
const asyncRouterMap: Array<RouteRecordRaw> = [
  {
    // 非匹配路径都重定向到 404 界面
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap,
});

export default router;

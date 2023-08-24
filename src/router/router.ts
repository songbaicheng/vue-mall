import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '~/views/home/index.vue'
import Layout from '~/views/layout/index.vue'
import NotFound from '~/views/NotFound.vue'
import Login from '~/views/login/index.vue'

// 通用路由
const constantRouterMap: Array<RouteRecordRaw> = [
  { // 登录
    path: '/login',
    name: 'login',
    component: Login
  },
  { // layout 布局界面
    path: '/',
    redirect: '/home',
    component: Layout,
    meta: { title: '首页', icon: 'home' },
    children: [{ // 首页
      path: '/home',
      name: 'home',
      component: Home,
      meta: { title: '仪表盘', icon: 'dashboard' }
    }]
  },
  { // 非匹配路径都重定向到 404 界面
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    children: [{ // 404 界面
      path: '/404',
      name: 'NotFound',
      component: NotFound
    }]
  },
];

// 权限路由
const authRouterMap: Array<RouteRecordRaw> = [

]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap,
});

export default router;

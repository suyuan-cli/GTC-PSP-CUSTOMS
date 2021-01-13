import Vue from 'vue';
import Router from 'vue-router';
import { routerList } from '@/config/index.js';
routerList.push({
  path: '/noRight',
  component: resolve => require(['../components/page/noRight.vue'], resolve),
  meta: { title: '没有权限', auth: true }
});
Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/fristPage'
    // },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: '自述文件', auth: true },
      children: routerList
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    },
    {
      path: '/logins',
      component: resolve =>
        require(['../components/page/registerLogin/login.vue'], resolve)
    },
    {
      path: '/forgotpass',
      component: resolve =>
        require(['../components/page/registerLogin/forgotpass.vue'], resolve)
    },
    {
      path: '/noDataError',
      component: resolve =>
        require(['../components/page/noDataError.vue'], resolve)
    },
    {
      path: '/h4a-error',
      component: resolve =>
        require(['../components/page/h4a-error.vue'], resolve)
    },



    // {
    //   path: '/forgotpass',
    //   component: resolve =>
    //     require(['../components/page/registerLogin/ForgotPass.vue'], resolve)
    // },
    // {
    //   path: '/logincheckcode',
    //   component: resolve =>
    //     require([
    //       '../components/page/registerLogin/LoginCheckCode.vue'
    //     ], resolve)
    // },
    // {
    //   path: '/loginpass',
    //   component: resolve =>
    //     require(['../components/page/registerLogin/LoginPass.vue'], resolve)
    // },

    // {
    //   path: '/loginOther',
    //   component: resolve =>
    //     require(['../components/page/loginOther.vue'], resolve)
    // },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});

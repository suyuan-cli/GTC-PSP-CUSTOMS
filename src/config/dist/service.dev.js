'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
//服务商中心路由
var routerList = [
  {
    path: '/generalQuery',
    component: function component(resolve) {
      return require([
        '../components/page/serviceProviders/generalQuery/IndexPage.vue'
      ], resolve);
    },
    meta: {
      title: '通用查询',
      auth: true
    },
    key: -1
  },
  {
    name: 'generalQueryList',
    path: '/generalQueryList',
    component: function component(resolve) {
      return require([
        '../components/page/serviceProviders/generalQuery/ListPage.vue'
      ], resolve);
    },
    meta: {
      title: '通用查询结果',
      auth: true
    },
    key: -1
  },
  {
    path: '/serverPage',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '首页',
      auth: true
    },
    key: -1
  },
  {
    path: '/serviceProviderInfo',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '服务商信息',
      auth: true
    },
    key: -1
  },
  {
    path: '/opportunities',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '溯源商机',
      auth: true
    },
    key: -1
  },
  {
    path: '/demandResponse',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '需求响应',
      auth: true
    },
    key: -1
  },
  {
    path: '/myOrder',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '我的订单',
      auth: true
    },
    key: -1
  },
  {
    path: '/complaintHandling',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '投诉咨询处理',
      auth: true
    },
    key: -1
  },
  {
    path: '/serviceRelease',
    component: function component(resolve) {
      return require([
        '../components/page/serviceProviders/serviceRelease/serviceReleaseList.vue'
      ], resolve);
    },
    meta: {
      title: '服务发布',
      auth: true
    },
    key: -1
  },
  {
    path: '/myComments',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '我的评价',
      auth: true
    },
    key: -1
  },
  {
    path: '/issueReport',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '发布报告',
      auth: true
    },
    key: -1
  },
  {
    path: '/myReport',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '我发布的报告',
      auth: true
    },
    key: -1
  },
  {
    path: '/myReport2',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '我发布的报告',
      auth: true
    },
    key: -1
  },
  {
    path: '/serviceStatistics',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '服务统计',
      auth: true
    },
    key: -1
  },
  {
    path: '/demandStatistics',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '需求统计',
      auth: true
    },
    key: -1
  },
  {
    path: '/orderStatistics',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '订单统计',
      auth: true
    },
    key: -1
  },
  {
    path: '/reportStatistics',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '报告统计',
      auth: true
    },
    key: -1
  },
  {
    path: '/accusationStatistics',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '举报',
      auth: true
    },
    key: -1
  },
  {
    path: '/riskWarningStatistics',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '风险预警统计',
      auth: true
    },
    key: -1
  },
  {
    path: '/riskWarning',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '风险预警',
      auth: true
    },
    key: -1
  },
  {
    path: '/authenticityVerification',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '真伪验证',
      auth: true
    },
    key: -1
  },
  {
    path: '/needReport',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '我要举报',
      auth: true
    },
    key: -1
  },
  {
    path: '/riskInformationUpload',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '风险信息上传',
      auth: true
    },
    key: -1
  }
];
var menuList = [
  {
    icon: 'iconfont icon3_icon_home',
    index: 'serverPage',
    title: '首页'
  },
  {
    icon: 'iconfont icon3_icon_home',
    index: 'serviceProviderInfo',
    title: '服务商信息'
  },
  {
    icon: 'iconfont icon3_icon_home',
    index: '1',
    title: '溯源商机',
    subs: [
      {
        index: '6',
        title: '我的订单',
        subs: [
          {
            index: 'demandResponse',
            title: '需求响应'
          },
          {
            index: 'myOrder',
            title: '我的订单'
          },
          {
            index: 'complaintHandling',
            title: '投诉咨询处理'
          }
        ]
      },
      {
        index: '7',
        title: '我的服务',
        subs: [
          {
            index: 'serviceRelease',
            title: '服务发布'
          },
          {
            index: 'myComments',
            title: '我的评价'
          }
        ]
      }
    ]
  },
  {
    icon: 'iconfont icon3_icon_home',
    index: '2',
    title: '溯源发布',
    subs: [
      {
        index: 'issueReport',
        title: '发布报告'
      },
      {
        index: 'myReport',
        title: '我发布的报告'
      }
    ]
  },
  {
    icon: 'iconfont icon3_icon_home',
    index: '3',
    title: '溯源回声',
    subs: [
      {
        index: 'myReport2',
        title: '我发布的报告'
      }
    ]
  },
  {
    icon: 'iconfont icon3_icon_home',
    index: '4',
    title: '溯源收益',
    subs: [
      {
        index: '8',
        title: '统计分析',
        subs: [
          {
            index: 'serviceStatistics',
            title: '服务统计'
          },
          {
            index: 'demandStatistics',
            title: '需求统计'
          },
          {
            index: 'orderStatistics',
            title: '订单统计'
          },
          {
            index: 'reportStatistics',
            title: '报告统计'
          },
          {
            index: 'accusationStatistics',
            title: '举报统计'
          },
          {
            index: 'riskWarningStatistics',
            title: '风险预警统计'
          }
        ]
      },
      {
        index: 'riskWarning',
        title: '风险预警'
      }
    ]
  },
  {
    icon: 'iconfont icon3_icon_home',
    index: '5',
    title: '溯源应用',
    subs: [
      {
        index: '',
        title: '涉假发现及举报',
        subs: [
          {
            index: 'authenticityVerification',
            title: '真伪验证'
          },
          {
            index: 'needReport',
            title: '我要举报'
          }
        ]
      },
      {
        index: 'riskInformationUpload',
        title: '风险信息上传'
      }
    ]
  },
  {
    icon: 'iconfont icon3_icon_home',
    index: 'generalQuery',
    title: '通用查询'
  }
];
var _default = {
  routerList: routerList,
  menuList: menuList
};
exports['default'] = _default;

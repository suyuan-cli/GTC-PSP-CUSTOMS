"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//消费者中心路由
var routerList = [{
  path: '/consumerPage',
  component: function component(resolve) {
    return require(['../components/page/todo.vue'], resolve);
  },
  meta: {
    title: '消费者首页',
    auth: true
  },
  key: -1
}, {
  path: '/riskWarning',
  component: function component(resolve) {
    return require(['../components/page/todo.vue'], resolve);
  },
  meta: {
    title: '风险预警',
    auth: true
  },
  key: -1
}, {
  path: '/commodityList',
  component: function component(resolve) {
    return require(['../components/page/todo.vue'], resolve);
  },
  meta: {
    title: '商品榜单',
    auth: true
  },
  key: -1
}, {
  path: '/traceabilityInfo',
  component: function component(resolve) {
    return require(['../components/page/todo.vue'], resolve);
  },
  meta: {
    title: '溯源资讯',
    auth: true
  },
  key: -1
}, {
  path: '/helpcenter',
  component: function component(resolve) {
    return require(['../components/page/todo.vue'], resolve);
  },
  meta: {
    title: '帮助中心',
    auth: true
  },
  key: -1
}, {
  path: '/usercenter',
  component: function component(resolve) {
    return require(['../components/page/todo.vue'], resolve);
  },
  meta: {
    title: '个人中心',
    auth: true
  },
  key: -1
}, {
  path: '/complaint',
  component: function component(resolve) {
    return require(['../components/page/consumer/Complaint.vue'], resolve);
  },
  meta: {
    title: '投诉页面',
    auth: true
  },
  key: -1
}, {
  path: '/complaintconsultinfo',
  component: function component(resolve) {
    return require(['../components/page/consumer/ComplaintConsultInfo.vue'], resolve);
  },
  meta: {
    title: '投诉咨询信息',
    auth: true
  },
  key: -1
}, {
  path: '/complaintconsultdetail/:cumcompconsicode',
  component: function component(resolve) {
    return require(['../components/page/consumer/ComplaintConsultDetail.vue'], resolve);
  },
  meta: {
    title: '投诉咨询详情',
    auth: true
  },
  key: -1
}];
var menuList = [{
  icon: 'iconfont icon3_icon_home',
  index: 'consumerPage',
  title: '首页'
}, {
  icon: 'iconfont iconicon_qiye',
  index: 'complaintconsultquery',
  title: '我的投诉咨询'
}, {
  icon: 'iconfont iconicon_qiye',
  index: 'riskWarning',
  title: '风险预警'
}, {
  icon: 'iconfont iconicon_qiye',
  index: 'commodityList',
  title: '商品榜单'
}, {
  icon: 'iconfont iconicon_qiye',
  index: 'traceabilityInfo',
  title: '溯源资讯'
}, {
  icon: 'iconfont iconicon_qiye',
  index: 'helpcenter',
  title: '帮助中心'
}, {
  icon: 'iconfont iconicon_qiye',
  index: 'usercenter',
  title: '个人中心'
}, {
  index: 'complaint',
  title: '消费者投诉咨询处理'
}, {
  index: 'complaintconsultinfo',
  title: '消费者投诉咨询信息'
}];
var _default = {
  routerList: routerList,
  menuList: menuList
};
exports["default"] = _default;
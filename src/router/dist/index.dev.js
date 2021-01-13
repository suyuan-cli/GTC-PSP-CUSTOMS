"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routes: [{
    path: '/',
    redirect: '/dashboard'
  }, {
    path: '/',
    component: function component(resolve) {
      return require(['../components/common/Home.vue'], resolve);
    },
    meta: {
      title: '自述文件'
    },
    children: [{
      path: '/dashboard',
      component: function component(resolve) {
        return require(['../components/page/Dashboard.vue'], resolve);
      },
      meta: {
        title: '系统首页'
      }
    }, {
      path: '/icon',
      component: function component(resolve) {
        return require(['../components/page/Icon.vue'], resolve);
      },
      meta: {
        title: '自定义图标'
      }
    }, {
      path: '/table',
      component: function component(resolve) {
        return require(['../components/page/BaseTable.vue'], resolve);
      },
      meta: {
        title: '基础表格'
      }
    }, {
      path: '/tabs',
      component: function component(resolve) {
        return require(['../components/page/Tabs.vue'], resolve);
      },
      meta: {
        title: 'tab选项卡'
      }
    }, {
      path: '/form',
      component: function component(resolve) {
        return require(['../components/page/BaseForm.vue'], resolve);
      },
      meta: {
        title: '基本表单'
      }
    }, {
      path: '/searchinfo',
      component: function component(resolve) {
        return require(['../components/page/SearchInfo.vue'], resolve);
      },
      meta: {
        title: '公证书办理'
      }
    }, {
      path: '/identificationapply',
      component: function component(resolve) {
        return require(['../components/page/IdentificationApply.vue'], resolve);
      },
      meta: {
        title: '标识申请'
      }
    }, {
      path: '/tree1',
      component: function component(resolve) {
        return require(['../components/page/tree1.vue'], resolve);
      },
      meta: {
        title: '基本树'
      }
    }, {
      path: '/tree2',
      component: function component(resolve) {
        return require(['../components/page/tree2.vue'], resolve);
      },
      meta: {
        title: '可选择树'
      }
    }, {
      path: '/tree3',
      component: function component(resolve) {
        return require(['../components/page/tree3.vue'], resolve);
      },
      meta: {
        title: '可编辑树'
      }
    }, {
      // 富文本编辑器组件
      path: '/editor',
      component: function component(resolve) {
        return require(['../components/page/VueEditor.vue'], resolve);
      },
      meta: {
        title: '富文本编辑器'
      }
    }, {
      // markdown组件
      path: '/markdown',
      component: function component(resolve) {
        return require(['../components/page/Markdown.vue'], resolve);
      },
      meta: {
        title: 'markdown编辑器'
      }
    }, {
      // 图片上传组件
      path: '/upload',
      component: function component(resolve) {
        return require(['../components/page/Upload.vue'], resolve);
      },
      meta: {
        title: '文件上传'
      }
    }, {
      // vue-schart组件
      path: '/charts',
      component: function component(resolve) {
        return require(['../components/page/BaseCharts.vue'], resolve);
      },
      meta: {
        title: 'schart图表'
      }
    }, {
      // 拖拽列表组件
      path: '/drag',
      component: function component(resolve) {
        return require(['../components/page/DragList.vue'], resolve);
      },
      meta: {
        title: '拖拽列表'
      }
    }, {
      // 拖拽Dialog组件
      path: '/dialog',
      component: function component(resolve) {
        return require(['../components/page/DragDialog.vue'], resolve);
      },
      meta: {
        title: '拖拽弹框'
      }
    }, {
      // 权限页面
      path: '/permission',
      component: function component(resolve) {
        return require(['../components/page/Permission.vue'], resolve);
      },
      meta: {
        title: '权限测试',
        permission: true
      }
    }, {
      path: '/404',
      component: function component(resolve) {
        return require(['../components/page/404.vue'], resolve);
      },
      meta: {
        title: '404'
      }
    }, {
      path: '/403',
      component: function component(resolve) {
        return require(['../components/page/403.vue'], resolve);
      },
      meta: {
        title: '403'
      }
    }, {
      path: '/admin',
      component: function component(resolve) {
        return require(['../components/page/admin.vue'], resolve);
      },
      meta: {
        title: '用户信息'
      }
    }, {
      path: '/ogsignused',
      component: function component(resolve) {
        return require(['../components/page/OgSignUsed.vue'], resolve);
      },
      meta: {
        title: '溯源标识使用'
      }
    }, {
      path: '/createogsignused',
      component: function component(resolve) {
        return require(['../components/page/CreateOgSignUsed.vue'], resolve);
      },
      meta: {
        title: '新增溯源标识使用'
      }
    }, {
      path: '/identificationstop',
      component: function component(resolve) {
        return require(['../components/page/IdentificationStop.vue'], resolve);
      },
      meta: {
        title: '标识停用'
      }
    }]
  }, {
    path: '/login',
    component: function component(resolve) {
      return require(['../components/page/Login.vue'], resolve);
    }
  }, {
    path: '*',
    redirect: '/404'
  }]
});

exports["default"] = _default;
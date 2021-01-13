"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _vue=_interopRequireDefault(require("vue")),_vueRouter=_interopRequireDefault(require("vue-router"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}_vue.default.use(_vueRouter.default);var _default=new _vueRouter.default({routes:[{path:"/",redirect:"/dashboard"},{path:"/",component:function(e){return require(["../components/common/Home.vue"],e)},meta:{title:"自述文件"},children:[{path:"/dashboard",component:function(e){return require(["../components/page/Dashboard.vue"],e)},meta:{title:"系统首页"}},{path:"/icon",component:function(e){return require(["../components/page/Icon.vue"],e)},meta:{title:"自定义图标"}},{path:"/table",component:function(e){return require(["../components/page/BaseTable.vue"],e)},meta:{title:"基础表格"}},{path:"/tabs",component:function(e){return require(["../components/page/Tabs.vue"],e)},meta:{title:"tab选项卡"}},{path:"/form",component:function(e){return require(["../components/page/BaseForm.vue"],e)},meta:{title:"基本表单"}},{path:"/searchinfo",component:function(e){return require(["../components/page/SearchInfo.vue"],e)},meta:{title:"公证书办理"}},{path:"/identificationapply",component:function(e){return require(["../components/page/IdentificationApply.vue"],e)},meta:{title:"标识申请"}},{path:"/tree1",component:function(e){return require(["../components/page/tree1.vue"],e)},meta:{title:"基本树"}},{path:"/tree2",component:function(e){return require(["../components/page/tree2.vue"],e)},meta:{title:"可选择树"}},{path:"/tree3",component:function(e){return require(["../components/page/tree3.vue"],e)},meta:{title:"可编辑树"}},{path:"/editor",component:function(e){return require(["../components/page/VueEditor.vue"],e)},meta:{title:"富文本编辑器"}},{path:"/markdown",component:function(e){return require(["../components/page/Markdown.vue"],e)},meta:{title:"markdown编辑器"}},{path:"/upload",component:function(e){return require(["../components/page/Upload.vue"],e)},meta:{title:"文件上传"}},{path:"/charts",component:function(e){return require(["../components/page/BaseCharts.vue"],e)},meta:{title:"schart图表"}},{path:"/drag",component:function(e){return require(["../components/page/DragList.vue"],e)},meta:{title:"拖拽列表"}},{path:"/dialog",component:function(e){return require(["../components/page/DragDialog.vue"],e)},meta:{title:"拖拽弹框"}},{path:"/permission",component:function(e){return require(["../components/page/Permission.vue"],e)},meta:{title:"权限测试",permission:!0}},{path:"/404",component:function(e){return require(["../components/page/404.vue"],e)},meta:{title:"404"}},{path:"/403",component:function(e){return require(["../components/page/403.vue"],e)},meta:{title:"403"}},{path:"/admin",component:function(e){return require(["../components/page/admin.vue"],e)},meta:{title:"用户信息"}},{path:"/ogsignused",component:function(e){return require(["../components/page/OgSignUsed.vue"],e)},meta:{title:"溯源标识使用"}},{path:"/createogsignused",component:function(e){return require(["../components/page/CreateOgSignUsed.vue"],e)},meta:{title:"新增溯源标识使用"}},{path:"/identificationstop",component:function(e){return require(["../components/page/IdentificationStop.vue"],e)},meta:{title:"标识停用"}}]},{path:"/login",component:function(e){return require(["../components/page/Login.vue"],e)}},{path:"*",redirect:"/404"}]});exports.default=_default;
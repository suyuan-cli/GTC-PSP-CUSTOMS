'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.routerList = exports.menuList = void 0;

/**
 * 配置菜单路由的方法：
 *
 *1.在routerList中配置，path和对应的组件，meta参数中的auth代表是否需要登录，字段key代表唯一标识，
 *如果key值在后端返回的keys数值里面，代表有权限可以显示
 *2.配置对应的菜单结构，菜单中的index对应路由的path字段（前面的/要去掉）
 *
 *
 * */
var routerList = [
  {
    path: '/dashboard',
    component: function component(resolve) {
      return require(['../components/page/Dashboard.vue'], resolve);
    },
    meta: {
      title: '系统首页',
      auth: true
    },
    key: 1
  },
  {
    path: '/icon',
    component: function component(resolve) {
      return require(['../components/page/Icon.vue'], resolve);
    },
    meta: {
      title: '自定义图标',
      auth: true
    },
    key: 5
  },
  {
    path: '/table',
    component: function component(resolve) {
      return require(['../components/page/BaseTable.vue'], resolve);
    },
    meta: {
      title: '基础表格',
      auth: true
    },
    key: 1
  },
  {
    path: '/tabs',
    component: function component(resolve) {
      return require(['../components/page/Tabs.vue'], resolve);
    },
    meta: {
      title: 'tab选项卡',
      auth: true
    },
    key: 1
  },
  {
    path: '/form',
    component: function component(resolve) {
      return require(['../components/page/BaseForm.vue'], resolve);
    },
    meta: {
      title: '基本表单',
      auth: true
    },
    key: 1
  },
  {
    path: '/ogsignapply',
    component: function component(resolve) {
      return require(['../components/page/ogsign/OgSignApply.vue'], resolve);
    },
    meta: {
      title: '标识申请',
      auth: true
    },
    key: 1
  },
  {
    path: '/ogsigndisable',
    component: function component(resolve) {
      return require(['../components/page/ogsign/OgSignDisable.vue'], resolve);
    },
    meta: {
      title: '标识处置'
    },
    key: 1
  },
  {
    path: '/ogsignstopdetail',
    component: function component(resolve) {
      return require([
        '../components/page/ogsign/OgSignStopDetail.vue'
      ], resolve);
    },
    meta: {
      title: '标识处置详情'
    },
    key: 1
  },
  {
    path: '/ogsignstandingbook',
    component: function component(resolve) {
      return require([
        '../components/page/ogsign/OgSignStandingBook.vue'
      ], resolve);
    },
    meta: {
      title: '溯源标识台账',
      auth: true
    },
    key: 1
  },
  {
    path: '/goodsregister',
    component: function component(resolve) {
      return require([
        '../components/page/goodsregister/GoodsRegister.vue'
      ], resolve);
    },
    meta: {
      title: '商品登记',
      auth: true
    },
    key: 1
  },
  {
    path: '/creategoodsregister',
    component: function component(resolve) {
      return require([
        '../components/page/goodsregister/CreateGoodsRegister.vue'
      ], resolve);
    },
    meta: {
      title: '商品登记新增',
      auth: true
    },
    key: 1
  },
  {
    path: '/goodsregisterdetail',
    component: function component(resolve) {
      return require([
        '../components/page/goodsregister/GoodsRegisterDetail.vue'
      ], resolve);
    },
    meta: {
      title: '商品登记详情',
      auth: true
    },
    key: 1
  },
  {
    path: '/tree1',
    component: function component(resolve) {
      return require(['../components/page/tree1.vue'], resolve);
    },
    meta: {
      title: '基本树',
      auth: true
    },
    key: 1
  },
  {
    path: '/tree2',
    component: function component(resolve) {
      return require(['../components/page/tree2.vue'], resolve);
    },
    meta: {
      title: '可选择树',
      auth: true
    },
    key: 1
  },
  {
    path: '/tree3',
    component: function component(resolve) {
      return require(['../components/page/tree3.vue'], resolve);
    },
    meta: {
      title: '可编辑树',
      auth: true
    },
    key: 1
  },
  {
    // 富文本编辑器组件
    path: '/editor',
    component: function component(resolve) {
      return require(['../components/page/VueEditor.vue'], resolve);
    },
    meta: {
      title: '富文本编辑器',
      auth: true
    },
    key: 1
  },
  {
    // markdown组件
    path: '/markdown',
    component: function component(resolve) {
      return require(['../components/page/Markdown.vue'], resolve);
    },
    meta: {
      title: 'markdown编辑器',
      auth: true
    },
    key: 1
  },
  {
    // 图片上传组件
    path: '/upload',
    component: function component(resolve) {
      return require(['../components/page/Upload.vue'], resolve);
    },
    meta: {
      title: '文件上传',
      auth: true
    },
    key: 1
  },
  {
    // vue-schart组件
    path: '/charts',
    component: function component(resolve) {
      return require(['../components/page/BaseCharts.vue'], resolve);
    },
    meta: {
      title: 'schart图表',
      auth: true
    },
    key: 1
  },
  {
    // 拖拽列表组件
    path: '/drag',
    component: function component(resolve) {
      return require(['../components/page/DragList.vue'], resolve);
    },
    meta: {
      title: '拖拽列表',
      auth: true
    },
    key: 1
  },
  {
    // 拖拽Dialog组件
    path: '/dialog',
    component: function component(resolve) {
      return require(['../components/page/DragDialog.vue'], resolve);
    },
    meta: {
      title: '拖拽弹框',
      auth: true
    },
    key: 1
  },
  {
    // 权限页面
    path: '/permission',
    component: function component(resolve) {
      return require(['../components/page/Permission.vue'], resolve);
    },
    meta: {
      title: '权限测试',
      permission: true,
      auth: true
    },
    key: 1
  },
  {
    path: '/admin',
    component: function component(resolve) {
      return require(['../components/page/admin.vue'], resolve);
    },
    meta: {
      title: '用户信息',
      auth: true
    },
    key: 1
  },
  {
    path: '/404',
    component: function component(resolve) {
      return require(['../components/page/404.vue'], resolve);
    },
    meta: {
      title: '404'
    }
  },
  {
    path: '/403',
    component: function component(resolve) {
      return require(['../components/page/403.vue'], resolve);
    },
    meta: {
      title: '403'
    }
  },
  {
    path: '/ogsignused',
    component: function component(resolve) {
      return require(['../components/page/ogsign/OgSignUsed.vue'], resolve);
    },
    meta: {
      title: '溯源标识使用',
      auth: true
    },
    key: 1
  },
  {
    path: '/createogsignused/:ogcodebindicode',
    component: function component(resolve) {
      return require([
        '../components/page/ogsign/CreateOgSignUsed.vue'
      ], resolve);
    },
    meta: {
      title: '新增溯源标识使用',
      auth: true
    },
    key: 1
  },
  {
    path: '/createogsignused',
    component: function component(resolve) {
      return require([
        '../components/page/ogsign/CreateOgSignUsed.vue'
      ], resolve);
    },
    meta: {
      title: '新增溯源标识使用',
      auth: true
    },
    key: 1
  },
  {
    path: '/ogsignuseddetail/:ogcodebindicode',
    component: function component(resolve) {
      return require([
        '../components/page/ogsign/OgSignUsedDetail.vue'
      ], resolve);
    },
    meta: {
      title: '溯源标识使用详情',
      auth: true
    },
    key: 1
  },
  {
    path: '/ogsignapplydetail/:ogcodeapplyicode',
    name: 'ogsignapplydetail',
    component: function component(resolve) {
      return require([
        '../components/page/ogsign/OgSignApplyDetail.vue'
      ], resolve);
    },
    meta: {
      title: '标识申请详情',
      auth: true
    },
    key: 1
  },
  {
    path: '/ogsignmanage',
    component: function component(resolve) {
      return require(['../components/page/ogsign/OgSignManage.vue'], resolve);
    },
    meta: {
      title: '溯源标识管理',
      auth: true
    },
    key: 1
  },
  {
    path: '/dataissue',
    component: function component(resolve) {
      return require(['../components/page/DataIssue.vue'], resolve);
    },
    meta: {
      title: '溯源数据数据管理',
      auth: true
    },
    key: 1
  },
  {
    path: '/tracesourceaddindex',
    component: function component(resolve) {
      return require(['../components/page/traceSourceAdd/Index.vue'], resolve);
    },
    meta: {
      title: '新增溯源数据',
      auth: true
    },
    key: 1
  },
  {
    path: '/tracesourcedetails/:cargomticode',
    // path: '/tracesourcedetails',
    name: 'tracesourcedetails',
    component: function component(resolve) {
      return require([
        '../components/page/traceSourceAdd/DetailsPage.vue'
      ], resolve);
    },
    meta: {
      title: '溯源数据详情',
      auth: true
    },
    key: 1
  },
  {
    path: '/dataprepare',
    component: function component(resolve) {
      return require(['../components/page/DataPrepare.vue'], resolve);
    },
    meta: {
      title: '商品溯源数据准备',
      auth: true
    },
    key: 1
  },
  {
    path: '/dataprepareinfo',
    component: function component(resolve) {
      return require(['../components/page/DataPrepareInfo.vue'], resolve);
    },
    meta: {
      title: '商品溯源数据准备详情',
      auth: true
    },
    key: 1
  },
  {
    path: '/impartialList',
    component: function component(resolve) {
      return require([
        '../components/page/impartial/impartialList.vue'
      ], resolve);
    },
    meta: {
      title: '公证办理',
      auth: true
    },
    key: 1
  },
  {
    path: '/impartialSearch',
    name: 'impartialSearch',
    component: function component(resolve) {
      return require([
        '../components/page/impartial/impartialSearch.vue'
      ], resolve);
    },
    meta: {
      title: '公证信息查询',
      auth: true
    },
    key: 1
  },
  {
    path: '/impartialDetail',
    component: function component(resolve) {
      return require([
        '../components/page/impartial/impartialDetail.vue'
      ], resolve);
    },
    meta: {
      title: '公证信息详情',
      auth: true
    },
    key: 1
  },
  {
    path: '/impartialCreate',
    component: function component(resolve) {
      return require(['../components/page/impartial/Index.vue'], resolve);
    },
    meta: {
      title: '公证办理新增',
      auth: true
    },
    key: 1
  },
  {
    path: '/impartialFirst',
    component: function component(resolve) {
      return require([
        '../components/page/impartial/impartialFirst.vue'
      ], resolve);
    },
    meta: {
      title: '公证办理第一步',
      auth: true
    },
    key: 1
  },
  {
    path: '/impartialSecond',
    component: function component(resolve) {
      return require([
        '../components/page/impartial/impartialSecond.vue'
      ], resolve);
    },
    meta: {
      title: '公证办理第二步',
      auth: true
    },
    key: 1
  },
  {
    path: '/impartialThird',
    component: function component(resolve) {
      return require([
        '../components/page/impartial/impartialThird.vue'
      ], resolve);
    },
    meta: {
      title: '公证办理第三步',
      auth: true
    },
    key: 1
  },
  {
    path: '/dropdown',
    component: function component(resolve) {
      return require(['../components/common/CodeDropDown.vue'], resolve);
    },
    meta: {
      title: '下拉框组件',
      auth: true
    },
    key: 1
  },
  {
    path: '/myCustom',
    component: function component(resolve) {
      return require(['../components/page/custom/myCustom.vue'], resolve);
    },
    meta: {
      title: '我的定制',
      auth: true
    },
    key: 1
  },
  {
    path: '/commontabledemo',
    component: function component(resolve) {
      return require(['../components/common/common-table/Demo.vue'], resolve);
    },
    meta: {
      title: '通用表格',
      auth: true
    },
    key: 1
  },
  {
    path: '/commonformdemo',
    component: function component(resolve) {
      return require(['../components/common/common-form/Demo.vue'], resolve);
    },
    meta: {
      title: '通用表单',
      auth: true
    },
    key: 1
  },
  {
    path: '/complaint',
    component: function component(resolve) {
      return require(['../components/page/consumer/Complaint.vue'], resolve);
    },
    meta: {
      title: '投诉页面',
      auth: true
    },
    key: 1
  },
  {
    path: '/complaintconsultinfo',
    component: function component(resolve) {
      return require([
        '../components/page/consumer/ComplaintConsultInfo.vue'
      ], resolve);
    },
    meta: {
      title: '投诉咨询信息',
      auth: true
    },
    key: 1
  },
  {
    path: '/complaintconsultdetail/:cumcompconsicode',
    component: function component(resolve) {
      return require([
        '../components/page/consumer/ComplaintConsultDetail.vue'
      ], resolve);
    },
    meta: {
      title: '投诉咨询详情',
      auth: true
    },
    key: 1
  },
  {
    path: '/getMessage',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/GetMessage.vue'
      ], resolve);
    },
    meta: {
      title: '我收到的信息',
      auth: true
    },
    key: 1
  },
  {
    path: '/getMessage/:cargono',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/GetMessageDetail.vue'
      ], resolve);
    },
    meta: {
      title: '我收到的信息详情',
      auth: true
    },
    key: 1
  },
  {
    path: '/createReport',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/CreateReport.vue'
      ], resolve);
    },
    meta: {
      title: '发起举报',
      auth: true
    },
    key: 1
  },
  {
    path: '/createDemand',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/CreateDemand.vue'
      ], resolve);
    },
    meta: {
      title: '发起需求',
      auth: true
    },
    key: 1
  },
  {
    path: '/myReport',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/MyReport.vue'
      ], resolve);
    },
    meta: {
      title: '我的举报',
      auth: true
    },
    key: 1
  },
  {
    path: '/myReportDetail/:reportId',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/MyReportDetail.vue'
      ], resolve);
    },
    meta: {
      title: '举报详情',
      auth: true
    },
    key: 1
  },
  {
    path: '/reportInSupervise/:reportId',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/ReportInSupervise.vue'
      ], resolve);
    },
    meta: {
      title: '举报处理',
      auth: true
    },
    key: 1
  },
  {
    path: '/getMessageChooseService/:id',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/GetMessageChooseService.vue'
      ], resolve);
    },
    meta: {
      title: '选择服务商',
      auth: true
    },
    key: 1
  },
  {
    path: '/myDemand',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/MyDemand.vue'
      ], resolve);
    },
    meta: {
      title: '我的需求',
      auth: true
    },
    key: 1
  },
  {
    path: '/myDemandDetail/:demandId',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/MyDemandDetail.vue'
      ], resolve);
    },
    meta: {
      title: '需求详情',
      auth: true
    },
    key: 1
  },
  {
    path: '/evaluate/:demandId',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/Evaluate.vue'
      ], resolve);
    },
    meta: {
      title: '评价',
      auth: true
    },
    key: 1
  },
  {
    path: '/ogsignapplyunused',
    component: function component(resolve) {
      return require([
        '../components/page/ogsign/OgSignApplyUnused.vue'
      ], resolve);
    },
    meta: {
      title: '未使用标识查询',
      auth: true
    },
    key: 1
  },
  {
    path: '/enterpriseregistration',
    component: function component(resolve) {
      return require([
        '../components/page/enterprise/EnterpriseRegistration.vue'
      ], resolve);
    },
    meta: {
      title: '企业登记',
      auth: true
    },
    key: 1
  }
]; //父级菜单没有连接的话，给index赋值为一个少于100的数字

exports.routerList = routerList;
var menuList = [
  {
    icon: 'iconfont icon3_icon_home',
    index: 'dashboard',
    title: '可视化中心'
  },
  {
    icon: 'iconfont iconicon_su',
    index: 'dataissue',
    title: '数据发布',
    subs: [
      {
        index: 'ogsignapply',
        title: '标识申请'
      },
      {
        index: 'ogsignused',
        title: '标识使用'
      },
      {
        index: 'ogsigndisable',
        title: '标识处置'
      },
      {
        index: 'ogsignstandingbook',
        title: '溯源标识台账'
      },
      {
        index: 'ogsignmanage',
        title: '溯源标识管理'
      },
      {
        index: 'goodsregister',
        title: '商品登记'
      },
      {
        index: '1',
        title: '商品资料',
        subs: [
          {
            index: 'dataprepare',
            title: '商品溯源数据准备'
          },
          {
            index: 'linkmessageupload',
            title: '环节信息上传'
          }
        ]
      },
      {
        index: '11',
        title: '公证办理',
        subs: [
          {
            index: 'impartialList',
            title: '公证办理'
          },
          {
            index: 'impartialSearch',
            title: '公证信息查询'
          }
        ]
      },
      {
        index: 'myCustom',
        title: '我的定制'
      },
      {
        index: 'enterpriseregistration',
        title: '企业登记'
      }
    ]
  },
  {
    icon: 'iconfont icon10_icon_yingyong',
    index: '2',
    title: '数据回声',
    subs: [
      {
        index: 'form',
        title: '基本表单'
      },
      {
        index: '3',
        title: '编辑器',
        subs: [
          {
            index: 'editor',
            title: '富文本编辑器'
          },
          {
            index: 'markdown',
            title: 'markdown编辑器'
          }
        ]
      },
      {
        index: 'upload',
        title: '文件上传'
      },
      {
        index: 'getMessage',
        title: '我收到的信息'
      }
    ]
  },
  {
    icon: 'iconfont icon7_icon_tongji',
    index: '4',
    title: '数据收益',
    subs: [
      {
        index: 'tree1',
        title: '基本树'
      },
      {
        index: 'tree2',
        title: '可选择树'
      },
      {
        index: 'tree3',
        title: '可编辑树'
      }
    ]
  },
  {
    icon: 'iconfont icon9_icon_guanli',
    index: 'icon',
    title: '产业服务'
  },
  {
    icon: '',
    index: '5',
    title: '账号管理',
    subs: [
      {
        index: 'drag',
        title: '拖拽列表'
      },
      {
        index: 'dialog',
        title: '拖拽弹框'
      }
    ]
  },
  {
    icon: '',
    index: '6',
    title: '消费者',
    subs: [
      {
        index: 'complaint',
        title: '投诉'
      },
      {
        index: 'complaintconsultinfo',
        title: '投诉咨询信息'
      }
    ]
  },
  {
    icon: '',
    index: '7',
    title: '溯源行业服务',
    subs: [
      {
        index: '44',
        title: '投诉咨询',
        subs: [
          {
            index: 'myReport',
            title: '我的举报'
          }
        ]
      },
      {
        index: 'createReport',
        title: '我要举报'
      }
    ]
  }
]; //复制key值到对应的菜单中，准备权限过滤菜单

exports.menuList = menuList;

function setKey(mens) {
  mens.forEach(function(mitem) {
    var fitem = routerList.find(function(ritem) {
      if (ritem.path.substring(1) == mitem.index) {
        return true;
      }
    });

    if (fitem) {
      mitem.key = fitem.key;

      if (mitem.subs && mitem.subs.length > 0) {
        setKey(mitem.subs);
      }
    } else if (mitem.index <= 100 && mitem.subs) {
      //key==-1 标识父级目录，不经过权限过滤
      mitem.key = -1;
      setKey(mitem.subs);
    }
  });
}

setKey(menuList);

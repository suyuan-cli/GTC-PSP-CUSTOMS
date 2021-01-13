'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
//企业中心路由
var routerList = [
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
    key: -1
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
    key: -1
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
    key: -1
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
    key: -1
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
    key: -1
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
    key: -1
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
    key: -1
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
      return require([
        '../components/page/traceSourceAdd/AddPage.vue'
      ], resolve);
    },
    meta: {
      title: '新增溯源数据',
      auth: true
    },
    key: -1
  },
  {
    path: '/tracesourceaddindex2',
    component: function component(resolve) {
      return require([
        '../components/page/traceSourceAdd/CreatePage.vue'
      ], resolve);
    },
    meta: {
      title: '新增溯源数据',
      auth: true
    },
    key: -1
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
    key: -1
  },
  {
    path: '/tracesourcedetails2/:cargomticode',
    // path: '/tracesourcedetails',
    name: 'tracesourcedetails',
    component: function component(resolve) {
      return require([
        '../components/page/traceSourceAdd/DetailPage.vue'
      ], resolve);
    },
    meta: {
      title: '溯源数据详情',
      auth: true
    },
    key: -1
  },
  {
    path: '/dataprepare',
    name: 'dataprepare',
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
    path: '/dataprepare2',
    name: 'dataprepare2',
    component: function component(resolve) {
      return require([
        '../components/page/traceSourceAdd/ListPage.vue'
      ], resolve);
    },
    meta: {
      title: '商品溯源数据准备',
      auth: true
    },
    key: -1
  }, // {
  //   path: '/dataprepareinfo',
  //   component: resolve =>
  //     require(['../components/page/DataPrepareInfo.vue'], resolve),
  //   meta: { title: '商品溯源数据准备详情', auth: true },
  //   key: -1
  // },
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
    path: '/impartialDetail/:notaryicode',
    component: function component(resolve) {
      return require(['../components/page/impartial/Details.vue'], resolve);
    },
    meta: {
      title: '公证书详情',
      auth: true
    },
    key: -1
  },
  {
    path: '/impartialSearchDetail/:notaryauditicode',
    component: function component(resolve) {
      return require(['../components/page/impartial/ListDetail.vue'], resolve);
    },
    meta: {
      title: '公证办理详情',
      auth: true
    },
    key: -1
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
    key: -1
  },
  {
    path: '/selfCertificateList',
    name: 'selfCertificateList',
    component: function component(resolve) {
      return require([
        '../components/page/selfCertificate/ListPage.vue'
      ], resolve);
    },
    meta: {
      title: '自证信息查询',
      auth: true
    },
    key: -1
  },
  {
    path: '/selfCertificateListCreate',
    component: function component(resolve) {
      return require([
        '../components/page/selfCertificate/AddPage.vue'
      ], resolve);
    },
    meta: {
      title: '自证办理新增',
      auth: true
    },
    key: -1
  },
  {
    path: '/selfCertificateListDetail/:cargomticode',
    component: function component(resolve) {
      return require([
        '../components/page/selfCertificate/DetailPage.vue'
      ], resolve);
    },
    meta: {
      title: '自证办理详情',
      auth: true
    },
    key: -1
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
    key: -1
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
    key: -1
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
    key: -1
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
    key: -1
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
    key: -1
  },
  {
    path: '/timelinedemo',
    component: function component(resolve) {
      return require(['../components/common/time-line/Demo.vue'], resolve);
    },
    meta: {
      title: '时间线',
      auth: true
    },
    key: -1
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
    key: -1
  },
  {
    name: 'createReport',
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
    key: -1
  },
  {
    name: 'createDemand',
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
    key: -1
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
    key: -1
  },
  {
    path: '/responseInMerchant/:id',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/ResponseInMerchant.vue'
      ], resolve);
    },
    meta: {
      title: '需求响应',
      auth: true
    },
    key: -1
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
    key: -1
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
    key: -1
  },
  {
    name: 'myDemandDetail',
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
    key: -1
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
    key: -1
  },
  {
    name: 'createComplainAndAdvisory',
    path: '/createComplainAndAdvisory',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/CreateComplainAndAdvisory.vue'
      ], resolve);
    },
    meta: {
      title: '发起投诉咨询',
      auth: true
    },
    key: -1
  },
  {
    path: '/complainAndAdvisoryList',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/ComplainAndAdvisoryList.vue'
      ], resolve);
    },
    meta: {
      title: '我要投诉咨询',
      auth: true
    },
    key: -1
  },
  {
    path: '/complainAndAdvisoryDetail/:id',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/ComplainAndAdvisoryDetail.vue'
      ], resolve);
    },
    meta: {
      title: '投诉咨询应答',
      auth: true
    },
    key: -1
  },
  {
    path: '/complainAndAdvisoryResponse/:id',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/ComplainAndAdvisoryResponse.vue'
      ], resolve);
    },
    meta: {
      title: '投诉咨询应答',
      auth: true
    },
    key: -1
  },
  {
    path: '/complainAndAdvisoryRespMerchant/:id',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/ComplainAndAdvisoryRespMerchant.vue'
      ], resolve);
    },
    meta: {
      title: '投诉咨询应答',
      auth: true
    },
    key: -1
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
    key: -1
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
  },
  {
    path: '/trademarkInfo',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '商标信息',
      auth: true
    },
    key: 1
  },
  {
    path: '/copyrightInfo',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '版权信息',
      auth: true
    },
    key: 1
  },
  {
    path: '/patentInfo',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '专利信息',
      auth: true
    },
    key: 1
  },
  {
    path: '/domainInfo',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '域名信息',
      auth: true
    },
    key: 1
  },
  {
    path: '/myTraceabilityData',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '我的溯源数据',
      auth: true
    },
    key: 1
  },
  {
    path: '/authorizedTraceabilityData',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '被授权溯源数据',
      auth: true
    },
    key: 1
  },
  {
    path: '/sharedRuleQuery',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '共享规则查询',
      auth: true
    },
    key: 1
  },
  {
    path: '/customAuthorization',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '自定义授权',
      auth: true
    },
    key: 1
  },
  {
    path: '/traceabilityLibrary',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '溯源标识库',
      auth: true
    },
    key: 1
  },
  {
    path: '/exceptionTraceability',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '异常标识',
      auth: true
    },
    key: 1
  },
  {
    path: '/codeEntrustment',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '赋码委托',
      auth: true
    },
    key: 1
  },
  {
    path: '/traceabilityCommodities',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '溯源商品列表',
      auth: true
    },
    key: 1
  },
  {
    path: '/traceabilityQuery',
    component: function component(resolve) {
      return require([
        '../components/page/helpers/TraceabilityQuery.vue'
      ], resolve);
    },
    meta: {
      title: '溯源查询',
      auth: true
    },
    key: -1
  },
  {
    path: '/commodityContext',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '溯源查商品脉络询',
      auth: true
    },
    key: 1
  },
  {
    path: '/brandRights',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '品牌权益保护',
      auth: true
    },
    key: 1
  },
  {
    path: '/channelNetwork',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '渠道网络',
      auth: true
    },
    key: 1
  },
  {
    path: '/consumerVoice',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '消费者声音',
      auth: true
    },
    key: 1
  },
  {
    path: '/statisticalAnalysis',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '统计分析',
      auth: true
    },
    key: 1
  },
  {
    path: '/riskEarlyWarning',
    component: function component(resolve) {
      return require([
        '../components/page/raskinfo/RiskEarlyWarning.vue'
      ], resolve);
    },
    meta: {
      title: '风险预警',
      auth: true
    },
    key: 1
  },
  {
    path: '/demandReleaseAlert',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '需求发布预警',
      auth: true
    },
    key: 1
  },
  {
    path: '/verificationInformation',
    component: function component(resolve) {
      return require([
        '../components/page/industryServices/verificationInformation.vue'
      ], resolve);
    },
    meta: {
      title: '检测报告验证',
      auth: true
    },
    key: 1
  },
  {
    name: 'createReportVerification',
    path: '/createReportVerification/:consvalidaticode?',
    component: function component(resolve) {
      return require([
        '../components/page/industryServices/createReportVerification.vue'
      ], resolve);
    },
    meta: {
      title: '检测报告验证新增',
      auth: true
    },
    key: -1
  },
  {
    path: '/verificationInfoDetail/:consvalidaticode',
    component: function component(resolve) {
      return require([
        '../components/page/industryServices/verificationInfoDetail.vue'
      ], resolve);
    },
    meta: {
      title: '检测报告验证详情',
      auth: true
    },
    key: -1
  },
  {
    path: '/infringementTreatment',
    component: function component(resolve) {
      return require([
        '../components/page/infringementAndReporting/InfringementTreatment.vue'
      ], resolve);
    },
    meta: {
      title: '侵权处理',
      auth: true
    },
    key: 1
  },
  {
    path: '/myReportCertificate',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '我的报告证书',
      auth: true
    },
    key: 1
  },
  {
    path: '/riskInformationUpload',
    component: function component(resolve) {
      return require([
        '../components/page/raskinfo/RiskInformationUploadList.vue'
      ], resolve);
    },
    meta: {
      title: '风险信息列表',
      auth: true
    },
    key: 1
  },
  {
    path: '/riskInformationUploadAdd',
    component: function component(resolve) {
      return require([
        '../components/page/raskinfo/RiskInformationUploadAdd.vue'
      ], resolve);
    },
    meta: {
      title: '风险信息上传',
      auth: true
    },
    key: -1
  },
  {
    path: '/riskInformationUploadDetail/:id',
    component: function component(resolve) {
      return require([
        '../components/page/raskinfo/RiskInformationUploadDetail.vue'
      ], resolve);
    },
    meta: {
      title: '风险信息详情',
      auth: true
    },
    key: -1
  },
  {
    path: '/traceabilityIdLibrary',
    component: function component(resolve) {
      return require(['../components/page/todo.vue'], resolve);
    },
    meta: {
      title: '溯源标识库',
      auth: true
    },
    key: 1
  },
  {
    path: '/traceabilityConsole',
    component: function component(resolve) {
      return require(['../components/page/traceabilityConsole.vue'], resolve);
    },
    meta: {
      title: '溯源操作台',
      auth: true
    },
    key: 1
  },
  {
    path: '/retroactiveEcho',
    component: function component(resolve) {
      return require([
        '../components/page/retroactiveEcho/retroactiveEcho.vue'
      ], resolve);
    },
    meta: {
      title: '溯源回声',
      auth: true
    },
    key: 1
  },
  {
    path: '/retroactiveIncome',
    component: function component(resolve) {
      return require([
        '../components/page/retroactiveIncome/retroactiveIncome.vue'
      ], resolve);
    },
    meta: {
      title: '溯源收益',
      auth: true
    },
    key: 1
  },
  {
    path: '/industryServices',
    component: function component(resolve) {
      return require([
        '../components/page/industryServices/industryServices.vue'
      ], resolve);
    },
    meta: {
      title: '溯源行业服务',
      auth: true
    },
    key: 1
  },
  {
    path: '/ogtradeservice',
    component: function component(resolve) {
      return require([
        '../components/page/industryServices/ogTradeService.vue'
      ], resolve);
    },
    meta: {
      title: '溯源行业服务',
      auth: true
    },
    key: -1
  },
  {
    path: '/usercancel',
    component: function component(resolve) {
      return require(['../components/page/userinfo/UserCancel.vue'], resolve);
    },
    meta: {
      title: '用户注销',
      auth: true
    },
    key: -1
  },
  {
    path: '/mainsubusermanage',
    component: function component(resolve) {
      return require([
        '../components/page/userinfo/MainSubUserManage.vue'
      ], resolve);
    },
    meta: {
      title: '主子账号管理',
      auth: true
    },
    key: -1
  },
  {
    path: '/complaintconsultquery',
    component: function component(resolve) {
      return require([
        '../components/page/consumer/ComplaintConsultQuery.vue'
      ], resolve);
    },
    meta: {
      title: '投诉咨询-列表',
      auth: true
    },
    key: -1
  },
  {
    path: '/complaintconsultdetails',
    component: function component(resolve) {
      return require([
        '../components/page/consumer/ComplaintConsultDetails.vue'
      ], resolve);
    },
    meta: {
      title: '投诉咨询-详情',
      auth: true
    },
    key: -1
  },
  {
    path: '/OwnIdentityList',
    component: function component(resolve) {
      return require([
        '../components/page/identityManage/identityRegister/OwnIdentityList.vue'
      ], resolve);
    },
    meta: {
      title: '自有标识登记',
      auth: true
    },
    key: -1
  },
  {
    path: '/firstsupplementinfo',
    component: function component(resolve) {
      return require([
        '../components/page/registerLogin/FirstSupplementInfo.vue'
      ], resolve);
    },
    meta: {
      title: '企业以及其他组织首次登录',
      auth: true
    },
    key: -1
  },
  {
    path: '/OwnIdentityAdd',
    component: function component(resolve) {
      return require([
        '../components/page/identityManage/identityRegister/AddPage.vue'
      ], resolve);
    },
    meta: {
      title: '自有标识导入',
      auth: true
    },
    key: -1
  }
];
var menuList = [
  {
    icon: 'iconfont icon3_icon_home',
    index: 'traceabilityConsole',
    title: '溯源操作台'
  },
  {
    icon: 'iconfont iconicon_qiye',
    index: '1',
    title: '企业信息',
    subs: [
      {
        title: '企业登记',
        index: 'enterpriseregistration'
      },
      {
        title: '知识产权管理',
        index: '2',
        subs: [
          {
            title: '商标信息',
            index: 'trademarkInfo'
          },
          {
            title: '版权信息',
            index: 'copyrightInfo'
          },
          {
            title: '专利信息',
            index: 'patentInfo'
          },
          {
            title: '域名信息',
            index: 'domainInfo'
          }
        ]
      }
    ]
  },
  {
    icon: 'iconfont iconicon_su',
    index: 'dataissue',
    title: '溯源发布',
    subs: [
      {
        index: '3',
        title: '商品资料',
        subs: [
          {
            index: 'goodsregister',
            title: '商品登记'
          },
          {
            index: 'dataprepare',
            title: '商品溯源数据准备'
          }
        ]
      },
      {
        index: 'selfCertificateList',
        title: '自证办理'
      },
      {
        index: '4',
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
        index: '5',
        title: '我的溯源数据',
        subs: [
          {
            index: 'myTraceabilityData',
            title: '我的溯源数据'
          },
          {
            index: 'authorizedTraceabilityData',
            title: '被授权溯源数据'
          },
          {
            index: 'myCustom',
            title: '我的定制'
          }
        ]
      },
      {
        index: '6',
        title: '数据共享',
        subs: [
          {
            index: 'sharedRuleQuery',
            title: '共享规则查询'
          },
          {
            //mark
            index: 'customAuthorization',
            title: '自定义授权'
          }
        ]
      },
      {
        index: 'ogsignmanage',
        title: '溯源标识管理',
        subs: [
          {
            index: 'ogsignapply',
            title: '溯源标识申请'
          },
          {
            index: 'ogsignused',
            title: '溯源标识使用'
          },
          {
            index: 'ogsigndisable',
            title: '溯源标识处置'
          },
          {
            index: 'traceabilityIdLibrary',
            title: '溯源标识库'
          },
          {
            index: 'ogsignstandingbook',
            title: '溯源标识台账'
          }, // {
          //   index: 'exceptionTraceability',
          //   title: '异常标识'
          // },
          {
            index: 'codeEntrustment',
            title: '赋码委托'
          }
        ]
      }
    ]
  },
  {
    icon: 'iconfont icon10_icon_yingyong',
    index: 'retroactiveEcho',
    title: '溯源回声',
    subs: [
      {
        index: 'traceabilityCommodities',
        title: '溯源商品列表'
      },
      {
        index: 'traceabilityQuery',
        title: '溯源查询'
      },
      {
        index: 'getMessage',
        title: '我收到的信息'
      }
    ]
  },
  {
    icon: 'iconfont icon7_icon_tongji',
    index: 'retroactiveIncome',
    title: '溯源收益',
    subs: [
      {
        index: 'commodityContext',
        title: '商品脉络'
      },
      {
        index: 'brandRights',
        title: '品牌权益保护'
      },
      {
        index: 'channelNetwork',
        title: '渠道网络'
      },
      {
        index: 'consumerVoice',
        title: '消费者声音'
      },
      {
        index: '12',
        title: '其他收益',
        subs: [
          {
            index: 'statisticalAnalysis',
            title: '统计分析'
          },
          {
            index: 'riskEarlyWarning',
            title: '风险预警'
          }
        ]
      }
    ]
  },
  {
    icon: 'iconfont iconicon_guanli',
    index: 'industryServices',
    title: '溯源行业服务',
    subs: [
      {
        index: '15',
        title: '溯源行业应用',
        subs: [
          {
            index: 'myDemand',
            title: '需求发布'
          },
          {
            index: 'verificationInformation',
            title: '检测报告验证'
          },
          {
            index: 'infringementTreatment',
            title: '侵权处理'
          },
          {
            index: 'myReportCertificate',
            title: '我的报告证书'
          },
          {
            index: 'ogtradeservice',
            title: '溯源服务行业'
          }
        ]
      },
      {
        index: '13',
        title: '消费者投诉咨询处理',
        subs: [
          {
            index: 'complaint',
            title: '消费者投诉咨询处理'
          },
          {
            index: 'complaintconsultquery',
            title: '企业投诉咨询查询-列表'
          },
          {
            index: 'complaintconsultdetails',
            title: '企业投诉咨询查询-详情'
          }
        ]
      },
      {
        index: '14',
        title: '问题反馈',
        subs: [
          {
            index: 'complainAndAdvisoryList',
            title: '我要投诉咨询'
          },
          {
            index: 'myReport',
            title: '我要举报'
          },
          {
            index: 'riskInformationUpload',
            title: '风险信息上传'
          }
        ]
      }
    ]
  } // {
  //   index: '11',
  //   title: '帐号管理',
  //   subs: [
  //     { index: 'impartialSearch', title: '主子帐号管理' },
  //     { index: 'impartialSearch', title: '帐号注销' }
  //   ]
  // }
];
var _default = {
  routerList: routerList,
  menuList: menuList
};
exports['default'] = _default;

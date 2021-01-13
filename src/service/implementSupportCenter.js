// 执行辅助中心模块接口
import axios from './axios';

export default {
  // 通用报关单下拉溯源商品列表
  getDeclnoGoodsList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECOMM040', params);
  },

  // 应急措施辅助-商品展示信息
  getCrashGoodsInfo(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEEMERMEAS020', params);
  },

  // 企业备案、变更信息查询查询
  getFilingChangeQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECCODECHANGE010', params);
  },
  // 企业备案、变更信息查询-企业变更记录查询
  getChangeQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECCODECHANGE020', params);
  },
  // 企业备案、变更信息查询-登记资料查询
  getRegisterQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECCODECHANGE030', params);
  },
  // 单证一致性比对辅助查询
  getConsistencyCheckQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEDCWCT010', params);
  },
  // 一致性对比数据查询
  getConsistencyContrastQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEDCWCT020', params);
  },
  // 完整比对结果查询
  getCompletionCheckQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEDCWCT030', params);
  },
  // 平行进口汽车信息辅助-商品信息查询
  getParalleCarGoodsQuery(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAEPLIMPCARASSIST005',
      params
    );
  },
  // 企业认证信息查询企业基础信息查询
  getEnterpriseCertificationQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECCODECERTIFY010', params);
  },
  // 企业认证信息查询
  getCertificationInfoQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECCODELIB040', params);
  },
  // 企业库存辅助查询
  getInventoryCheckQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECCODEINV020', params);
  },
  // 监管证件审核查询
  getSuperviseCertificateQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAESCA010', params);
  },
  // 检验检测一致性识别查询
  getInspectionTestQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAETESDET010', params);
  },
  // 商品风险信息
  getGoodsRiskInfo(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAERISKDATA040', params);
  },
  // 风险数量
  getRiskNum(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAERISKDATA080', params);
  },
  // 定制溯源信息
  getCustomInfo(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEOGCARGO020', params);
  },
  // 动态溯源信息
  getSpaceInfo(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEOGCARGO030', params);
  },
  // 货物信息识别查询
  getGoodsCheckInfo(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEINSCAR010', params);
  },
  // 货物市场流向商品详情信息
  getGoodsMarketFlowInfo(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAECARGOMARKETFLOW010',
      params
    );
  },
  // 单商品物流轨迹查询
  getGoodsLogisticsInfo(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAELOGISTICTRACK020', params);
  },
  // 检验检测报告
  getTestCheckReports(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEINSCAR020', params);
  },
  // 电商退货商品信息辅助查询
  getGoodsReturnInfo(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEEMRETG010', params);
  },
  // 退货申请信息
  getReturnApplyInfo(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEEMRETG050', params);
  }
};

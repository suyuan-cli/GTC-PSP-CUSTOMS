import axios from './axios';

export default {
  // 溯源比对列表
  traceComparisionList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEOGCOMPARE010', params);
  },
  traceComparisionDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEOGCOMPARE020', params);
  },
  traceComparisionSave(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEOGCOMPARE030', params);
  },
  traceComparisionSubmit(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEOGCOMPARE040', params);
  },
  traceComparisionDisable(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEOGCOMPARE050', params);
  },

  // 数据定制
  dataCustomList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECUSTOMDATA010', params);
  },
  dataCustomDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECUSTOMDATA020', params);
  },
  dataCustomSave(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECUSTOMDATA030', params);
  },
  dataCustomSubmit(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECUSTOMDATA040', params);
  },
  dataCustomDelete(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECUSTOMDATA080', params);
  },

  // 商品溯源查询
  traceabilityList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEOGCARGOQUERY010', params);
  },
  // 全部溯源信息详情
  tracebilityDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEOGCARGO010', params);
  },
  tracebilityPhotos(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEOGCARGOQUERY020', params);
  },
  tracebilityCompany(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECARGOSUBJET020', params);
  },
  // 单个字段溯源明细查询
  tracebilitySolo(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEOGCARGO040', params);
  },

  // 货物关联主体
  goodsList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECARGOSUBJET010', params);
  },
  // 商品关联主体清单
  goodsRelationList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECARGOSUBJET020', params);
  },

  // 商品物流轨迹
  goodsLogistList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAELOGISTICTRACK010', params);
  },
  //单商品物流轨迹查询
  goodsLogist(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAELOGISTICTRACK020', params);
  },

  // 举报信息列表
  reportInfoList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEREPORTINFO010', params);
  },
  reportInfoDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEREPORTINFO020', params);
  },

  // 商品召回信息查询
  recallInfoList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAERECALLINFO010', params);
  },
  recallInfoDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAERECALLINFO020', params);
  },

  // 消费者反馈信息查询
  feedbackList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECONSUMER010', params);
  },
  feedbackDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECONSUMER020', params);
  },

  // 证书联网核查
  certiOnlineList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECERTCHECK010', params);
  },
  // 提交证书联网核查信息
  submitCertiOnline(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECERTCHECK020', params);
  },
  //证书联网核查信息详情
  certiOnlineDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECERTCHECK030', params);
  },

  // 分类定义字段树形查询
  categoryTreeList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECUSTOMDATA050', params);
  },

  fileTreeDataList(params) {
    return axios.post('/access/ui/CASTS-FRONT/FRONTCOMMCODE010', params);
  },

  /** 获取登录用户信息 */
  getUserInfo(params) {
    return axios.post('/access/ui/CASTS-FRONT/do/FRONTCOMMUSER060', params);
  },

  // 根据企业名称判断企业是否存在
  judgeEnterprise(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECCODELIB060', params);
  }
};

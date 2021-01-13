// 通用辅助综合查询模块接口
import axios from './axios';

export default {
  // 报关单下拉溯源商品列表
  getDeclnoGoodsList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECOMM040', params);
  },

  // 查询最新的3条风险数据
  getLatestThreeRiskData(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECOMM05', params);
  },

  // 溯源商品详情
  getGoodsDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECOMM050', params);
  },

};

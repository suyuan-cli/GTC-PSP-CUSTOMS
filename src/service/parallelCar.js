// 平行进口汽车信息辅助模块接口
import axios from './axios';

export default {
  // 商品信息查询
  getGoodsInfo(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAEPLIMPCARASSIST005',
      params
    );
  },

  // 商品展示列表查询
  getGoodsShowList(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAEPLIMPCARASSIST010',
      params
    );
  },
  // 入出闸信息查询
  getFloodgateInfo(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAEPLIMPCARASSIST020',
      params
    );
  },
  // 汽车检测报告查询
  getCarCheckInfo(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAEPLIMPCARASSIST030',
      params
    );
  }, // 汽车图片查询
  getCarImg(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAEPLIMPCARASSIST040',
      params
    );
  },
  // 汽车整改图片信息查询
  getCarCorrectiveImg(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAEPLIMPCARASSIST050',
      params
    );
  },
  // 汽车整改视频信息查询
  getCarCorrectiveVideo(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAEPLIMPCARASSIST055',
      params
    );
  },
  // 一致性证书查询
  getCompatibilityCertificate(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAEPLIMPCARASSIST060',
      params
    );
  },
  // 报关单查询
  getDeclnoInfo(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAEPLIMPCARASSIST070',
      params
    );
  },
  // 原报关单商品查询
  getDeclnoGoodsInfo(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAEPLIMPCARASSIST075',
      params
    );
  },
  // 报关单集装箱查询
  gettDeclnocContainerInfo(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAEPLIMPCARASSIST080',
      params
    );
  },

};

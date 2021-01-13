import axios from './axios';

export default {
  //平行进口汽车统计查询
  vehicleStatistics(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADCAREXTSTAT010',
      params
    );
  },

  //平行进口汽车统计生产商排名查询
  statisticalProducerRanking(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADCAREXTSTAT020',
      params
    );
  },

  //平行进口汽车统计车辆数排名查询
  statisticalVehiclesRanking(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADCAREXTSTAT030',
      params
    );
  },

  //平行进口汽车统计货值排名查询
  statisticalGoodsRanking(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADCAREXTSTAT040',
      params
    );
  },

  //退货商品分类统计查询
  returnedGoods(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADRTORECSTAT010',
      params
    );
  },

  //退货商品分类统计排名查询
  returnedGoodsRank(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADRTORECSTAT020',
      params
    );
  },

  //退货商品分类统计占比查询
  returnedGoodsProportion(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADRTORECSTAT025',
      params
    );
  },

  //退货商品产地统计查询
  returnedGoodsPlace(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADRTORECSTAT030',
      params
    );
  },

  //退货商品产地统计排名查询
  returnedGoodsPlaceRank(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADRTORECSTAT040',
      params
    );
  },

  //电商平台退货商品分类统计查询
  dsptReturnedGoods(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADRTORECSTAT050',
      params
    );
  },

  //电商平台退货商品分类柱状图统计查询
  dsptReturnedGoodsZhu(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADRTORECSTAT060',
      params
    );
  },

  //电商平台退货原因统计查询
  dsptReturnedGoodsReason(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADRTORECSTAT070',
      params
    );
  },

  //电商平台退货原因饼图统计查询
  dsptReturnedGoodsReasonBin(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADRTORECSTAT080',
      params
    );
  },

  //电商企业退货商品分类统计查询
  dsqyReturnedGoods(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADRTORECSTAT090',
      params
    );
  },

  //电商企业退货商品分类柱状图统计查询
  dsqyReturnedGoodsZhu(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADRTORECSTAT100',
      params
    );
  },

  //电商企业退货原因统计查询
  dsqyReturnedGoodsReason(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADRTORECSTAT110',
      params
    );
  },

  //电商企业退货原因饼图统计查询
  dsqyReturnedGoodsReasonBin(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADRTORECSTAT120',
      params
    );
  },

  //一带一路成员国商品分类统计查询
  memberCountriesType(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADBRCOUNTRYSTAT010',
      params
    );
  },

  //一带一路成员国统计排名查询
  memberCountriesTypeRank(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADBRCOUNTRYSTAT020',
      params
    );
  },

  //一带一路成员国商品分类统计占比查询
  memberCountriesTypeProportion(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADBRCOUNTRYSTAT030',
      params
    );
  },

  //一带一路成员国共建方统计查询
  memberCountriesConstruction(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADBRCOUNTRYSTAT040',
      params
    );
  },
  //一带一路成员国共建方数量排名统计查询
  memberCountriesConstructionRank(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADBRCOUNTRYSTAT050',
      params
    );
  },
  //一带一路成员国共建方类型占比统计查询
  memberCountriesConstructionProportion(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADBRCOUNTRYSTAT060',
      params
    );
  },

  // 溯源共建方类型统计查询
  constructionDataList(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADCCODESTAT010',
      params
    );
  },
  constructionRosterList(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADCCODESTAT020',
      params
    );
  },
  constructionGoodsCountRank(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADCCODESTAT030',
      params
    );
  },
  constructionProvideCountRank(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSFRONTADCCODESTAT040',
      params
    );
  },

  /* 商品统计 */
  commodityGoodsDataList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADOGCARGOBI010', params);
  },
  commodityAreaDataQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADOGCARGOBI015', params);
  },
  commodityGoodsTotalQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADOGCARGOBI020', params);
  },
  commodityGoodsLevelQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADOGCARGOBI030', params);
  },
  commodityAreaGoodsLevel(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADOGCARGOBI035', params);
  },
  commodityOriginTotalQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADOGCARGOBI040', params);
  },
  commodityOriginRankTop10(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADOGCARGOBI045', params);
  },
  commodityOriginMap(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADOGCARGOBI047', params);
  },
  commodityBuilderQuery(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADOGCARGOBI050', params);
  },
  commodityBuilderRankTop10(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADOGCARGOBI055', params);
  },
  /* 商品统计结束 */

  riskStatisticDataList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADRISKDATABI010', params);
  },
  riskStatisticTypeList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADRISKDATABI020', params);
  },
  riskStatisticLevelList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADRISKDATABI030', params);
  },
  riskStatisticHandleList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADRISKDATABI040', params);
  },

  /** 消费者投诉统计 */
  consumerGoodsDataList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADCONSCOMPBI010', params);
  },
  consumerGoodsEchartData(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADCONSCOMPBI015', params);
  },
  consumerBuilderDataList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADCONSCOMPBI030', params);
  },
  consumerBuilderEchartData(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADCONSCOMPBI035', params);
  },
  consumerComplaintCount(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSADCONSCOMPBI020', params);
  }
};

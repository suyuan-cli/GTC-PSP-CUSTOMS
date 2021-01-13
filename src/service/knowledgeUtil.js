import axios from './axios';
export default {
  //知识信息维护列表页查询接口
  queryKnowledgeList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEKNOWLEDGELIB010', params);
  },
  //知识信息维护删除功能
  delKnowledge(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEKNOWLEDGELIB016', params);
  },
  //知识信息维护删除 校验风险
  checkCanDelete(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEKNOWLEDGELIB017', params);
  },
  //校验知识唯一性
  checkKnowledge(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEKNOWLEDGELIB018', params);
  },
  //知识信息维护存盘
  saveKnowledge(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEKNOWLEDGELIB020', params);
  },

  //知识信息维护操作记录列表查询
  queryKnowledgeOptionsList(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAEKNOWLEDGELIBLOG010',
      params
    );
  },
  //知识信息维护详情查询
  queryKnowledgeDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEKNOWLEDGELIB015', params);
  },


  //专利查询列表页
  queryPatentList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEPATENTINFOLIB010', params);
  },
  //著作权列表页查询 r软件/著作
  queryCopyrightList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECOPYRIGHTLIB010', params);
  },
  //商标列表页查询
  queryTradeList(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAETRADEMARKINFOLIB010',
      params
    );
  },

  //质量信息列表页查询
  queryQualityList(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAEQUALITYINFOLIB010',
      params
    );
  },

  //企业档案列表页查询
  queryEntInfoList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECCODELIB010', params);
  },
  //查询证单列表
  queryCertInfoList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEOGDOCLIB010', params);
  },
  //查询共享对象列表
  queryShareObjList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEKNOWLEDGELIB055', params);
  },

  //专利详情
  queryPatentDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEPATENTINFOLIB020', params);
  },
  //商标详情
  queryTrademarkDetail(params) {
    return axios.post(
      '/access/ui/CASTS-FRONT/CASTSAETRADEMARKINFOLIB020',
      params
    );
  },

  //软件著作 详情
  queryCopyrightDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECOPYRIGHTLIB020', params);
  },

  //企业基本信息 详情
  queryEntBaseInfoDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECCODELIB020', params);
  },
  //资质信息 详情
  queryCredentialsInfoDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECCODELIB030', params);
  },
  //资质信息 详情
  queryCredentialsInfoDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECCODELIB030', params);
  },
  //企业认证信息 详情
  queryAuthenticationDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECCODELIB040', params);
  },
  //商事信息 详情
  queryBusinessInfoDetail(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAECCODELIB050', params);
  },
  //查询是否可以删除
  queryCanDelInfo(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEKNOWLEDGELIB017', params);
  },
  //查看数据化信息
  queryFormatDataInfoByType(params) {
    const temp = {
      20: 'CASTSAEKNOWLEDGELIB060', //危化品目录查询
      30: 'CASTSAEKNOWLEDGELIB065', //进出口濒危商品目录查询
      70: 'CASTSAEKNOWLEDGELIB070', //禁止商品目录查询
      40: 'CASTSAEKNOWLEDGELIB075', //两用物项目录查询
      80: 'CASTSAEKNOWLEDGELIB080' //进出口管制商品名录查询}
    };
    let val = temp[params.code];
    let p = {
      knowledgelibicode: params.knowledgelibicode,
      pageParam: params.pageParam,
      orderParam: params.orderParam
    };
    return axios.post('/access/ui/CASTS-FRONT/' + val, p);
  }
};

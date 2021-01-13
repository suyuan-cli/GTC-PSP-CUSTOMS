"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("./axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//标识模块接口
var _default = {
  //获取标识列表
  getIdentification: function getIdentification(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPOGCODE110', params);
  },
  //获取溯源标识台账分页信息
  getOgsignStandingBookInfo: function getOgsignStandingBookInfo(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPOGCODE105', params);
  },
  //获取累计的溯源标识数据量
  getOgsignTotalCountInfo: function getOgsignTotalCountInfo(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPOGCODE106', params);
  },
  //商品登记分页信息
  getCargoInfo: function getCargoInfo(params) {
    return _axios["default"].post('access/GTCPSP-FRONT/GTCPSPCARGOREG010', params);
  },
  //标识申请分页信息查询
  getIdentificationApply: function getIdentificationApply(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPOGCODE100', params);
  },
  //商品登记详情页
  getCargoDetailInfo: function getCargoDetailInfo(params) {
    return _axios["default"].post('access/GTCPSP-FRONT/GTCPSPCARGOREG011', params);
  },
  // 标识处置分页信息查询
  getIdentificationDisable: function getIdentificationDisable(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPOGCODE115', params);
  },
  // 标识停用详情信息查询
  getIdentificationStopInfo: function getIdentificationStopInfo(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPOGCODE116', params);
  },
  // 溯源标识申请详情查询
  getIdentificationInfo: function getIdentificationInfo(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPOGCODE101', params);
  },
  // 溯源商品准备分页信息查询
  getDataPrepare: function getDataPrepare(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPCARGOMAINT100', params);
  },
  //商品登记保存
  saveCargoRegInfo: function saveCargoRegInfo(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPCARGOREG012', params);
  },
  //溯源标识使用详情页
  getOgSignUsedDetailInfo: function getOgSignUsedDetailInfo(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPOGCODE111', params);
  },
  //溯源标识使用新增页
  saveOgSignUsedInfo: function saveOgSignUsedInfo(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPOGCODE112', params);
  },
  //商品登记提交
  submitCargoRegInfo: function submitCargoRegInfo(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPCARGOREG016', params);
  },
  //溯源标识使用提交
  submitOgSignUsedInfo: function submitOgSignUsedInfo(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPOGCODE113', params);
  },
  //新增溯源标识申请信息
  createIdentificationApply: function createIdentificationApply(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPOGCODE102', params);
  },
  // 溯源商品登记详情页图片查询接口
  getOgCargoRegDetailImgInfo: function getOgCargoRegDetailImgInfo(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPCARGOREG014', params);
  },
  // Excel模板下载
  downloadExcelModel: function downloadExcelModel(params) {
    return _axios["default"].post('/access/FRONT-COMM/FRONTCOMMIMPORT020', params);
  },
  // Excel导入
  uploadExcelData: function uploadExcelData(params) {
    return _axios["default"].post('/access/FRONT-COMM/FRONTCOMMIMPORT010', params);
  },
  //删除商品登记附件
  deleteCargoRegAttach: function deleteCargoRegAttach(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPCARGOREG017', params);
  },
  // 查询溯源标识绑码详细信息
  queryOgBindCodeDetilInfo: function queryOgBindCodeDetilInfo(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPOGCODE118', params);
  },
  // 删除溯源绑码标识信息
  deleteOgBindCodeInfo: function deleteOgBindCodeInfo(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPOGCODE119', params);
  },
  // 消费者投诉咨询列表查询
  getConsumerComplaintConsultList: function getConsumerComplaintConsultList(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPGTSENTTRANSRUL001', params);
  },
  // 新增标识停用信息
  createIdentificationStop: function createIdentificationStop(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPOGCODE117', params);
  },
  // 未使用标识查询
  getIdentificationUnused: function getIdentificationUnused(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPOGCODE104', params);
  }
};
exports["default"] = _default;
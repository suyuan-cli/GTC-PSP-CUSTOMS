"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("./axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//消费者模块接口
var _default = {
  // 消费者投诉咨询查询列表记录
  getComplaintConsultInfo: function getComplaintConsultInfo(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTSPFCUMERCOMPCONSULT001', params);
  },
  // 新增投诉咨询
  createComplaintSuggest: function createComplaintSuggest(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTSPFCUMERCOMPCONSULT002', params);
  },
  //  投诉咨询详情
  getComplaintSuggestInfo: function getComplaintSuggestInfo(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTSPFCUMERCOMPCONSULT003', params);
  },
  // 消费者投诉咨询详情保存评价
  createEvaluate: function createEvaluate(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTSPFCUMERCOMPCONSULT004', params);
  }
};
exports["default"] = _default;
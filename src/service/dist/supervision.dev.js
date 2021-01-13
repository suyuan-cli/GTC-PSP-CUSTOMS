"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("./axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//监管机构投诉咨询模块接口
var _default = {
  // 监管机构投诉咨询列表查询
  getSupervisionListQuery: function getSupervisionListQuery(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPLATMGRPSPSUPERVISEDEALRUL001', params);
  },
  // 监管机构投诉咨询查询详情记录
  getSupervisionDetail: function getSupervisionDetail(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPLATMGRPSPSUPERVISEDEALRUL002', params);
  },
  // 消费者投诉咨询监督办理
  complaintSuggestSupervisionHandle: function complaintSuggestSupervisionHandle(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPLATMGRPSPSUPERVISEDEALRUL003', params);
  }
};
exports["default"] = _default;
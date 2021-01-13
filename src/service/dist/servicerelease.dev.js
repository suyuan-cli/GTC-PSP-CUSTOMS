"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("./axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//服务发布模块接口
var _default = {
  // 服务发布列表查询
  getServiceReleaseList: function getServiceReleaseList(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPSERVRELEASE010', params);
  },
  // 服务发布详情查询
  getServiceReleaseDetail: function getServiceReleaseDetail(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPSERVRELEASE011', params);
  },
  // 新增服务发布
  createServiceRelease: function createServiceRelease(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPSERVRELEASE012', params);
  },
  // 提交服务发布
  submitServiceRelease: function submitServiceRelease(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPSERVRELEASE013', params);
  },
  // 查询操作记录
  getOperationRecord: function getOperationRecord(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPSERVRELEASE014', params);
  }
};
exports["default"] = _default;
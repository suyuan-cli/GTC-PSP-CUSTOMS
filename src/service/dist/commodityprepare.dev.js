"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("./axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//标识模块接口
var _default = {
  // 溯源商品准备分页信息查询
  getDataPrepare: function getDataPrepare(params) {
    return _axios["default"].post('/access/GTCPSP-FRONT/GTCPSPCARGOMAINT100', params);
  }
};
exports["default"] = _default;
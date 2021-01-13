"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDropDownList = getDropDownList;

var _axios = _interopRequireDefault(require("./axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getDropDownList() {
  return _axios["default"].post('/access/FRONT-COMM/FRONTCOMMCODE010', params);
}
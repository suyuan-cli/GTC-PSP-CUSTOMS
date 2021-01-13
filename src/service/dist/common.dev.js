"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("./axios"));

var _config = require("./config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  //上传附件数据
  upload: function upload(formData) {
    // let formData=new FormData();
    // formData.append('file',this.$refs.file.files[0])
    _axios["default"].post("/access/".concat(_config.modulename, "//GTCCOMMATTACH10"), formData, {
      'Content-Type': 'multipart/form-data'
    });
  },
  //登录
  loginFormat: function loginFormat(params) {
    return _axios["default"].post("/access/".concat(_config.modulename, "/FRONTCOMMLOGIN010"), params);
  },
  //登出
  logoutFormat: function logoutFormat(params) {
    return _axios["default"].get("/access/".concat(_config.modulename, "/FRONTCOMMLOGIN020"), params);
  },
  //是否登陆
  isLogout: function isLogout(params) {
    return _axios["default"].get("/access/".concat(_config.modulename, "/FRONTCOMMLOGIN030"), params);
  },
  //用户权限菜单查询
  getUserMenus: function getUserMenus(params) {
    return _axios["default"].get("/access/".concat(_config.modulename, "/FRONTCOMMMENU010"), params);
  },
  //获取登陆用户信息
  getUserInfo: function getUserInfo(params) {
    return _axios["default"].get("/access/".concat(_config.modulename, "/FRONTCOMMUSER010"), params);
  },
  //修改密码
  modifyPwd: function modifyPwd(params) {
    return _axios["default"].post("/access/".concat(_config.modulename, "/FRONTCOMMUSER020"), params);
  },
  //找回密码
  getBackPwd: function getBackPwd(params) {
    return _axios["default"].post("/access/".concat(_config.modulename, "/FRONTCOMMUSER030"), params);
  },
  //发送手机验证码
  sendPhoneCode: function sendPhoneCode(params) {
    return _axios["default"].post("/access/".concat(_config.modulename, "/FRONTCOMMAUTHCODE020"), params);
  },
  //发送邮箱验证码
  sendEmail: function sendEmail(params) {
    return _axios["default"].post("/access/".concat(_config.modulename, "/FRONTCOMMAUTHCODE030"), params);
  },
  //验证码校验
  checkCode: function checkCode(params) {
    return _axios["default"].post("/access/".concat(_config.modulename, "/FRONTCOMMAUTHCODE040"), params);
  },
  //生成验证码
  generateCode: function generateCode(params) {
    return _axios["default"].post("/access/".concat(_config.modulename, "/FRONTCOMMCAPTHA010"), params);
  },
  //频道列表查询
  channelList: function channelList(params) {
    return _axios["default"].post("/access/".concat(_config.modulename, "/FRONTCOMMCMS010"), params);
  },
  //栏目列表查询
  columnList: function columnList(params) {
    return _axios["default"].post("/access/".concat(_config.modulename, "/FRONTCOMMCMS020"), params);
  },
  //生成验证码
  generateCode2: function generateCode2(params) {
    return _axios["default"].post("/access/".concat(_config.modulename, "/FRONTCOMMAUTHCODE010"), params);
  },
  getIdentificationList: function getIdentificationList() {
    return _axios["default"].post("/access/".concat(_config.modulename, "/FRONTCOMMAUTHCODE010"), params);
  },
  // 码表查询
  getCodeList: function getCodeList(params) {
    return _axios["default"].post('/access/FRONT-COMM/FRONTCOMMCODE010', params);
  },
  // 字典查询
  getDictionaryList: function getDictionaryList(params) {
    return _axios["default"].post('/access/FRONT-COMM/FRONTCOMMDICT010', params);
  }
};
exports["default"] = _default;
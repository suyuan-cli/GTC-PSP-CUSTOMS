"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("@/service/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  state: {
    isLogin: localStorage.getItem("token") ? true : false
  },
  mutations: {
    setLoginState: function setLoginState(state, b) {
      state.isLogin = b;
    }
  },
  actions: {
    login: function login(_ref, user) {
      var commit = _ref.commit;
      // 登录请求
      return _user["default"].login(user).then(function (res) {
        var _res$data = res.data,
            code = _res$data.code,
            token = _res$data.token;

        if (code) {
          // 登录成功
          commit("setLoginState", true);
          localStorage.setItem("token", token);
        }

        return code;
      });
    },
    logout: function logout(_ref2) {
      var commit = _ref2.commit;
      // 清缓存
      localStorage.removeItem("token"); // 重置状态

      commit("setLoginState", false);
    }
  }
};
exports["default"] = _default;
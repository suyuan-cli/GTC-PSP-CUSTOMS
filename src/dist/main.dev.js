"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _axios = _interopRequireDefault(require("axios"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

require("./assets/css/theme-blue/index.css");

require("./assets/iconfont/iconfont.css");

require("./assets/iconfont/iconfont.js");

require("./assets/css/icon.css");

require("./assets/css/main.css");

require("./components/common/directives");

require("babel-polyfill");

var _store = _interopRequireDefault(require("./store"));

var _interceptor = _interopRequireDefault(require("./interceptor"));

var _index3 = _interopRequireDefault(require("./vueI18n6/index.js"));

var _index4 = _interopRequireDefault(require("./public-method/index.js"));

var _setCookie = _interopRequireDefault(require("./public-method/setCookie.js"));

var _vueCookies = _interopRequireDefault(require("vue-cookies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 默认主题
// 浅绿色主题
// iconfont
// iconfont.js
_vue["default"].use(_vueCookies["default"]);

_vue["default"].use(_index4["default"]);

_vue["default"].config.productionTip = false;

_vue["default"].use(_elementUi["default"], {
  size: 'small'
});

_vue["default"].prototype.$axios = _axios["default"]; //使用钩子函数对路由进行权限跳转

_router["default"].beforeEach(function (to, from, next) {
  //需要登录授权
  if (to.meta.auth) {
    //如果配置了需要登录授权，则需要验证
    var isLogin = localStorage.getItem('isLogin');
    isLogin = true; //测试，正式调试的时候去掉
    //但是前端本来就没有绝对安全的策略，只能通过后端减少token的生效时间来预防

    if (isLogin) {
      //初始化菜单
      if (_store["default"].state.menu.menuList.length == 0) {
        _store["default"].dispatch('permission').then(function () {
          next();
        });
      } else {
        next();
      }
    } else {
      next({
        Path: '/login',
        Query: {
          redirectTarget: to.path
        }
      });
    }
  } else {
    next();
  }
});

(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _setCookie["default"])(_vueCookies["default"]));

        case 2:
          window.app = new _vue["default"]({
            i18n: _index3["default"],
            router: _router["default"],
            store: _store["default"],
            render: function render(h) {
              return h(_App["default"]);
            }
          }).$mount('#app');
          (0, _interceptor["default"])(window.app);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
})();
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _axios=_interopRequireDefault(require("./axios"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _default={getDataPrepare:function(e){return _axios.default.post("/access/GTCPSP-FRONT/GTCPSPCARGOMAINT100",e)}};exports.default=_default;
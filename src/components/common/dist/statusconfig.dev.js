"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusconfig = void 0;
var statusconfig = {
  // 状态为特殊码表 状态的编码过滤参数有专门的配置表 statusconfig.js 必填
  // 状态编码过滤参数 必填 (注：过滤参数是一个对象)
  ogcodeapply: {
    code: '90.status',
    codeparams: {
      sheetcode: 'GTC-MGRTB.OgcodeApply',
      SQLFILTER: "code <> '10'"
    }
  },
  goodsregister: {
    code: '90.status',
    codeparams: {
      sheetcode: 'GTC-MGRTB.CargoReg'
    }
  },
  ogcodeBind: {
    code: '90.status',
    codeparams: {
      sheetcode: 'GTC-MGRTB.OgcodeBind'
    }
  },
  ogcodedisable: {
    code: '90.status',
    codeparams: {
      sheetcode: 'DT_GTC-MGRPF.exhandleresult'
    }
  },
  complaintconsultinfo: {
    code: '90.status',
    codeparams: {
      sheetcode: 'GTC-MGRPF.Cumercompconsult'
    }
  },
  complaintconsultinfo_1: {
    code: '90.status',
    codeparams: {
      sheetcode: 'GTC-MGRPF.Cumercompconsult_1'
    }
  }
};
exports.statusconfig = statusconfig;
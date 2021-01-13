"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.codeconfig = void 0;
var codeconfig = {
  // 码表配置表
  ccode: {
    // 码表名称
    title: '企业',
    // 码表编码 必填
    code: 'GTC-MGRPF.ccode',
    // 编码过滤参数 选填
    codeparams: {}
  },
  ccoderequesterrela: {
    title: '标识服务商',
    code: 'GTC-MGRPF.ccoderequesterrela',
    codeparams: {
      ccodetype: '300003'
    }
  },
  ncode: {
    title: '原产国/地区',
    code: 'GTC-MGRTB.ncode',
    codeparams: {}
  },
  ccoderequesterrela_all: {
    title: '公证机构',
    code: 'GTC-MGRPF.ccoderequesterrela'
  },
  fcode: {
    title: '币种',
    code: 'GTC-MGRTB.fcode'
  },
  doctype: {
    title: '附件类型',
    code: 'SN-PLAT.DocType',
    codeparams: {
      sheetcode: 'GTC-MGRTB.CcodeReg'
    }
  }
};
exports.codeconfig = codeconfig;
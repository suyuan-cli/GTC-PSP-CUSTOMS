export const codeconfig = {
  // 码表配置表
  ccode: {
    // 码表名称
    title: '企业',
    // 码表编码 必填
    code: 'CASTS-AE.ccode',
    key: 'ccode',
    // 编码过滤参数 选填
    codeparams: {}
  },
  //检测机构
  jgcode: {
    // 码表名称
    title: '检测机构',
    // 码表编码 必填
    code: 'CASTS-AE.ccode',
    key: 'jgcode',
    // 编码过滤参数 选填
    codeparams: {
      cbmsubtype: '300002'
    }
  },
  ccoderequesterrela: {
    title: '标识服务商',
    code: 'GTC-MGRPF.ccoderequesterrela',
    codeparams: { ccodetype: '300003' }
  },
  ncode: {
    title: '原产国/地区',
    code: 'GTC-MGRTB.ncode',
    codeparams: {}
  },
  country: {
    title: '国别',
    code: 'GTC-MGRTB.ncodec',
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
  },
  doctypelink: {
    title: '附件类型(环节信息)',
    code: 'SN-PLAT.DocType',
    codeparams: {
      sheetcode: 'GTC-MGRTB.SelfDeclare'
    }
  },
  validation: {
    title: '验证结果',
    code: 'DT_GTC-MGRPF.verificationresult'
  },
  ccodes: {
    // 检测机构
    title: '检测机构',
    // 码表编码 必填
    code: 'GTC-MGRPF.ccode',
    key: 'ccodes',
    // 编码过滤参数 选填
    codeparams: { cbmsubtype: '300001' }
  },
  ccode_launch: {
    // 发起企业
    title: '发起企业',
    // 码表编码 必填
    code: 'GTC-MGRPF.pfccode',
    // 编码过滤参数 选填
    codeparams: { SQLFILTER: '10' }
  },
  local_test_type: {
    // 发起企业
    title: '本地测试',
    // 码表编码 必填
    code: 'local-type',
    // 编码过滤参数 选填
    codeparams: { SQLFILTER: '10' }
  },
  local_test_zstype: {
    // 发起企业
    title: '本地测试',
    // 码表编码 必填
    code: 'local-zstype',
    // 编码过滤参数 选填
    codeparams: { SQLFILTER: '10' }
  },
  bcode: {
    title: '处理部门',
    code: 'bcode'
  },
  users: {
    title: '处理人',
    key: 'users',
    code: 'users',
    codeparams: {}
  },
  hscode: {
    title: 'hs编码',
    code: 'CASTS-AE.hscode'
  },

  risktypeAll: {
    title: '所有风险类型',
    key: 'risktypeAll',
    code: 'CASTS-AE.risktype'
  },
  risktype1: {
    title: '一级风险类型',
    key: 'risktype1',
    code: 'CASTS-AE.risktype',
    codeparams: {
      SQLFILTER: 'risktypelevel=1'
    }
  },
  risktype2: {
    title: '二级风险类型',
    key: 'risktype2',
    code: 'CASTS-AE.risktype',
    codeparams: {
      SQLFILTER: 'risktypelevel=2'
    }
  },
  risktype3: {
    title: '三级风险类型',
    key: 'risktype3',
    code: 'CASTS-AE.risktype',
    codeparams: {
      SQLFILTER: 'risktypelevel=3'
    }
  },
  sheetbcode: {
    title: '维护部门',
    code: 'sheet.bcode'
  },
  reportccode: {
    title: '被举报人',
    code: 'CASTS-AE.ccode',
    key: 'reportccode',
    codeparams: {
      cbmtype: '10,30,70'
    }
  },
  messageccode: {
    title: '信息发布方',
    code: 'CASTS-AE.ccode',
    key: 'messageccode',
    codeparams: {
      cbmtype: '10,20'
    }
  },
  cbmtype: {
    title: '类型',
    code: 'CASTS-AE.cbmtype'
  },
  verifyresult: {
    title: '验证结果',
    code: 'local-verifyresult'
  },
  attachtype: {
    title: '附件类型',
    code: 'GTC-DMS.attachtype',
    codeparams: {
      SQLFILTER: " typecode like '102%'"
    }
  },
  castscbmdef: {
    title: '企业类型',
    code: 'CASTS-AE.cbmdef',
    codeparams: {
      SQLFILTER:
        " relatype  = 'CST' and cbmdefcode not like '20%' and cbmdefcode not like '40%' and cbmdefcode not like '60%' and cbmdefcode not like '80%'"
    }
  }
};

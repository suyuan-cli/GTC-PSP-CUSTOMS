export const statusconfig = {
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
  },

  //举报状态
  reportstatusinfo: {
    code: '90.status',
    codeparams: {
      sheetcode: 'GTC-MGRPF.Reportinfo'
    }
  },
  //举报类型
  reporttypeinfo: {
    code: '90.status',
    codeparams: {
      sheetcode: 'DT_GTC-MGRMGR.reporttype'
    }
  },
  //需求类型
  demandtypeinfo: {
    code: '90.status',
    codeparams: {
      sheetcode: 'GTC-MGRCBM.Desiredreg'
    }
  },
  //需求类型
  riskRules: {
    code: '90.status',
    key: 'riskRules',
    codeparams: {
      sheetcode: 'CASTS-AE.RiskRules'
    }
  }
};

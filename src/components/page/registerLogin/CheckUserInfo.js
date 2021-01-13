export default {
  checkMobile(mobile) {
    if (!mobile) {
      return {
        name: '手机号码',
        msg: '不能为空'
      };
    }
    if (mobile.indexOf(' ') != -1) {
      return {
        name: '手机号码',
        msg: '不能存在空格！'
      };
    }
    var regu = /^1(3|4|5|6|7|8|9)\d{9}$/;
    var re = new RegExp(regu);
    if (!re.test(mobile)) {
      return {
        name: '手机号码',
        msg: '格式不正确'
      };
    }
    return null;
  },
  checkEmail(email) {
    if (!email) {
      return {
        name: '邮箱',
        msg: '不能为空'
      };
    }
    if (email.indexOf(' ') != -1) {
      return {
        name: '邮箱',
        msg: '格式能存在空格！'
      };
    }
    var regu = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
    var re = new RegExp(regu);
    if (!re.test(email)) {
      return {
        name: '邮箱',
        msg: '格式不正确'
      };
    }
    return null;
  },
  checkPass(pass) {
    if (!pass) {
      return {
        name: '密码',
        msg: '不能为空'
      };
    }
    if (pass.length < 8 || pass.length > 16) {
      return {
        name: '密码',
        msg: '长度不正确，请输入8-16位密码！'
      };
    }
    if (pass.indexOf(' ') != -1) {
      return {
        name: '密码',
        msg: '不能含有空格!'
      };
    }
    var r = /[\u4e00-\u9fa5]+/;
    if (r.test(pass)) {
      return {
        name: '密码',
        msg: '不能含有中文!'
      };
    }

    var regu = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{8,16}$/;
    var re = new RegExp(regu);
    if (!re.test(pass)) {
      return {
        name: '密码',
        msg: '至少含数字、字母、特殊符号两种组合！'
      };
    }
    return null;
  },

  chaeckAgPass(pass, agPass) {
    if (pass !== agPass) {
      return {
        name: '两次密码',
        msg: '输入不一致'
      };
    }
  },
  checkMobileOrEmail(mobileOrEmail) {
    if (!mobileOrEmail) {
      return {
        name: '手机号码/邮箱',
        msg: '不能为空'
      };
    }
    if (mobileOrEmail.indexOf(' ') != -1) {
      return {
        name: '手机号码/邮箱',
        msg: '不能存在空格'
      };
    }
    var regu = /^1(3|4|5|6|7|8|9)\d{9}$/;
    var re = new RegExp(regu);
    var regu2 = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
    var re2 = new RegExp(regu2);
    if (!re.test(mobileOrEmail) && !re2.test(mobileOrEmail)) {
      return {
        name: '手机号码/邮箱',
        msg: '格式不正确'
      };
    }
    return null;
  },

  checkIsRead(isread) {
    if (!isread) {
      return {
        name: '',
        msg: '请阅读注册协议'
      };
    }
    return null;
  },
  checkLoginName(loginName) {
    if (!loginName) {
      return {
        name: '用户名称',
        msg: '不能为空'
      };
    }
    if (loginName.indexOf(' ') != -1) {
      return {
        name: '用户名称',
        msg: '不能存在空格'
      };
    }
  },
  checkAuthCode(checkcode) {
    if (!checkcode) {
      return {
        name: '验证码',
        msg: '不能为空'
      };
    }
  }
};

import axios from './axios';
import { modulename } from './config.js';
import { JSEncrypt } from 'jsencrypt';
export default {
  //上传附件数据
  upload(formData) {
    // let formData=new FormData();
    // formData.append('file',this.$refs.file.files[0])
    axios.post(`/access/${modulename}//GTCCOMMATTACH10`, formData, {
      'Content-Type': 'multipart/form-data'
    });
  },
  //登录
  loginFormat(params) {
    return axios.post(`/access/${modulename}/FRONTCOMMLOGIN010`, params);
  },
  //登出
  logoutFormat(params) {
    return axios.get(`/access/${modulename}/FRONTCOMMLOGIN020`, params);
  },

  //是否登陆
  isLogout(params) {
    return axios.get(`/access/ui/CASTS-FRONT/do/FRONTCOMMLOGIN030`, params);
  },
  //用户权限菜单查询
  getUserMenus(params) {
    return axios.get(`/access/${modulename}/FRONTCOMMMENU010`, params);
  },
  //获取登陆用户信息
  getUserInfo(params) {
    return axios.get(`/access/${modulename}/FRONTCOMMUSER010`, params);
  },
  //修改密码
  modifyPwd(params) {
    return axios.post(`/access/${modulename}/FRONTCOMMUSER020`, params);
  },
  //找回密码
  getBackPwd(params) {
    return axios.post(`/access/${modulename}/FRONTCOMMUSER030`, params);
  },
  //发送手机验证码
  sendPhoneCode(params) {
    return axios.post(`/access/${modulename}/FRONTCOMMAUTHCODE020`, params);
  },
  //发送邮箱验证码
  sendEmail(params) {
    return axios.post(`/access/${modulename}/FRONTCOMMAUTHCODE030`, params);
  },
  //验证码校验
  checkCode(params) {
    return axios.post(`/access/${modulename}/FRONTCOMMAUTHCODE040`, params);
  },
  //生成验证码
  generateCode(params) {
    return axios.post(`/access/${modulename}/FRONTCOMMCAPTHA010`, params);
  },
  //频道列表查询
  channelList(params) {
    return axios.post(`/access/${modulename}/FRONTCOMMCMS010`, params);
  },
  //栏目列表查询
  columnList(params) {
    return axios.post(`/access/${modulename}/FRONTCOMMCMS020`, params);
  },
  //生成验证码
  generateCode2(params) {
    return axios.post(`/access/${modulename}/FRONTCOMMAUTHCODE010`, params);
  },

  getIdentificationList() {
    return axios.post(`/access/${modulename}/FRONTCOMMAUTHCODE010`, params);
  },

  // 码表查询
  getCodeList(params) {
    return axios.post('/access/FRONT-COMM/FRONTCOMMCODE010', params);
  },

  // 字典查询
  getDictionaryList(params) {
    return axios.post('/access/FRONT-COMM/FRONTCOMMDICT010', params);
  },

  // 下载进度
  dowloadFileProgress(params) {
    return axios.post('/access/progress/FRONT-COMM/FRONTDEMO010 ', params);
  },

  //获取图形验证码
  getVerificationCode(params) {
    return axios.post('/access/ui/FRONT-COMM/do/FRONTCOMMSLIDE010', params);
  },

  //图形验证码距离验证
  checkVerificationCode(params) {
    return axios.post('/access/ui/FRONT-COMM/do/FRONTCOMMSLIDE0020', params);
  },
  //获取公钥
  getEncryptKey(params) {
    return axios.post('/access/ui/SN-COMM-FRONT/FRONTCOMMCRYPT010', params);
  },
  //加密
  encrypt(val) {
    let key = window.app.$store.state.encryptkey;
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(key);
    return encrypt.encrypt(val);
  },
  //获取验证码
  getcheckcode(params) {
    return axios.post('/access/ui/CASTS-FRONT/do/FRONTCOMMAUTHCODE020', params);
  },
  //校验验证码 并且 返回登陆凭证
  checkCode(params) {
    return axios.post('/access/ui/CASTS-FRONT/do/FRONTCOMMUSER031', params);
  },

  //登陆前 忘记密码
  forgotPass(params) {
    return axios.post('/access/ui/CASTS-FRONT/do/FRONTCOMMUSER032', params);
  },
  //excel模板下载
  downloadExcelModel(params) {
    return axios.post('/access/ui/CASTS-FRONT/FRONTCOMMIMPORT020', params);
  },
  //字典接口
  getDtInfo(params) {
    return axios.post('/access/ui/CASTS-FRONT/FRONTCOMMDICT010', params);
  },
  //获取风险预警 数量
  getRiskCount(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAERISKDATA060', params);
  },
  //我的任务数量
  getMyTaskCont(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEMYTASK110', params);
  },

  getUserTypesDataList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEOPTLOGS020', params);
  },

  // 操作记录日志 存档
  handleRecordData(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEOPTLOGS010', params);
  }
};

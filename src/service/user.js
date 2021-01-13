import axios from './axios';
import axiosReal from 'axios';
const config = require('@/p.config.js');
let userUrl = '/access/GTCPSP-FRONT/do';
if (config.apphead == '/front') {
  userUrl = '/do';
}
export default {
  logout(params) {
    return new Promise((resole, reject) => {
      axios.get('/access/ui/FRONT-COMM/do/FRONTCOMMLOGIN020').then(() => {
        window.localStorage.removeItem('RSESSIONIDCOOKIE');
        window.sessionStorage.removeItem('menuList');
        window.sessionStorage.removeItem('routerArr');
      });
      resole('退出成功');
    });
  },
  //获取用户登录信息
  getUserMessage() {
    return new Promise((resolve, reject) => {
      axiosReal({
        method: 'get',
        url: config.apphead + '/access/ui/FRONT-COMM/do/FRONTCOMMLOGIN040',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log("getUserMessage", res)
        // res.data = { "status": "success", "data": { "userInfo": "吴宇(U000000021)", "userCode": "U000000021", "userName": "吴宇", "loginName": "吴宇", "admin": true, "userCodes": { "USERCODE": "U000000021", "USERLIMBCODE": "B000000026", "USERGWCODE": "G0169" }, "userLimBcodename": "综合业务科室", "sessionValue": "D2C00A24AB51051E7ADDEDD03EB43733", "wadmin": 1 } }
        let { status } = res.data;
        if (status == 'success') {
          if (
            res &&
            res.data &&
            res.data.data &&
            res.data.data.sessionValue
          ) {
            let sessionValue = res.data.data.sessionValue;
            let loginName = res.data.data.userName;
            if (sessionValue != 'undefined') {
              window.localStorage.RSESSIONIDCOOKIE = sessionValue;
              window.localStorage.loginName = loginName;
              window.sessionStorage.lastSession = sessionValue;
              console.log("getUserMessageSuccess", true)
              resolve(res)
            }
          } else {
            reject()
          }
        } else {
          throw new Error(res.data.message || '抱歉请稍后再试');
        }
      });;
    })

  },
  //切换用户角色
  switchRoleType(role) {
    return axios.post(userUrl + '/GTCPSPLOGIN050', role);
  },

  login(user) {
    return new Promise((resolve, reject) => {
      axiosReal({
        method: 'post',
        url: config.apphead + '/access/ui/FRONT-COMM/do/FRONTCOMMLOGIN010',
        data: user,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.data.status === 'success') {
          let result = res.data.data;
          if (res.data && result) {
            console.log(res.data.data);
            let commit = window.app.$store.commit;
            commit('setRoleResult', res.data.data);
          } else {
            window.app.$router.push('/noRight');
          }
          resolve(res);
        } else {
          reject(res);
        }
      });
    });
  },
  getPublicKey() {
    return axiosReal({
      method: 'get',
      url: config.apphead + '/access/FRONT-COMM/FRONTCOMMCRYPT010',
      data: {}
    });
  },

  //获取机构列表
  getOrganList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEUSERMANAGE010', params);
  },

  //查询人员列表
  getPersonnelList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEUSERMANAGE050', params);
  },

  //添加人员
  addPersonnet(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEUSERMANAGE060', params);
  },

  // 删除人员
  delPersonnet(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEUSERMANAGE070', params);
  },

  // 编辑人员
  editPersonnet(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEUSERMANAGE080', params);
  },

  // 添加账号
  addAccount(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEACCMANAGE010', params);
  },

  //账号列表
  getAccountList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEACCMANAGE020', params);
  },

  //下载模板
  download(params) {
    return axios.post('/access/ui/CASTS-FRONT/FRONTCOMMIMPORT020', params);
  },

  //权限列表
  getPowerList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEROLE030', params);
  },

  //角色列表
  getRoleList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEROLE020', params);
  },

  //账号停启用
  accountStatusChange(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEACCMANAGE040', params);
  },

  //账号关联
  accountRelation(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEACCMANAGE030', params);
  },

  //账号权限关联
  accountPermissionRelation(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEACCMANAGE060', params);
  },

  //账号权限查看
  accountPermissionView(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEACCMANAGE050', params);
  },

  //重置密码
  resetPassword(params) {
    return axios.post('/access/ui/CASTS-FRONT/FRONTCOMMUSER050', params);
  },

  //修改密码
  changePassword(params) {
    return axios.post('/access/ui/CASTS-FRONT//do/FRONTCOMMUSER020', params);
  },

  //角色权限关联
  rolePermissionRelation(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEROLE040', params);
  },

  //角色权限查看
  rolePermissionView(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEROLE050', params);
  },

  //账号关联角色
  queryLinkRoleList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEACCMANAGE030', params);
  },
  //查询岗位用户分页信息
  queryGwUserInfoList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEROLE075', params);
  },
  //查询部门用户分页信息
  queryBmUserInfoList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEROLE070', params);
  },
  //添加角色
  saveRoleInfo(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEROLE010', params);
  },
  //添加岗位用户
  addGwUser(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEROLE060', params);
  },
  //岗位角色停用/启用接口
  setGwStopOrUsed(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEROLE080', params);
  },
  //查询账号信息
  queryAccountInfoList(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEACCMANAGE020', params);
  },
  //删除岗位用户
  deleteGwUser(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEROLE090', params);
  },
  //查看用户是否配置权限
  queryIsPower(params) {
    return axios.post('/access/ui/CASTS-FRONT/CASTSAEACCMANAGE070', params);
  },
};

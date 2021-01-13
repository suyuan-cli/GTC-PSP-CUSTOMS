import Vue from 'vue';
import Vuex from 'vuex';
import dailog from './modules/dailog';
import user from './modules/user';
import menu from './modules/menu';
import helpers from './modules/helpers';
import common from '@/service/common';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //登录的角色类
    roleType: window.localStorage.roleType || '',
    roleResult: JSON.parse(window.localStorage.roleResult || '{}'),
    userInfo: JSON.parse(window.sessionStorage.userInfo || '{}'),
    lang: window.localStorage.lang || 'zh',
    showload: false
  },
  mutations: {
    setLang: (state, lang) => {
      state.lang = lang;
      window.app.$i18n.locale = lang;
      window.localStorage.lang = lang;
    },
    showLoading(state) {
      state.showload = true;
    },
    hideLoading(state) {
      state.showload = false;
    },
    setRoleType(state, value) {
      window.localStorage.roleType = value;
      state.roleType = value;
    },
    setRoleResult(state, value) {
      console.log(value)
      window.localStorage.roleResult = JSON.stringify(value);
      state.roleResult = value;
    },
    setEncryptkey(state, value) {
      window.localStorage.encryptkey = value;
      state.encryptkey = value;
    },
    setUserInfo(state, value) {
      window.localStorage.userInfo = value;
      state.userInfo = value;
    },
  },
  actions: {
    getEncryptKey({ commit }) {
      common.getEncryptKey({ workspc: '' }).then(response => {
        if (response.data.status === 'success') {
          let temp = JSON.parse(response.data.data);
          commit('setEncryptkey', temp.publickey);
        } else {
          window.app.$message.error('暂时无法登录，请稍后再试');
          return;
        }
      });
    },
    getUserInfo({ commit }) {
      common.getUserInfo().then(response => {
        if (response.data.status === 'success'&&!response.data.message) {
          let temp = JSON.parse(response.data.data);
          commit('setUserInfo', temp);
        } else {
          // window.app.$message.error(response.data.message||'暂时无法获取用户信息，请稍后再试');
          commit('setUserInfo', null);
          return;
        }
      });
    }
  },
  modules: {
    dailog,
    user,
    menu,
    helpers
  }
});
export default store;

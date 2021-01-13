import axios from './axios';
import hc from '@/public-method/HhcJump.js';

export default {
  getMenu() {
    return new Promise((resolve, reject) => {
      if (window.sessionStorage.backendList) {
        resolve(JSON.parse(window.sessionStorage.backendList));
        return;
      }

      const { code, data } = { code: 1, data: [{ key: 1 }, { key: 2 }] };
      if (code) {
        window.sessionStorage.backendList = JSON.stringify(data);
        resolve(data);
      } else {
        resolve([]);
      }
    });
  },
  loadMenu() {
    return new Promise((resolve, reject) => {
      axios
        .post('/access/ui/CASTS-FRONT/FRONTCOMMMENU010', { menuModelId: 'CASTS-FRONT' })
        .then(result => {

          if (result.data) {
            if (result.data.code == "ACS119") {
              window.app.$message.error(
                ` 请重新登录 `
              );
              window.app.$store.dispatch('logoutStatic');
              if (!hc.initiateLogin()) {//如果是hc登录，跳转到第三方登录
                window.app.$router.push('/logins');
              }
            }
            else {
              let tdata = JSON.parse(result.data.data || '[]');
              resolve(tdata || []);
            }

          } else {
            reject([]);
          }
        }).catch(() => {
          window.app.$message.error(
            ` 请重新登录 `
          );
        });
    });
  }
};

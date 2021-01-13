import axios from './axios';
import config from '../p.config';
function setDateParams(params, dateKey, order = null) {
  if (params[dateKey]) {
    params[dateKey + 'fm'] = params[dateKey][0];
    params[dateKey + 'to'] = params[dateKey][1];
  }
  delete params[dateKey];
  if (order) {
    params.orderParam.orders.push({
      column: dateKey,
      direction: order
    });
  }
}
function parseData(data, resolve, reject) {
  if (data.data.status === 'success') {
    data.data.data = JSON.parse(data.data.data || '{}');
    resolve(data.data.data);
  } else {
    reject(data.data);
  }
}
/*------------------风险类别维护----------------*/
export function getRiskCategoryList(params = {}) {
  setDateParams(params, 'mtdate');
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAERISKTYPE010', params)
      .then(data => {
        parseData(data, resolve, reject);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}

export function addOrUpdateRiskType(params = {}) {
  let url = params.risktypeicode ? 'CASTSAERISKTYPE040' : 'CASTSAERISKTYPE030';
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/' + url, params)
      .then(data => {
        parseData(data, resolve, reject);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}

export function changeRiskStatus(risktypeicode, status) {
  let url = status ? 'CASTSAERISKTYPE050' : 'CASTSAERISKTYPE060';
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/' + url, { risktypeicode })
      .then(data => {
        parseData(data, resolve, reject);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}

export function removeRiskType(risktypeicode) {
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAERISKTYPE070', { risktypeicode })
      .then(data => {
        parseData(data, resolve, reject);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}

/*模板下载*/
export function downloadTemplate(code) {
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post(`/access/ui/CASTS-FRONT/FRONTCOMMIMPORT020`, {
        xlscode: code
      })
      .then(data => {
        let fileName = data.data.data.split('/').pop().split('?')[0];
        fileName = decodeURI(fileName);
        window.app.download(config.base_image_url + data.data.data);
        resolve(fileName);
      })
      .catch(response => {
        reject(response);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}

/*------------------风险类别维护-end------------*/

/*------------------风险识别规则设置------------------*/
export function getRiskSettingList(params = {}) {
  setDateParams(params, 'predate', 'desc');

  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAERISKRULES010', params)
      .then(data => {
        parseData(data, resolve, reject);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}

export function saveRiskSetting(params = {}) {
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAERISKRULES030', params)
      .then(data => {
        resolve(JSON.parse(data.data.data));
      })
      .catch(data => {
        reject(data);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}

/*分类定义字段树形查询*/
export function getDiscernfield(keyword = '') {
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAECATEGDEF010', { keyword })
      .then(data => {
        let filters = ['商品ID信息', '溯源信息来源', '固有属性'];
        let d = JSON.parse(data.data.data);
        resolve(d.filter(item => !filters.includes(item.title)));
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}
/*分类定义字段树形查询*/
export function getKnowledgeField(knowledgetype) {
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAEKNOWLEDGELIB090', { knowledgetype })
      .then(data => {
        resolve(JSON.parse(data.data.data));
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}

/*停启用*/
export function changeStatus(riskrulesicode, status) {
  let url = status === '70' ? 'CASTSAERISKRULES060' : 'CASTSAERISKRULES050';
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/' + url, { riskrulesicode })
      .then(data => {
        resolve(JSON.parse(data.data.data));
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}

/*详情*/
export function getRiskDetail(riskrulesicode) {
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAERISKRULES020', { riskrulesicode })
      .then(data => {
        resolve(JSON.parse(data.data.data));
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}
/*------------------风险识别规则设置-end--------------*/

/*------------------风险审核------------------*/
export function getRiskAuditList(params = {}) {
  setDateParams(params, 'warningdate');
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAERISKDATA010', params)
      .then(data => {
        parseData(data, resolve, reject);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}

export function riskDisposal(params = {}, load = true) {
  load && window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAERISKDATA030', params)
      .then(data => {
        parseData(data, resolve, reject);
      })
      .finally(() => {
        load && window.app.hideLoading();
      });
  });
}

export function riskDetail(riskdataicode) {
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAERISKDATA020', { riskdataicode })
      .then(data => {
        parseData(data, resolve, reject);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}

export function loadDiscernfieldsData(discernfields, portraitid) {
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAERISKDATA070', {
        discernfields,
        portraitid
      })
      .then(data => {
        parseData(data, resolve, reject);
      });
  });
}
/*------------------风险审核-end--------------*/

/*------------------溯源比对规则-start--------------*/

export function getComparisonSettingList(params = {}) {
  setDateParams(params, 'predate', 'desc');
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAERISKRULES080', params)
      .then(data => {
        parseData(data, resolve, reject);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}

export function saveComparisonSetting(params = {}) {
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAERISKRULES070', params)
      .then(data => {
        parseData(data, resolve, reject);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}
/*------------------溯源比对规则-end--------------*/

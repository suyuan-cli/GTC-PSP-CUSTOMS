import axios from './axios';
function setDateParams(params, dateKey) {
  if (params[dateKey]) {
    params[dateKey + 'fm'] = params[dateKey][0];
    params[dateKey + 'to'] = params[dateKey][1];
  }
  delete params[dateKey];
}
function parseData(data, resolve, reject) {
  if (data.data.status === 'success') {
    data.data.data = JSON.parse(data.data.data || '{}');
    resolve(data.data.data);
  } else {
    reject(data.data);
  }
}
/*------------------任务配置信息--------------------------*/
export function getTaskConfigList(params = {}) {
  setDateParams(params, 'predate');
  params.orderParam = {
    orders: [
      {
        column: 'modifydate',
        direction: 'desc'
      }
    ]
  };
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAETASKCONF010', params)
      .then(data => {
        parseData(data, resolve, reject);
      })
      .catch(err => {
        reject(err);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}

export function getTaskConfigDetail(rwconficode) {
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAETASKCONF070', { rwconficode })
      .then(data => {
        parseData(data, resolve, reject);
      });
  });
}

/*各类型设置提交的参数*/

function assignedHandler(params) {
  let { bcode, ucode } = params;
  bcode = bcode || '';
  ucode = ucode || '';
  let ucodeList = ucode.split(',');
  let addData = ucodeList.map(item => {
    let d = params.setUcodeList.find(temp => {
      return item === temp.ucode;
    });
    return {
      saveMode: d ? 1 : 2,
      rwconficode: params.rwconficode,
      rwconfseticode: d ? d.rwconfseticode : null,
      bcode,
      ucode: item
    };
  });
  let removeData = params.setUcodeList
    .filter(item => {
      return !ucodeList.includes(item.ucode);
    })
    .map(item => {
      return {
        saveMode: 4,
        rwconfseticode: item.rwconfseticode
      };
    });
  return {
    ...params,
    setUcodeList: addData.concat(removeData).filter(item => item.saveMode !== 1)
  };
}
let submitTaskKeys = [
  'saveMode',
  'taskcateg',
  'handlerstback',
  'newtaskremind',
  'riskwarnback',
  'rwconficode',
  'setUcodeList',
  'tasklevel',
  'timeout',
  'timeoutremind'
];
export function submitTask(params) {
  params = assignedHandler(params);
  window.app.showLoading();
  let form = {};
  submitTaskKeys.forEach(key => {
    form[key] = params[key];
  });
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAETASKCONF090', form)
      .then(data => {
        parseData(data, resolve, reject);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}

/*------------------任务配置信息-end-------------------------*/

/*------------------处置情况查询--------------------------*/
export function getDisposalSituationList(params = {}) {
  setDateParams(params, 'predate');
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAETASKMANAGE020', params)
      .then(data => {
        parseData(data, resolve, reject);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}

export function getJobCommand(worktaskicode) {
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAETASKMANAGE030', { worktaskicode })
      .then(data => {
        parseData(data, resolve, reject);
      });
  });
}

export function taskAssigned(params) {
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAETASKMANAGE050', params)
      .then(data => {
        parseData(data, resolve, reject);
      });
  });
}
/*------------------处置情况查询-end-------------------------*/
/*------------------任务概况-end-------------------------*/
export function getTaskInfo(params) {
  setDateParams(params, 'queryDate');
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAETASKMANAGE010', params)
      .then(data => {
        parseData(data, resolve, reject);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}
export function getRiskInfo(params) {
  setDateParams(params, 'queryDate');
  window.app.showLoading();
  return new Promise((resolve, reject) => {
    axios
      .post('/access/ui/CASTS-FRONT/CASTSAETASKMANAGE040', params)
      .then(data => {
        parseData(data, resolve, reject);
      })
      .finally(() => {
        window.app.hideLoading();
      });
  });
}
/*------------------任务概况-end-------------------------*/

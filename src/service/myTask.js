import axios from './axios';

export default {
  // 我的任务分类展示
  getTaskList(params) {
    return axios.post('access/ui/CASTS-FRONT/CASTSAEMYTASK010', params);
  },
  //我的任务保存
  saveTask(params) {
    return axios.post('access/ui/CASTS-FRONT/CASTSAEMYTASK080', params);
  },
  //我的任务提交
  submitTask(params) {
    return axios.post('access/ui/CASTS-FRONT/CASTSAEMYTASK040', params);
  },
  //我的任务详情
  getTaskDetail(params) {
    return axios.post('access/ui/CASTS-FRONT/CASTSAEMYTASK100', params);
  },
  //处置结果登记
  saveResult(params) {
    return axios.post('access/ui/CASTS-FRONT/CASTSAEMYTASK020', params);
  },
  //获取处置结果登记
  getResult(params) {
    return axios.post('access/ui/CASTS-FRONT/CASTSAEMYTASK030', params);
  },
  //我的任务详情页面通用查询
  getTaskDetailCom(params) {
    return axios.post('access/ui/CASTS-FRONT/CASTSAEMYTASK060', params);
  },
  //我的任务详情页面按钮查询
  getTaskButton(params) {
    return axios.post('access/ui/CASTS-FRONT/CASTSAEMYTASK070', params);
  },
  //我的任务数量
  getMyTaskCont(params) {
    return axios.post('access/ui/CASTS-FRONT/CASTSAEMYTASK110', params);
  }
};

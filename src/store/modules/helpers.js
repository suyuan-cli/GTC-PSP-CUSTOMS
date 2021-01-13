const state = {
  dialogVisible: false,
  traceQueryData: {}
};

const getter = {};

const mutations = {
  show(state) {
    state.dialogVisible = true;
  },
  hide(state) {
    state.dialogVisible = false;
  }
};

const actions = {
  showView({ commit }) {
    commit('show');
  },
  hideView({ commit }) {
    commit('hide');
  }
};

export default {
  // namespaced: true,
  state,
  getter,
  mutations,
  actions
};

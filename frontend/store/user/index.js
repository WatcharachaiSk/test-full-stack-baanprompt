import { baseURL } from "../../constants/base-url.config";

const state = {};
const mutations = {};
const actions = {
  createUser({ commit }, payload) {
    console.log("${state.baseURL} is ", baseURL);
    console.log("payload", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

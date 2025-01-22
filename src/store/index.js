import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFinderBarOpen: false
  },
  mutations: {
    toggleFinderBar(state) {
      state.isFinderBarOpen = !state.isFinderBarOpen;
    }
  },
  actions: {
    toggleFinderBar({ commit }) {
      commit('toggleFinderBar');
    }
  },
  getters: {
    isFinderBarOpen: state => state.isFinderBarOpen
  }
});
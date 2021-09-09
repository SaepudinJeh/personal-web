import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isNavActive : false
    }
  },
  mutations: {
    navActive (state) {
      state.isNavActive = !state.isNavActive
    }
  },
  actions: {

  }
});

export default store
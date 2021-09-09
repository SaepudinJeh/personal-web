import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isNavActive : false,
      isButtonMessage: false,
      isNotifMessage: true
    }
  },
  mutations: {
    navActive(state) {
      state.isNavActive = !state.isNavActive
    },
    isButtonMessage(state) {
      state.isButtonMessage = !state.isButtonMessage
    },
    isNotifMessage(state) {
      state.isNotifMessage = false
    }
  },
  actions: {

  }
});

export default store
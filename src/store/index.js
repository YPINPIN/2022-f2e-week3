import { createStore } from 'vuex'

export default createStore({
  state: {
    step: 0,
    maxStep: 6
  },
  getters: {},
  mutations: {
    onNextStep(state) {
      state.step++
    }
  },
  actions: {},
  modules: {}
})
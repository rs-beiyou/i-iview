export default {
  state: {
    isConsole: false
  },
  mutations: {
    setConsole (state, status) {
      state.isConsole = status
    }
  },
  actions: {
    handleConsole ({ commit }, status) {
      commit('setConsole', status)
    }
  }
}

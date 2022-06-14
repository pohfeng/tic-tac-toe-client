export default {
  namespaced: true,
  state: {
    isLoading: false
  },
  mutations: {
    SET_IS_LOADING(state, bool) {
      state.isLoading = bool
    }
  },
  actions: {
    setIsLoading({ commit }, bool) {
      commit('SET_IS_LOADING', bool)
    }
  }
}

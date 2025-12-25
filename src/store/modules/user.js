export default {
  namespaced: true,
  state () {
    return {
      userInfo: {
        token: '',
        userId: ''
      }
    }
  },
  mutations: {
    setUserInfo (state, newUserInfo) {
      state.userInfo = newUserInfo
    }
  }
}

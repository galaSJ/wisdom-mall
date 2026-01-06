import { getInfo, setInfo } from '@/utils/storage'

export default {
  namespaced: true,
  state () {
    return {
      // 用户权证信息
      userInfo: getInfo()
    }
  },
  mutations: {
    setUserInfo (state, newUserInfo) {
      state.userInfo = newUserInfo
      // 本地持久化存储
      setInfo(newUserInfo)
    }
  },
  actions: {
    logout (context) {
      // 重置vuex用户信息
      context.commit('setUserInfo', {})
      // 重置vuex购车信息
      // 跨模块调用
      context.commit('cart/setCartList', [], { root: true })
    }
  }
}

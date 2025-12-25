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
  }
}

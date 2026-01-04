import { getAddressList } from '@/api/address'

export default {
  namespaced: true,
  state () {
    return {
      // 收货地址列表
      addressList: []
    }
  },
  mutations: {
    setAddressList (state, newList) {
      state.addressList = newList
      console.log(newList)
    }
  },
  actions: {
    async fetchAddressList (context) {
      const { data: { list } } = await getAddressList()
      context.commit('setAddressList', list)
    }
  }
}

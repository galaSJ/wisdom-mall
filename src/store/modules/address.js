import { getAddressList, getDefaultAddressId, setDefaultAddressId } from '@/api/address'

export default {
  namespaced: true,
  state () {
    return {
      // 收货地址列表
      addressList: [],
      // 默认收货地址id
      defaultAddressId: null
    }
  },
  mutations: {
    // 设置收货地址列表
    setAddressList (state, newList) {
      state.addressList = newList
      // console.log(newList)
    },
    // 设置默认收货地址id
    setDefaultAddressId (state, id) {
      state.defaultAddressId = id
    }

  },
  actions: {
    // 请求收货地址列表
    async fetchAddressList (context) {
      const { data: { list } } = await getAddressList()
      context.commit('setAddressList', list)
    },
    // 设置默认收货地址
    async updateDefaultAddress (context, addressId) {
      await setDefaultAddressId(addressId)
      context.commit('setDefaultAddressId', addressId)
    },
    // 获取默认收货地址id
    async fetchDefaultAddrssId (context) {
      const { data: { defaultId } } = await getDefaultAddressId()
      context.commit('setDefaultAddressId', defaultId)
    }
  },
  getters: {
    // 排序收货地址,默认收货地址排第一
    sortList (state) {
      const target = state.addressList.find(item => item.address_id === state.defaultAddressId)
      if (!target) return state.addressList
      return [target, ...state.addressList.filter(item => item !== target)]
    }
  }
}

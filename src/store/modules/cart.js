import { getCartList } from '@/api/cart'

export default {
  namespaced: true,
  state () {
    return {
      // 购物车列表
      cartList: []
    }
  },
  mutations: {
    // 设置购物车列表
    setCartList (state, newList) {
      state.cartList = newList
    }
  },
  actions: {
    async fetchCartList (context) {
      const { data: { list } } = await getCartList()
      // 添加一个选中状态
      list.forEach(item => {
        // 默认全部选中
        item.isChecked = true
      })
      context.commit('setCartList', list)
      console.log(list)
    }
  }

}

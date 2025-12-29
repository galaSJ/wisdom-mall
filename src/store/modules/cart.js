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
    },
    // 切换购物车商品复选框状态
    toggleCheck (state, goodsId) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.isChecked = !goods.isChecked
    },
    // 全选框状态切换
    toggleAllCheck (state, flag) {
      state.cartList.forEach(item => { item.isChecked = flag })
    }
  },
  actions: {
    // 请求购物车数据
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
  },
  getters: {
    isToggleCheck (state) {
      return state.cartList.every(item => item.isChecked)
    }
  }

}

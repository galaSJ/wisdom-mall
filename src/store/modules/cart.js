import { getCartList, changCount } from '@/api/cart'

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
    },
    // 更新购物车商品数量
    changCount (state, { goodsNum, goodsId }) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.goods_num = goodsNum
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
    },
    // 更新购物车商品数量
    async changCountAction (context, { goodsId, goodsNum, goodsSkuId }) {
      // 本地更新
      context.commit('changCount', { goodsId, goodsNum })
      // 请求接口更新
      await changCount({ goodsId, goodsNum, goodsSkuId })
    }

  },
  getters: {
    // 商品全选
    isToggleCheck (state) {
      return state.cartList.every(item => item.isChecked)
    },
    // 商品选中列表
    selectGoodsList (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    // 购物车商品数量
    cartTotal (state) {
      return state.cartList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    // 购物车商品结算数量
    selectGoodsCount (state, getters) {
      return getters.selectGoodsList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    // 商品合计价格
    selectGoodsPrice (state, getters) {
      return getters.selectGoodsList.reduce((sum, item) => sum + item.goods_num * item.goods.goods_price_min, 0).toFixed(2)
    }

  }

}

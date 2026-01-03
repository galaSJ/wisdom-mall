// 订单结算相关的

import request from '@/utils/request'
/**
 * 获取订单结算确认信息
 * * @param {'cart'|'buyNow'} mode - 结算模式：'cart' 代表从购物车结算，'buyNow' 代表立即购买
 * @param {Object} params - 动态查询参数
 * @param {string} [params.cartIds] - 当 mode 为 'cart' 时，必传此字段 (多个ID逗号隔开)
 * @param {string} [params.goodsId] - 当 mode 为 'buyNow' 时，必传此字段
 * @param {number} [params.goodsNum] - 当 mode 为 'buyNow' 时，必传此字段
 * @param {string} [params.goodsSkuId] - 当 mode 为 'buyNow' 时，必传此字段
 * * @returns {Promise<any>} 返回包含结算页详情（商品清单、运费、优惠券等）的 Promise 对象
 * * @example
 * // 场景1：从购物车结算
 * checkOrder('cart', { cartIds: '10001,10002' })
 * * // 场景2：立即购买
 * checkOrder('buyNow', { goodsId: 121, goodsNum: 1, goodsSkuId: 500 })
 */
export const checkOrder = (mode, params) => {
  return request.get('/checkout/order', {
    params: {
      mode,
      delivery: 10,
      shopId: 0,
      couponId: 0,
      isUsePoints: 0,
      ...params
    }
  })
}

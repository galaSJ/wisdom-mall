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

/**
 * 提交并创建订单
 * * @param {'cart'|'buyNow'} mode - 下单模式：'cart' 购物车下单，'buyNow' 立即购买
 * @param {Object} params - 订单提交参数
 * @param {string} [params.cartIds] - 模式为 'cart' 时必传，购物车记录 ID (多个逗号隔开)
 * @param {string} [params.goodsId] - 模式为 'buyNow' 时必传，商品 ID
 * @param {number} [params.goodsNum] - 模式为 'buyNow' 时必传，购买数量
 * @param {string} [params.goodsSkuId] - 模式为 'buyNow' 时必传，规格 ID
 * @param {string} [params.remark] - 订单买家留言
 * * @returns {Promise<any>} 返回包含订单 ID (orderId) 和支付相关信息的 Promise 对象
 * * @example
 * // 购物车下单示例
 * submitOrder('cart', { cartIds: '771,772', remark: '请尽快发货' })
 */
export const submitOrder = (mode, params) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: '10', // 物流配送方式 10配送 20自提
    couponId: '0', // 优惠券id
    isUsePoints: 0, // 是否使用积分
    payType: 10, // 支付余额
    ...params
  })
}

/**
 * 获取我的订单列表
 * * @param {'all'|'payment'|'delivery'|'received'|'comment'} dataType - 订单状态类型：
 * - 'all': 全部订单
 * - 'payment': 待付款
 * - 'delivery': 待发货
 * - 'received': 待收货
 * - 'comment': 待评价
 * @param {number} page - 当前查询的页码
 * @returns {Promise<any>} 返回包含订单列表、分页信息（total, last_page）的 Promise 对象
 * * @example
 * // 获取第一页待付款订单
 * getMyOrderList('payment', 1)
 */
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}

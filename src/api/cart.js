// 购物车相关
import request from '@/utils/request'

/**
 * 添加商品到购物车
 * * @param {string|number} goodsId - 商品 ID
 * @param {number} goodsNum - 添加的数量
 * @param {string|number} goodsSkuId - 商品规格 ID (SKU ID)
 * @returns {Promise<any>} 返回包含操作结果的 Promise 对象
 * * @example
 * // 将 ID 为 1001，规格为 500 的商品添加 2 件到购物车
 * addCart(1001, 2, 500)
 */
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

/**
 * 获取购物车列表数据
 * * @returns {Promise<any>} 返回包含购物车商品数组及汇总信息（如总价、总数）的 Promise 对象
 */
export const getCartList = () => {
  return request.get('/cart/list')
}

/**
 * 更新购物车商品数量
 * * @param {Object} updateGoodsObj - 更新参数对象
 * @param {string|number} updateGoodsObj.goodsId - 商品 ID
 * @param {number} updateGoodsObj.goodsNum - 更新后的商品数量
 * @param {string|number} updateGoodsObj.goodsSkuId - 商品规格 ID
 * @returns {Promise<any>} 返回包含操作结果的 Promise 对象
 * * @example
 * changCount({
 * goodsId: 1001,
 * goodsNum: 5,
 * goodsSkuId: 500
 * })
 */
export const changCount = (updateGoodsObj) => {
  return request.post('/cart/update', {
    ...updateGoodsObj
  })
}

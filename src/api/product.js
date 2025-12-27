// 商品相关的api

import request from '@/utils/request'

/**
 * 获取商品列表数据
 * * @param {Object} obj - 查询参数对象
 * @param {string|number} [obj.categoryId] - 分类 ID
 * @param {string} [obj.goodsName] - 商品名称（搜索关键字）
 * @param {number} [obj.page=1] - 当前页码，默认为 1
 * @param {string} [obj.sortType='all'] - all-按综合搜索(默认)，sales-按销量搜索，price-按价格搜索
 * @param {string|number} [obj.sortPrice='0'] - 0-价格从低到高， 1-价格从高到低
 * * @returns {Promise<any>} 返回包含商品列表数据的 Promise 对象
 * * @example
 * getProduct({ categoryId: 1001, page: 2 })
 */
export const getProduct = (obj) => {
  const { categoryId, goodsName, page, sortType, sortPrice } = obj
  return request.get('/goods/list', {
    params: {
      categoryId,
      goodsName,
      page: page || 1,
      sortType: sortType || 'all',
      sortPrice: sortPrice || '0'
    }
  })
}

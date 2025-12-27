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

/**
 * 获取商品详情
 * * @param {string|number} goodsId - 商品唯一标识 ID (必传)
 * @returns {Promise<any>} 返回包含商品详细信息的 Promise 对象
 * * @example
 * const detail = await getProductDetail('10001');
 */
export const getProductDetail = (goodsId) => {
  return request.get('/goods/detail', {
    params: {
      goodsId
    }
  })
}

/**
 * 获取商品评价列表
 * * @param {string|number} goodsId - 商品 ID
 * @param {number} [limit=2] - 限制显示的评价条数，默认为 2 条
 * @returns {Promise<any>} 返回包含评价列表数据的 Promise 对象
 * * @example
 * // 获取商品 ID 为 1001 的前 10 条评价
 * getComments(1001, 10)
 */
export const getComments = (goodsId, limit) => {
  return request.get('/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}

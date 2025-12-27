// 商品分类相关的api

import request from '@/utils/request'

/**
 * 获取全部分类列表数据
 * * @description 该接口用于获取商品分类的树形结构或列表，通常用于侧边栏导航或分类选择器。
 * @returns {Promise<Object>} 返回响应数据对象
 * @example
 * const res = await getCategoryData();
 * console.log(res.list);
 */
export const getCategoryData = () => {
  return request.get('/category/list')
}

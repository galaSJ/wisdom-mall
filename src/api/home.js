// 主页数据相关

import request from '@/utils/request'

/**
 * 请求首页数据
 * @param {string} pageId 页面id 默认为0
 * @returns {Promise<Axios.axiosResponse>} 响应结果
 */
export const getHomeData = (pageId) => {
  return request.get('/page/detail', {
    params: {
      pageId: pageId || '0'
    }
  })
}

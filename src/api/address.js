// 地址相关
import request from '@/utils/request'

/**
 * 获取收货地址列表
 * * @description 获取当前登录用户保存的所有收货地址。
 * @returns {Promise<any>} 返回包含地址列表数组的 Promise 对象
 */
export const getAddressList = () => {
  return request.get('/address/list')
}

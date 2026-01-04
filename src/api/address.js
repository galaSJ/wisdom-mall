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

/**
 * 设置默认收货地址
 * * @param {string|number} addressId - 需要设为默认的地址唯一标识 ID
 * @returns {Promise<any>} 返回包含操作成功状态的 Promise 对象
 * * @example
 * await setDefaultAddressId(10056);
 */
export const setDefaultAddressId = (addressId) => {
  return request.post('/address/setDefault', {
    addressId
  })
}

/**
 * 获取当前用户的默认地址 ID
 * * @description 通常用于结算页面初始化时，自动选中用户预设的常用地址。
 * @returns {Promise<any>} 返回包含默认地址 ID 的 Promise 对象
 * * @example
 * const res = await getDefaultAddressId();
 * console.log(res.defaultId);
 */
export const getDefaultAddressId = () => {
  return request.get('/address/defaultId')
}

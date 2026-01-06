// 用户信息相关
import request from '@/utils/request'

/**
 * 获取当前登录用户的详细信息
 * @description 获取用户的个人资料、账户余额、积分以及关联的手机号等。
 * @returns {Promise<any>} 返回包含用户详细信息的 Promise 对象
 * @example
 * const { data } = await getUserInfoDetail();
 * console.log(data.nickName, data.balance);
 */
export const getUserInfoDetail = () => {
  return request.get('/user/info')
}

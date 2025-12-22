// 登录相关的api
import request from '@/utils/request'

/**
 * 获取图形验证码
 * @returns {Promise} 响应结果
 */
export const getPicCode = () => {
  return request.get('/captcha/image')
}

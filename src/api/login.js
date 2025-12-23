// 登录相关的api
import request from '@/utils/request'

/**
 * 获取图形验证码
 * @returns {Promise} 响应结果
 */
export const getPicCode = () => {
  return request.get('/captcha/image')
}

/**
 * 获取短信验证码
 * @param {string} captchaCode 图形验证码
 * @param {string} captchaKey 图形验证码key
 * @param {string} mobile 手机号码
 * @returns {Promise<axios.AxiosResponse>} 响应结果
 */
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    captchaCode,
    captchaKey,
    mobile
  })
}

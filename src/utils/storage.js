// 本地持久化存储

const INFO_KEY = 'wisdom_mall_info'

/**
 * 获取本地用户信息
 * @returns {object | null} 用户信息对象
 */
export const getInfo = () => {
  const defaultUserInfo = { token: '', userId: '' }
  const result = localStorage.getItem(INFO_KEY)
  // 本地没有返回一个空信息
  return result ? JSON.parse(result) : defaultUserInfo
}

/**
 * 设置本地用户信息对象
 * @param {object} info 用户信息对象
 */
export const setInfo = (info) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(info))
}

/**
 * 删除本地用户信息
 */
export const delInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

// 搜索历史
const SEARCH_HISTORY_KEY = 'wisdom_mall_serach_history'

/**
 * 获取本地搜索历史列表
 * @returns {Array} 搜索历史列表
 */
export const getSearchHistory = () => {
  const result = localStorage.getItem(SEARCH_HISTORY_KEY)
  return result ? JSON.parse(result) : []
}

/**
 * 更新本地搜索历史列表
 * @param {Array} arr 搜索历史列表
 */
export const setSearchHistory = (arr) => {
  localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(arr))
}

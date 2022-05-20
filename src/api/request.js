import axios from 'axios'

const DEFAULT_CACHE_EXPIRY_TIME = 3000

const CONFIG = {
  baseURL: import.meta.env.VITE_APP_API_PROXY === 'true' ? '/api/' : import.meta.env.VITE_APP_API_URL,
}

const instance = axios.create(CONFIG)

instance.interceptors.request.use(
  config => {
    // before request is sent
    const token = localStorage.getItem('userToken')
    if (token) config.headers.Authorization = `Bearer ${JSON.parse(token)[0]}`
    else return Promise.reject(false)

    return config
  },
  error => {
    // request error
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  async response => {
    // Do something with response data
    const RESPONSE_SUCCESS = response?.data?.Status?.Code === '0'

    if (RESPONSE_SUCCESS) return Promise.resolve(response.data)

    const rejectObj = {
      Code: response?.data?.Status?.Code ?? '',
      Message: response?.data?.Status?.Message ?? '',
      Data: {
        ...response?.data?.Data,
        // 不屬於Data的部分 但登入流程可能用到
        access_token: response?.data?.access_token,
        refresh_token: response?.data?.refresh_token,
      },
    }
    return Promise.reject(rejectObj)
  },
  error => {
    // 處理 timeout
    if (error && error.stack.indexOf('timeout') > -1) {
      return Promise.reject({
        Code: 'timeout',
      })
    }
    if (error.response) {
      // 處理 HTTP Status Code
      switch (error.response.status) {
        // 若不需處理 則reject Code前綴為http-
        default:
          return Promise.reject({
            Code: `http-${error.response.status}`,
          })
      }
    }
    // 網路問題例如斷線
    if (!window.navigator.onLine) {
      // TODO: 這邊需要設計斷線的錯誤
      return
    }
    return Promise.reject(error)
  },
)

/**
 * @param {string} method http的request methods
 * @param {string} url 同axios的url
 * @param {object} data axios收的params或data(依method決定)
 * @param {number} timeout(optional) 同axios config中的timeout
 * @param {number} noCache(optional) method為get 且傳入true時 不使用既有的快取
 */
export default async function ({
  method = '',
  url = '',
  data,
  timeout,
  noCache,
}) {
  const config = {
    timeout,
    noCache,
  }
  method = method.toLowerCase()

  switch (method) {
    case 'get':
      return instance.get(url, { params: data }, config)
    case 'post':
      return instance.post(url, data, config)
    case 'delete':
      config.params = data
      return instance.delete(url, config)
    case 'put':
      return instance.put(url, data, config)
    case 'patch':
      return instance.patch(url, data, config)
    default:
      // TODO: 這邊設計未知method的錯誤
      return Promise.reject()
  }
}

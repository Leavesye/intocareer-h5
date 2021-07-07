import Vue from 'vue'
import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'https://m.watabe-wedding.com.cn/api',
  timeout: 60 * 1000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // console.log(process.env.baseURL, 'llll')
    config.headers['Content-Type'] = 'application/json'
    // // do something before request is sent
    // const token = getToken()
    // if (token) {
    //   config.headers['Authorization'] = token
    // }
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    if (!res.result) {
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    // token不合法或者失效
    if (error.message.includes('403')) {
      // to re-login
      return false
    }
    return Promise.reject(error)
  }
)
Vue.prototype.$request = service
export default service

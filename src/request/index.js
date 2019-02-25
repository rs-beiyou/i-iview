import axios from 'axios'
import packinfo from '../../package.json'
import qs from 'qs'

let request = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? packinfo.server : '',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  withCredentials: true
})

request.interceptors.request.use(config => {
  Object.assign(config, {
    data: qs.stringify(config.data)
  })
  return config
}, error => {
  return Promise.reject(error)
})

request.interceptors.response.use(response => {
  if (response.config.url.indexOf('http') === 0) {
    return response.data
  }
  let res = response.data
  if (res.success) {
    return res.body
  } else {
    // Notice.error({
    //   title: '请求出错',
    //   desc: res.msg || '服务器出现错误，请稍后重试'
    // })
    return Promise.reject(res)
  }
}, error => {
  if (!error.response) {
    // Notice.error({
    //   title: '响应超时',
    //   desc: '服务器响应超时，请稍后重试'
    // })
  } else {
    // Notice.error({
    //   title: '请求出错',
    //   desc: '服务器出现错误，请稍后重试'
    // })
  }
  return Promise.reject(error)
})

export default request

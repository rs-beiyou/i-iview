import axios from 'axios'
import packinfo from '../../package.json'

let instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? packinfo.server : '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default instance

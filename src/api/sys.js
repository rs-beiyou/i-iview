import request from '@/request'

export const getBrand = () => {
  return request({
    url: '/getBrand',
    method: 'post'
  })
}

export const getSeries = () => {
  return request({
    url: '/getSeries',
    method: 'post'
  })
}

export const getPrice = () => {
  return request({
    url: '/getPrice',
    method: 'post'
  })
}

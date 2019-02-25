import request from '@/request'

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return request({
    url: '/login',
    data,
    method: 'post'
  })
}

export const logout = () => {
  return request({
    url: '/logout',
    method: 'post'
  })
}

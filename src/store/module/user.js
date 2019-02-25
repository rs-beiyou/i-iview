import Storage from '@/storage'
import { login, logout } from '@/api/user'

export default {
  state: {
    userId: Storage.get('userId'),
    username: Storage.get('username')
  },
  mutations: {
    setUserInfo (state, user) {
      state.userId = user ? user.id : ''
      state.username = user ? user.username : ''
      Storage.set('userId', user ? user.id : '')
      Storage.set('username', user ? user.username : '')
    }
  },
  actions: {
    handleLogin ({ commit }, { username, password }) {
      username = username.trim()
      return new Promise((resolve, reject) => {
        login({
          username,
          password
        })
          .then(res => {
            Storage.set('SESSIONID', res.JSESSIONID)
            commit('setUserInfo', res.user)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    handleLogout ({ commit }) {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            Storage.remove('SESSIONID')
            commit('setUserInfo', null)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}

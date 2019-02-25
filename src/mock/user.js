import qs from 'qs'

const USER_MAP = {
  super_admin: {
    userName: 'super_admin',
    userId: '1',
    token: 'super_admin',
    avator: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
  },
  admin: {
    userName: 'admin',
    userId: '2',
    token: 'admin',
    avator: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
  }
}

export const login = req => {
  const data = qs.parse(req.body)
  const userArray = Object.keys(USER_MAP)
  if (userArray.includes(data.userName)) {
    return {
      success: true,
      msg: '登陆成功',
      body: USER_MAP[data.userName]
    }
  } else {
    return {
      success: false,
      msg: '账号或密码有误'
    }
  }
}

export const logout = req => {
  return {
    success: true,
    msg: '退出成功'
  }
}

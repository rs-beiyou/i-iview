function initSysDdResponse (arr) {
  let list = []
  arr.forEach((element, index) => {
    list.push({
      key: element,
      value: index > 0 ? String(index) : ''
    })
  })
  return {
    success: true,
    body: list
  }
}

const BRAND = ['不限', '奔驰', '奥迪', '大众', '别克', '宝马', '比亚迪', '福特', '现代', '吉利', '马自达', '雪弗兰', '起亚', '丰田', '标致', '日产', '本田', '东风风行', '斯科达', '长安']
const SERIES = ['不限', '福克斯', '宝马5', '秦', '克鲁兹', '宝马3', '君威', '凯悦', '奥迪A4', '奥迪A6', '马自达6']
const PRICE = ['不限', '3万以下', '3-5万', '5-8万', '8-10万', '10-15万', '15-20万', '20-30万', '30万以上']

export const getBrand = req => {
  return initSysDdResponse(BRAND)
}

export const getSeries = req => {
  return initSysDdResponse(SERIES)
}

export const getPrice = req => {
  return initSysDdResponse(PRICE)
}

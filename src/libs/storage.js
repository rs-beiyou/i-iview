const packageInfo = require('../../package.json')

class Storage {
  constructor () {
    this.root = packageInfo.name
    this.storage = window.localStorage
  }
  set (key, value) {
    if (!this.storage[this.root]) {
      this.storage[this.root] = '{}'
    }
    let storage = JSON.parse(this.storage[this.root])
    storage[key] = value
    this.storage[this.root] = JSON.stringify(storage)
  }
  get (key) {
    if (!this.storage[this.root]) {
      this.storage[this.root] = '{}'
    }
    let storage = JSON.parse(this.storage[this.root])
    return storage[key]
  }
  remove (key) {
    if (!this.storage[this.root]) {
      return
    }
    let storage = JSON.parse(this.storage[this.root])
    storage && delete storage[key]
    this.storage[this.root] = JSON.stringify(storage)
  }
}
let storage = new Storage()

export default storage

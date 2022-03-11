
const Store = {
  session: {
    get: function (key) {
      return sessionStorage.getItem(key) ? sessionStorage.getItem(key) : ''
    },
    set: function (key, value) {
      sessionStorage.setItem(key, value)
    },
    delete: function () {
      sessionStorage.clear()
    }
  },
  local: {
    get: function (key) {
      return localStorage.getItem(key) ? localStorage.getItem(key) : ''
    },
    set: function (key, value) {
      localStorage.setItem(key, value)
    },
    delete: function () {
      localStorage.clear()
    }
  }
}

export default Store

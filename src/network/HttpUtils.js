import axios from 'axios'

let defaultData = {
  uid: '',
  token: '',
  timestamp: ''
}

export function setToken(data) {
  defaultData = {
    ...defaultData,
    ...data
  }
}

// let baseUrl = 'http://localhost:3002'
// let baseUrl = 'http://172.20.10.4:3002'
let baseUrl = 'https://2life.api.ursb.me'

axios.defaults.timeout = 20000

export default class HttpUtils {

  static get(url, data = {}) {
    url = baseUrl + url
    data = {
      ...defaultData,
      ...data
    }
    return axios.get(url, {params: data}).then(response => response.data)
  }

  static post(url, data) {
    url = baseUrl + url

    data = {
      ...defaultData,
      ...data
    }
    return axios.post(url, data)
      .then(response => response.data)
      .catch(error => console.dir(error))
  }
}

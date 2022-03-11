// 封装axios
import axios from 'axios'
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
const requsets = axios.create({
  // 配置对象
  baseURL: '/api',
  timeout: 5000
})
// 请求拦截器
requsets.interceptors.request.use((config) => {
  nprogress.start()
  return config
})

// 响应拦截器
requsets.interceptors.response.use((res) => {
  // 进度条结束
  nprogress.done()
  return res.data
}, (error) => {
  return Promise.reject(new Error(`'faile:'${error}`))
})

export default requsets

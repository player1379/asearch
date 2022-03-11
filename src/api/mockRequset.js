// 封装axios
import axios from 'axios'
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
const requsets = axios.create({
  // 配置对象
  baseURL: '/mock',
  timeout: 5000
})
// 请求拦截器

requsets.interceptors.request.use((config) => {
  // config:里面包含headers
  // 进度条开始
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

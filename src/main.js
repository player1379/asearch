// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/mock/mockServe'
import Search from '@/components/Search.vue'

// 因为是核心功能组件所以注册为全局组件
Vue.component(Search.name, Search)

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  beforeCreate () {
    // $bus
    Vue.prototype.$bus = this
  },
  router,
  components: { App },
  template: '<App/>'
})

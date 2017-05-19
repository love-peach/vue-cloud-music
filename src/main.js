// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 加载 store
import store from './store/store'

// 加载 muse-ui 基础样式
import 'muse-ui/dist/muse-ui.css'
// import 'muse/styles/base.less'

import MuseUI from 'muse-ui'

// 加载 normalize common 样式
// import '@/style/normalize.css'
import '@/style/common.less'

// 加载适配方案
import flexAble from './common/rem'
flexAble();

Vue.config.productionTip = false

Vue.use(MuseUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

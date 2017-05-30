// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// 加载 store
import store from './store/store'

// 原型添加 moment 日期处理插件
// import moment from 'moment'
// Vue.prototype.$moment = moment;

// 全局加载 Toast 组件
import Toast from './components/toast'
Vue.prototype.$toast = Toast;

import '@/style/common.less'

// 加载适配方案
import flexAble from './common/rem'
flexAble();

window.onresize=function(){
    flexAble();
}

Vue.config.productionTip = false

require('./mock/index')


Waves.displayEffect();

var config = {
    // How long Waves effect duration
    // when it's clicked (in milliseconds)
    duration: 500,

    // Delay showing Waves effect on touch
    // and hide the effect if user scrolls
    // (0 to disable delay) (in milliseconds)
    delay: 200
};

Waves.init(config);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})

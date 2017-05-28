// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// 加载 store
import store from './store/store'

// 全局加载 Toast 组件
import Toast from './components/toast'
Vue.prototype.$toast = Toast;

// 加载 muse-ui 基础样式
import 'muse-ui/dist/muse-ui.css'
// import 'muse/styles/base.less'

import MuseUI from 'muse-ui'

import '@/style/common.less'

// 加载适配方案
import flexAble from './common/rem'
flexAble();

window.onresize=function(){
    flexAble();
}

Vue.config.productionTip = false

Vue.use(MuseUI)

require('./mock/index')

import * as promiseAjax from './common/promise-ajax'
import mockUrls from './mock/mock-urls';
promiseAjax.init({
    setOptions: (instance) => {
        instance.defaults.baseURL = 'http://192.169.0.123/';
    },
    onShowErrorTip: (err, errorTip) => {
        if (errorTip !== false) {
            // handleErrorMessage(err);
            console.log(errorTip);
        }
    },
    onShowSuccessTip: (response, successTip) => {
        if (successTip !== false) {
            // message.success(successTip, 3);
            console.log(successTip)
        }
    },
    isMock: (url /* url, data, method, options */) => {
        return Object.keys(mockUrls).find(key => mockUrls[key] === url);
        // if (mockUrls.indexOf(url) > -1) return true;
        return false;
        // return url.startsWith('/mock');
    },
});

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

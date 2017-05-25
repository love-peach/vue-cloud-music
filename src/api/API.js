import axios from 'axios'

// 由于使用的form-data传数据所以要格式化
import qs from 'qs'

// 自定义方法，处理get请求，拼接参数
import {mosaicUrl} from './tool';

const instance = axios.create();

// instance.defaults.baseURL = 'http://music.163.com/';
instance.defaults.timeout = 5000;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

instance.defaults.transformRequest = [
    function(data) {
        data = qs.stringify(data);
        return data;
    }
];

// Add a request interceptor
instance.interceptors.request.use(cfg => {
    // Do something before request is sent
    console.log('请求之前该做的事');
    return cfg;
}, error => {
    // Do something with request error
    console.log('请求之前出错该做的事');
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(response => {
    // Do something with response data
    console.log('请求完成该做的事');
    return response;
}, error => {
    // Do something with response error
    console.log('请求完成出错该做的事');

    return Promise.reject(error);
});

export function fetch(url, data, method = 'get', options = {}) {
    let cancel;
    const CancelToken = axios.CancelToken;
    const isGet = method === 'get';
    if (isGet) {
        url = mosaicUrl(url, data);
    }
    const fetchPromise = new Promise((resolve, reject) => {
        instance({
            method,
            url,
            data,
            cancelToken: new CancelToken(c => cancel = c),
            ...options,
        }).then(response => {
            resolve(response.data.result || response.data || response, response.data);
        }).catch((error) => {
            reject(error);

        })
    });
    fetchPromise.cancel = function () {
        cancel({
            canceled: true,
        });
    };
    return fetchPromise;
}
export default {
    get(url, params, options) {
        return fetch(url, params, 'get', options);
    },
    post(url, params, options) {
        return fetch(url, params, 'post', options);
    },
    put(url, params, options) {
        return fetch(url, params, 'put', options);
    },
    patch(url, params, options) {
        return fetch(url, params, 'patch', options);
    },
    del(url, params, options) {
        return fetch(url, params, 'delete', options);
    },
}

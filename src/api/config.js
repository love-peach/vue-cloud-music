import Qs from 'qs'
export default{
    url: '/route',
    baseURL: 'http://music.163.com/api',
    method: 'POST',

    // `transformRequest`选项允许我们在请求发送到服务器之前对请求的数据做出一些改动
    // 该选项只适用于以下请求方式：`put/post/patch`
    // 数组里面的最后一个函数必须返回一个字符串、-一个`ArrayBuffer`或者`Stream`
    transformRequest: [function (data) {
        // 为了避免qs格式化时对内层对象的格式化先把内层的对象转为
        data.CustData = JSON.stringify(data.CustData);
        // 由于使用的form-data传数据所以要格式化
        data = Qs.stringify(data);
        return data;
    }],

    // `transformResponse`选项允许我们在数据传送到`then/catch`方法之前对数据进行改动
    transformResponse: [function (data) {
        return data;
    }],

    // `headers`选项是需要被发送的自定义请求头信息
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Headers":"Authorization,Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Origin": "http://localhost:8080",
        'referer': 'http://music.163.com/'
    },

    // `params`选项是要随请求一起发送的请求参数----一般链接在URL后面
    // 他的类型必须是一个纯对象或者是URLSearchParams对象
    params: {},

    // `paramsSerializer`是一个可选的函数，起作用是让参数（params）序列化
    // 例如(https://www.npmjs.com/package/qs,http://api.jquery.com/jquery.param)
    paramsSerializer: function (params) {
        return Qs.stringify(params)
    },

    data: {
        name: '123'
    },

    // `timeout`选项定义了请求发出的延迟毫秒数
    //如果请求花费的时间超过延迟的时间，那么请求会被终止
    timeout: 5000,

    // `withCredentails`选项表明了是否是跨域请求 默认false
    withCredentials: true,

    // 返回数据的格式
    // 其可选项是arraybuffer,blob,document,json,text,stream
    responseType: 'json', // default

    onUploadProgress: function (progressEvent) {
        // Do whatever you want with the native progress event
    },
    onDownloadProgress: function (progressEvent) {
        // Do whatever you want with the native progress event
    },
    maxContentLength: 2000,

    // `validateStatus`定义了是否根据http相应状态码，来resolve或者reject promise
    //如果`validateStatus`返回true(或者设置为`null`或者`undefined`),那么promise的状态将会是resolved,否则其状态就是rejected
    validateStatus: function (status) {
        return status >= 200 && status < 300; // default
    },

    // `maxRedirects`定义了在nodejs中重定向的最大数量
    maxRedirects: 5, // default
}

# vue-cloud-music

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# TODOLIST

- 规范文件目录组织.
- 路由.处理后退,重定向,权限等问题.
- mock数据.处理请求拦截数据.
- vuex.使用范本
- iconfont.字体图标
- 过度动画.transfrom
- 引导页
- 播放音乐api
- less or sass 变量 换肤功能
- 适配方案
- 动态给页面设置标题
- 文档记录.开发过程中遇到的坑

## 目录结构

```
.
├── README.md---------------------------------项目说明
├── build-------------------------------------构建配置
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config------------------------------------环境配置
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html--------------------------------首页
├── package.json------------------------------项目依赖包
├── src---------------------------------------源代码
│   ├── App.vue-------------------------------主文件
│   ├── api-----------------------------------后端接口
│   ├── assets--------------------------------通用的资源
│   ├── common--------------------------------通用的js
│   ├── components----------------------------公用组件
│   ├── filter--------------------------------过滤器
│   ├── main.js-------------------------------入口文件
│   ├── mock----------------------------------mock模拟数据
│   ├── router--------------------------------路由
│   ├── store---------------------------------vuex store
│   ├── style---------------------------------公用样式
│   └── view----------------------------------页面
└── static------------------------------------静态资源
```




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
- gh-page 项目预览页面

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


## 规范

## 添加字体图标

## 动态添加组价
component 组件，由vue提供，具体文档可看这里
[动态组件](https://cn.vuejs.org/v2/guide/components.html#动态组件)

## 挂载全局组件

这里说的全局组件与不同组件引入方式不同，或者说调用方式不一样。
我们平常写一个组件，在 .vue 中的引入方式为：

```html
<template>
    <some-component>...</some-component>
</template>
```

有时候，我们需要像 `window.alert('xxx')` 一样调用。
本项目中有个例子，把 mint-ui 中的 Toast 给挂载到全局上了：

main.js
```js
import Toast from './components/toast';
Vue.prototype.$toast = Toast;
```

这样，就可以像这样调用了

```
this.$toast('操作成功');
```

tips: 后来我发现，其实没这么麻烦。mint-ui 中所有 JS 组件均有单独的仓库，
因此，可以 通过引入 npm 包，的形式使用。本项目中也有相关的例子。


## 网易云音乐 NodeJS 版 API
为了尽可能的模仿云音乐，最好是能调用官方的API。
[网易云音乐 NodeJS 版 API](https://binaryify.github.io/NeteaseCloudMusicApi/#/)，跨站请求伪造 (CSRF), 伪造请求头,调用官方 API。

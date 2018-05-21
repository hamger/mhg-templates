# vue-template
> A Vue.js project tempalte

## Construction
```
.
├── package.json  --------------------- 项目配置
├── README.md  ------------------------ 说明文件
├── build  ---------------------------- 构建代码文件
├── config  --------------------------- 构建配置文件
├── index.html  ----------------------- 入口页面
└── src  ------------------------------ 源码目录
    ├── common  ----------------------- 公共资源目录
    ├── components  ------------------- 组件集合目录
    ├── pages  ------------------------ 页面集合目录
    ├── router  ----------------------- vue-router目录
    ├── App.vue  ---------------------- vue根组件文件
    └── main.js  ---------------------- 项目入口文件
```

## Usage
``` bash
# 安装依赖
npm instal

# 启动本地调试
npm run dev

# 本地打包压缩
npm run build
```

## Proxy
本地代码想要访问测试环境接口可以通过以下配置
`/config/index.js`
``` bash
dev: {
  proxyTable: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: {'^/api': ''}
    }
  }
}
```

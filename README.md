# vue-template

> A Vue.js project tempalte

## 项目结构 ##

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

## 环境准备

``` bash
# 安装依赖
npm install

# 启动本地调试 localhost:8080
npm run dev

# 本地打包压缩
npm run build

# 本地打包压缩并查看项目
npm run build --report

# 生成page文件
npm run init page `name`

# 生成component文件
npm run init component `name`
```
## 反代理配置

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

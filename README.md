# {{ name }}

> {{ description }}

## Construction

```
.
├── README.md
├── build
│   ├── webpack.dev.conf.js             // 本地启动项目webpack配置
│   └── webpack.prod.conf.js            // 发布到daily、线上，webpack配置
└── src
    ├── apis                            // 接口请求
    ├── assets                          // 静态资源
    ├── components                      // 项目组件
    ├── router                          // 路由
    ├── store                           // vuex
    │   └── modules                     // 单模块中的state、getters、actions 和 mutations
    ├── stylesheets                     // 样式，默认使用less
    ├── utils                           // 公用工具
    └── views                           // 页面
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

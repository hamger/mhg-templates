# {{ name }}

> {{ description }}

## 目录结构

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

## 规范

本项目使用了ESlint规范代码语法、风格统一。

在.eslintrc.js文件中，默认使用了**plugin:vue/essential**，当然，您可以选择其他规范级别[配置](https://github.com/vuejs/eslint-plugin-vue)。

## 使用

``` bash
# 启动 localhost:8080
npm start

# 发布到daily
npm run publish:daily

# 发布到线上
npm run publish:prod

```

## 注意

**发布项目的所需的`projectId`和上传资源所需的`uploaderKey`，需个人手动在package.json中配置。**

对接[eevee伊布](https://git.dawanju.net/mhc-fe/infrastructure/eevee)发布系统配置在webpack.prod.conf.js中，具体依赖可查看[eevee-publish-webpack-plugin](https://www.npmjs.com/package/eevee-publish-webpack-plugin)、[eevee-uploader-qiniu](https://www.npmjs.com/package/eevee-uploader-qiniu)

npm run publish:xxx命令，资源会上传到您在vue init过程中输入的name的路径下。例如：
```bash
vue init -c cat https://git.dawanju.net:geli/phantomlancer

? Project name (cat)：dog

https://img.maihaoche.com/mhc-fe/dog/
```

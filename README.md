# react-template
> webpack + react + react-router4 + redux + less

用于 react 项目开发的基础模板

## Usage
使用`mhg-cli`，输入如下命令
```bash
hg init react [projectName]
```
后者使用`vue-cli`，输入如下命令
```
vue init hamger/mhg-templates#react [projectName]
```
其中`projectName`为指定的项目名称

## Construction
```
.
├── package.json  --------------------- 项目描述
├── README.md  ------------------------ 说明文件
├── build  ---------------------------- 构建配置
└── src  ------------------------------ 源码目录
    ├── assets  ----------------------- 资源文件
    ├── components  ------------------- 组件集合
    ├── views  ------------------------ 页面集合
    ├── store  ------------------------ redux
    ├── router.js  -------------------- 项目路由
    └── index.js  --------------------- 项目入口
├── babelrc --------------------------- babel配置
├── .eslintrc ------------------------- eslint配置
├── .gitignore ------------------------ git忽略配置
├── postcss.config.js ----------------- postcss配置
└── webpack.config.js ----------------- 判断环境
```

## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# package the code
npm run build
```

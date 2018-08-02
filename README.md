# cms-template
> vue + vuex + element-ui

用于后台管理的项目模板

## Usage
如果你使用`mhg-cli`，输入如下命令
```bash
```
如果你使用`vue-cli`，输入如下命令
```
vue init hamger/mhg-templates#cms [projectName]
```
其中`projectName`为指定的项目名称

## Construction
```
.
├── package.json  --------------------- 项目描述
├── README.md  ------------------------ 说明文件
├── build  ---------------------------- 构建配置
├── config  --------------------------- 参数配置
├── index.html  ----------------------- 入口页面
├── static  --------------------------- 静态资源目录
└── src  ------------------------------ 源码目录
    ├── common  ----------------------- 公共资源目录
    ├── components  ------------------- 组件集合目录
    ├── pages  ------------------------ 页面集合目录
    ├── router  ----------------------- vue-router目录
    ├── vuex  ------------------------- vuex目录
    ├── App.vue  ---------------------- vue根组件文件
    └── main.js  ---------------------- 项目入口文件
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

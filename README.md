# simple-template
> webpack + babel

一个简单的支持 ES6 编写的项目模板

## Usage
如果你使用`mhg-cli`，输入如下命令
```bash
hg init simple [projectName]
```
如果你使用`vue-cli`，输入如下命令
```
vue init hamger/mhg-templates#simple [projectName]
```
其中`projectName`为指定的项目名称

## Construction
```
.
├── package.json  --------------------- 项目描述
├── README.md  ------------------------ 说明文件
├── webpack.config.js ----------------- webpack配置文件
├── index.html  ----------------------- 入口页面
└── src  ------------------------------ 源码目录
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

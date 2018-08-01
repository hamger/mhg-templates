# pages-template
> webpack + babel + eslint + sass 

适用于多页面开发的项目模板。

## Usage
如果你使用`mhg-cli`，输入如下命令
```bash
hg init pages [projectName]
```
如果你使用`vue-cli`，输入如下命令
```
vue init hamger/mhg-templates#pages [projectName]
```

## Construction
```
.
├── package.json  --------------------- 项目描述
├── README.md  ------------------------ 说明文件
├── build  ---------------------------- 构建配置
└── src  ------------------------------ 源码目录
    ├── page01 ------------------------ 页面A代码
        ├── index.html ---------------- 页面A的html代码
        └── index.js ------------------ 页面A的js代码入口
    └── page02 ------------------------ 页面B代码
```

## Start
### 安装依赖
``` bash
npm install
```

### 本地开发
```bash
npm run dev
```
访问`http://localhost:8080/page01.html`可以看到页面A的内容，访问`http://localhost:8080/page02.html`可以看到页面B的内容，路径对应文件名。


### 打包代码
```bash
npm run build
```
打包后根目录下会出现`dist`文件夹，其中内容如下
```
.
└── dist ------------------------------ 生产代码
    ├── page01 ------------------------ 页面A的生产代码
    └── page02 ------------------------ 页面B的生产代码
```



# mhc-vue-template

> 这是一套为mhc定制的vue模板，功能包括有：hot-reload, lint-on-save, unit testing, css extraction & `eevee publish`.

> 该模板适用于Vue 2.0.

## 文档

- [Vue 2.0](http://vuejs.org/guide/): 有关如何使用Vue的文档

## 用法说明

这是一个用[vue-cli](https://github.com/vuejs/vue-cli)来初始化项目的模板. **建议使用npm 3+ 以安装完善所有的依赖树.**

``` bash
$ npm install -g @mhc/vue-cli
$ mvue init <template> projectName
$ cd projectName
$ npm install
$ npm run dev
```

以上操作将会默认使用`master`分支用来构建项目.如果您希望使用其他版本的模板，请执行以下操作：

使用 vue-PC 模板:
``` bash
$ mvue init ele-desktop projectName
```

使用 vue-H5 模板:
``` bash
mvue init vueMobile projectName
```

在不输入项目名称情况下，将自动为您在当前目录下初始化项目：
``` bash
mvue init ele-desktop projectName

? Generate project in current directory? (Y/n)
```

默认情况下，本地开发，服务器将在端口8080上运行. 如果该端口被占用，则将默认使用下一个空闲端口.

## 其他

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - Static assets compiled with version hashes for efficient long-term caching, and an auto-generated production `index.html` with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in [JSDOM](https://github.com/tmpvar/jsdom) with [Jest](https://facebook.github.io/jest/), or in PhantomJS with Karma + Mocha + karma-webpack.
  - Supports ES2015+ in test files.
  - Easy mocking.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

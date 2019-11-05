* 真实的package.json没有注释（json文件不存在注释）
- name:项目名称
- version:项目版本
- description:项目描述 方便搜索
- homepage:项目主页
- license: 协议
- entry 入口文件
    ```$xslt
        "entry":{ 
            "main": "./web/index.js"
         },
    ```
- keywords 一个字符串数组，方便别人搜索到本模块
    ```$xslt
        "keywords": [ 
            "vue","iview" 
        ],
    ```
- main:主文件（比如默认是index.js，项目名称叫package。那么require(‘package’)将返回index.js返回的内容）
- repository(仓库)指定一个代码存放地址 
    ```$xslt
        "repository": { 
            "type": "git", 
            "url": "git+https://github.com/XXXX" 
        },
    ```
- scripts:指定了运行脚本命令的npm命令行缩写
    ```$xslt
         "scripts": {
            "docs:dev": "vuepress dev docs",
            "docs:build": "vuepress build docs"
          },
    ```
 - author:作者
- license: BSD， GPL，LGPL，MIT等都是OSI批准的协议 ISC 协议
   ![协议](http://q.huxiaojun.work/xieyi.png "协议")
- 项目依赖 dependencies / 开发依赖 devDependencies字段指定了项目运行所依赖的模块，devDependencies指定项目开发所需要的模块。
  它们都指向一个对象。该对象的各个成员，分别由模块名和对应的版本要求组成，表示依赖的模块及其版本范围。
    ```$xslt
         {
           "devDependencies": {
             "browserify": "^13.0.0",//表示安装13.x.x的最新版本（不低于13.0.0），但是不安装14.x.x，也就是说安装时不改变大版本号。
             "karma-browserify": "~5.0.1,"//表示安装5.0.x的最新版本（不低于5.0.1），但是不安装5.1.x，也就是说安装时不改变大版本号和次要版本号
             "express": "latest",//最新版本号
             "MD5": "1.2.0"//正常版本号
           }
         }
    ```
- engines 主要是规定开发时候环境的node.js和npm的版本不能过低    
    ```$xslt
             "engines": {
               "node": ">= 6.0.0",
               "npm": ">= 3.0.0"
              },
     ```
- browserslist 一个阈值，表示是否要去兼容某些浏览器   
    ```$xslt
             "browserslist": [
              "> 1%",
              "last 2 versions",
              "not ie <= 8"
             ]
     ```  
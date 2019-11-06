/*方法1*/
const address = require('address')
const localhost = address.ip() || 'localhost'
const path=require('path')
/*方法2*/
// const os = require('os')
// let localhost = ''
// try {
//   const network = os.networkInterfaces()
//   localhost = network[Object.keys(network)[0]][1].address
// } catch (e) {
//   localhost = 'localhost';
// }
module.exports = {
    title:"HUGH",
    description:"胡晓军的个人博客",
    // dest:'./dist',//默认vuepress下面
    port:'8080',
    host:localhost,
    head:[
        ['link',{rel:'icon',href:'/favicon.ico'}],
        ["link", { rel: "stylesheet", href: "/css/style.css" }],
        ["script", { charset: "utf-8", src: "/js/main.js" }]
    ],
    serviceWorker: true ,// 是否开启 PWA
    base: '/',
    markdown: {
        lineNumbers: false, // 代码块显示行号
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2] },
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            //md.use(require('markdown-it-xxx'))
        }
    },

    plugins: [
        ['@vuepress/blog',
        {
            /* options */
        },],
        [
            'vuepress-plugin-clean-urls',
            {
                normalSuffix: '/',
                indexSuffix: '/',
                notFoundPath: '/404.html',
            },
        ],
    ],
    themeConfig: {
        nav:require('./nav'),
        // displayAllHeaders: true,//页面标题链接
        // activeHeaderLinks: false,//活动标题链接
        selectText: '选择语言',
        sidebar:require('./sidebar'),
        sidebarDepth: 2,
        lastUpdated: '最后更新',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        smoothScroll: true,//页面滚动效果

        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL //添加一个导航栏目
        //repo: 'https://github.com//HUGHHUXIAOJUN/vuepress',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        //repoLabel: '查看源码',//
        // 默认是 false, 设置为 true 来启用
        // 以下为可选的编辑链接选项
        editLinks: true,
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://github.com//HUGHHUXIAOJUN/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：master
        docsBranch: 'master',
        // 默认为 "Edit this page"
        editLinkText: 'Git编辑'
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@img': path.join(__dirname, './public/'),
            }
        }
    },
    evergreen:true,
    // extraWatchFiles:[
    //     '/config.js'
    // ]


}
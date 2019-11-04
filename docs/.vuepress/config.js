/*方法1*/
const address = require('address')
const localhost = address.ip() || 'localhost'

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
        ['link',{rel:'icon',href:'/favicon.ico'}]
    ],
    serviceWorker: true ,// 是否开启 PWA
    base: '/',
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    plugins: [
        '@vuepress/blog',
        {
            /* options */
        },
    ],
    themeConfig: {
        nav:require('./nav'),
        sidebar: require('./sidebar'),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    },
    // extraWatchFiles:[
    //     '/config.js'
    // ]

}
module.exports = {
    title:"HUGH",
    description:"胡晓军的个人博客",
    // dest:'./dist',//默认vuepress下面
    port:'8080',
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
        nav: [
            { text: '首页', link: '/' },
            {
                text: '文章',
                items:[
                    { text: '抄写' , link:'/note/'},
                    { text: '照片' , link:'/photo/'}
                ]
            },
            { text: '茶社', link: '/girlfriend/'}
        ],
        sidebar: {
            '/note/': [
                {
                    title:'note',
                    collapsable: true,
                    children:[
                        '',
                    ]
                },
                {
                    title:'js',
                    collapsable: true,
                    children:[
                        '',
                    ]
                },
                {
                    title:'css',
                    collapsable: true,
                    children:[
                        '',
                    ]
                },
                {
                    title:'html',
                    collapsable: true,
                    children:[
                        '',
                    ]
                },
            ],
            '/webgl/': ['']
        },
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
    }

}
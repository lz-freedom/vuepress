module.exports = [
    {
        title: 'css',   // 必要的
        path: '/note/css',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1

    },
    'html',
    ['js', 'js'],//[link,text]
    {
        title: 'vue',   // 必要的
        path: '/note/vue',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        // children: [
        //     '/'
        // ]
    },
    {
        title: 'webstorm',   // 必要的
        path: '/note/webstorm/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            '#1'
        ]
    },

]

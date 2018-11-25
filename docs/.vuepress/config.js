module.exports = {
    base: '/core/',
    title: 'Kuma Cheatsheet',
    description: 'Cheatsheet made easy',

    repo: 'Kuma-Cheatsheet/core',
    repoLabel: 'Repository',
    editLinks: true,
    editLinkText: 'Help us improve this page!',

    // https://vuepress.vuejs.org/config/#head
    head: [
        ['link', { rel: 'icon', href: 'https://avatars1.githubusercontent.com/u/44744915?s=200&v=4' }]
    ],

    // https://vuepress.vuejs.org/config/#markdown
    markdown: {
        lineNumbers: 'True',
    },

    // https://vuepress.vuejs.org/plugin/
    plugins: [
        // https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#install
        ['@vuepress/pwa'], 
        
        // https://vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html
        ['@vuepress/medium-zoom'],
        
        // https://vuepress.vuejs.org/plugin/official/plugin-back-to-top.html
        ['@vuepress/back-to-top'],
        
        // https://vuepress.vuejs.org/plugin/official/plugin-blog.html
        ['@vuepress/blog'],
    ],

    // https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#options
    updatePopup: 'True',

    // https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    themeConfig: {
        nav: [
            { text: 'Home',         link: '/' },
            { text: 'Contribute',   link: 'https://github.com/Kuma-Cheatsheet/core/issues/' },
            { text: 'Collection',   link: 'https://github.com/Kuma-Cheatsheet/' },
            { text: 'DevDocs',      link: 'https://devdocs.io/' }
        ],

        sidebar: [
            // https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
        ],

        // https://vuepress.vuejs.org/theme/default-theme-config.html#last-updated
        lastUpdated: 'อับเดทล่าสุด',

        // https://vuepress.vuejs.org/theme/default-theme-config.html#service-worker
        serviceWorker: {
            updatePopup: true,
        },
    }
}

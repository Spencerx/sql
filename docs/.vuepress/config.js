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
        lineNumbers: 'True'
    },

    // https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#install
    plugins: [
        ['@vuepress/pwa'],
        ['@vuepress/medium-zoom']
    ],

    // https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#options
    updatePopup: 'True',

    // https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Contribute', link: 'https://github.com/Kuma-Cheatsheet/' },
        ],

        sidebar: [

        ],

        // https://vuepress.vuejs.org/theme/default-theme-config.html#last-updated
        lastUpdated: 'Last Updated',

        // https://vuepress.vuejs.org/theme/default-theme-config.html#service-worker
        serviceWorker: {
            updatePopup: true,
        },
    }
}%    

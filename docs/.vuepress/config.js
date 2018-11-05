module.exports = {
    base: '/core/',
    title: 'Kuma Cheatsheet',
    description: 'Cheatsheet made easy',

    // https://vuepress.vuejs.org/config/#head
    head: [
        ['link', { rel: 'icon', href: 'logo.png' }]
    ],

    // https://vuepress.vuejs.org/config/#serviceworker
    serviceWorker: 'True',

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
    }
}
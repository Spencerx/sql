module.exports = {
    base: '/sql/',
    title: 'SQL Cheatsheet',
    description: 'SQL made easy',

    // https://vuepress.vuejs.org/config/#head
    head: [
        ['link', { rel: 'icon', href: 'https://avatars1.githubusercontent.com/u/44744915?s=200&v=4' }]
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
        
        sidebar: [
            {
                title: 'Basic Query',
                collapsable: false,
                children: [
                    '/Select/',
                    '/Where/',
                ]
            },
            {
                title: 'Merging Tables',
                collapsable: false,
                children: [
                    '/Join/Inner/',
                    '/Join/Outer/',
                    '/Group/',
                ]
            },
            {
                title: 'Modifying Rows',
                collapsable: false,
                children: [
                    '/Insert/',
                    '/Update/',
                    '/Delete/',
                ]
            },
            {
                title: 'Modifying Columns',
                collapsable: false,
                children: [
                    '/Alter/Add/',
                    '/Alter/Modify/',
                    '/Alter/Drop/'
                ]
            },
            {
                title: 'Tables',
                collapsable: false,
                children: [
                    '/Create/',
                    '/Rename/',
                    '/Drop/',
                    '/Describe/',
                ]
            },
            {
                title: 'Transaction Control',
                collapsable: false,
                children: [
                    '/Commit/',
                    '/Rollback/',
                    '/Savepoint/',
                ]
            },
        ],

        // https://vuepress.vuejs.org/theme/default-theme-config.html#last-updated
        lastUpdated: 'Last Updated',

        // https://vuepress.vuejs.org/theme/default-theme-config.html#service-worker
        serviceWorker: {
            updatePopup: true,
        }
    }
}
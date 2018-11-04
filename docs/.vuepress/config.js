module.exports = {
    base: '/core/',
    title: 'Kuma Cheatsheet Core',
    description: 'Core of all cheatsheet',

    // https://vuepress.vuejs.org/config/#head
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],

    // https://vuepress.vuejs.org/config/#serviceworker
    serviceWorker: 'True',

    // https://vuepress.vuejs.org/config/#markdown
    markdown: {
        lineNumbers: 'True'
    }
}
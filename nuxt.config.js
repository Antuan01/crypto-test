export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'crypto-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Super Cripto Inbalanced Market'},
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Crazy Crykto Things',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Super Cripto Inbalanced Market'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://cripto.antuan01.com'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://i.ibb.co/zbLTV3B/pic.png'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Antuan Website'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

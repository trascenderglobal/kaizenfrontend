import { I18N } from './config/i18n'

export default {
  target: 'static',

  router: {
    middleware: ['auth'],
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kaizen Squad',
    titleTemplate: '%s | Kaizen Squad',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuelidate' },
    { src: '~/plugins/datepicker', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    ['nuxt-i18n', I18N],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
    baseURL: process.env.BASE_URL,
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
        },
        user: {
          property: false,
        },
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
          },
          logout: {
            url: '/logout',
            method: 'post',
          },
          user: {
            url: '/auth/user',
            method: 'get',
          },
        },
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

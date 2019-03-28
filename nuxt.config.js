import pkg from './package'

export default {
  mode: 'universal',

  /**
   * Headers of the page
   */
  head: {
    title: pkg.author,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  /**
   * Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /**
   * Nuxt.js modules
   *
   * Doc: https://axios.nuxtjs.org/usage
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  /**
   * Global CSS
   */
  styleResources: {
    sass: [
      '@/assets/styles/_variables.scss',
      '@/assets/styles/_minxins.scss',
    ],
  },
  css: [
    '@/assets/styles/reset.scss',
    '@/assets/styles/base.scss'
  ],

  /**
   * Plugins to load before mounting the App
   */
  plugins: [],

  /**
   * Axios module configuration
   *
   * See: https://github.com/nuxt-community/axios-module#options
   */
  axios: {},

  /**
   * Build configuration
   *
   * You can extend webpack config here
   */
  build: {
    extend(config, ctx) {}
  }
}

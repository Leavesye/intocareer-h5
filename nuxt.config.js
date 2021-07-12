const path = require('path')

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'IntoCareer职前咨询平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=yes' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: 4000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  loading: true,
  router: {
    // base: process.env.NODE_ENV === 'production' ? '/h5/' : '',
  },
  transition: {
    name: 'fade',
    // mode: 'fade'
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/styles/index.css',
    'swiper/css/swiper.css',
    '@/assets/fonts/iconfont.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/baidu-tj.js', ssr: false },
    { src: '@/plugins/vue-swiper.js', ssr: false },
    { src: '@/plugins/vue-waterfall.js', ssr: false },
    { src: '@/plugins/vue-svg.js', ssr: false },
    { src: '@/plugins/focus-directive.js', ssr: false },
    { src: '@/plugins/vueGlobal.js' },
    {
      src: './node_modules/amfe-flexible/index.js',
      ssr: false
    },
    {
      src: '@/assets/js/iconfont.js',
      ssr: false
    },
    { src: '@/plugins/vue-pdf.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        'autoprefixer': {
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8"
          ]
        },
        'postcss-pxtorem' :{
          rootValue: 75,
          propList: ['*']
        }
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // svg
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [path.resolve(__dirname, './icons/svg')]

      // Includes /assets/icons/svg for svg-sprite-loader
      config.module.rules.push({
        test: /\.svg$/,
        include: [path.resolve(__dirname, './icons/svg')],
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]',
        },
      })
      // pdf
      config.output.globalObject = 'this'
      config.module.rules.push(
        {
          test: /\.pdf$/,
          loader: 'url-loader'
        }
      )
    }
  }
}

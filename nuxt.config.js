const pkg = require('./package')
const Prismic = require ('prismic-javascript')
const PrismicConfig = require('./prismic.config')
require('dotenv').config()



  
// https://medium.com/js-dojo/how-i-generated-dynamic-routes-for-different-nuxt-js-pages-ce2ee6972743  

const dynamicRoutes = async (req) => {

  const routedata = require('./tweets/prismic-routes.json')

  //const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})
  //const resForContent  = await api.query(Prismic.Predicates.at("document.type", "content"))
  const routesForContent = routedata.map((cont) => {
    console.log('cont 2 ->' , cont);
    return cont.route
  })

  // Contact more routes here
  const routes = routesForContent
  console.log('routes 3 ->' , routes);

  return routes
}



module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'AT | Demo | Prismic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'apple-touch-icon', size: '180x180', type: 'image/png', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700&display=swap' }
    ],
    script: [
        { innerHTML: '{ window.prismic = { endpoint: "' + PrismicConfig.apiEndpoint + '"} }' },
        { src: '//static.cdn.prismic.io/prismic.min.js?new=true' }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/global/global-imports.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  '~/plugins/link-resolver.js',
  '~/plugins/html-serializer.js',
  '~/plugins/prismic-vue.js',
  '~/plugins/vue-fuse',
  { src: "~/plugins/vue-waypoint.client.js", mode: 'client'},
    '~/plugins/svg4everybody'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    'modules/twitter-prismic',
    'modules/twitter-feed',
    ['vue-scrollto/nuxt', { duration: 675 }],
    ['nuxt-gmaps', { key: 'AIzaSyDe2ow3YELMDerTkl5QSVitReSxBpTYAmM', }]
  ],


  styleResources: {
    scss: [
      '~/assets/scss/component-imports/*.scss'
    ]
  },

  svgSprite: {
    input: '~/assets/icons/'
  },


  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  // router: {
  //   base: '/wip/'
  // },

  /*
  ** Generate
  */

  generate: {
    routes: dynamicRoutes
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      console.log('- - - > nuxtServerInit')
       config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  }
}

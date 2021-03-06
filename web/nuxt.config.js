import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'
import configs from './config/default'

export default {
    mode: 'spa',
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000',
        apiUrl: configs.apiUrl || 'http://localhost:9002/api/v1'
    },
    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
            },
            { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" }
        ],
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
            { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
            { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: [
        '~/assets/style/app.styl'
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/vuetify',
        '@/plugins/vue-notifications',
        '@/plugins/app-plugin',
        '@/plugins/route'
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        vendor: ['axios'],
        transpile: ['vuetify/lib'],
        plugins: [new VuetifyLoaderPlugin()],
        loaders: {
            stylus: {
                import: ['~assets/style/variables.styl']
            }
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                    options: {
                        fix: true
                    }
                })
            }
        }
    }
}
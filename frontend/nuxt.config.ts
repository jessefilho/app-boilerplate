// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: '',
            titleTemplate: '%s | NURA',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'none', name: 'none', content: '' },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]

        }
    },
    ssr: false,
    modules: [
        // replace vuex, https://pinia.vuejs.org/ssr/nuxt.html#installation
        ['@pinia/nuxt',{
            autoImports: [
                // automatically imports `defineStore`
                'defineStore', // import { defineStore } from 'pinia'
                // automatically imports `defineStore` as `definePiniaStore`
                ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
            ],
        }],

    ],
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],
    build: {
        transpile: ['vuetify',
            'yup',
            'lodash',
            '@vee-validate/rules'
        ],
    },
    imports: {
        // Auto-import pinia stores defined in `~/stores`
        dirs: ['./stores'],
        autoImport: true
    },
})

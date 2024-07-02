export default defineNuxtConfig({
    ssr: true,
    devServer: {
        port: 8080
    },
    devtools: {enabled: true},
    modules: [
        '@pinia/nuxt',
        ["@nuxtjs/i18n", {
            vueI18n: './i18n.config.ts',
            locales: [
                {
                    id: 0,
                    code: 'ru',
                    name: 'Русский',
                    iso: 'ru-RU'
                },
                {
                    id: 1,
                    code: 'en',
                    name: 'English',
                    iso: 'en-US'
                },
            ],
            defaultLocale: 'ru'
        }]
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['~/assets/css/main.scss'],
    components: [{path: '~/components'},
    ],
    imports: {dirs: ['./store/**'], autoImport: true},
    app: {
        head: {
            title: 'Чат',
            htmlAttrs: {lang: 'ru',},
            meta: [
                {charset: 'utf-8'},
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
                },
            ],
            link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @import "~/assets/css/_mixins";`
                }
            }
        }
    },
})

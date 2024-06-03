export default defineNuxtConfig({
    ssr: true,
    devtools: {enabled: true},
    modules: ['@pinia/nuxt'],
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

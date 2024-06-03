import {appConfig} from "~/lib/appConfig";

export default defineNuxtPlugin(() => {
    const $api = $fetch.create({
        baseURL: appConfig.domain,
        parseResponse: JSON.parse,
    })

    return {
        name: 'chat-api',
        provide: {
            api: $api
        }
    }
})
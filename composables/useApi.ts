import type {AsyncData, UseFetchOptions} from "#app";

export function makePostReq<T>(url: string | (() => string), data: any): AsyncData<any, any> {
    return useFetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        timeout: 3000,
        $fetch: useNuxtApp().$api,
    })
}

export function makeGetReq<T>(url: string | (() => string), data: any): AsyncData<any, any> {
    return useFetch(url, {
        method: "GET",

    })
}
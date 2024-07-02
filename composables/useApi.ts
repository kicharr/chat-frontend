import type {AsyncData, UseFetchOptions} from "#app";

export function useApi<T>(url: string | (() => string), options: UseFetchOptions<T>): AsyncData<any, any> {
    return useFetch(url, {
        ...options,
        $fetch: useNuxtApp().$api,
    })
}

import type {UserAuthorizationType, UserRegistrationDataType} from "~/types";
import type {Ref, UnwrapRef} from "vue";
import {useApi} from "~/composables/useApi";

export const useUserStore = defineStore('user', () => {
    const token: Ref<UnwrapRef<string>> = ref('');


    const registration = async ({login, name, password}: UserRegistrationDataType) => {
        const {data, error, pending} = await useApi('/registration', {
            method: "POST",
            body: JSON.stringify({login, name, password}),
            timeout: 3000
        });


        console.log(data.value)
        console.log(error.value)
        console.log(pending.value)
    }

    const authorization = async ({login, password}: UserAuthorizationType) => {
        const {data, error, pending} = await useApi('/authorization', {
            method: "POST",
            body: JSON.stringify({login, password}),
            timeout: 3000
        });


        console.log(data.value)
        console.log(error.value)
        console.log(error)
    }

    return {
        token,
        registration,
        authorization
    }
})
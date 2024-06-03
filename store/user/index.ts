import type {UserRegistrationDataType} from "~/types";
import type {Ref, UnwrapRef} from "vue";
import {makePostReq} from "~/composables/useApi";

export const useUserStore = defineStore('user', () => {
    const token: Ref<UnwrapRef<string>> = ref('');


    const registration = async ({login, name, password}: UserRegistrationDataType) => {
        const {data, error, pending} = await makePostReq('/registration', {login, name, password});



    }

    const authorization = async (data: UserRegistrationDataType) => {
        console.log(data)
    }

    return {
        token,
        registration,
        authorization
    }
})
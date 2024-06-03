import type {SeparateDialogueType, UserRegistrationDataType} from "~/types";
import type {Ref, UnwrapRef} from "vue";

export const useMainStore = defineStore('main', () => {
    const dialoguesList: Ref<UnwrapRef<Array<SeparateDialogueType>>> = ref([]);


    const getDialoguesList = async (): Promise<void> => {

    }



    return {

    }
})
//@ts-ignore
import ru from "~/plugins/i18n/ru.json"
//@ts-ignore
import en from "~/plugins/i18n/en.json"

export default defineI18nConfig(() => ({
        messages: {
            ru,
            en
        }
    }
))
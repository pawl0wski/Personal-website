import { createI18n } from "vue-i18n";

import en from "./lang/en";
import pl from "./lang/pl";

export function detectLanguage(lang?: string): string {
    if (!lang) {
        lang = navigator.language;
    }
    lang = lang.toLowerCase();
    if (lang.includes("-")) {
        lang = lang.split("-")[0];
    }
    if (!["en", "pl"].includes(lang)) {
        lang = "en";
    }
    return lang;
}

//FIXME: Find workaround to this interface problem
const enLang = {};
const plLang = {};
Object.assign(en, enLang);
Object.assign(pl, plLang);

const i18n = createI18n({
    locale: detectLanguage(),
    fallbackLocale: "en",
    messages: {
        enLang,
        plLang,
    },
});

export default i18n;

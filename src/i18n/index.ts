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

const i18n = createI18n({
    locale: detectLanguage(),
    fallbackLocale: "en",
    messages: {
        en,
        pl,
    },
});

export default i18n;

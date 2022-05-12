import { createI18n } from "vue-i18n";

import en from "./lang/en";
import pl from "./lang/pl";

function detectLanguage(): string {
    let lang = navigator.language;
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

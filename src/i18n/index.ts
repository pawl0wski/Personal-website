import { createI18n } from "vue-i18n";

import en from "./lang/en";
import pl from "./lang/pl";

const i18n = createI18n({
    locale: "en",
    messages: {
        en,
        pl,
    },
});

export default i18n;

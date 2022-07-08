import pl from "~/locale/translations/pl";
import en from "~/locale/translations/en";
import LangI from "~/locale/interfaces/lang";

export default class Locale {
    private _detectLanguage(): string {
        let lang = navigator.language;

        // If lang is like "en-US" take only "en"
        if (lang.includes("-")) lang = lang.split("-")[0];

        return lang;
    }

    private getText(text: keyof LangI): string {
        switch (this._detectLanguage()) {
            case "pl":
                return pl[text] ?? "";
            default:
                return en[text] ?? "";
        }
    }
}

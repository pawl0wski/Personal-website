import type { LangI } from "./interfaces/lang";
import pl from "./translations/pl";
import en from "./translations/en";
import plProjects from "./projects/pl";
import enProjects from "./projects/en";

export default class Locale {
    /**
     * Retrieves a localized string based on the detected language.
     * @param {keyof LangI} key - The key of the localized text.
     * @returns {string} The localized HTML string.
     */
    get(key: keyof LangI): string {
        switch (this._detectLanguage()) {
            case "pl":
                return pl[key] ?? "";
            default:
                return en[key] ?? "";
        }
    }

    /**
     * Retrieves the project description based on the detected language.
     * @param {number} id - The project id.
     * @returns {string} The localized project description.
     */
    getProjectDescription(id: number): string {
        switch (this._detectLanguage()) {
            case "pl":
                return plProjects[id.toString()] ?? "";
            default:
                return enProjects[id.toString()] ?? "";
        }
    }

    private _detectLanguage(): string {
        if (typeof navigator === "undefined") return "en";
        let lang = navigator.language;

        // If lang is like "en-US" take only "en"
        if (lang.includes("-")) lang = lang.split("-")[0];

        return lang;
    }
}

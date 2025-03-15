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
        let text: string;
        switch (this._detectLanguage()) {
            case "pl":
                text = pl[key] ?? "";
                break;
            default:
                text = en[key] ?? "";
        }

        return this._changePrimaryColorTags(text);
    }

    /**
     * Retrieves the project description based on the detected language.
     * @param {number} id - The project Id.
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

    /**
     * Replaces `<pc>` tags in the given text with corresponding HTML color tags.
     * @param {string} content - The text containing `<pc>` tags.
     * @returns {string} The processed text with replaced color tags.
     * @private
     */
    private _changePrimaryColorTags(content: string): string {
        return content
            .replaceAll("<pc>", `<span class="primary-color">`)
            .replaceAll("</pc>", "</span>");
    }
}

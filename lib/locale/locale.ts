import pl from "./translations/pl";
import en from "./translations/en";
import type { LangI } from "./interfaces/lang";
import plProjects from "./projects/pl";
import enProjects from "./projects/en";

export default class Locale {
    private _detectLanguage(): string {
        if (typeof navigator === "undefined") return "en";
        let lang = navigator.language;

        // If lang is like "en-US" take only "en"
        if (lang.includes("-")) lang = lang.split("-")[0];

        return lang;
    }

    // The text may include <pc> and <pc> tags.
    // These tags color the text in the primary color.
    private _changePrimaryColorTags(content: string): string {
        return content
            .replaceAll("<pc>", "<span class='primary-color'>")
            .replaceAll("</pc>", "</span>");
    }

    getProjectDescription(id: number): string {
        let text: string;
        switch (this._detectLanguage()) {
            case "pl":
                text = plProjects[id.toString()] ?? "";
                break;
            default:
                text = enProjects[id.toString()] ?? "";
        }
        return text;
    }

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
}

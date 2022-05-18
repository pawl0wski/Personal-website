/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from "vitest";
import { detectLanguage } from "./index";
import en from "./lang/en";
import pl from "./lang/en";

describe("Test i18n", () => {
    it("Test language detection", () => {
        const locationTests: { [key: string]: string } = {
            "pl-PL": "pl",
            gdfa: "en",
            EN: "en",
            pL: "pl",
            PL: "pl",
            "PL----ds": "pl",
            "jp-JP": "en",
            "de-gr": "en",
            "en-US": "en",
        };
        for (const key in locationTests) {
            expect(detectLanguage(key)).toBe(locationTests[key]);
        }
    });
    it("en.ts and pl.ts should have a same amount of keys", function () {
        const enSubjects = Object.keys(en);
        const plSubjects = Object.keys(pl);
        expect(enSubjects).toEqual(plSubjects);

        enSubjects.forEach((e: string) => {
            // @ts-ignore
            expect(Object.keys(en[e])).toEqual(Object.keys(pl[e]));
        });
    });
});

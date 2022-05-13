/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from "vitest";
import { detectLanguage } from "./index";

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
});

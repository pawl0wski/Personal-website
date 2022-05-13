/**
 * @vitest-environment happy-dom
 */
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Welcome from "./Welcome.vue";

const options = {
    global: {
        mocks: {
            $t: (key: string) => key,
        },
    },
};

describe("Test Welcome", () => {
    it("Welcome should render", () => {
        const wrapper = mount(Welcome, options);
        expect(wrapper.find("div.welcome").exists()).toBeTruthy();
        expect(wrapper.find("div.welcome__left").exists()).toBeTruthy();
        expect(wrapper.find("div.welcome__right").exists()).toBeTruthy();
    });
    it("Should use i18n", () => {
        const wrapper = mount(Welcome, options);
        const testTable: { [key: string]: string } = {
            "h1.welcome__left__title": "message.aboutmeTitle",
            "p.welcome__left__extra": "message.aboutmeDesc",
            "p.welcome__left__content": "message.aboutmeContent",
        };
        for (const key in testTable) {
            expect(wrapper.find(key).exists()).toBeTruthy();
            expect(wrapper.find(key).text()).toBe(testTable[key]);
        }
    });
});

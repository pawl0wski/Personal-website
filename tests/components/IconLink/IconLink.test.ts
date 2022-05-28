/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import IconLink from "../../../src/components/IconLink/IconLink.vue";

describe("IconLink", () => {
    it("should be empty if nothing passed", () => {
        const wrapper = mount(IconLink);
        expect(wrapper.find("a").exists()).toBeFalsy();
    });
    it("should render if something passed", async () => {
        const wrapper = mount(IconLink);
        await wrapper.setProps({ icon: ["a"], href: "a" });
        expect(wrapper.find("a").exists()).toBeTruthy();
    });
    it("should inject strings in icon to i class", async () => {
        const icons = ["a", "b", "c"];
        const wrapper = mount(IconLink);
        await wrapper.setProps({ icon: icons });

        const wrapperClasses = wrapper.find("i").classes();
        icons.forEach((icon: string) => {
            expect(wrapperClasses.includes(icon)).toBeTruthy();
        });
    });
    it("should redirect to url provided in href prop", async () => {
        const url = "https://www.example.com";
        const wrapper = mount(IconLink);
        await wrapper.setProps({ href: url, icon: ["a"] });

        expect(wrapper.find("a").exists()).toBeTruthy();
        expect(wrapper.find("a").attributes().href).toBe(url);
    });
});

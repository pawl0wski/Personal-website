/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import IconLink from "./IconLink.vue";

describe("IconLink tests", () => {
    it("should be empty if nothing passed", () => {
        const wrapper = mount(IconLink);
        expect(wrapper.find("a").exists()).toBeFalsy();
    });
});

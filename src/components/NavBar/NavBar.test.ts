/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import NavBar from "./NavBar.vue";

describe("Navbar tests", () => {
    it("Navbar should render", () => {
        const wrapper = mount(NavBar);
        expect(wrapper.find("nav").exists()).toBeTruthy();
    });
});

/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import NavBar from "../../../src/components/NavBar/NavBar.vue";
import {
    createRouter,
    createWebHistory,
    RouteRecordNormalized,
    RouteRecordRaw,
} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Welcome",
        redirect: "/b",
    },
    {
        path: "/project",
        name: "Projects",
        redirect: "/b",
    },
    {
        path: "/testing",
        name: "Testing",
        redirect: "/b",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const mockRouter = {
    currentRoute: {
        value: {
            path: "/",
            name: "Welcome",
        },
    },
    getRoutes() {
        return routes;
    },
};

describe("Navbar", () => {
    it("should render", () => {
        const wrapper = mount(NavBar, {
            global: {
                mocks: {
                    $router: mockRouter,
                },
                plugins: [router],
            },
        });
        expect(wrapper.find("nav").exists()).toBeTruthy();
    });
    it("should display all routes expect '/'", () => {
        const wrapper = mount(NavBar, {
            global: {
                mocks: {
                    $router: mockRouter,
                },
                plugins: [router],
            },
        });

        const routesWhoShouldRender = mockRouter
            .getRoutes()
            .filter((e) => e.path != "/");
        const linksWhoShouldRender = routesWhoShouldRender.map((e) => e.path);

        wrapper.findAll("span.nav__link").forEach((e) => {
            expect(
                linksWhoShouldRender.includes(e.get("a").attributes().href)
            ).toBeTruthy();
        });
    });
});

import { createRouter, createWebHistory } from "vue-router";

import Welcome from "./views/Welcome.vue";
import Projects from "./views/Projects.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Welcome",
            component: Welcome,
        },
        {
            path: "/projects",
            name: "Projects",
            component: Projects,
        },
    ],
});

export default router;

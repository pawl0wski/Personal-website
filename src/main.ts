import { createApp } from "vue";
import router from "./router";

import i18n from "./i18n";
import { createMetaManager } from "vue-meta";

import "animate.css";

import App from "./App.vue";
import VueGtag from "vue-gtag";

createApp(App)
    .use(VueGtag, {
        config: { id: import.meta.env.VITE_GOOGLE_ANALYTICS },
    })
    .use(router)
    .use(i18n)
    .use(createMetaManager(false))
    .mount("#app");

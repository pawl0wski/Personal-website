import { createApp } from "vue";
import router from "./lib/router/router";
import logGitHash from "./lib/logGitHash/logGitHash";
import i18n from "./i18n";
import App from "./App.vue";
import VueGtag from "vue-gtag";
import "animate.css";

import { createMetaManager } from "vue-meta";

logGitHash();
createApp(App)
    .use(VueGtag, {
        config: { id: import.meta.env.VITE_GOOGLE_ANALYTICS },
    })
    .use(router)
    .use(i18n)
    .use(createMetaManager(false))
    .mount("#app");

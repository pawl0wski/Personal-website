import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { gitDescribeSync } from "git-describe";

process.env.VITE_GIT_HASH = gitDescribeSync().hash;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "src/assets/vars.scss";',
            },
        },
    },
});

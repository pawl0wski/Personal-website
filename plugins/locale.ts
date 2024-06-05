import {defineNuxtPlugin} from "nuxt/app";
import Locale from "~/lib/locale/locale";
import type { LangI } from "~/lib/locale/interfaces/lang";

export default defineNuxtPlugin({
    name: "locale",
    enforce: "pre",
    setup() {
        const locale = new Locale();
        return {
            provide: {
                locale: (key: string) => locale.get(key as keyof LangI),
                localeProject: (projectId: number) => locale.getProjectDescription(projectId),
            }
        }
    }
});

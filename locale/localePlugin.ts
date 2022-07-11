import Vue from "vue";
import Locale from "~/locale/locale";
import LangI from "~/locale/interfaces/lang";

const locale = new Locale();
Vue.prototype.$locale = (key: keyof LangI) => {
    return locale.get(key as keyof LangI);
};

Vue.prototype.$localProject = (id: number) => {
    return locale.getProjectDescription(id);
};

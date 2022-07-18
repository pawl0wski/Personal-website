import Vue from "vue";
import Locale from "./locale";
import LangI from "./interfaces/lang";

const locale = new Locale();
Vue.prototype.$locale = (key: keyof LangI) => {
    return locale.get(key as keyof LangI);
};

Vue.prototype.$localeProject = (id: number) => {
    return locale.getProjectDescription(id);
};

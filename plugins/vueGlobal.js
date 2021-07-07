import Vue from 'vue'
import env from "@/env";


const install = function (VueClass, opts = {}) {
    VueClass.prototype.$imgBase = env[process.env.NODE_ENV].IMG_BASE
};
Vue.use(install)
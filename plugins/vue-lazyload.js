import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.3,
    // loading: require('@/assets/imgs/loading.png'),
    error: require('@/assets/imgs/loading-err.png') 
});
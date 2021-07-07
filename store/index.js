import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        isShowMenu: false
    },
    mutations: {
        TOGGLE_MENU(state, data) {
            state.isShowMenu = data
        }
    }
})

export default store
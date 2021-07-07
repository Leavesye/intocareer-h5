import Vue from 'vue'
const focus = Vue.directive('focus', {
    bind: function(el) {
        el.onclick =  function() {
            el.style.transition = 'all .3s'
            el.style.webkitTransition = 'all .3s'
            el.style.color = el.style.color ? '': '#92254D'
            setTimeout(() => {
                el.style.color = ''
            }, 1500)
        }
    }
})
export default focus
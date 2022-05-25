import { createApp, Vue } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUser, faUserPlus, faBars, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
library.add(faUser)
library.add(faUserPlus)
library.add(faBars)
library.add(faArrowRightToBracket)

const highlightEl = (color) => (event, el) => {
    if (el) {
        el.style.background = color;
    } else {
        event.target.style.background = color;
    }
}
const clearHighlightEl = (event, el) => {
    if (el) {
        el.style.background = '';
    } else {
        event.target.style.background = '';
    }
}

const app = createApp(App);

app.directive('click-outside', {
    mounted(el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event, el);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
});

app.component("font-awesome-icon", FontAwesomeIcon).use(router).use(store)

app.mount('#app')
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import VueRouter from 'vueRouter';
import router from './router';

Vue.config.debug = true;

Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
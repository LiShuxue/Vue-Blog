import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import VueRouter from 'vueRouter';
import router from './router';

Vue.config.debug = true;

Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router: router
    //render: h => h(App) //如果区分login和app的话，需要注释上这个，通过路由来显示不同的页
});
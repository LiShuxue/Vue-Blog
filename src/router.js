import Vue from 'vue';
import VueRouter from 'vueRouter';
import Menu1 from './page/menu1';
import Menu2 from './page/menu2';
import Menu3 from './page/menu3';
import Menu4 from './page/menu4';
import Menu5 from './page/menu5';
import Menu6 from './page/menu6';
import Menu7 from './page/menu7';
import Menu8 from './page/menu8';

Vue.use(VueRouter);

const routes = [
    {path: '/menu1', name:'menu1', component: Menu1},
    {path: '/menu2', name:'menu2', component: Menu2},
    {path: '/menu3', name:'menu3', component: Menu3},
    {path: '/menu4', name:'menu4', component: Menu4},
    {path: '/menu5', name:'menu5', component: Menu5},
    {path: '/menu6', name:'menu6', component: Menu6},
    {path: '/menu7', name:'menu7', component: Menu7},
    {path: '/menu8', name:'menu8', component: Menu8}
];

const router = new VueRouter({
    mode: 'history',               //这样url就没有/#/xxx,而是常见的url形式
    routes: routes,
    history: true
});

export default router;
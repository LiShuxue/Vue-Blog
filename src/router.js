import Vue from 'vue';
import VueRouter from 'vueRouter';
import App from './App';
import Login from './page/login';
import Home from './page/home';
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
    {path: '/', redirect:'/login'},
    {path: '/login', name:'login', component: Login},
    {path: '/app', name:'app', component: App, redirect:'/app/home',
        children: [
            {path: '/app/home', name:'home', component: Home},
            {path: '/app/menu1', name:'menu1', component: Menu1},
            {path: '/app/menu2', name:'menu2', component: Menu2},
            {path: '/app/menu3', name:'menu3', component: Menu3},
            {path: '/app/menu4', name:'menu4', component: Menu4},
            {path: '/app/menu5', name:'menu5', component: Menu5},
            {path: '/app/menu6', name:'menu6', component: Menu6},
            {path: '/app/menu7', name:'menu7', component: Menu7},
            {path: '/app/menu8', name:'menu8', component: Menu8}
        ]
    }
];

const router = new VueRouter({
    //mode: 'history',               //这样url就没有/#/xxx,而是常见的url形式
    routes: routes,
    history: true
});

export default router;
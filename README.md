# Vue-Blog
<br/>

##第一次提交：搭建项目结构

>### 一、手动建立项目，搭建项目架子(本项目是手动搭建的)

>>1.添加package.json文件

>>2.添加webpack.config.js

>>3.添加index.html和temp.html

>>4.建立src目录，并添加main.js 和 App.vue

>>5.建立static/css目录，并添加app.scss

>>6.建立src/component目录 和 src/page目录

>>7.npm install 

>>8.npm run dev

>### 二、用vue-cli搭建项目(简易的，不完善，很多还需要自己配置)

>>1.安装vue-cli: npm install -g vue-cli

>>2.创建简单的项目: vue init webpack-simple Vue-Blog

>>3.cd到项目下： 

>>4.npm install

>>5.npm run dev

<br/>

##第二次提交：添加导航栏

>### 一、创建导航栏组件

>>1.修改main.js，引入ElementUI(通过import)，不知道这是什么的自行百度。index.css也需要单独导入。

>>2.在src/component目录下创建navbar.vue。

>>3.template中的内容直接从组件官网复制，修改成自己的导航标题。

>>4.在script中实现其点击事件，console.log()打印出标题。

>>5.在static/css目录下创建navbar.scss样式表，并在navbar.vue中导入。以备以后使用，现在样式表是空的。

>### 二、引入导航栏组件

>>1.接下来修改App.vue

>>2.导入组件 import navBar from './component/navbar.vue';

>>3.声明组件 components: { navBar }

>>4.通过标签使用组件 &lt;nav-bar&gt;&lt;/nav-bar&gt;

<br/>

##第三次提交：添加route，实现点击菜单页面跳转

>### 一、创建route

>>1.创建router.js，像下面这样

>><pre><code>
    import Vue from 'vue';
    import VueRouter from 'vueRouter';
    import Menu1 from './page/menu1';
    Vue.use(VueRouter);
    const routes = [
        {path: '/menu1', name:'menu1', component: Menu1}
    ];
    const router = new VueRouter({
        mode: 'history',
        routes: routes,
        history: true
    });
    export default router;
>></code></pre>

>>2.修改main.js，导入route功能

>>3.修改App.vue，通过 &lt;router-view class="view"&gt;&lt;/router-view&gt; 控制新页面显示的位置

>>4.修改navbar.vue，引入创建的router，并通过router.push()方法实现每次点击菜单，跳到不同的路由

>### 二、创建不同的页面

>>1.在router.js中我们引用了多个页面，像这样：import Menu1 from './page/menu1'； 来实现不同的路由显示不同的页面

>>2.所以我们要创建这些个页面。创建多个页面menu.vue，并使用其对应的样式。

>>3.创建其对应的样式表文件page.scss

<br/>

##第四次提交：修改route，实现Login和App两个模块

>>系统首先有两个父路由，/login和/app，一个显示登录页面，一个显示真正的应用页面。

>>在/app下面，还会有很多的子路由，来控制应用中跳转到的不同的页面。

>### 一、设计架构

>>1.修改index.html，添加一个&lt;router-view&gt;&lt;/router-view&gt;父路由/login和/app都在这里面渲染

>>2.修改App.vue，添加id和class，使其dom结构更清晰明了。它里面的&lt;router-view class="view"&gt;&lt;/router-view&gt;用来渲染/app下的子路由页面

>>3.修改component/navbar.vue，为其添加一个div，并标注id和class，这样架构清晰而且方便以后使用

>### 二、创建页面

>>1.创建login页面

>>2.创建home页面

>### 三、修改route，来实现这样的设计

>>1.修改router.js文件，实现不同的层级结构.

>><pre><code>
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
>></code></pre>

>>2.修改component/navbar.vue文件中各个菜单点击的路由跳转，像这样 router.push('/app/menu1');

>>3.修改main.js文件，删除这行代码render: h => h(App)，因为它会直接在#app节点上渲染App组件。这行代码也可以去掉了 import App from './App.vue';

<br/>

##第五次提交：简单实现登录页面

>### 一、页面UI

>>1.修改login.vue，采用了ElementUI 的el-form, el-input, 以及el-button等组件。注意 :model="login"跟data中的login对象对应

>>2.添加static/css/login-page.scss文件，并简单实现输入框和按钮居中

>### 一、页面事件

>>1.分别给登录和注册按钮添加点击事件userLogin和userRegiste。

>>2.对userLogin事件简单实现，如果用户名密码不为空，登录到app，路由跳转到app。如果有一个为空，就弹窗提示，通过ElementUI 的$alert来调用
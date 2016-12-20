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



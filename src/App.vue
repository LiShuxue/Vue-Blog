<template>
    <div id="appContainer" class="app-content">
        <nav-bar></nav-bar>
        <div class="test">
            <h1>Hello, {{sucess}} !</h1>
        </div>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
    import navBar from './component/navbar.vue';
    export default {
        data: function(){
            return {
                sucess: 'Sucess'
            }
        },
        components: {
            navBar
        }
    }
</script>

<style>
    @import "../static/css/app.scss"; 
</style>

<template>
    <div id="home" class="home-page">
        <h1>{{message}}</h1>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                message: 'Home page'
            }
        }
    }
</script>

<style>
    @import "../../static/css/page.scss"; 
</style>

<template>
    <div id="login" class="login-page">
        <h1>{{message}}</h1>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                message: 'Login page'
            }
        }
    }
</script>

<style>
    @import "../../static/css/page.scss"; 
</style>

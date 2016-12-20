<template>
    <div class="test">
        <h1>Hello, {{sucess}} !</h1>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                sucess: 'Sucess'
            }
        }
    }
</script>

<style>
    @import "../static/css/app.scss"; 
</style>

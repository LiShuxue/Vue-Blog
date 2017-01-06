<template>
    <div id="home" class="home-page">
        <h1>{{message}}</h1>
        <h1 v-show="isCommon">Common</h1>
        <button @click="show">显示</button><button @click="hide">隐藏</button>
        <h1>{{testMessage}}</h1>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                message: 'Home page'
            }
        },
        created: function () {
            this.$store.commit('CHANGE_COMMFLAG', true);
        },
        computed: {
            testMessage: function(){
                return this.$store.getters.getMessage;
            },
            isCommon: function(){
                return this.$store.getters.commConfig;
            }
        },
        methods: {
            show: function(){
                this.$store.dispatch('changeCommFlagAction', true);
            },
            hide: function(){
                this.$store.dispatch('changeCommFlagAction', false);
            }
        }
    }
</script>

<style>
    @import "../../static/css/page.scss"; 
</style>

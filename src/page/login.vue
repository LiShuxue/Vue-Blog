<template>
    <div id="login" class="login-page">
        <div class="login-box">
            <el-form :model="login" label-position="left" label-width="50px">
                <el-form-item label="账号:">
                    <el-input v-model="login.username"></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                    <el-input type="password" v-model="login.password"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="login-button">
            <el-button type="primary" @click="userLogin">登录</el-button>
            <el-button @click="userRegiste">注册</el-button>
        </div>
    </div>
</template>

<script>
    import router from '../router';
    export default {
        data() {
            return {
                login: {
                    username: '',
                    password: ''
                }
            };
        },
        methods: {
            userLogin() {
                if(this.login.username === "" || this.login.password  === ""){
                    this.$alert('请输入账号和密码');
                }else{
                    router.push('app');
                }               
            },
            userRegiste() {
                console.log('register')
            }
        }
    }
</script>

<style>
    @import "../../static/css/login-page.scss"; 
</style>

<template>
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">菜单一</el-menu-item>
        <el-menu-item index="2">菜单二</el-menu-item>
        <el-menu-item index="3">菜单三</el-menu-item>
        <el-menu-item index="4">菜单四</el-menu-item>
        <el-menu-item index="5">菜单五</el-menu-item>
        <el-submenu index="6">
            <template slot="title">复合菜单</template>
            <el-menu-item index="6-1">选项1</el-menu-item>
            <el-menu-item index="6-2">选项2</el-menu-item>
            <el-menu-item index="6-3">选项3</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        methods: {
            handleSelect(key, keyPath) {
                if(key === '1'){
                    console.log('菜单一');
                }else if(key === '2'){
                    console.log('菜单二');
                }else if(key === '3'){
                    console.log('菜单三');
                }else if(key === '4'){
                    console.log('菜单四');
                }else if(key === '5'){
                    console.log('菜单五');
                }else if(key === '6-1'){
                    console.log('选项1');
                }else if(key === '6-2'){
                    console.log('选项2');
                }else if(key === '6-3'){
                    console.log('选项3');
                }
            }
        }
    }
</script>

<style>
    @import "../../static/css/navbar.scss"; 
</style>
<template>
  <div id="app">
    <h1>app 组件</h1>
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>
    <router-view></router-view>
    <h2>我是app中的一些底部权限信息</h2>
  </div>
</template>

<script>
  export default {
    name:'App'
  }
</script>

<style>
  /*.router-link-active {*/
  /*  color: aqua;*/
  /*}*/
  .active {
    color: aqua;
  }
</style>

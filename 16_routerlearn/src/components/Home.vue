<template>
    <div>
        <h2>我是主页</h2>
        <p>嵌套路由的使用</p>
        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
        <router-view class="borderline"></router-view>
    </div>
</template>

<script>
    export default {
        name: "Home",
        // 生命周期函数
        created() {
            console.log('created');
            // 修改对应页面的title
            document.title = '首页';
        },
        mounted() {
            console.log('mounted')
        },
        updated() {
            console.log('updated')
        },
    }
</script>

<style scoped>

</style>
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
        // created() {
        //     console.log('home created');
        //     // 修改对应页面的title
        //     document.title = '首页';
        // },
        mounted() {
            console.log('home mounted')
        },
        updated() {
            console.log('home updated')
        },
        destroyed() {
            console.log('home destroyed');
        },
        // beforeRouteLeave(to, from, next) {
        //     console.log(this.$route.path);
        //     this.path = this.$route.path;
        //     next()
        // },
    }
</script>

<style scoped>

</style>
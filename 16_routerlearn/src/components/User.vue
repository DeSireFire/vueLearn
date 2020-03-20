<template>
    <div>
        <h2>用户</h2>
        <p>这就是为啥我为什么需要一点内容，来显得这个网页好像很有东西的样子</p>
       <h2>userId:{{userId}}</h2>
       <h2>$route.params.userId:{{$route.params.userId}}</h2>
        <button @click="btnClick">console.log 打印this.$router</button>
    </div>
</template>

<script>
    export default {
        name: "User",
        computed:{
            userId() {
                return this.$route.params.userId
            }
        },
        methods:{
            btnClick() {
                console.log("user.vue 打印的router");
                console.log(this.$router);
                console.log("user.vue 打印的route (当前活跃路由)");
                console.log(this.$route);
            },
        },
    }
</script>

<style scoped>

</style>
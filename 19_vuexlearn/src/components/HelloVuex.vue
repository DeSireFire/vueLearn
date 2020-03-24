<template>
    <div>
        <h2>hello Vuex</h2>
        <h2>{{$store.state.counter}}</h2>
        <hr>
        <h2>getters相关信息演示</h2>
        <h2>{{$store.getters.powerCounter}}</h2>
        <h2>对象过滤打印</h2>
        <h2>大于12岁的成员</h2>
        <h2>{{$store.getters.moreCEC}}</h2>
        <h2>大于12岁的成员个数</h2>
        <h2>{{$store.getters.moreCEClen}}</h2>
        <h2>通过传入参数来输出</h2>
        <h2>{{$store.getters.moreAge(11)}}</h2>
    </div>
</template>

<script>
    export default {
        name: "HelloVuex"
    }
</script>

<style scoped>

</style>
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
        <h2>{{$store.getters.moreAge(1)}}</h2>
        <h2>修改信息</h2>
        <h2>{{$store.state.info}}</h2>
        <h2>异步修改 模拟异步请求需要5秒以后才响应</h2>
        <h2>{{$store.state.info2}}</h2>
        <hr>
        <h2>modules 展示的内容</h2>
        <h3>{{$store.state.demoModules.name}}</h3>
        <h2>modules getters 调用</h2>
        <h3>{{$store.getters.fullName}}</h3>
        <h2>modules getters + getters 调用</h2>
        <h3>{{$store.getters.fullName2}}</h3>
        <h2>modules getters + getters + rootState 调用</h2>
        <h3>{{$store.getters.fullName3}}</h3>
    </div>
</template>

<script>
    export default {
        name: "HelloVuex"
    }
</script>

<style scoped>

</style>
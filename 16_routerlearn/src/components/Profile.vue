<template>
    <div>
        <h2>Profile Demo 组件</h2>
        <p>模拟参数传递</p>
        <p>name:{{$route.query.name}}</p>
        <p>age:{{$route.query.age}}</p>
    </div>
</template>

<script>
    export default {
        name: "Profile",
    }

</script>

<style scoped>

</style>
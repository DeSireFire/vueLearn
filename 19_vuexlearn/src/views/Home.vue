<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="测试"/>-->
    <p>{{message}}</p>
    <h2>当前计数：{{$store.state.counter}}</h2>
    <!--v-on:click 与 @click 作用等同，后者为缩写-->
    <button v-on:click="add">+1</button>
    <button @click="sub">-1</button>
    <Hello-vuex></Hello-vuex>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HelloVuex from "../components/HelloVuex";

export default {
    name: 'Home',
    components: {
    HelloWorld,
    HelloVuex,
    },
    methods:{
    // 封装调用
    add(){
    // 必须使用commit提交到VueX store
    this.$store.commit('increment');
    },
    sub(){
    this.$store.commit('decrement');
    },
    },
    data() {
        return {
            message: '我是APP组件',
        }
    },
}
</script>

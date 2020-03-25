<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="测试"/>-->
    <p>{{message}}</p>
    <h2>当前计数：{{$store.state.counter}}</h2>
    <!--v-on:click 与 @click 作用等同，后者为缩写-->
    <button v-on:click="add">+1</button>
    <button @click="sub">-1</button>
    <h2> 动态传参按钮 </h2>
    <button v-on:click="addCount(5)">+5</button>
    <button v-on:click="addCount(10)">+10</button>
    <h2> 添加学生 </h2>
    <button v-on:click="addcodeEcho">添加橘九</button>
    <h2> 修改信息 </h2>
    <button v-on:click="updateCodeEcho">修改信息</button>
    <h2> 异步修改信息 </h2>
    <button v-on:click="asyncUpdateInfo">异步修改信息</button>
    <h2> 模块修改信息 </h2>
    <button @click="updateName()">修改名字</button>
    <Hello-vuex></Hello-vuex>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HelloVuex from "../components/HelloVuex";
import {INCREMENT} from "../store/mutations-types";

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
    // 使用mutations-types.js导入的演示
    this.$store.commit(INCREMENT);
    },
    sub(){
    this.$store.commit('decrement');
    },
    addCount(count){
    this.$store.commit('incrementCount',count);
        },
    addcodeEcho(){
        // playload 载荷 stu就相当于这个角色
        const stu = {id:9,name:'橘九', age:'42'};
        this.$store.commit('addcodeEcho',stu);
        // 特殊的提交封装(提交的是一个对象)
        // this.$store.commit({
        //     type:'addcodeEcho',
        //     stu
        //     });
        },
    updateCodeEcho(){
        this.$store.commit('updateCodeEcho');
    },
    updateName(){
        this.$store.commit('updateName','DeSireFire');
    },
    asyncUpdateInfo(){
        // dispatch 指定方法并传参
        let datas = {
            'status':true,
            'message':"我是信息",
            'data':[],
        };
        this.$store.dispatch(
            'asyncUpdateInfo',datas
        ).then(res => {
            // 获取从index.js处理完成后的回调信息
            console.log('完成提交');
            console.log(res);
        });
    },
    },
    data() {
        return {
            message: '我是APP组件',
        }
    },
}
</script>

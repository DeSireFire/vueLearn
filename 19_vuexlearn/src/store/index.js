import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from "../store/mutations-types";
Vue.use(Vuex);

const modulesA = {
  state:{
    name:'RaXianch'
  },
  mutations:{
    updateName(state,payload) {
      state.name = payload
    }
  },
  actions:{},
  getters:{
    fullName(state) {
      return state.name + 'modulesA getters Demo'
    },
    fullName2(state,getters) {
      return getters.fullName+ 'modulesA getters + getters Demo'
    },
    fullName3(state,getters,rootState) {
      return getters.fullName2 + rootState.counter +'modulesA getters + getters + rootState Demo'
    },
  },
  modules:{},
};

export default new Vuex.Store({
  state: {
    // 变量
    counter:0,
    codeEcho:[
      {id:0,name:'铃果', age:'11'},
      {id:1,name:'柚一', age:'12'},
      {id:2,name:'双荔', age:'13'},
      {id:3,name:'山梨', age:'14'},
      {id:100,name:'?', age:'?'},
    ],
    age:0,
    info:{demo:"这是一段待修改的测试信息！"},
    info2:{demo:"这是一段待修改的测试信息2！"},
  },
  mutations: {
    // 方法
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, count) {
      state.counter += count
    },
    addcodeEcho(state, playload) {
      state.codeEcho.push(playload);
    },
    updateCodeEcho(state) {
      let myDate = new Date();//获取系统当前时间
      state.info.demo = "这是修改好的信息"+myDate.toLocaleTimeString();
      // 为一开始没在state中没有声名的数据结构也能响应式添加的方法
      Vue.set(state.info,'demoText1','holyshit1');
      Vue.set(state.info,'demoText2','holyshit2');
      // 五秒后响应式删除其中一个演示字段
      setTimeout(() => {
        Vue.delete(state.info,'demoText2');
      },5000);
    },
    // 被actions里面的异步操作调用
    asyncUpdateInfo(state) {
      let myDate = new Date();//获取系统当前时间
      state.info2.demo = "这是修改好的信息2"+myDate.toLocaleTimeString();
    },

  },
  actions: {
    // 异步调用演示
    asyncUpdateInfo(context,payload) {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('asyncUpdateInfo');
          console.log(payload);
          // 完成以后信息反馈到次级VUE文件
          resolve('holyboy')
          // Vue.set(state.info,'异步模拟','异步数据');
        },5000);
      });
    },
  },
  getters: {
    powerCounter(state){
      return state.counter * state.counter
    },
    moreCEC(state) {
      // 过滤器，筛选12岁以上的
      // return this.$store.state.codeEcho.filter(s =>{
      //   return s.age >= 12
      // })
      return state.codeEcho.filter(s => s.age > 12)
    },
    moreCEClen(state,getters) {
      return getters.moreCEC.length
    },
    // 另一种写法,动态传递参数
    moreAge(state) {
      // 普通写法
      return function (age) {
        return state.codeEcho.filter(s => s.age > age)
      };
      // 箭头函数写法，简便但不易读
      // return age => {
      //   return state.students.filter(s => s.age > age)
      // }
    },
  },
  modules: {
    demoModules:modulesA,
  },
})

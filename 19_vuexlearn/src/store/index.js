import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 变量
    counter:0,
    codeEcho:[
      {id:0,name:'铃果', age:'11'},
      {id:1,name:'柚一', age:'12'},
      {id:2,name:'双荔', age:'13'},
      {id:3,name:'山梨', age:'14'},
    ],
    age:0,
  },
  mutations: {
    // 方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
  },
  actions: {
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
      return function (age) {
        return state.codeEcho.filter(s => s.age > age)
      }
    },
  },
  modules: {
  },
})

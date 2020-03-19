//配置路由相关的信息
import VueRouter from "vue-router";
import Vue from 'vue'

import Home from "../components/Home";
import about from "../components/about";

// 1. 通过Vue.use 插件 ，安装插件
Vue.use(VueRouter);

// 2.创建VueRouter对象
const routes = [
    {
        path:'',
        // 重定向
        redirect:'/home',
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/about',
        component:about
    },
];
const router = new VueRouter({
    // 配置路由和组件之间的映射关系
    routes,
    // 将hash模式转成history模式(把url中的#给飞了)
    mode:'history',
});

//3.将router对象传入到Vue实例中
export default router
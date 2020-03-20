//配置路由相关的信息
import VueRouter from "vue-router";
import Vue from 'vue'

// 普通导入写法
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";
// 路由懒加载导入写法
const Home = () => import('../components/Home');
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');
const About = () => import('../components/About');
const User = () => import('../components/User');
const Profile = () => import('../components/Profile');



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
        component:Home,
        // 子路由组件实践
        children:[
            // 次级路由默认跳转显示的信息
            {
                path:'',
                redirect:'news',
            },
            {
                path:'news',
                component:HomeNews
            },
            {
                path:'message',
                component:HomeMessage
            },
        ],
    },
    {
        path:'/about',
        component:About,
        meta:{
            title:'关于',
        },
        // 路由独享守卫演示
        beforeEnter:(to, form, next) => {
            console.log("路由独享守卫，beforeEnter");
            next()
        }
    },
    {
        path:'/user/:userId',
        component:User,
        meta:{
            title:'用户',
        },
    },
    {
        path:'/Profile',
        component:Profile,
        meta:{
            title:'档案',
        },
    },
];
const router = new VueRouter({
    // 配置路由和组件之间的映射关系
    routes,
    // 将hash模式转成history模式(把url中的#给飞了)
    mode:'history',
    linkActiveClass:'active',
});

// 全局守卫导航演示
// 前置钩子（回调）
router.beforeEach((to, from, next) => {
    // 从from跳转to,从路由的meta中获取title
    document.title = to.matched[0].meta.title;
    // next()必须写
    next();
    console.log("前置钩子");
});
// 后置钩子（回调）
router.afterEach((to, from) => {
    console.log("后置钩子");
});

//3.将router对象传入到Vue实例中
export default router
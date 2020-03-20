<template>
  <div id="app">
    <h1>app 组件</h1>
    <h2>用tag更改 router-link 标签</h2>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <br>
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <hr>
    <h2>有replace和没有replace</h2>
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <br>
    <router-link to="/home" tag="button" replace>首页(replace)</router-link>
    <router-link to="/about" tag="button" replace>关于(replace)</router-link>
    <hr>

    <h2>使用的是active-class="active"方法</h2>
    <router-link to="/home" tag="button" replace active-class="active">首页(active-class="active")</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于(active-class="active")</router-link>
    <hr>
    <h2>使用的是linkActiveClass方法</h2>
    <router-link to="/home" tag="button">首页(linkActiveClass)</router-link>
    <router-link to="/about" tag="button">关于(linkActiveClass)</router-link>
    <hr>
    <h2>监听按钮点击实践</h2>
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>

    <hr>
    <h2>动态路由的使用</h2>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>

    <hr>
    <h2>profile演示 参数传递</h2>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-link :to="{path:'/Profile',query:{name:'RaXianch', age:'233'}}">档案</router-link>

    <hr>
    <h2>profile演示 参数传递二</h2>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <hr>
    <router-view class="borderline"></router-view>
    <h2>我是app中的一些底部权限信息</h2>
  </div>
</template>

<script>
  export default {
    name:'App',
    data() {
      return {
        userId:'list',
        imgURL:'',
      }
    },
    methods:{
      homeClick(){
        // 通过代码的方式修改路由
        this.$router.push('/home');
        // this.$router.replace('/home');
        console.log('homeClick');
      },
      aboutClick(){
        this.$router.push('/about');
        // this.$router.replace('/about');
        console.log('aboutClick');
      },
      userClick(){
        console.log('/user/'+this.userId);
        this.$router.push('/user/'+this.userId)
      },
      profileClick(){
        console.log('/Profile/'+this.userId);
        this.$router.push({
          path:'/Profile',
          query:{
            name:'铃果',
            age:18,
          },
        })
      },
    },
  }
</script>

<style>
  /*.router-link-active {*/
  /*  color: aqua;*/
  /*}*/
  .active {
    color: aqua;
  }
  .borderline {
    border-style:groove;
    border-width: 10px ;
  }
</style>

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// // 1.基础使用
// // get 请求示例+对象传get参数
// axios({
//   // url:'https://api.bilibili.com/x/web-interface/view?bvid=BV17x411w7KC',
//   // url:'https://api.bilibili.com/x/web-interface/view?aid=170001',
//   url:'http://httpbin.org/ip',
//   method:'get',
//   // get 参数自动拼接
//   params:{
//     type:'pop',
//     page:1,
//   },
// }).then(res => {
//   console.log(res);
// });

// 2.多项配置使用
// // 发送并发请求
// // 全局默认配置
// // axios.defaults.baseURL = 'http://httpbin.org';
// // axios.defaults.timeout = 5000;
// // axios.defaults.headers.post['Content-type'] = 'appliction/x-www-form-urlencoded';
//
// axios.all([
//     axios({url:'http://httpbin.org/ip'}),
//     axios({
//       //请求前的数据处理
//       // transformRequest:[function (data) {}],
//
//       //请求后的数据处理
//       // transformResponse:[function (data) {}],
//
//       // 查询对象序列化函数
//       // paramsSerializer:function(params){},
//
//       // request body
//       // data:{key:'aa'},
//
//       // 超时设置
//       // timeout:1000,
//
//       // 跨域是否带Token
//       // withCredentials:false,
//
//       // 自定义请求处理
//       // adapter:function(resolve,reject,config){},
//
//       // 身份验证信息
//       // auth:{uname:'',pwd:'12'},
//
//       // 响应的数据格式 json/blob/document/arraybuffer/text/stream
//       // responseType:'json',
//
//       //请求url根地址
//       baseURL:'https://httpbin.org',
//
//       // 自定义请求头部
//       headers:{
//         'Host':'api.bilibili.com',
//       },
//       url:'/get',
//       method:'get',
//       //url查询对象(url传参数)
//       params:{
//         type:'pop',
//         page:1,
//       },
//     }),
//     axios({
//       url:'http://httpbin.org/post',
//       method:'post',
//     }),
// ]).then(axios.spread((res1,res2,res3) => {
//   console.log(res1);
//   console.log(res2);
//   console.log(res3);
// }));

// 3.创建对应的axios的实例
// const axiosInstance = axios.create({
//   baseURL: 'http://httpbin.org',
//   timeout: 5000,
//   headers: {
//     // 跨域请求 这个配置不能少
//     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//     'Accept': 'application/json'
//   },
//   withCredentials: true // cookie跨域必备
// });
//
// axiosInstance({
//   url:'',
//   method:'get',
//   params:{
//     wd:'2333',
//     aid:'2333',
//   },
// }).then(res => {
//   console.log(res);
// });
//
// axiosInstance({
//   url:'/post',
//   method:'post',
//   data:{
//     holy:'shit',
//     shit:'holy',
//   },
// }).then(res => {
//   console.log(res);
// });

// 4.封装request模块
import {request} from "./network/request";
// // 漏勺写法
// request({
//   url:'/get',
// },suc => {
//   console.log('成功啦！');
//   console.log(suc);
// },fail => {
//   console.log('失败啦！');
//   console.log(fail);
// });

// // config 二度封装结果
// request({
//   baseConfig:{
//
//   },
//   success:function (suc) {
//
//   },
//   failure:function (err) {
//
//   },
// });

// promise 方式
request({
  url:'/get',
}).then(res => {
  console.log('请求体打印');
  console.log(res);
}).catch(err => {
  console.log(err)
});
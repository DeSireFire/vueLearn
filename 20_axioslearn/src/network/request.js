import axios from 'axios'
// 封装axios为request并导出

// // 1. 一般写法
// export function request(config,success,failure) {
//     // 1. 创建axios的实例
//     const instance = axios.create({
//         baseURL: 'https://httpbin.org',
//         timeout:5000,
//     });
//     // 2.使用实例发送网络请求
//     instance(config.baseConfig)
//         .then(res => {
//             success(res)
//         })
//         .catch(err => {
//             failure(err)
//         })
// }

// // 2. Promise写法
// export function request(config) {
//     return new Promise((resolve,reject) => {
//         // 1. 创建axios的实例
//         const instance = axios.create({
//             baseURL: 'https://httpbin.org',
//             timeout:5000,
//         });
//
//         // 2.使用实例发送网络请求
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     });
// }

// 3. 直接返回写法
// export function request(config) {
//     // 1. 创建axios的实例
//     const instance = axios.create({
//         baseURL: 'https://httpbin.org',
//         timeout:5000,
//     });
//
//     // 2.使用实例发送网络请求并返回
//     return instance(config)
// }

// 4. 添加拦截器
export function request(config) {
    // 1. 创建axios的实例
    const instance = axios.create({
        baseURL: 'https://httpbin.org',
        timeout:5000,
    });

    // 2. 拦截器
    // 全局拦截器 axios.interceptors
    // 2.1 请求拦截器
    instance.interceptors.request.use(config => {
        console.log('请求拦截器');
        console.log(config);
        return config
    },err => {
        console.log(err)
    });
    // 2.2 响应拦截器
    instance.interceptors.response.use(res => {
        console.log('响应拦截器');
        console.log(config);
        return config;
    },err => {
        console.log(err);
    });

    // 3.使用实例发送网络请求并返回
    return instance(config)
}
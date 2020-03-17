let user = '小明';
let age = 20;
let sex = '男';

function demof() {
    console.log(user);
    console.log(age);
    console.log(sex);
}

// 导出模块 方法一
export {
    user,
    age,
    sex,
}
// 导出模块 方法二
export let email = "1231@qq.com";
export let qq = "1518964";

// 导出函数/类
export function mul(num1, num2){
    return num1 + num2
}
export class Person {
    run() {
        return '潇洒走一回'
    }
}

// 默认导出
let addres = '广州市';
// 默认导出值
// export default addres;
// 默认导出函数
export default function (arg) {
    console.log(arg)
}



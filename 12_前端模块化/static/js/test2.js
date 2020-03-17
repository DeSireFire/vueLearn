// 导入test1的变量
import {user, age, sex} from "./test1.js"
import {email, qq} from "./test1.js"
import {mul, Person} from "./test1.js"

if (age >= 18){
    console.log("第一种方法导入的变量："+user+"已经是"+age+"岁的"+sex+"人了")
}

console.log("用第二种方法导入的变量："+email);
console.log("用第二种方法导入的变量："+qq);

// 使用导入的函数
console.log("导入函数并使用："+mul(666,233));
// 使用导入的类
const p = new Person();
console.log("导入类并使用："+p.run());

// 默认导入测试
// 默认导出只能导出一个，否则会被覆盖
import addres from "./test1.js";
console.log("默认导入的使用："+(addres));
addres('Vue demo');

// 全部导入
import * as allV from "./test1.js"
console.log("全导入并使用："+allV.user);
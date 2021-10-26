/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-26 15:38:46
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-26 16:16:19
 */

// 请注意：JS的数据类型有8种。

// 在ES5的时候，我们认知的数据类型确实是 6种：Number、String、Boolean、undefined、object、Null。

// ES6 中新增了一种 Symbol 。这种类型的对象永不相等，即始创建的时候传入相同的值，可以解决属性名冲突的问题，做为标记。

// 谷歌67版本中还出现了一种 bigInt。是指安全存储、操作大整数。（但是很多人不把这个做为一个类型）。
// ————————————————
// 版权声明：本文为CSDN博主「帅帅哥的兜兜」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/u013592575/article/details/95087953


// let test1 = "abcdef"
// console.log(typeof test1);
// let test2 =123;
// console.log(typeof test2);
// let test3 = true;
// console.log(typeof test3);
// let test4=[];
// console.log(typeof test4);
// let test5={};
// console.log(typeof test5);

// let test6;
// console.log(typeof test6);
// let test7 ={abcdefg:123};
// console.log(typeof test7);
// let test8 = ['abcdefg',123];
// console.log(typeof test8);

function test9() {
  return "abcdefg";
}
console.log(typeof test9);
function test10() {}
console.log(typeof test10);

// 返回的是object！！！！！！！！！！！！！！！这是个bug，跟二进制编码有关
let test11 = null;
console.log(typeof test11);

let test12 = 0/0;
console.log(typeof test12);
console.log(isNaN(test12));
console.log(test12==test12);
console.log(test12===test12);

console.log("///////////////////////////");
console.log(undefined===null);
console.log(undefined==null);
console.log(undefined===Object);
console.log(undefined==Object);
console.log(null===Object);
console.log(null==Object);
console.log("///////////////////////////");

console.log(1+2+" pppp");
console.log(80/"10");
console.log(Infinity-"1");
console.log(Infinity-"NaN");
console.log("///////////////////////////");
console.log(2+"1 1");
console.log(2-"1 1");
console.log(2-"1");
console.log("///////////////////////////");
console.log("1"-"1");
console.log("1"+"1");
console.log("///////////////////////////");

let a1 = [1,2,3];
let a2=a1;
console.log(a2===a1);
console.log(a2==a1);
let a3=[1,2,3];
console.log(a3===a1);
console.log(a3==a1);
console.log("///////////////////////////");

//JS 假值只有5个 其它的全部都是真值
// console.log(Boolean(1));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
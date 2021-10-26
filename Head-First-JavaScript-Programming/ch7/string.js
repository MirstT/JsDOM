/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-26 16:20:31
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-26 17:04:37
 */

// JavaScript解释器会在需要时替你创建字符串对象
let name = "     Wanghao ";
let phone = "123-111111";
let fact = "This is a prime number";
let a = 3;

// 这个自动转对象是在用到的时候转换的
const test = function testStringToObjectByJS(name) {
  console.log(name);
  console.log(typeof name);
  name = name.trim();
  console.log(name);
  name = name.toUpperCase();
  console.log(name);
  console.log(typeof name.toUpperCase());
};
test(name);
console.log(name);

let b = [1, 2, 3];
const testArray = function testArray(a) {
  a[0] = 222;
  console.log(a);
};
testArray(b);
console.log(b);


//验证电话号码 123-4567 1234567
const phoneNumber1="123-4567";
const phoneNumber2="1234567";
// split
const validate1 = function validate1(phoneNumber){
    phone = phoneNumber.split("-");
    phone.forEach(element => {
        if(isNaN(element)) return false;
    });
    return true;
}

// 正则表达式
const validate2 = function validate2(phoneNumber){
    return phoneNumber.match(/^\d{3}-?\d{4}$/);
}

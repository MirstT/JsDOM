/*
 * @Descripttion: 学习闭包
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-15 09:15:54
 * @LastEditors  : Mirst
 * @LastEditTime : 2021-10-29 16:43:21
 */

function funA() {
  var a = "sdas";
  return function () {
    console.log(a);
  };
}

var b = funA();
b();
funA();
funA()();




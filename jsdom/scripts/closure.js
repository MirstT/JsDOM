/*
 * @Descripttion: 学习闭包
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-15 09:15:54
 * @LastEditors  : Mirst
 * @LastEditTime : 2021-10-29 17:34:22
 */

// function funA() {
//   var a = "sdas";
//   return function () {
//     console.log(a);
//   };
// }

// var b = funA();
// b();
// funA();
// funA()();

//////////////////////////////////////////////////////////////////////////////////
//写个计数器吧
// function counterFunc() {
//   var counter = 0;
//   console.log(counter);
//   function counterPlus() {
//     counter += 1;
//     console.log(counter);
//   }
//   return counterPlus;
// }

// counterPlus(); //铁定报错的

// 条件是 return counterPlus;
// counterFunc();//这是在执行初始化

// 改成 return counterPlus() 执行了;
// counterFunc(); //但是这样执行也只是重复自己
// var test = counterFunc;
// test();
// test(); //同上， 重复自己

// 条件是 return counterPlus;
// counterFunc();//0
// counterFunc()();//0 1
// counterFunc()();//0 1 还是先初始化了

// 闭包  但是， 这是按照正常在执行啊， 其实， 闭包就是简单的定义， 定义就是这么简单， 但是应用的时候 看你怎么分析
// var test  = counterFunc();
// test();
// test();
// test();
// test();
/////////////////////////////////////////////////////////////////////////////

// function counterFunc() {
//   var counter = 0;
//   console.log(counter);
//   return () => {
//     counter += 1;
//     console.log(counter);
//   };
// }

// var test = counterFunc();
// test();
// test();
// test();

// var test2 = counterFunc();
// test2();
// test2();
// test2();

// var test3 = test;
// test3();

/////////////////////////////////////////////////

// var test = (() => {
//   var counter = 0;
//   console.log(counter);
//   return () => {
//     counter += 1;
//     console.log(counter);
//   };
// })();

// test();
// test();
// test();

///////////////////////////////


const test = (() => {
    let counter = 0;
    console.log(counter);
    return () => {
      counter += 1;
      console.log(counter);
    };
  })();
  
//   test();
//   test();
//   test();
(() => {
    let counter = 0;
    console.log(counter);
    return () => {
      counter += 1;
      console.log(counter);
    };
  })()();

  (() => {
    let counter = 0;
    console.log(counter);
    return () => {
      counter += 1;
      console.log(counter);
    };
  })()();
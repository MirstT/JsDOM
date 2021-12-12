/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-23 17:16:04
 * @LastEditors  : Mirst
 * @LastEditTime : 2021-10-28 13:05:49
 */

// ES6新特性箭头函数语法、如何正确使用箭头函数
// https://blog.csdn.net/qq_32614411/article/details/80897256
// 需要继续加深理解

// JavaScript函数式编程
// https://blog.csdn.net/duninet/article/details/106054606?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0.no_search_link&spm=1001.2101.3001.4242.0
// 它应始终返回相同的值。不管调用该函数多少次，无论今天、明天还是将来某个时候调用它。
// 自包含（不使用全局变量）。
// 它不应修改程序的状态或引起副作用（修改全局变量）。
// 这样理解纯函数
/**
 * @brief:纯函数 第一版合并有序数组
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @note: 三元运算符通常应该是简单的单行表达式，而不是嵌套的。 eslint rules: no-nested-ternary.
 *        避免不必要的三元运算符。 eslint rules: no-unneeded-ternary.
 * @note: 有点费空间
 * @see:
 */ 

const mergeA = function mergeSortedArrayA(a, b) {
  const left = [...a];
  const right = [...b];
  const array = [];
  let lp = 0;
  let rp = 0;
  let min;

  while (array.length != left.length + right.length) {
    if (lp == left.length) {
      while (rp != right.length) {
        array[array.length] = right[rp++];
      }
      return array;
    } else if (rp == right.length) {
      while (lp != left.length) {
        array[array.length] = left[lp++];
      }
      return array;
    }
    min = left[lp] <= right[rp] ? left[lp++] : right[rp++];
    array[array.length] = min;
  }
  return array;
};


/**
 * @brief:纯函数 第二版合并有序数组
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @note: 这个简化了代码量，但实际上更复杂了,而且变相增加left right长度？改了left和right 属实不太好
 * @see:
 */
const mergeB = function mergeSortedArrayB(a, b) {
  const left = [...a];
  const right = [...b];
  const array = [];
  let lp = 0;
  let rp = 0;

  while (array.length != a.length + b.length) {
    if (lp == a.length) left[lp] = Number.POSITIVE_INFINITY;
    if (rp == b.length) right[rp] = Number.POSITIVE_INFINITY;
    array[array.length] = left[lp] <= right[rp] ? left[lp++] : right[rp++];
  }
  return array;
};

/**
 * @brief:纯函数 第三版合并有序数组 优化代码观感
 * @param {*}
 * @param {*}
 * @return {*}
 * @note: 既然要求纯函数，我就把返回值当作参数传入就行了，
 * @note: 此处是分治法中的治？还是 合 应该说合 更为合适， 然后就是循环调用直至全部合并
 * @note: 也可用于合并单个数组 ，合并的过程就是排序了，，，，所以，第一轮合并是兼具排序，所以治也被包含在其中
 *        所以整个函数就是治？
 *        如果.length都不让用的话，left和right的length做为参数传入确实是需要的》。。。也可自己遍历获取，但没必要
 * @note: 这是分治法中的治
 * @see:
 */
const mergeC = function mergeSortedArrayC(left = [], right = []) {
  const array = [];
  let lp = 0;
  let rp = 0;

  while (array.length < left.length + right.length) {
    if (lp == left.length) {
      while (rp != right.length) array[array.length] = right[rp++];
      break;
    }
    if (rp == right.length) {
      while (lp != left.length) array[array.length] = left[lp++];
      break;
    }
    array[array.length] = left[lp] < right[rp] ? left[lp++] : right[rp++];
  }
  return array;
};

/**
 * @brief:纯函数 第四版合并有序数组 可以使用库函数
 * @param {*}
 * @param {*}
 * @return {*}
 * @note: Number.MAX_SAFE_INTEGER 当作极限值，
 *        这样整体流程，看情况，有快有慢，当然这样写更优雅；
 * @see:
 */
const merge = function mergeSortedArray(a, b) {
  const left = [...a];
  const right = [...b];
  left.push(Number.MAX_SAFE_INTEGER);
  right.push(Number.MAX_SAFE_INTEGER);
  const array = [];
  const totalLength = a.length + b.length;
  let lp = 0;
  let rp = 0;

  while (array.length != totalLength) {
    array[array.length] = left[lp] <= right[rp] ? left[lp++] : right[rp++];
  }
  return array;
};


/**
 * @brief:  怎么divide呢> ,其实没必要了，直接进行mergesort就行了，分完就直接合并了
 * @param {*}
 * @return {*}
 * @note: 数字取整 https://www.jianshu.com/p/a3202bc3f7a4
 * @note: mid=0时，stop
 * @see:
 */
const divide = function (array) {
  const mid = ~~(array.length / 2);
  if (mid === 0) return array; //单个值
  let left = [];
  let right = [];
  for (let i = 0; i < array.length; i++) {
    if (i < mid) {
      left[left.length] = array[i];
    } else {
      right[right.length] = array[i];
    }
  }
  console.log(left);
  console.log(right);
  divide(left);
  divide(right);
};

/**
 * @brief: 合并排序第一版 纯函数
 * @param {*} array
 * @return {*}
 * @note:
 * @see:
 */
const mergeSort = function (a) {
  const mid = ~~(a.length / 2);
  if (mid === 0) return a; //单个值
  let array = [];
  let left = [];
  let right = [];
  for (let i = 0; i < a.length; i++) {
    if (i < mid) {
      left[left.length] = a[i];
    } else {
      right[right.length] = a[i];
    }
  }
  left = mergeSort(left);
  right = mergeSort(right);
  array = merge(left, right); //conquer
  return array; //回传
};

let a = mergeSort([-1, -100]);
console.log(...a);

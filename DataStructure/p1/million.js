/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-22 23:24:04
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-24 02:41:12
 */

/**
 * @brief: 有序数组产生器
 * @param {number} length
 * @return {[]} array
 * @note:
 * @see:
 */
const gen = function generateOrderedArray(length = 10) {
  const array = [];
  for (let index = 0; index < length; index++) {
    array[index] = index;
  }
  return array;
};

/**
 * @brief: 验证shuffleFuc的有效性
 * @param {number} n 验证次数
 * @param {number} m 在某一位置上验证
 * @return {[]}
 * @note:纯函数的实现还需要深入挖掘 https://blog.csdn.net/c_kite/article/details/79138814
 * @note:js函数参数默认值设置ES6 https://blog.csdn.net/a695993410/article/details/80717995
 * @note:js函数参数默认值设置ES5 https://blog.csdn.net/weixin_34128501/article/details/89143250
 * @note:JS中给函数参数添加默认值 硬骨头！！！ https://www.cnblogs.com/antineutrino/p/4869041.html
 * @see:
 */
const verifyProbality = function verifyArrayShuffleProbalityWithNTimesInIndexM(
  array,
  shuffleFuc,
  n = 10000,
  m = array.length - 1
) {
  let count = 0;
  for (let index = 0; index < n; index++) {
    let vArray = [...array];
    vArray = shuffleFuc(vArray);
    if (vArray[m] === m) {
      count++;
    }
  }
  return (count * array.length) / n;
};

/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @brief:有问题!!! 忘记与自己交换，length越小，错误越明显
 * @param {*}
 * @return {*}
 * @note: 对prototype的初步理解 https://www.runoob.com/js/js-object-prototype.html
 * @see:
 */
// Array.prototype.shuffle = function () {
//   const array = this;
//   let temp, randomIndex;
//   let endIndex = array.length - 1;
//   for (endIndex; endIndex > 0; endIndex--) {
//     randomIndex = Math.floor(Math.random() * endIndex);
//     temp = array[endIndex];
//     array[endIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }
//   return array;
// };

/**
 * @brief: 没有bug 没有bug
 * @param {*}
 * @return {*}
 * @note:
 * @see:
 */
// Array.prototype.shuffle = function () {
//   const array = this;
//   let temp, randomIndex;
//   let endIndex = array.length - 1;
//   for (endIndex; endIndex > 0; endIndex--) {
//     randomIndex = Math.floor(Math.random() * (endIndex + 1));
//     temp = array[endIndex];
//     array[endIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }
//   return array;
// };

/**
 * @brief: 改进观感
 * @param {*}
 * @return {*}
 * @note: 如何将一个 JavaScript 数组打乱顺序 https://www.zhihu.com/question/68330851
 * @see:
 */
Array.prototype.shuffle = function () {
  const array = this;
  let j;
  let i = array.length;
  while (i > 0) {
    j = Math.floor(Math.random() * i--);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/**
 * @brief:
 * @param {*} array
 * @return {*}
 * @note: 等同于prototype https://github.com/HOUCe/shuffle-array
 *        影响了原array
 *        不考虑纯函数的情况，这个应该是最优解
 *        看来我们对纯函数的理解出了问题........mmp
 * @see:
 */
// const shuffle = function shuffle(array) {
//   let temp, randomIndex;
//   let endIndex = array.length;
//   while (endIndex > 0) {
//     randomIndex = Math.floor(Math.random() * endIndex--);
//     temp = array[endIndex];
//     array[endIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }
//   return array;
// };

/**
 * @brief:
 * @param {*} array
 * @return {*}
 * @note: 纯函数，但有点浪费空间
 * @see:
 */
const shuffleC = function shuffleNeedDoubleSpace(array) {
  const copy = [...array];
  const shuffledArray = [];
  let randomIndex;
  let endIndex = copy.length;
  while (endIndex > 0) {
    randomIndex = Math.floor(Math.random() * endIndex--);
    shuffledArray.push(copy.splice(randomIndex, 1)[0]);
  }
  return shuffledArray;
};

/**
 * @brief:
 * @param {*} arr
 * @return {*}
 * @note:未影响原array
 * @see:
 */
// const shuffle = function shuffle(arr) {
//   const array = [...arr];
//   let temp, randomIndex;
//   let endIndex = array.length;
//   while (endIndex > 0) {
//     randomIndex = Math.floor(Math.random() * endIndex--);
//     temp = array[endIndex];
//     array[endIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }
//   return array;
// };

/**
 * @brief:
 * @param {*} array
 * @return {*}
 * @note:未影响原array 改进观感
 * @see:
 */
// const shuffle = function shuffle(array) {
//   const copy = [...array];
//   let randomIndex;
//   let endIndex = copy.length;
//   while (endIndex > 0) {
//     randomIndex = Math.floor(Math.random() * endIndex--);
//     temp = copy[endIndex];
//     copy[endIndex] = copy[randomIndex];
//     copy[randomIndex] = temp;
//   }
//   return copy;
// };

/**
 * @brief:
 * @param {*} array
 * @return {*}
 * @note:未影响原array 进一步改进观感/其实也没怎么改善，直接交换，上面的其实更容易理解吧
 * @see:
 */
const shuffleFinal = function shuffleFinal(array) {
  const copy = [...array];
  let j;
  for (let i = 0; i < copy.length - 1; i++) {
    j = i + Math.floor(Math.random() * (copy.length - i));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
///////////////////////////////////////////////////////////////////////////////////
/**
 * @brief: 不是真正意义上的完全乱序
 * @param {*} function
 * @return {*}
 * @note: 如何将一个 JavaScript 数组打乱顺序 https://www.zhihu.com/question/68330851
 * @see:
 */
// targetArray.sort(function () {
//   return 0.5 - Math.random();
// });
const shuffleSimple = function shuffleSimple(arr) {
  const array = [...arr];
  return array.sort(() => Math.random() - 0.5);
};

const realShuffle = function realShuffle(arr) {
  const array = [...arr];
  while (array.length > 0) {}
};

////////////////////////////////////////////////////////////////////////////////////
/**
 * @brief: 选择排序而非冒泡排序，升序，时间复杂度n2
 * @param {*} oldArray
 * @return {*}
 * @note: 代码风格指南 使用数组的拓展运算符 ... 来复制数组。
 *        这个是把小的降下来，，，emmm像是倒泡泡
 *        但是没有交换，只是每次选出一个极值
 * @note: 这果然不是冒泡而是选择排序，，，，，，改个错误，i<array.lenth-1;不然j就会越界
 * @see:
 */
const selectionSort = function selectionSort(oldArray) {
  const array = [...oldArray];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
};

/**
 * @brief: 这才是正宗的冒泡排序
 * @param {*} oldArray
 * @return {*}
 * @note: 可以在第一个循环里加一个标志位，如果在第二个循环体内，一整轮标志位都没有发生改变，说明，排序已提前完成，
 *        就可以提前结束，可以减少渐进下线，虽然实际上大多数情况下并没有多大的用处
 * @see:
 */
const bubbleSort = function bubbleSort(oldArray) {
  const array = [...oldArray];
  for (let i = 0; i < array.length; i++) {
    let flag = false;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
  return array;
};

/**
 * @brief: 插入排序第一版
 * @param {*} arr
 * @return {*}
 * @note:
 * @see:
 */
const insertionSortA = function insertionSortA(arr) {
  const array = [...arr];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
  return array;
};

/**
 * @brief: 插入排序第二版
 * @param {*} arr
 * @return {*}
 * @note: 像冒泡排序最终版一样，这个是把已排序的数组利用起来，判断，位置，提前跳出内嵌循环计入到下一轮外循环
 *        为了实现纯函数开辟多余的空间，并不会明显的导致时间复杂度变化，毕竟开辟空间是常量及的时间复杂度
 * @see:
 */
const insertionSort = function insertionSort(arr) {
  const array = [...arr];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (array[j] > array[j - 1]) break;
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
    }
  }
  return array;
};

// const millionArray = gen(40);
// console.log(verifyProbality(millionArray, shuffleSimple));
// console.log(verifyProbality(millionArray, shuffle));
let array = gen(100000);
// console.log(...array);
array.shuffle();
array.sort((a,b)=>{return a-b;})
// console.log(...array);
// const selectionArray = selectionSort(array);
// console.log(`selection:${[...selectionArray]}`);
// const bubbleArray = bubbleSort(array);
// console.log(`bubble:${[...bubbleArray]}`);
// const insertionArray = insertionSort(array);
// console.log(`insertion:${[...insertionArray]}`);
// console.log(...array);




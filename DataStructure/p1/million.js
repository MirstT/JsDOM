/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-22 23:24:04
 * @LastEditors  : Mirst
 * @LastEditTime : 2021-11-10 15:30:33
 * @version
 */
//===============================================================================================
// /**
//  * @brief: 有序数组产生器
//  * @param {number} length
//  * @return {[]} array
//  * @note:
//  * @see:
//  */
// const gen = (length = 10) => {
//   const array = [];
//   for (let index = 0; index < length; index++) {
//     array[index] = index;
//   }
//   return array;
// };

const gen = (length = 10) => [...new Array(length).keys()];
// const gen = (length = 10) =>
//   Array.from({ length: length }, (_, index) => index);
// const gen = (length = 10) => Array.from({length:length}).map((_,index)=>index);
//=============================================================================================
/**
 * 验证shuffleFuc的有效性
 * @param {Number} n 验证次数
 * @param {Number} m 在某一位置上验证
 * @return {[]}
 * @TODO 继续用函数式改进
 * @tutorial 纯函数的实现还需要深入挖掘 https://blog.csdn.net/c_kite/article/details/79138814
 * @tutorial js函数参数默认值设置ES5 https://blog.csdn.net/weixin_34128501/article/details/89143250
 * @tutorial js函数参数默认值设置ES6 https://blog.csdn.net/a695993410/article/details/80717995
 * @tutorial JS中给函数参数添加默认值,硬骨头！！！ https://www.cnblogs.com/antineutrino/p/4869041.html
 */
const verifyProbality = (
  array,
  shuffleFuc,
  n = 10000,
  m = array.length - 1
) => {
  let count = 0;
  for (let index = 0; index < n; index++) {
    let arrayShuffle = [...array];
    arrayShuffle = shuffleFuc(arrayShuffle);
    arrayShuffle[m] === m && count++;
    // shuffleFuc(array)[m] === m && count++;
  }
  return (count * array.length) / n;
};
//===========================================================================================
/**
 * @summary: 不是真正意义上的完全乱序
 * @tutorial 如何将一个JavaScript数组打乱顺序 https://www.zhihu.com/question/68330851
 */

// const shuffleSimple = function shuffleSimple(arr) {
//   const array = [...arr];
//   return array.sort(() => Math.random() - 0.5);
// };

const shuffleFalse = (array) => {
  const arr = [...array];
  return arr.sort(() => Math.random() - 0.5);
};

// targetArray.sort(() => Math.random() - 0.5);

//===========================================================================================

const shuffle = (array) => {
  const arr = [...array];
  arr.forEach((_, index) => {
    const randomIndex =
      index + Math.floor(Math.random() * (array.length - index));
    [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
  });
  return arr;
};

Array.prototype.shuffle = function () {
  this.forEach((_, index) => {
    const randomIndex =
      index + Math.floor(Math.random() * (this.length - index));
    [this[index], this[randomIndex]] = [this[randomIndex], this[index]];
  });
};
//================================================================================================
Array.prototype.shuffle1 = function () {
  const array = this;
  let temp, randomIndex;
  let endIndex = array.length - 1;
  for (endIndex; endIndex > 0; endIndex--) {
    randomIndex = Math.floor(Math.random() * (endIndex + 1));
    temp = array[endIndex];
    array[endIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
};

/**
 * @tutorial 如何将一个 JavaScript 数组打乱顺序 https://www.zhihu.com/question/68330851
 */
Array.prototype.shuffle2 = function () {
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
 * @see 纯函数，但有点浪费空间
 */
const shuffleWasteSpace = function shuffleNeedDoubleSpace(array) {
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
 * @see 未影响原array,改进观感
 */
const shuffle3 = (array) => {
  const copy = [...array];
  let randomIndex;
  let endIndex = copy.length;
  while (endIndex > 0) {
    randomIndex = Math.floor(Math.random() * endIndex--);
    temp = copy[endIndex];
    copy[endIndex] = copy[randomIndex];
    copy[randomIndex] = temp;
  }
  return copy;
};

/**
 * @see 未影响原array,进一步改进观感,其实也没怎么改善，直接交换，上面的其实更容易理解吧
 */
const shuffle4 = function shuffleFinal(array) {
  const copy = [...array];
  let j;
  for (let i = 0; i < copy.length; i++) {
    j = i + Math.floor(Math.random() * (copy.length - i));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

//=====================================================================================================

/**
 * 冒泡排序
 * 1.比较相邻的两个元素，如果前一个比后一个大，则交换位置。
 * 2.第一轮的时候最后一个元素应该是最大的一个。
 * 3.按照步骤一的方法进行相邻两个元素的比较，这个时候由于最后一个元素已经是最大的了，所以最后一个元素不用比较。
 * @see {可以在第一个循环里加一个标志位，如果在第二个循环体内，一整轮标志位都没有发生改变，说明，排序已提前完成，就可以提前结束，可以减少渐进下线，虽然实际上大多数情况下并没有多大的用处
 */
const bubbleSort1 = (arr) => {
  const array = [...arr];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = array.length - 1; j > i; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
    }
  }
  return array;
};

/**
 * 36.92 seconds
 * 38.485 seconds
 * 34.791 seconds
 */
const bubbleSort = (arr) => {
  const array = [...arr];
  for (let i = 0; i < array.length - 1; i++) {
    let flag = false;
    for (let j = array.length - 1; j > i; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
  return array;
};

/**
 * 双向冒泡
 * 29.912 seconds
 * 25.088 seconds
 * 26.827 seconds
 */
const bidBubbleSort = (arr) => {
  const array = [...arr];
  for (let i = 0; i < Math.ceil(array.length / 2) - 1; i++) {
    let flag = false;
    for (let j = array.length - i - 1; j > i; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
        flag = true;
      }
    }
    for (let k = i + 1; k < array.length - i - 1; k++) {
      if (array[k] > array[k + 1]) {
        [array[k], array[k + 1]] = [array[k + 1], array[k]];
        flag = true;
      }
    }
    if (!flag) break;
  }
  return array;
};

//======================================================================================================

/**
 * 选择排序
 * 6.676 seconds
 * 6.674 seconds
 * 6.496 seconds
 * @see: 像是冒泡,但是没有交换，只是每次选出一个极值
 */

const selectionSort = (arr) => {
  const array = [...arr];
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
};

//======================================================================================================

/**
 * 插入排序
 * 18.783 seconds
 * 19.361 seconds
 * 20.633 seconds
 * @see 像冒泡排序最终版一样，这个是把已排序的数组利用起来，判断，位置，提前跳出内嵌循环计入到下一轮外循环
 */
// const insertionSort = (arr) => {
//   const array = [...arr];
//   for (let i = 1; i < array.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (array[j] > array[i]) {
//         [array[i], array[j]] = [array[j], array[i]];
//       }
//     }
//   }
//   return array;
// };

/**
 * 12.657 seconds
 * 12.327 seconds
 * 12.498 seconds
 */
const insertionSort = (arr) => {
  const array = [...arr];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (array[j] > array[j - 1]) break;
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
    }
  }
  return array;
};

const insertionGapSort = (arr, gap) => {
  const array = [...arr];
  for (let i = 0; i < array.length - gap; i++) {
    for (let j = i + gap; j - gap + 1 > 0; j -= gap) {
      if (array[j] > array[j - gap]) break;
      [array[j - gap], array[j]] = [array[j], array[j - gap]];
    }
  }
  return array;
};

//===========================================================================================

/**
 * 希尔排序
 * 类比插入排序，写一个带有gap的通用插入排序 insertionGapSort
 * @see insertionGapSort
 */
const shellSort = (arr) => {
  let array = [...arr];
  let gap = ~~(array.length / 2);
  while (gap) {
    array = insertionGapSort(array, gap);
    gap = ~~(gap / 2);
  }
  return array;
};
//==========================================================================================

/**
 * 纯函数 第一版合并有序数组
 */
const merge1 = function mergeSortedArrayA(a, b) {
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
 * 纯函数 第二版合并有序数组
 * 这个简化了代码量，但变相增加left right长度？改了left和right 属实不太好???
 */
const merge2 = (a, b) => {
  const left = [...a];
  const right = [...b];
  left.push(Number.POSITIVE_INFINITY);
  right.push(Number.POSITIVE_INFINITY);
  const array = [];
  let lp = 0;
  let rp = 0;
  while (lp < left.length - 1 || rp < right.length - 1) {
    left[lp] <= right[rp] ? array.push(left[lp++]) : array.push(right[rp++]);
  }
  return array;
};

/**
 * 纯函数 第三版合并有序数组 优化代码观感
 * 既然要求纯函数，我就把返回值当作参数传入就行了，且更节省空间
 * @note 此处是分治法中的治？还是 合 应该说合 更为合适， 然后就是循环调用直至全部合并
 * @note 也可用于合并单个数组 ，合并的过程就是排序了，，，，所以，第一轮合并是兼具排序，所以治也被包含在其中，所以整个函数就是治？
 * @see 注意left=[],right=[],提高容错
 */
const merge3 = (left = [], right = []) => {
  const array = [];
  let lp = 0;
  let rp = 0;

  while (array.length < left.length + right.length) {
    if (lp == left.length) {
      while (rp != right.length) array.push(right[rp++]);
      break;
    }
    if (rp == right.length) {
      while (lp != left.length) array.push(left[lp++]);
      break;
    }
    left[lp] < right[rp] ? array.push(left[lp++]) : array.push(right[rp++]);
  }
  return array;
};

const merge4 = (left = [], right = []) => {
  const array = [];
  let lp = 0;
  let rp = 0;

  while (array.length < left.length + right.length) {
    if (lp == left.length && rp < right.length) {
      array.push(...right.slice(rp));
      break;
    }
    if (rp == right.length && lp < left.length) {
      array.push(...left.slice(lp));
      break;
    }
    left[lp] < right[rp] ? array.push(left[lp++]) : array.push(right[rp++]);
  }
  return array;
};

const merge = (left = [], right = []) => {
  const array = [];
  let lp = 0;
  let rp = 0;

  while (lp < left.length && rp < right.length)
    left[lp] < right[rp] ? array.push(left[lp++]) : array.push(right[rp++]);
  if (rp < right.length) array.push(...right.slice(rp));
  if (lp < left.length) array.push(...left.slice(lp));
  return array;
};
//---------------------------------------------------------------------------------------------------
/**
 *怎么divide呢> ,其实没必要了，直接进行mergesort就行了，分完就直接合并了
 * @note 数字取整 https://www.jianshu.com/p/a3202bc3f7a4
 * @see:
 */
const divide = function (array) {
  const mid = ~~(array.length / 2);
  if (mid === 0) return array; //单个值
  let a = [];
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
  left = divide(left);
  right = divide(right);
  a = merge(left, right);
  console.log(...a);
  return a; //回传
};

const mergeSort = (array) => {
  const mid = ~~(array.length / 2);
  if (mid === 0) return array;
  let left = [];
  let right = [];
  left.push(...array.slice(0, mid));
  left = mergeSort(left); //左半部分排好序
  right.push(...array.slice(mid));
  right = mergeSort(right); //右半部分排好序
  return merge(left, right); //合并左右部分
};

//=============================================================================================

const array = gen(10);
console.log(array); //这两个表现形式的区别需要进一步探讨
console.log(`array:\t\t\t\t${array}`);
console.log(`...array:\t\t\t${[...array]}`);
console.log(`shuffleFalse:\t\t${verifyProbality(array, shuffleFalse)}`);
console.log(`shuffle:\t\t\t${verifyProbality(array, shuffle)}`);

const shuffledArray = shuffle(array);
console.log(`shuffledArray:\t\t${[...shuffledArray]}`);

const bubbleArray = bubbleSort(shuffledArray);
console.log(`bubbleArray:\t\t${[...bubbleArray]}`);

const bidBubbleArray = bidBubbleSort(shuffledArray);
console.log(`bidBubbleArray:\t\t${[...bidBubbleArray]}`);

const selectionArray = selectionSort(shuffledArray);
console.log(`selectionArray:\t\t${[...selectionArray]}`);

const insertionArray = insertionSort(shuffledArray);
console.log(`insertionArray:\t\t${[...insertionArray]}`);

const insertionGapArray = insertionGapSort(shuffledArray, 1);
console.log(`insertionGapArray:\t${[...insertionGapArray]}`);

const shellArray = shellSort(shuffledArray);
console.log(`shellArray:\t\t\t${[...shellArray]}`);

const mergeSortArray = mergeSort(shuffledArray);
console.log(`mergeSortArray:\t\t${[...mergeSortArray]}`);

//====================================================================================================

/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-25 09:34:58
 * @LastEditors  : Mirst
 * @LastEditTime : 2021-11-10 17:18:18
 */

const balance = (arr) => {
  const array = new Array(arr.length);
  const pivot = arr[arr.length - 1];
  let reverseKey = -1;
  arr.array.forEach((element) => {
    element <= pivot ? array.push(element) : (array[reverseKey--] = element);
  });
  return array;
};

/**
 * @note 相比合并排序，快排少了向上合并的过程，拆分完成后就是最终排好序的空间复杂度相比合并排序低了很多
 */
const quickSort = function quickSortA(arr) {
  let array = [...arr];
  let pivot = array.length - 1;
  for (let i = 0; i < pivot; i++) {
    if (array[i] > array[pivot]) {
      [array[i], array[pivot]] = array[(array[pivot], array[i])];
      pivot = i;
    }
  }
};

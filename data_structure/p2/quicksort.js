/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-25 09:34:58
 * @LastEditors  : Mirst
 * @LastEditTime : 2021-11-12 17:29:31
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
 * 快速排序 
 */
 const quickSort = (array) => {
  if (array.length < 2) return array;
  const pviot = ~~(array.length / 2);
  const left = [];
  const right = [];
  const middle = [];
  array.forEach((value) => {
    if (value < array[pviot]) {
      left.push(value);
    } else if (value > array[pviot]) {
      right.push(value);
    } else {
      middle.push(value);
    }
  });
  return quickSort(left).concat(middle, quickSort(right));
};
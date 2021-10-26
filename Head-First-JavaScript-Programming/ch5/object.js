/*
 * @Descripttion: 使用对象方法的简写写法。
 * @version: 
 * @Author: Mirst
 * @Date: 2021-10-26 14:29:09
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-26 14:29:09
 */
// 差评
const atom = {
    value: 1,
  
    addValue: function (value) {
      return atom.value + value;
    },
  };
  
  // 好评
  const atom = {
    value: 1,
  
    addValue(value) {
      return atom.value + value;
    },
  };
/*
 * @Descripttion: 
 * @version: 
 * @Author: Mirst
 * @Date: 2021-10-20 23:31:04
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-21 08:08:13
 */


function getKey(k) {
    return `a key named ${k}`;
  }
  
  // bad
  const obj = {
    id: 5,
    name: 'San Francisco',
  };
  obj[getKey('enabled')] = true;
  
  // good
  const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
  };
  



  const items=[1,2,3,4,5];
  const itemsTry=items;
  const itemsCopy=[...items];
  itemsCopy[5]=6;
  itemsTry[5]=777;
  console.log(...items);
  console.log(...itemsCopy);
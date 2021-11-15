/*
 * @Description  :
 * @version      :
 * @Author       : Mirst
 * @Date         : 2021-11-13 08:27:11
 * @LastEditors  : Mirst
 * @LastEditTime : 2021-11-13 23:55:29
 */

const getRandomNum = () => Math.ceil() * 100;

const getInputNum = () => document.getElementById("inputNum").value;

const submitGuess = () => {
  alert(getInputNum());
};

document.getElementById("submitGuess").addEventListener("click", submitGuess);

const actions = {
    1: 'processing',
    2: 'fail',
    3: 'success',
    4: 'cancel',
    default: 'other',
  };
  
  console.log(actions[status] ?? actions.default);

  if (+0===-0n) {
      console.log(2333);
  }
  
  
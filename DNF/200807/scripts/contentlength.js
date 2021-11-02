/*
 * @Descripttion :
 * @version      :
 * @Author       : Mirst
 * @Date         : 2021-11-02 13:28:03
 * @LastEditors  : Mirst
 * @LastEditTime : 2021-11-02 17:02:00
 */

/**
 * @brief:将func加载道window.onload中，html初始化完成后立刻执行
 * @param {*} func 需要添加的函数名
 * @return {*}
 * @note:
 * @see:
 */
const addLoadEvent = function addLoadEvent(func) {
  var oldonload = window.onload;
  window.onload =
    typeof oldonload != "function"
      ? func
      : function () {
          oldonload();
          func();
        };
};

const getHeightOfTxt = function getHeightOfTxtToSetBG() {
  const boxBgElem = document.getElementById("txt-bg");
  const boxTxtElem = document.getElementById("box-txt");
  boxBgElem.style.height = `${boxTxtElem.offsetHeight +2}px`;
};
// window.addEventListener("load", getHeightOfTxt);
addLoadEvent(getHeightOfTxt);

/*
 * @Descripttion: 
 * @version: 
 * @Author: Mirst
 * @Date: 2021-10-12 12:49:09
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-12 12:49:09
 */

/*
 * @brief:将func加载道window.onload中，html初始化完成后立刻执行 
 * @param {*} func 需要添加的函数名
 * @return {*}
 * @note: 
 * @see: 
 */
 function addLoadEvent(func) {
    var oldonload = window.onload;
    window.onload = typeof oldonload != "function" ? func : function () {
        oldonload();
        func();
    }
}
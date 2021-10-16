/*
 * @Descripttion: 
 * @version: 
 * @Author: Mirst
 * @Date: 2021-10-16 09:25:08
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-16 10:33:42
 */
function addLoadEvent(func) {
    var oldonload = window.onload;
    window.onload = typeof oldonload != "function" ? func : function () {
        oldonload();
        func();
    }
}

function moveElement(elementID,final_x,final_y,interval){
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById(elementID)) {
        return false;
    }
    var element=document.getElementById(elementID);
    var x_pos=parseInt(element.style.left);
    var y_pos=parseInt(element.style.top);
    if (x_pos==final_x&&y_pos==final_y) {
        return true;
    }
    if (x_pos<final_x) {
        x_pos++;
    }
    if (x_pos>final_x) {
        x_pos--;
    }
    if (y_pos<final_y) {
        y_pos++;
    }
    if (y_pos>final_y) {
        y_pos--;
    }
    element.style.left=x_pos+"px";
    element.style.top=y_pos+"px";
    // var test="moveElement("+elementID+","+final_x+","+final_y+","+interval+")";//这里是一个非常严重的易错点
    // alert(test);//你打印出来就知道了，你传入的应该是"message1",但事实上却传入了message1，没有这个变量！！！！！‘’可以解决
    var test=`moveElement("${elementID}",${final_x},${final_y},${interval})`
    movement=setTimeout(test,interval);
}

function positionMessage(){
    if (!document.getElementById) {
        return false;
    }
    var msg1=document.getElementById("message1");
    // var msg2=document.getElementById("message2");
    msg1.style.position="absolute";
    msg1.style.left="200px";
    msg1.style.top="200px";
    moveElement("message1",100,300,20);
}

addLoadEvent(positionMessage);
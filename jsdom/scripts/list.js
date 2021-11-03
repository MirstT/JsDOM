/*
 * @Descripttion: 
 * @version: 
 * @Author: Mirst
 * @Date: 2021-10-16 10:53:52
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-16 12:22:25
 */

/**
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

/**
 * @brief: 在节点之后插入另一个节点
 * @param {*} newElement 待插入的节点 
 * @param {*} targetElement 目标位置节点 newElement插入targetElement之后
 * @return {*}
 * @note: html结构中的各种空格，换行符都可能会把文本节点当做同胞元素处理。if(!nextSibling)会导致错误
 * @see: preparePlaceholder()
 */
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

/**
 * @brief: 返回至少1或-1
 * @param {*} num 
 * @return {*}
 * @note: 0以下向下取整，0以上向上取整，0以下，返回错误
 * @see: 
 */
function moveAtLeastOnePx(num) {
    if (num == 0) {
        return false;
    }
    if (num > 0) {
        return Math.ceil(num);
    }
    if (num < 0) {
        return Math.floor(num);
    }
}

/**
 * @brief: 移动一个id为elementID至（final_x，final_y）的动画
 * @param {*} elementID 字符串id
 * @param {*} final_x
 * @param {*} final_y
 * @param {*} interval 调用间隔
 * @return {*}
 * @note: 元素position为absolute
 * @see: 
 */
function moveElement(elementID, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;

    var element = document.getElementById(elementID);
    if (!element.style.left) { //如果没有自动赋值
        element.style.left = "0px";
    }
    if (!element.style.top) {
        element.style.top = "0px";
    }

    if (element.movement) {
        clearTimeout(element.movement); //防止抖动！！！！
    }

    var xpos = parseInt(element.style.left); //数据转换
    var ypos = parseInt(element.style.top);
    var dist = 0;
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos != final_x) {
        dist = moveAtLeastOnePx((final_x - xpos) / 20);
        xpos += dist;
    }
    if (ypos != final_y) {
        dist = moveAtLeastOnePx((final_y - ypos) / 20);
        ypos += dist;
    }
    element.style.left = xpos + "px";
    element.style.top = ypos + "px";
    var repeat = `moveElement("${elementID}",${final_x},${final_y},${interval})`;
    element.movement = setTimeout(repeat, interval);
}

function moveList() {
    if (!document.getElementById || !document.getElementsByTagName) return false;
    if (!document.getElementById("preview") || !document.getElementById("linklist")) return false;

    var linklist = document.getElementById("linklist");
    var links = linklist.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        links[i].onmouseover = function () {
            moveElement("preview", -250 * (i + 1), 0, 4);
        }
    }
}

function createList(){
    if (!document.getElementById || !document.getElementsByTagName) return false;

    var slidesshow=document.createElement("div");
    slidesshow.setAttribute("id","slideshow");

    var img=document.createElement("img");
    img.setAttribute("src","images/topics.png");
    img.setAttribute("alt","topics");
    img.setAttribute("id","preview");
    slidesshow.appendChild(img);
    
    insertAfter(slidesshow,document.getElementById("linklist"));
}

addLoadEvent(createList);
addLoadEvent(moveList);
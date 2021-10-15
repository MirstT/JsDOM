/*
 * @Descripttion: 
 * @version: 
 * @Author: Mirst
 * @Date: 2021-10-14 18:43:27
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-15 14:08:26
 */
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function getNextElement(node) {
    if (!node.nextSibling) return null;
    var nextnode = node.nextSibling;
    if (nextnode.nodeType == 1) return nextnode;
    return getNextElement(nextnode);//不return怎么返回呢？？？？90%
    //html里的回车换行都会是一个sibling看来sibling不是可视化软件显示的那样
}

// function getNextElement(node) {
//     if (node.nodeType == 1) {
//         return node;
//     }
//     if (node.nextSibling) {
//         return getNextElement(node.nextSibling);
//     }
//     return null;
// }


function styleHeaderSiblings() {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    var element;
    for (let i = 0; i < headers.length; i++) {
        element = getNextElement(headers[i]);
        // element=headers[i].nextElementSibling;
        if (element==null) continue;//这里就是错误的关键10%！！！element返回为null的时候，无法设置style会使程序中断
        element.style.color = "red";
    }
}

addLoadEvent(styleHeaderSiblings);
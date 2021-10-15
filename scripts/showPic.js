/*
 * @Descripttion: 提供图片切换功能
 * @version: 1.0
 * @Author: Mirst
 * @Date: 2021-10-12 10:05:58
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-12 12:44:11
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
 * @param {*} targetElement 目标位置节点
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
 * @brief:加载placeholder及txt描述
 * @param {*}
 * @return {*}
 * @note: 只有js可用时加载
 * @see: 
 */
function preparePlaceholder() {
    if (!document.getElementById ||
        !document.createElement ||
        !document.createTextNode ||
        !document.getElementById("imagegallery")) {
        return false;
    }
    var imagegallery = document.getElementById("imagegallery");

    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.jpg");
    placeholder.setAttribute("alt", "placeholder");

    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctxt = document.createTextNode("Choose an image.");
    description.appendChild(desctxt);

    insertAfter(placeholder, imagegallery);
    insertAfter(description, placeholder); //按照这个插入顺序，decs是跟在placeholder后面，而非imagegallery
}



/**
 * @brief: 实现画廊功能
 * @param {*}
 * @return {*}
 * @note: 
 * @see: 
 */
function prepareGallery() {
    if (!document.getElementById ||
        !document.getElementsByTagName ||
        !document.getElementById("imagegallery")) {
        return false;
    }
    var imagegallery = document.getElementById("imagegallery");
    var links = imagegallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic(this);
        }
    }
}

/**
 * @brief: 将所点击的图片显示到主图中
 * @param {*} whichpic 要显示的图片
 * @return {*} true 无法显示到主图，采用默认跳转
 *             false 可以显示，禁用默认跳转
 * @note: 
 * @see: inks[i].onclick = function ()
 */
function showPic(whichpic) {
    if (!document.getElementById("placeholder")) {
        return true;
    }
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    if (!document.getElementById("description")) {
        return false;
    }
    var picdesc = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
    var description = document.getElementById("description");
    // description.innerHTML = picdesc;
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = picdesc;
    }
    return false;
}


//加载
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
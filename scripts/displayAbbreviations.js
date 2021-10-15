/*
 * @Descripttion: 
 * @version: 
 * @Author: Mirst
 * @Date: 2021-10-13 23:53:07
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-14 17:03:42
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

// function displayAbbr() {
//     if (!document.getElementsByTagName || !document.getElementsByTagName("abbr")) {
//         return false;
//     }

//     var abbrelements = document.getElementsByTagName("abbr");
//     var abbrs = new Array();
//     var abbrdescs = new Array();

//     for (let i = 0; i < abbrelements.length; i++) {
//         abbrs[i] = abbrelements[i].firstChild.nodeValue;
//         abbrdescs[i] = abbrelements[i].getAttribute("title");
//     }


//     var dl = createDl(abbrs, abbrdescs);
//     if (dl) {
//         document.body.appendChild(dl);
//     }else{
//         return false;
//     }
// }

// function createDl(dtarray, ddarray) {
//     if (!document.createElement) {
//         return false;
//     }
//     var dl = document.createElement("dl");
//     for (let i = 0; i < dtarray.length; i++) {
//         var dtelement = document.createElement("dt");
//         dtelement.innerHTML = dtarray[i];
//         dl.appendChild(dtelement);

//         var ddelement = document.createElement("dd");
//         ddelement.innerHTML = ddarray[i];
//         dl.appendChild(ddelement);
//     }
//     return dl;
// }

function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement ||
        !document.createTextNode) {
        return false;
    }
    //取得所有缩略词
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    //遍历这些缩略词
    for (let i = 0; i < abbreviations.length; i++) {
        //避免IE6出错
        if (abbreviations[i].childNodes.length < 1) continue;
        defs[abbreviations[i].lastChild.nodeValue] = abbreviations[i].getAttribute("title");
    }
    //创建定义列表
    var dlist = document.createElement("dl");
    for (key in defs) {
        //创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //创建定义描述
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(defs[key]);
        ddesc.appendChild(ddesc_text);
        //把它们添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length < 1) return false;
    //创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbrevations");
    header.appendChild(header_text);
    //添加
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

// function displayCitations() {
//     if (!document.getElementsByTagName || !document.createElement ||
//         !document.createTextNode) {
//         return false;
//     }
//     //取得引用
//     var citations = document.getElementsByTagName("blockquote");
//     if (citations.length < 1) return false;
//     var sources = new Array();
//     //遍历引用取得引用源
//     for (let i = 0; i < citations.length; i++) {
//         sources[i] = citations[i].getAttribute("cite");
//     }
//     //创建引用列表
//     var sourcelist = document.createElement("ol");
//     for (let i = 0; i < sources.length; i++) {
//         //创建引用项
//         var sourcelist_item = document.createElement("li");
//         var sourcelist_item_text = document.createTextNode(sources[i]);
//         //组装引用项至列表
//         sourcelist_item.appendChild(sourcelist_item_text);
//         sourcelist.appendChild(sourcelist_item);
//     }
//     if (sourcelist.childNodes.length < 1) return false;
//     //创建标题
//     var header = document.createElement("h2");
//     var header_text = document.createTextNode("Sources")
//     header.appendChild(header_text);

//     document.body.appendChild(header);
//     document.body.appendChild(sourcelist);
// }

// function displayCitations() {
//     if (!document.getElementsByTagName || !document.createElement ||
//         !document.createTextNode) {
//         return false;
//     }
//     //取得所有引用
//     var quotes = document.getElementsByTagName("blockquote");
//     //遍历引用
//     for (let i = 0; i < quotes.length; i++) {
//         //如果没有cite属性，继续循环
//         if (!quotes[i].getAttribute("cite")) continue;
//         //保存cite属性
//         var url = quotes[i].getAttribute("cite");
//         //取得引用中的所有元素节点
//         var quote_children = quotes[i].getElementsByTagName('*');
//         //如果没有元素节点，继续循环
//         if (quote_children.length < 1) continue;
//         //取得引用中的最后一个元素节点
//         var elem = quote_children[quote_children.length - 1];
//         //创建标记
//         var link = document.createElement("a");
//         var link_text = document.createTextNode("source");
//         link.appendChild(link_text);
//         link.setAttribute("href", url);
//         var superscript = document.createElement("sup");
//         superscript.appendChild(link);
//         elem.appendChild(superscript);
//     }
// }

function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement ||
        !document.createTextNode) {
        return false;
    }
    //取得所有引用
    var quotes = document.getElementsByTagName("blockquote");
    if (quotes.length < 1) return false;

    //自己定的source列表
    var urllist = document.createElement("ol");
    var urlcount = 0;
    ///////////////////

    //遍历引用
    for (let i = 0; i < quotes.length; i++) {
        //如果没有cite属性，继续循环
        if (!quotes[i].getAttribute("cite")) continue;
        //保存cite属性
        var url = quotes[i].getAttribute("cite");
        //取得引用中的所有元素节点
        var quote_children = quotes[i].getElementsByTagName('*');
        //如果没有元素节点，继续循环
        if (quote_children.length < 1) continue;
        //取得引用中的最后一个元素节点
        var elem = quote_children[quote_children.length - 1];
        //创建标记
        var link = document.createElement("a");
        //利用模板字面量与字符串插值建立url上标[urlcount]
        link.appendChild(document.createTextNode(`[${++urlcount}]`));
        link.setAttribute("href", url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        //在原文引用中添加标记
        elem.appendChild(superscript);
        ////////////////////////////
        var urllist_item = document.createElement("li");
        var urllist_item_a = document.createElement("a");
        urllist_item_a.appendChild(document.createTextNode(url));
        urllist_item_a.setAttribute("href", url);
        urllist_item.appendChild(urllist_item_a);
        urllist.appendChild(urllist_item);
    }
    //创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Sources")
    header.appendChild(header_text);
    //添加
    document.body.appendChild(header);
    document.body.appendChild(urllist);
}


function displayAccessKeys() {
    if (!document.getElementsByTagName || !document.createElement ||
        !document.createTextNode) {
        return false;
    }

    var links = document.getElementsByTagName("a");
    var list = document.createElement("ul");

    //遍历这些缩略词
    for (let i = 0; i < links.length; i++) {
        cur_link=links[i];
        if (!cur_link.getAttribute("accesskey")) continue;
        var key=cur_link.getAttribute("accesskey");
        var access=cur_link.lastChild.nodeValue;

        var list_item = document.createElement("li");
        var list_item_text = document.createTextNode(`${key}:${access}`);
        list_item.appendChild(list_item_text);
        list.appendChild(list_item);
    }
    if (list.childNodes.length < 1) return false;
    //创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("AccessKeys");
    header.appendChild(header_text);
    //添加
    document.body.appendChild(header);
    document.body.appendChild(list);
}
//页面加载时初始化
addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);
addLoadEvent(displayAccessKeys);
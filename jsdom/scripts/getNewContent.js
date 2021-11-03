/*
 * @Descripttion: 
 * @version: 
 * @Author: Mirst
 * @Date: 2021-10-12 12:50:10
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-12 13:48:32
 */

function getNewContent() {
    var request = getHTTPObject();
    if (request) {
        request.open("GET", "example.txt", true);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById('new').appendChild(para);
            }
        };
        request.send(null);
    }else{
        alert("Sorry,your browser doesn\'t support XMLHttpRequest");
    }
    alert("Function Done");
}

addLoadEvent(getNewContent);
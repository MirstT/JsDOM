/*
 * @Descripttion: 
 * @version: 
 * @Author: Mirst
 * @Date: 2021-10-16 13:31:41
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-18 17:28:37
 */


function createVideoControls(){
    var vids = document.getElementsByTagName("video");
    for(var i=0;i<vids.length;i++){
        addControls(vids[i]);
    }
}

function addControls(vid){
    vid.removeAttribute("controls");

    vid.height=vid.videoHeight;
    vid.width=vid.videoWidth;

    vid.parentNode.style.height=vid.videoHeight+"px";
    vid.parentNode.style.width=vid.videoWidth+"px";

    var controls = document.createElement("div");
    controls.setAttribute("class","controls");

    var p;
}


window.onload=function(){
    createVideoControls();
}
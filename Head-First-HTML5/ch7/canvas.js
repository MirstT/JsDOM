/*
 * @Descripttion: 
 * @version: 
 * @Author: Mirst
 * @Date: 2021-10-21 11:05:10
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-21 13:58:02
 */

window.onload=function(){
    const button = document.getElementById('previewButton');
    button.onclick=previewHandler;
}

function previewHandler(){
    const canvas = document.getElementById('canvasTest');
    const context = canvas.getContext('2d');
    fillBGColor(canvas,context);

    const selectShape=document.getElementById('selectShape');
    const index=selectShape.selectedIndex;
    const shape=selectShape[index].value;

    if (shape=='squares') {
        for (let squares = 0; squares < 60; squares++) {
            drawSquare(canvas,context);
        }
    }
}

function drawSquare(canvas,context){
    const w =Math.floor(Math.random()*40);
    const x=Math.floor(Math.random()*canvas.width);
    const y=Math.floor(Math.floor(Math.random()*canvas.height));

    context.fillStyle='lightblue';
    context.fillRect(x,y,w,w);
}

function fillBGColor(canvas,context){
    const selectBGColor=document.getElementById('selectBGColor');
    const index=selectBGColor.selectedIndex;
    const BGColor=selectBGColor[index].value;
    context.fillStyle=BGColor;
    context.fillRect(0,0,canvas.width,canvas.height);
}
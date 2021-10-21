/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-21 11:05:10
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-21 15:22:41
 */

window.onload = function () {
  const button = document.getElementById("previewButton");
  button.onclick = previewHandler;
  drawSmileFace();
};

function previewHandler() {
  const canvas = document.getElementById("canvasTest");
  const context = canvas.getContext("2d");
  fillBGColor(canvas, context);

  const selectShape = document.getElementById("selectShape");
  const index = selectShape.selectedIndex;
  const shape = selectShape[index].value;

  // 测试弧
  // context.arc(300,300,225,degreesToRadians(-20),degreesToRadians(270),false);
  // context.fillStyle='red';
  // context.fill();

  if (shape == "squares") {
    for (let i = 0; i < 60; i++) {
      drawSquare(canvas, context);
    }
  } else if (shape == "circles") {
    for (let i = 0; i < 40; i++) {
      drawCircle(canvas, context);
    }
  }
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function drawSquare(canvas, context) {
  const w = Math.floor(Math.random() * 40);
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.floor(Math.random() * canvas.height));

// //   context.beginPath();//开始path
//   context.moveTo(100,150);//提笔至此
//   context.lineTo(250,75);
//   context.lineTo(125,30);
// //   context.closePath();//用来合并
//   context.lineWidth=50;
//   context.stroke();//离笔结束，画出来边框
// //   context.fillStyle='red';
// //   context.fill();

  context.fillStyle = "lightblue";
  context.fillRect(x, y, w, w);
}

function drawCircle(canvas, context) {
  const r = Math.floor(Math.random() * 60);
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.floor(Math.random() * canvas.height));

  context.beginPath();//你可以试试删掉beginPath,这里是一个重置的作用，毕竟，记录点一直都在
  context.fillStyle = "lightblue";
  context.arc(x, y, r, 0, 2*Math.PI, false);
//   context.lineWidth=5;
//   context.stroke();
  context.fill();
}

function fillBGColor(canvas, context) {
  const selectBGColor = document.getElementById("selectBGColor");
  const index = selectBGColor.selectedIndex;
  const BGColor = selectBGColor[index].value;
  context.fillStyle = BGColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSmileFace(){
    const canvas=document.getElementById('smiley');
    const context=canvas.getContext('2d');

    context.fillStyle='black';
    context.lineWidth=2;
    
    context.beginPath();
    context.arc(300,300,200,0,2*Math.PI,false);
    context.stroke();

    context.beginPath();
    context.arc(200,250,25,0,2*Math.PI,false);
    context.stroke();

    context.beginPath();
    context.arc(400,250,25,0,2*Math.PI,false);
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(300,300);
    context.lineTo(300,350);
    context.stroke();

    context.beginPath();
    context.arc(300,350,75,degreesToRadians(20),degreesToRadians(160),false);
    context.stroke();
    context.fill();
}

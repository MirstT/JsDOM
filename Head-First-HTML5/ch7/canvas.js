/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-21 11:05:10
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-21 18:05:23
 */

window.onload = function () {
  const button = document.getElementById("previewButton");
  button.onclick = previewHandler;
  //   drawSmileFace();
};

function previewHandler() {
  const canvas = document.getElementById("canvasTest");
  const context = canvas.getContext("2d");
  fillBGColor(canvas, context);
  drawShapes(canvas, context);
  drawText(canvas, context);
}

function drawShapes(canvas, context) {
  const selectShape = document.getElementById("selectShape");
  const index = selectShape.selectedIndex;
  const shape = selectShape[index].value;
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

function drawText(canvas, context) {
  context.fillStyle = "black";
  context.font = "bold 2em sans-serif";
  context.textAlign = "left";
  context.fillText("I saw this tweet", 20, 40);

  drawTweet(canvas, context);

  context.fillStyle = "black";
  context.font = "bold 1em sans-serif";
  context.textAlign = "right";
  context.fillText(
    "and all I got was this lousy t-shirt!",
    canvas.width - 20,
    canvas.height - 40
  );
}
function drawTweet(canvas, context) {
  const selectObj = document.getElementById("foregroundColor");
  const index = selectObj.selectedIndex;
  const fgColor = selectObj[index].value;
  context.fillStyle = fgColor;
  context.font = "italic bold 3em serif";
  context.textAlign = "center";

  const tweetsSelection = document.getElementById("tweets");
  const tweetsOptionList = tweetsSelection.getElementsByTagName("option");
  const tweetsSelectedIndex = tweetsSelection.selectedIndex;
  //理论上，这里的value应与text一样，如此就可以 value值是为程序所用，text为人所阅读
  //tweetsSelection[tweetsSelection.selectedIndex].value = tweetsOptionList[tweetsSelectedIndex].text
  context.fillText(
    tweetsOptionList[tweetsSelectedIndex].text,
    canvas.width / 2,
    canvas.height / 2,
    canvas.width
  );
  context.strokeText(
    tweetsOptionList[tweetsSelectedIndex].text,
    canvas.width / 2,
    canvas.height / 2+20,
    canvas.width
  );
  context.shadowBlur=20;
  context.shadowColor="black";//color默认好像·是透明的，无色的；
  context.fillText(
    tweetsOptionList[tweetsSelectedIndex].text,
    canvas.width / 2,
    canvas.height / 2+60,
    canvas.width
  );
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function drawSquare(canvas, context) {
  const w = Math.floor(Math.random() * 60);
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

  context.beginPath(); //你可以试试删掉beginPath,这里是一个重置的作用，毕竟，记录点一直都在
  context.fillStyle = "lightblue";
  context.arc(x, y, r, 0, 2 * Math.PI, false);
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

//oneTweet:   {"name":"ARTESIA","time":1308774240669,"sales":8}
function updateTweets(tweetsList) {
  const tweets = document.getElementById("tweets");
  tweetsList.forEach((oneTweet) => {
    const option = document.createElement("option");
    option.setAttribute("value", oneTweet.time);
    // option.value=oneTweet.time.replace("\\","'");
    option.innerHTML = `tweet-${oneTweet.name}-${oneTweet.time}-${oneTweet.sales}`;
    tweets.appendChild(option);
    // tweets.options.add(option);//等效，这个应该更好吧？
  });
  // tweets.firstChild.setAttribute('selected','selected');
  tweets.selectedIndex = 0;
}

function drawSmileFace() {
  const canvas = document.getElementById("smiley");
  const context = canvas.getContext("2d");

  context.fillStyle = "black";
  context.lineWidth = 2;

  context.beginPath();
  context.arc(300, 300, 200, 0, 2 * Math.PI, false);
  context.stroke();

  context.beginPath();
  context.arc(200, 250, 25, 0, 2 * Math.PI, false);
  context.stroke();

  context.beginPath();
  context.arc(400, 250, 25, 0, 2 * Math.PI, false);
  context.fill();
  context.stroke();

  context.beginPath();
  context.moveTo(300, 300);
  context.lineTo(300, 350);
  context.stroke();

  context.beginPath();
  context.arc(300, 350, 75, degreesToRadians(20), degreesToRadians(160), false);
  context.stroke();
  context.fill();
}

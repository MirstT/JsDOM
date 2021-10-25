/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-22 14:56:40
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-25 18:36:29
 */

const videos = { video1: "video/demovideo1", video2: "video/demovideo2" };

/**
 * @brief: 获取浏览器能够播放的视频类型，并返回该视频类型后缀
 * @param {*}
 * @return {*}
 * @note: 改了以下，让它符合纯函数
 * @see:
 */
function getFormatExtension(vidoe) {
  if (video.canPlayType("video/mp4") !== "") {
    return ".mp4";
  } else if (video.canPlayType("videp/webm") !== "") {
    return ".webm";
  } else if (video.canPlayType("video/ogg") !== "") {
    return ".ogv";
  }
}

/**
 * @brief:
 * @param {string} idToPush
 * @param {string[]} idArrayToUnpush
 * @return {*}
 * @note:
 * @see:
 */
const pushUnpushButtons = function pushUnpushButtons(
  idToPush,
  idArrayToUnpush
) {
  if (idToPush != "") {
    const anchor = document.getElementById(idToPush);
    const theClass = anchor.getAttribute("class");
    if (!theClass.indexOf("selected") >= 0) {
      anchor.setAttribute("class", `${theClass} selected`);
      const newImage = `url(images/${idToPush}pressed.png)`;
      anchor.style.background = newImage;
    }
  }
  idArrayToUnpush.forEach((idToUnpush) => {
    const anchorUnpush = document.getElementById(idToUnpush);
    let theClassUnpush = anchorUnpush.getAttribute("class");
    if (theClassUnpush.indexOf("selected") >= 0) {
      //replace会对theClassUnpush重新赋值，所以不能用const
      theClassUnpush = theClassUnpush.replace("selected", "");
      anchorUnpush.setAttribute("class", theClassUnpush);
      anchorUnpush.style.backgroundImage = "";
    }
  });
};

/**
 * @brief:
 * @param {*} id
 * @return {*}
 * @note:
 * @see:
 */
const isButtonPushed = function isButtonPushed(id) {
  const anchor = document.getElementById(id);
  const theClass = anchor.getAttribute("class");
  return theClass.indexOf("selected") >= 0;
};

/**
 * @brief:
 * @param {*} e target 事件属性返回触发事件的元素
 * @return {*}
 * @note: 纯函数确实有利于编程的清晰性
 * @see:
 */
const handleControl = function handleControlForVideoBooth(e) {
  const id = e.target.getAttribute("id");
  const video = document.getElementById("video");

  if (id === "play") {
    pushUnpushButtons("play", ["pause"]);
    if (video.ended) {
      video.load();//如果视频播放结束，需要重新加载视频才能重新开始播放
    }
    video.play();
  } else if (id === "pause") {
    pushUnpushButtons("pause", ["play"]);
  } else if (id === "loop") {
    if (isButtonPushed("loop")) {
      pushUnpushButtons("", ["loop"]);
    } else {
      pushUnpushButtons("loop", []);
    }
  } else if (id === "mute") {
    if (isButtonPushed("mute")) {
      pushUnpushButtons("", ["mute"]);
    } else {
      pushUnpushButtons("mute", []);
    }
  }
};

const setEffect = function setEffectForVideoBooth(e) {
  const id = e.target.getAttribute("id");

  if (id === "normal") {
    pushUnpushButtons("normal", ["western", "noir", "scifi"]);
  } else if (id === "western") {
    pushUnpushButtons("western", ["normal", "noir", "scifi"]);
  } else if (id === "noir") {
    pushUnpushButtons("noir", ["normal", "western", "scifi"]);
  } else if (id === "scifi") {
    pushUnpushButtons("scifi", ["normal", "western", "noir"]);
  }
};

const setVideo = function setVideoForVideoBooth(e) {
  const id = e.target.getAttribute("id");

  if (id === "video1") {
    pushUnpushButtons("video1", ["video2"]);
  } else if (id === "video2") {
    pushUnpushButtons("video2", ["video1"]);
  }
};

// forEach执行不可变--------------------------------------------------------------------
// 更具功能性和声明性
// 可以遍历整个数组而不会跳过或中断
// 能够基于元素值或其索引执行每个元素
// const testArray = [1, 2, 3, 4];
// testArray.forEach((value) => {
//   console.log(value);
//   value = 3;
//   testArray[1]=2333;
//   testArray[0]=2333;
//     break;
// });
// console.log([...testArray]);
//---------------------------------------------------------------------------------------

/**
 * @brief: 初始化
 * @param {*}
 * @return {*}
 * @note:
 * @see:
 */
window.onload = function () {
  const video = document.getElementById("video");
  video.src = videos.video1 + getFormatExtension(video);
  video.load();

  const controlLinks = document.querySelectorAll("a.control");
  controlLinks.forEach((control) => {
    control.onclick = handleControl;
  });

  const effectLinks = document.querySelectorAll("a.effect");
  effectLinks.forEach((effect) => {
    effect.onclick = setEffect;
  });

  const videoLinks = document.querySelectorAll("a.videoSelection");
  videoLinks.forEach((video) => {
    video.onclick = setVideo;
  });

  pushUnpushButtons("video1", []);
  pushUnpushButtons("normal", []);
};

/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-19 16:25:07
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-20 10:36:35
 */

/**
 * @brief: 添加启动事件
 * @param {*} func
 * @return {*}
 * @note:
 * @see:
 */
function addEventOnLoad(func) {
  let oldonload = window.onload;
  if (typeof oldonload == "function") {
    window.onload = function () {
      oldonload();
      func();
    };
  } else {
    window.onload = func;
  }
}

function save(item) {
  let playlistArray = getStoreArray("playlist");
  playlistArray.push(item);
  localStorage.setItem("playlist", JSON.stringify(playlistArray));
}

function onaddSongButtonClick() {
  let addSongButton = document.getElementById("addSongButton");
  let playlist = document.getElementById("playlist");

  addSongButton.onclick = function () {
    let songTextInput = document.getElementById("songTextInput"); //没有click此时获取input里面有内容吗？？？？100%
    let song = songTextInput.value;
    if (song == "") {
      alert("Please enter a song");
    } else {
      let li = document.createElement("li");
      li.innerHTML = song;
      playlist.appendChild(li);
      save(song);
    }
  };
}

function loadPlaylist() {
  let playlistArray = getSavedSongs();
  let ul = document.getElementById("playlist");
  if (playlistArray != null) {
    for (let i = 0; i < playlistArray.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = playlistArray[i];
      ul.appendChild(li);
    }
  }
}

function getSavedSongs() {
  return getStoreArray("playlist");
}

function getStoreArray(key) {
  let playlistArray = localStorage.getItem(key);
  if (playlistArray == null || playlistArray == "") {
    playlistArray = new Array();
  } else {
    playlistArray = JSON.parse(playlistArray);
  }
  return playlistArray;
}

addEventOnLoad(loadPlaylist);
addEventOnLoad(onaddSongButtonClick);

/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-21 20:36:55
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-22 14:53:39
 */

let position = 0;
let playlist;
let video;

window.onload = function () {
  playlist = [
    "video/preroll",
    "video/areyoupopular",
    "video/destinationearth",
  ];
  video = document.getElementById("video");
  video.addEventListener("ended", nextVideo, false);

  video.src = playlist[position]+getFormatExtension();
  video.onload();
  video.play();
};

function nextVideo() {
  position++;
  if (position >= playlist.length) {
    position = 0;
  }
  video.src=playlist[position]+getFormatExtension();
  video.load();
  video.play();
}

function getFormatExtension(){
    if (video.canPlayType('video/mp4')!=='') {
        return '.mp4';
    }else if (video.canPlayType('videp/webm')!=='') {
        return '.webm'
    }else if (video.canPlayType('video/ogg')!=='') {
        return '.ogv';
    }
}

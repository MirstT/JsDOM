/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-20 16:55:10
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-20 18:10:24
 */

const ourCoords = {
  latitude: 47.624851,
  longitude: -122.52099,
};

let map;
let watchId = null;
let options = { enableHighAccuracy: true, timeout: 100, maximumAge: 0 };

window.onload = getMyLocation;

function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      displayLocation,
      displayError,
      options
    );
    // const watchButton = document.getElementById("watch");
    // watchButton.onclick = watchLocation;
    // const clearWatchButton = document.getElementById("clearWatch");
    // clearWatchButton.onclick = clearWatch;
  } else {
    alert("Oops, no geolocation support");
  }
}

function watchLocation() {
  watchId = navigator.geolocation.watchPosition(displayLocation, displayError);
}

function clearWatch() {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
}

function displayLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const div = document.getElementById("location");
  div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude}`;
  div.innerHTML += ` (with ${position.coords.accuracy} meters accuracy)`;

  const km = computeDistance(position.coords, ourCoords);
  const distance = document.getElementById("distance");
  distance.innerHTML = `You are ${km}km from the WickedlySmart HQ`;
  distance.innerHTML+=` (found in ${options.timeout} milliseconds`;
  if (map == null) {
    showMap(position.coords);
  }
}

function displayError(error) {
  const errorTypes = {
    0: "Unknown error",
    1: "Permission denied by user",
    2: "Position is not available",
    3: "Request timed out",
  };

  let errorMessage = errorTypes[error.code];
  if (error.code == 0 || error.code == 2) {
    errorMessage = `${errorMessage} ${error.message} `;
  }
  const div = document.getElementById("location");
  div.innerHTML = errorMessage;
  options.timeout += 100;
  navigator.geolocation.getCurrentPosition(
    displayLocation,
    displayError,
    options
  );
  div.innerHTML += `...... checking again with timeout=${options.timeout}`;
}

// --------------------- Ready Bake ------------------
//
// Uses the Spherical Law of Cosines to find the distance
// between two lat/long points
//
function computeDistance(startCoords, destCoords) {
  var startLatRads = degreesToRadians(startCoords.latitude);
  var startLongRads = degreesToRadians(startCoords.longitude);
  var destLatRads = degreesToRadians(destCoords.latitude);
  var destLongRads = degreesToRadians(destCoords.longitude);

  var Radius = 6371; // radius of the Earth in km
  var distance =
    Math.acos(
      Math.sin(startLatRads) * Math.sin(destLatRads) +
        Math.cos(startLatRads) *
          Math.cos(destLatRads) *
          Math.cos(startLongRads - destLongRads)
    ) * Radius;

  return distance;
}

function degreesToRadians(degrees) {
  radians = (degrees * Math.PI) / 180;
  return radians;
}

// ------------------ End Ready Bake -----------------

function showMap(coords) {
  // const baiduLatAndLong=new BMap.maps.LatLng(coords.latitude,coords.longitude);
  // const mapOptions={
  //     zoom:10,
  //     center:baiduLatAndLong,
  //     mapTypeId:BMap.maps.mapTypeId.ROADMAP
  // }
  // const mapDiv = document.getElementById("map");
  //   var x = 121.663569;
  //   var y = 31.212481;
  map = new BMap.Map("map");
  map.enableScrollWheelZoom(true);
  map.addControl(new BMap.NavigationControl());

  let ggPoint = new BMap.Point(coords.longitude, coords.latitude);
  const convertor = new BMap.Convertor();
  const pointArr = new Array();
  pointArr.push(ggPoint);
  //????????????api????????????gps?????????????????????????????????
  convertor.translate(pointArr, 1, 5, setMarker);
}

/**
 * @brief: ??????marker
 * @param {*} data ??????????????????
 * @return {*}
 * @note:
 * @see:
 */
function setMarker(data) {
  if (data.status === 0) {
    let marker = new BMap.Marker(data.points[0]);
    map.addOverlay(marker);
    map.centerAndZoom(data.points[0], 17);
  }
}

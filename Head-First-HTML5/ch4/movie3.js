/*
 * @Descripttion: 认识对象构造函数
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-20 10:58:47
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-20 11:30:43
 */

function Movie(title, genre, rating, showtimes) {
  this.title = title;
  this.genre = genre;
  this.rating = rating;
  this.showtimes = showtimes;
  this.getNextShowing = function () {
    const now = new Date().getTime();
    for (let i = 0; i < this.showtimes.length; i++) {
      const showtime = getTimeFromString(this.showtimes[i]);
      if (showtime - now > 0) {
        return `Next showing of ${this.title} is ${this.showtimes[i]}`;
      }
    }
    return null;
  };
}

let movie1 = new Movie("AA", "Cult Classic", 5, [
  "3:00pm",
  "7:00pm",
  "11:00pm",
]);

let movie2 = new Movie("BB", "Classic Sci-fi", 5, ["5:00pm", "9:00pm"]);

function getTimeFromString(timeString) {
  const theTime = new Date();
  const time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
  theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
  theTime.setMinutes(parseInt(time[2]) || 0);
  return theTime.getTime();
}

let nextshowing = movie1.getNextShowing();
console.log(nextshowing);
nextshowing = movie2.getNextShowing();
console.log(nextshowing);

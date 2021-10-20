/*
 * @Descripttion: 认识对象
 * @version: 
 * @Author: Mirst
 * @Date: 2021-10-20 10:58:47
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-20 11:14:49
 */

let movie1={
    title:"AA",
    genre:"Cult Classic",
    rating:5,
    showtimes:["3:00pm","7:00pm","11:00pm"]
};

let movie2={
    title:"BB",
    genre:"Classic Sci-fi",
    rating:5,
    showtimes:["5:00pm","9:00pm"]
};


function getNextShowing(movie){
    const now = new Date().getTime();

    for (let i = 0; i < movie.showtimes.length; i++) {
        const showtime = getTimeFromString(movie.showtimes[i]);
        if ((showtime-now)>0) {
            return `Next showing of ${movie.title} is ${movie.showtimes[i]}`;
        }
    }
    return null;
}

function getTimeFromString(timeString){
    const theTime=new Date();
    const time=timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours(parseInt(time[1])+(time[3]?12:0));
    theTime.setMinutes(parseInt(time[2])||0);
    return theTime.getTime();
}

let nextshowing=getNextShowing(movie1);
console.log(nextshowing);
nextshowing=getNextShowing(movie2);
console.log(nextshowing);
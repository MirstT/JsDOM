/*
 * @Descripttion: 
 * @version: 
 * @Author: Mirst
 * @Date: 2021-10-12 12:49:56
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-12 13:09:00
 */

function getHTTPObject(){
    if (typeof XMLHttpRequest=="undefined") {
        XMLHttpRequest= function(){
            try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");} 
                catch (e) {}
            try {return new ActiveXObject("Msxml2.XMLHTTP.3.0");} 
                catch (e) {}
            try {return new ActiveXObject("Msxml2.XMLHTTP");} 
                catch (e) {}
            return false;
        }
    }
    return new XMLHttpRequest();
}
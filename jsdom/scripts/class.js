/*
 * @Descripttion : 
 * @version      : 
 * @Author       : Mirst
 * @Date         : 2021-10-28 12:52:08
 * @LastEditors  : Mirst
 * @LastEditTime : 2021-10-28 13:03:18
 */
class Person{
    constructor() {
        this.name = "test";
        this.locate=()=>console.log("instace",this);
    }

    locate() {
        console.log("prototype",this);
    }
    static locate() {
        console.log("class",this);
    }
    jj=1;
    static aa=3;

}
Person.greeting='sdfsf';
Person.prototype.cc='cccc';

let p =new Person();
p.age=27;
p.locate();
Person.locate();
Person.prototype.locate();
console.log(p.age);
console.log(p.jj);
console.log(Person.aa);
console.log('////////////////////');
console.log(p.cc);
console.log(p.greeting);

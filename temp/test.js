/*
 * @Description  :
 * @version      :
 * @Author       : Mirst
 * @Date         : 2021-11-11 17:53:32
 * @LastEditors  : Mirst
 * @LastEditTime : 2022-05-31 12:25:13
 */

var a = 0;

console.log(a);

function show(num) {
  console.log(num);
}
for (var a = 0; a < 3; a++) {
  var num = a;
}
return;
}

const a = start();

let book = {
  test: 2333,
  show() {
    console.log(23333333333333333);
  },
};
Object.defineProperties(book, {
  year_: {
    value: 2017,
  },
  edition: {
    value: 1,
  },
  year: {
    set(year) {
      this.year_ = year;
      this.edition += year - 2017;
      k
      get() {
        return this.year_;
      },
    },
  });

console.log(book.year_);

let dest = {
  set a(val) {
    console.log(val + 1);
  },
};
let src = {
  bb: 44,
  get a() {
    console.log("getting---");
    return this.bb;
  },
  get b() {
    return this.bb + 1;
  }
};

Object.assign(dest, src);

dest.a = 5;
console.log(dest.a);
console.log(src.a);
console.log(Object.getOwnPropertyDescriptors(dest));
console.log(first)
Object.is()



// expected output: 42


let person = { name: 'tom', age: 18 }
let person2 = { ...person }
console.log(person2)
person = { ...person, name: 'jack', address: 'unknown' }
console.log(person2)
// console.log(...person)
console.log({ ...person })
/*
 * @Description  :
 * @version      :
 * @Author       : Mirst
 * @Date         : 2021-11-22 16:45:32
 * @LastEditors  : Mirst
 * @LastEditTime : 2021-11-22 17:02:53
 */

class Stack {
  constructor(max = 1000) {
    // 空间
    this.data = new Array(1000);
    // 栈顶（栈指针）
    this.top = -1;

    this.max = max;
  }

  push(x) {
    if (this.top === this.max - 1) {
      throw "stackoverflow";
    }
    this.top++;
    this.data[this.top] = x;
  }
  pop() {
    if (this.pop === -1) {
      throw "stackunderflow";
    }
    const x = this.data[this.pop];
    this.top--;
  }
}

module.exports = Stack;

function Fun() {
    // this.a = '在Fun函数中添加'
}

Fun.prototype.a = '在Fun原型添加的'
let obj = new Fun()
    // obj.a = '对象本身'
obj.__proto__.a = '在对象原型添加的'

console.log(obj.a)
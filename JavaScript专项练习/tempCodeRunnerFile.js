var obj1 = {
    a: 'hellow'
}
var obj2 = obj1
obj2.a = 'world'
console.log(obj1) //world

function b() {
    console.log(a)
    var a = 1
}
b()
// 封装栈类
function Stack() {
    // 栈中的属性
    this.items = []

    //栈的相关操作
    // 1.将元素压入栈
    Stack.prototype.push = element => {
        this.items.push(element)
    }

    // 2.从栈中去除元素
    Stack.prototype.pop = () => this.items.pop()

    // 3.从栈顶查看元素
    Stack.prototype.peek = () => this.items[this.items.length - 1]

    // 4.判断栈是否为空
    Stack.prototype.isEmpty = () => this.items.length == 0

    // 5.获取栈中元素的个数
    Stack.prototype.size = () => this.items.length

    // 6.toString方法
    Stack.prototype.toString = () => {
        let res = ''
        this.items.forEach(element => {
            res += element + ','
        })
        return res
    }
}

// 栈的使用
let s = new Stack()

s.push(200)
s.push(20)
s.push(0)
s.push(3)
s.push(4)
    // console.log(s)

s.pop()
s.pop()
    // console.log(s)

// console.log(s.peek())
// console.log(s.isEmpty())
// console.log(s.size())
// console.log(s.toString())

// 函数:将十进制转成二进制
function dec2bin(decNumber) {
    // 1.定义栈对象
    let stack = new Stack()
        // 2.循环操作
    while (decNumber > 0) {
        // 2.1 获取余数并放入栈中
        stack.push(decNumber % 2)

        // 2.2 获取整除后的结果作为下一次运算的数字
        decNumber = Math.floor(decNumber / 2)
    }

    // 3.从栈中去除0和1
    let binaryString = ''
    while (!stack.isEmpty()) {
        binaryString += stack.pop()
    }
    return binaryString
}

// 测试十进制转二进制

console.log(dec2bin(10))
console.log(dec2bin(100))
console.log(dec2bin(1000))
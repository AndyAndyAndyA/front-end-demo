// 封装队列类
function Queue() {
    // 属性
    this.items = []
        // 方法
        // 向队列尾部添加一个元素
    Queue.prototype.enqueue = element => {
            this.items.push(element)
        }
        // 删除队列头部的第一个元素,并返回被删除的元素
    Queue.prototype.dequeue = () => {
        return this.items.shift()
    }

    // 返回队列中的第一个元素(最先被添加也是最先被移除的元素),队列本身不做变动
    Queue.prototype.front = () => {
        return this.items[0]
    }

    // 判断队列是否为空
    Queue.prototype.isEmpty = () => {
            return this.items.length == 0
        }
        // 返回队列个数
    Queue.prototype.size = () => {
        return this.items.length
    }

    // 将队列的内容转化为字符串
    Queue.prototype.toString = () => {
        let res = ''
        this.items.forEach(element => {
            res += element + ','
        })
        return res
    }
}

// // 使用队列
// let queue = new Queue()

// // 将元素加入到队列中

// queue.enqueue('asd')
// queue.enqueue('adsaf')
// queue.enqueue('adfasdfwed')
// console.log(queue) // Queue { items: [ 'asd', 'adsaf', 'adfasdfwed' ] }

// // 从队列中删除元素

// queue.dequeue()
// queue.dequeue()
// console.log(queue) // Queue { items: [ 'adfasdfwed' ] }

// // front
// console.log(queue.front()) // adfasdfwed

// // isEmpty
// console.log(queue.isEmpty()) // false

// // size
// console.log(queue.size()) // 1

// // toString
// console.log(queue.toString()) // adfasdfwed,

// 面试题:击鼓传花
function passGame(nameList, num) {
    // 1.创建一个队列结构
    let queue = new Queue()

    // 2.将所有人加入到队列中
    nameList.forEach(element => {
        queue.enqueue(element)
    })

    while (queue.size() > 1) {
        // 3.开始数字,不是num 的重新加入到末尾,是num,将其从队列中删除
        for (let i = 0; i <= num - 1; i++) {
            // 不是num把第一个删除然后再加到末尾
            queue.enqueue(queue.dequeue())
        }
        // 是num 的直接删除
        queue.dequeue()
    }
    // 4.获取剩下的人
    let result = queue.front()
    console.log('最终剩下的人 ' + result)

    return '下标是 ' + nameList.indexOf(result)
}

let nameList = ['Lily', 'Tom', 'Hobo', 'Eddie']
console.log(passGame(nameList, 3))
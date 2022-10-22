// 封装优先级队列
function PriorityQueue() {
    // 可以理解成创建内部类
    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }
    // 封装属性
    this.items = []

    // 实现插入方法
    PriorityQueue.prototype.enqueue = (element, priority) => {
        // 1.创建 QueueElement对象
        var queueElement = new QueueElement(element, priority)

        // 2.判断队列是否为空
        // 如果为空直接放
        if (this.items.length == 0) {
            this.items.push(queueElement)
        } else {
            // 如果不为空比较
            let added = false
            for (let i = 0; i < this.items.length; i++) {
                if (queueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }
            // 如果没有添加直接加到最后
            if (!added) {
                this.items.push(queueElement)
            }
        }
    }

    // 删除队列头部的第一个元素,并返回被删除的元素
    PriorityQueue.prototype.dequeue = () => {
        return this.items.shift()
    }

    // 返回队列中的第一个元素(最先被添加也是最先被移除的元素),队列本身不做变动
    PriorityQueue.prototype.front = () => {
        return this.items[0]
    }

    // 判断队列是否为空
    PriorityQueue.prototype.isEmpty = () => {
            return this.items.length == 0
        }
        // 返回队列个数
    PriorityQueue.prototype.size = () => {
        return this.items.length
    }

    // 将队列的内容转化为字符串
    PriorityQueue.prototype.toString = () => {
        let res = ''
        this.items.forEach(element => {
            res += element.element + '-' + element.priority + ' '
        })
        return res
    }
}

// 测试
let pq = new PriorityQueue()

// enqueue方法
pq.enqueue('sad', 1)
pq.enqueue('ads', 10)
pq.enqueue('jkl', 1000)
pq.enqueue('vcx', 100)

console.log(pq.toString())
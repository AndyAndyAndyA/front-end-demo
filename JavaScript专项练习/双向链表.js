// 封装双向链表类
function DoublyLinkedList() {
    // 内部的类
    function Node(data) {
        this.prev = null
        this.data = data
        this.next = null
    }

    // 属性
    this.head = null
    this.tail = null
    this.length = 0

    // 方法

    // 1.添加操作

    // 1.1 append()向列表尾部添加一个新的项
    DoublyLinkedList.prototype.append = data => {
        // 1.根据元素创建节点
        let newNode = new Node(data)

        // 2.判断列表是否为空列表
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        // 3.length+1
        this.length++
    }

    // 1.2 insert()向列表的特定位置插入一个新的项
    DoublyLinkedList.prototype.insert = (position, data) => {
        // 1.判断越界的问题
        if (position < 0 || position > this.length) return false

        // 2.创建新的节点
        let newNode = new Node(data)

        // 3.判断插入的位置
        if (position === 0) {
            // 在第一个位置插入数据
            // 判断链表是否为空
            if (this.head == null) {
                this.head = newNode
                this.tail = newNode
            } else {
                this.head.prev = newNode
                newNode.next = this.head
                this.head = newNode
            }
        } else if (position === this.length) {
            // 插入到最后的情况
            // 思考: 这种情况是否需要判断链表为空的情况呢? 答案是不需要, 为什么?
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        } else {
            // 在中间位置插入数据
            // 定义属性
            let index = 0
            let current = this.head
            let previous = null

            // 查找正确的位置
            while (index++ < position) {
                previous = current
                current = current.next
            }

            // 交换节点的指向顺序
            newNode.next = current
            newNode.prev = previous
            current.prev = newNode
            previous.next = newNode
        }

        // 4.length+1
        this.length++

            return true
    }

    // 2.删除操作

    // 2.2 removeAt()从列表特定位置移除一项
    DoublyLinkedList.prototype.removeAt = position => {
        // 1.判断越界的问题
        if (position < 0 || position >= this.length) return null

        // 2.判断移除的位置
        let current = this.head
        if (position === 0) {
            if (this.length == 1) {
                this.head = null
                this.tail = null
            } else {
                this.head = this.head.next
                this.head.prev = null
            }
        } else if (position === this.length - 1) {
            current = this.tail
            this.tail = this.tail.prev
            this.tail.next = null
        } else {
            let index = 0
            let previous = null

            while (index++ < position) {
                previous = current
                current = current.next
            }

            previous.next = current.next
            current.next.prev = previous
        }

        // 3.length-1
        this.length--

            return current.data
    }

    // 2.3 remove()从列表中移除一项
    DoublyLinkedList.prototype.remove = data => {
        let index = this.indexOf(data)
        return this.removeAt(index)
    }

    // 3.获取操作

    // get
    DoublyLinkedList.prototype.get = position => {
        // 1.越界判断
        if (position < 0 || position >= this.length) return null

        // 2.获取元素
        if (this.length / 2 > position) {
            let current = this.head
            let index = 0
            while (index++ < position) {
                current = current.next
            }
            return current.data
        }

        if (this.length / 2 < position) {
            let current = this.tail
            let index = this.length - 1
            while (index-- > position) {
                current = current.prev
            }
            return current.data
        }
    }

    // 3.1 indexOf()返回索引
    DoublyLinkedList.prototype.indexOf = data => {
        // 1.定义变量保存信息
        let current = this.head
        let index = 0

        // 2.查找正确的信息
        while (current) {
            if (current.data === data) {
                return index
            }
            index++
            current = current.next
        }

        // 3.来到这个位置, 说明没有找到, 则返回-1
        return -1
    }

    // update()
    DoublyLinkedList.prototype.update = (position, newData) => {
        // 越界判断
        if (position < 0 || position >= this.length) return false

        // 找到正确节点
        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }

        // 修改找到节点的data信息
        current.data = newData

        return true
    }

    // isEmpty()
    DoublyLinkedList.prototype.isEmpty = () => {
        return this.length === 0
    }

    // size()
    DoublyLinkedList.prototype.size = () => {
        return this.length
    }

    // 获取第一个元素
    DoublyLinkedList.prototype.getHead = function() {
        return this.head.data
    }

    // 获取最后一个元素
    DoublyLinkedList.prototype.getTail = function() {
        return this.tail.data
    }

    // forwardString:正向遍历的节点字符串形式
    DoublyLinkedList.prototype.forwardString = () => {
        // 1.定义变量
        let current = this.head
        let forwardStr = ''

        // 2.依次向后遍历,获取每一个节点
        while (current) {
            forwardStr += ',' + current.data
            current = current.next
        }

        return forwardStr.slice(1)
    }

    // backwardString:反向遍历的节点字符串形式
    DoublyLinkedList.prototype.backwardString = () => {
        // 1.定义变量
        let current = this.tail
        let reverseStr = ''

        // 2.依次向后遍历,获取每一个节点
        while (current) {
            reverseStr += ',' + current.data
            current = current.prev
        }

        return reverseStr.slice(1)
    }

    // toString()
    DoublyLinkedList.prototype.toString = () => {
        return this.forwardString()
    }
}

// 测试代码
// 1.创建双向链表对象
let list = new DoublyLinkedList()

// 2.追加元素
list.append('abc')
list.append('cba')
list.append('nba')
list.append('mba')

// 3.获取所有的遍历结果
console.log(list.forwardString()) // abc,cba,nba,mba
console.log(list.backwardString()) // mba,nba,cba,abc
console.log(list.toString()) // abc,cba,nba,mba

// insert
list.insert(2, 'sss')
console.log(list.toString())

// removeAt
list.removeAt(2)
console.log(list.toString())

// remove
list.remove('abc')
console.log(list.toString())

// indexOf

console.log(list.indexOf('cba'))

// getHead

console.log(list.getHead())

// getTail
console.log(list.getTail())

// get
console.log(list.get(1))

// update
list.update(0, 'kkk')
console.log(list.toString())
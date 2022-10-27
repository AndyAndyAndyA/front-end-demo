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
        // 1.1.1创建节点
        let newNode = new Node(data)

        // 1.1.2如果添加的是第一个节点, 那么要将head指针指向第一个节点
        // 判断是否是第一个节点
        if (this.length == 0) {
            // 是第一个节点
            this.head = newNode
        } else {
            // 不是第一个节点
            // 找到最后一个节点
            let current = this.head
            while (current.next) {
                current = current.next
            }
            // 将最后一个节点next指向新的节点
            current.next = newNode
        }

        // 1.1.3 length+1
        this.length += 1
    }

    // 1.2 insert()向列表的特定位置插入一个新的项
    DoublyLinkedList.prototype.insert = (position, data) => {
        // 1.对position进行越界判断
        if (position < 0 || position > this.length) return false

        // 2.根据data创建newNode
        let newNode = new Node(data)

        // 3.判断插入的位置是否是第一个
        if (position == 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let index = 0
            current = this.head
            let previous = null
            while (index++ < position) {
                previous = current
                current = current.next
            }
            newNode.next = current
            previous.next = newNode
        }

        // 4.length+1
        this.length += 1

        return true
    }

    // 2.删除操作

    // 2.2 removeAt()从列表特定位置移除一项
    DoublyLinkedList.prototype.removeAt = position => {
        // 不被引用就会倍当作垃圾回收
        // 1.越界判断
        if (position < 0 || position >= this.length) return null

        // 2.判断删除的是否是第一个节点
        let current = this.head
        if (position == 0) {
            this.head = this.head.next
        } else {
            let previous = null
            let index = 0
            while (index++ < position) {
                previous = current
                current = current.next
            }
            // 前一个节点的next指向current的next
            previous.next = current.next
        }
        this.length -= 1

        return current.data
    }

    // 2.3 remove()从列表中移除一项
    DoublyLinkedList.prototype.remove = data => {
        // 1.获取data在列表中的位置
        let position = this.indexOf(data)
            // 2.根据位置信息,删除节点
        return this.removeAt(position)
    }

    // 3.获取操作

    // 3.1 get()获取对应位置的元素
    DoublyLinkedList.prototype.get = position => {
        // 1.越界判断
        if (position < 0 || position >= this.length) return null //return null 表示什么都没有获取到

        // 2.获取对应的data
        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }
        return current.data
    }

    // 3.2 indexOf()返回索引
    DoublyLinkedList.prototype.indexOf = data => {
        // 1.定义变量
        let current = this.head
        let index = 0

        // 2.开始查找
        while (current) {
            if (current.data == data) {
                return index
            }
            current = current.next
            index += 1
        }
        // 3.找到最后没有找到返回-1
        return -1
    }

    // 4.修改操作

    // 4.1 update()修改某个位置的元素
    DoublyLinkedList.prototype.update = (position, element) => {
        // 1.越界判断
        if (position < 0 || position >= this.length) return false

        // 2.获取对应的data
        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }
        return (current.data = element)
    }

    // isEmpty()
    DoublyLinkedList.prototype.isEmpty = () => {
        return this.length == 0
    }

    // size()
    DoublyLinkedList.prototype.size = () => {
        return this.length
    }

    // toString()
    DoublyLinkedList.prototype.toString = () => {
        // 1.定义变量
        let current = this.head
        let listString = ''
            // 2.循环获取每一个节点
        while (current) {
            listString += current.data + ' '
            current = current.next
        }
        return listString
    }

    // forwardString:正向遍历的节点字符串形式
    DoublyLinkedList.prototype.forwardString = () => []

    // backwardString:反向遍历的节点字符串形式
    DoublyLinkedList.prototype.backwardString = () => []
}

// 测试代码
// 1.创建DoublyLinkedList
let list = new DoublyLinkedList()

list.append('abc')
list.append('cba')
list.append('aaa')
console.log(list.toString())

list.insert(2, 'position')

console.log(list.toString())

console.log(list.get(3))
console.log(list.indexOf('aaa'))
list.update(0, '000')
console.log(list.toString())

// 测试removeAt方法测试
list.removeAt(0)
console.log(list.toString())

list.removeAt(0)
console.log(list.toString())

// 测试remove方法
list.remove('aaa')
console.log(list.toString())

// 测试isEmpty方法
console.log(list.isEmpty())

// 测试size方法
console.log(list.size())
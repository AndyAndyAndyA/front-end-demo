function Set() {
    // 属性
    this.items = {}

    // 方法
    // add
    Set.prototype.add = value => {
        // 判断集合中是否已经包含该元素
        if (this.has(value)) {
            return false
        }
        // 将元素添加到集合中
        this.items[value] = value
        return true
    }

    // has
    Set.prototype.has = value => {
        return this.items.hasOwnProperty(value)
    }

    // remove
    Set.prototype.remove = value => {
        // 判断集合中是否已经包含该元素
        if (!this.has(value)) {
            return false
        }

        // 将元素从属性删除
        delete this.items[value]
        return true
    }

    // clear
    Set.prototype.clear = () => {
        this.items = {}
        return true
    }

    // size
    Set.prototype.size = () => {
        return Object.keys(this.items).length
    }

    // 获取集合中所有的值
    Set.prototype.values = () => {
        return Object.keys(this.items)
    }
}

// 测试代码
let set = new Set()

set.add('abc')
set.add('cba')
set.add('nba')
set.add('aaa')
set.add('bbb')
set.add('ccc')

console.log(set)

set.remove('abc')
set.remove('nba')
console.log(set)

console.log(set.values())

console.log(set.size())

set.clear()
console.log(set)
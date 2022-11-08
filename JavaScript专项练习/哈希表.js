// 封装哈希表类
function HashTable() {
    // 属性
    this.storage = [] //存放元素
    this.count = 0 // 存放已经存在多少元素,用来计算loadFactor:加载因子>0.75数组扩容,<0.25减小数组
    this.limit = 7 //哈希表总长度

    // 方法
    // 哈希函数

    // 设计哈希函数
    // 1.将字符串转成比较大的数字:hashCode
    // 2.将数字hashCode压缩到数组范围(大小)之内
    HashTable.prototype.hashFunc = (str, size) => {
        // 1.定义hashCode变量
        var hashCode = 0

        // 2.霍纳算法,来计算hashCode的值
        // cats->Unicode编码
        for (var i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i)
        }

        // 3.取余操作
        var index = hashCode % size
        return index
    }

    // 插入/修改操作
    HashTable.prototype.put = (key, value) => {
        // 1.根据key获取索引值
        // 目的:将数据插入到对应的位置
        var index = this.hashFunc(key, this.limit)
            // 2.根据索引值取出bucket
        var bucket = this.storage[index]
            // 如果桶不存在,创建桶,并且放置在该索引的位置
        if (bucket == null) {
            bucket = []
            this.storage[index] = bucket
        }
        // 判断新增还是修改原来的值
        for (var i = 0; i < bucket.length; i++) {
            var tuple = bucket[i]
            if (tuple[0] == key) {
                tuple[1] = value
                return
            }
        }

        // 如果已经有值,修改值
        // 如果没有,执行后续添加操作
        // 4.新增操作
        bucket.push([key, value])
        this.count += 1
    }

    // 获取方法
    HashTable.prototype.get = key => {
        // 1.获取key对应的index
        var index = this.hashFunc(key, this.limit)

        // 2.获取对应的bucket
        var bucket = this.storage[index]

        // 3.如果bucket为null, 那么说明这个位置没有数据
        if (bucket == null) {
            return null
        }

        // 4.有bucket, 判断是否有对应的key
        for (var i = 0; i < bucket.length; i++) {
            var tuple = bucket[i]
            if (tuple[0] === key) {
                return tuple[1]
            }
        }

        // 5.没有找到, return null
        return null
    }

    // 删除数据
    HashTable.prototype.remove = key => {
        // 1.获取key对应的index
        var index = this.hashFunc(key, this.limit)

        // 2.获取对应的bucket
        var bucket = this.storage[index]

        // 3.判断同是否为null, 为null则说明没有对应的数据
        if (bucket == null) {
            return null
        }

        // 4.遍历bucket, 寻找对应的数据
        for (var i = 0; i < bucket.length; i++) {
            var tuple = bucket[i]
            if (tuple[0] === key) {
                bucket.splice(i, 1)
                this.count--
                    return tuple[1]
            }
        }

        // 5.来到该位置, 说明没有对应的数据, 那么返回null
        return null
    }

    // isEmpty方法
    HashTable.prototype.isEmpty = () => {
        return this.count == 0
    }

    // size 方法
    HashTable.prototype.size = () => {
        return this.count
    }

    // 哈希表的扩容
    HashTable.prototype.resize = newLimit => {
        // 1.保存旧的数组内容
        var oldStorage = this.storage

        // 2.重置所有的属性
        this.storage = []
        this.count = 0
        this.limit = newLimit

        // 3.遍历oldStorage所有的bucket
        for (var i = 0; i < oldStorage.length; i++) {
            // 1.取出对应的bucket
            var bucket = oldStorage[i]

            // 2.判断bucket是否为null
            if (bucket == null) {
                continue
            }

            // 3.bucket中有数据,那么取出数据,重新插入
            for (var j = 0; j < bucket.length; j++) {
                var tuple = bucket[j]
                this.put(tuple[0], tuple[1])
            }
        }
    }
}

// 测试哈希表
// 1.创建哈希表
var ht = new HashTable()

// 2.插入数据
ht.put('abc', '123')
ht.put('cba', '321')
ht.put('nba', '521')
ht.put('mba', '520')

// 3.获取数据
console.log(ht.get('abc'))
ht.put('abc', '111')
console.log(ht.get('abc'))

// 4.删除数据
console.log(ht.remove('abc'))
console.log(ht.get('abc'))
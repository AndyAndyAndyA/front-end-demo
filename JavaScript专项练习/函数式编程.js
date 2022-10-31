// 计算元素出现的次数
let arr = ['name', 'name', 'dog', 'cat', 'pig', 'dog', 'dog']

let result = arr.reduce((pre, cur) => {
    // console.log(pre[cur], cur)

    if (!pre[cur]) {
        pre[cur] = 1
    } else {
        pre[cur]++
    }
    return pre
}, {})

console.log(result)
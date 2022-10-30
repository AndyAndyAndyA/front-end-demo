let setA = new Set()
let setB = new Set()

setA.add('abc')
setA.add('cba')
setA.add('nba')
setA.add('aaa')
setA.add('bbb')
setA.add('ccc')

setB.add('asd')
setB.add('sss')
setB.add('ddd')
setB.add('abc')
setB.add('ccc')
console.log(setA)

console.log(setA.union(setB))
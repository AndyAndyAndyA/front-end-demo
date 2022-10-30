let animals = [
    { name: 'flutter', species: 'rabbit' },
    { name: 'mike', species: 'dog' },
    { name: 'jack', species: 'dog' },
    { name: 'jake', species: 'cat' },
    { name: 'nancy', species: 'giraffe' },
    { name: 'eddie', species: 'tiger' }
]

// 普通for循环
// let dog = []

// for (let i = 0; i < animals.length; i++) {
//     if (animals[i].species == 'dog') {
//         dog.push(animals[i])
//     }
// }

// console.log(dog)

// 函数式编程
let isDog = function(animals) {
    return animals.species === 'dog'
}

let dogs = animals.filter(isDog)

console.log(dogs)
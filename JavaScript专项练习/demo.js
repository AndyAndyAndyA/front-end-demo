var arr = [1, 2, 3, 4, 5, 1, 2, 3]

function unique(arr) {
    arr = arr.sort()
    var brr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            brr.push(arr[i])
        }
    }

    return brr
}

console.log(unique(arr))
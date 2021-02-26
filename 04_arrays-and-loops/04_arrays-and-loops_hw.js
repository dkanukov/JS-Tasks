//Задание 1 
// let i = 0
// let count = 70
// let n = 100
// let m = -5
// let arr = []

// while(i < count){
//     let range = Math.abs(m - n)
//     let min = Math.min(n, m) 
//     let numberinrange = Math.round(Math.random() * range) + min
//     let max = Math.max(n,m)
//     arr[i] = numberinrange
//     i = i + 1
// }

// console.log(arr)

//Задание 2
let i = 0
let string = "Привет, мир!"
let arr = []

while (i < string.length) {
    arr[i] = string[i]
    i = i + 1
}
range = arr.length
// for(let i = 0; i <= arr.length; i++){
//     let k = arr[i]
//     arr[i] = arr[range]
//     arr[range] = k
//     range = range - 1
// }

console.log(arr)
// Задание 1 
let i = 0
let count = 70
let n = 100
let m = -5
let arr = []

while(i < count){
    let range = Math.abs(m - n)
    let min = Math.min(n, m) 
    let numberinrange = Math.round(Math.random() * range) + min
    let max = Math.max(n,m)
    arr[i] = numberinrange
    i = i + 1
}

console.log(arr)

// Задание 2
let string = "Привет, мир!"
let string_reverse = ""
let arr = []
for (let i = 0; i < string.length; i++) {
    arr[i] = string[i];
}

for(let i = string.length - 1; i >= 0; i--){
    string_reverse = string_reverse + arr[i]
}
console.log(string_reverse)


// Задание 3

roadMines = [true, false, false, false, false, false, false, false, false, true]
let health = 2
for(let i = 0; i <= roadMines.length; i++){
    let k = i + 1
    if (roadMines[i] == true) {
        console.log("танк переместился на", k)
        health = health - 1
        if (health == 0) {
            console.log("Танк уничтожен")
            break
        }else{
            console.log("Танк повреждён")
        }
    } else{
        console.log("танк переместился на", k)
    }
}

// Задание 4

let day = []
let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
let k = 0

for(let i = 0; i <= 30; i++){
    day.push(i+1)
}

for(let i = 0; i <= 30; i++){
    if (k !== 7) {
        console.log(day[i], "января", week[k])
        k += 1
    }else{
        k = 0
    }
}
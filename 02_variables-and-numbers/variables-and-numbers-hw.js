// Задание 1

let x1 = 8;
let y1 = 1;
let x2 = 5;
let y2 = 1;
let s = (x2 - x1) * (y2 - y1);
s = Math.abs(s);
console.log(s);


//Задание 2

let a = 13.890123;
let b = 2.891564;
let n = 3;

a1 = Math.trunc(a);
b1 = Math.trunc(b);

a = a - Math.trunc(a);
b = b - Math.trunc(b);

a = a * Math.pow(10, n);
b = b * Math.pow(10, n);

a = Math.trunc(a);
b = Math.trunc(b);

console.log(a);
console.log(b);
console.log("a = b", a == b);
console.log("a != b", a != b);
console.log("a > b", a > b);
console.log("a < b", a < b);
console.log("a >= b", a >= b);
console.log("a <= b", a <= b);


// Задание 3 

let n = 100;
let m = -5;

let range = Math.abs(m - n);
let min = Math.min(n, m);
let numberinrange = Math.round(Math.random() * range) + min;

if (numberinrange % 2 == 1) {
    console.log(numberinrange);
} else{
    numberinrange += 1;
    console.log(numberinrange);
}
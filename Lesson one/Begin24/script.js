"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Begin8
// Даны переменные A, B, C. Изменить их значения, переместив содержимое "A" в "C", "C" в "B", "B" в "A", и вывести новые значения переменных "A", "B", "C".

let a = getRandomIntInterval(1, 100)
let b = getRandomIntInterval(1, 100)
let c = getRandomIntInterval(1, 100)

a = c;

console.log(a)
console.log(b)
console.log(c)

// time

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Begin8
// Даны катеты прямоугольного треугольника a и b. Найти его гипотенузу "C" и периметр "P": "C=a+b", "P=a+b+С"

const a = getRandomIntInterval(1, 100)
const b = getRandomIntInterval(1, 100)

const C = a + b
const P = a + b + C
console.log(P)
console.log(C)
console.log("Гипотенуза: " + C + " Периметр: " + P)

// time


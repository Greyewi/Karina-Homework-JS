const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Begin8
// Даны два числа a и b. Найти их среднее арифметическое: "(a + b)/2"

const a = getRandomFloatInterval(-1000, 1000)
const b = getRandomFloatInterval(-1000, 1000)

const average = (a + b)/2
console.log("Среднее: " + average," a: " + a, " b: " + b )

// time
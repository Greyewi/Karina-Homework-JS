"use strict";

const {getRandomIntInterval, getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

// Begin8
// Даны переменные A, B, C. Изменить их значения, переместив содержимое "A" в "C", "C" в "B", "B" в "A", и вывести новые значения переменных "A", "B", "C".

/*const a = 5
const b = 6
const c = 7

a = c
c = b
b = a

console.log(a)
console.log(b)
console.log(c)*/

// time

//Найти значение функции "y=3x−6x−7" при данном значении "x".
const x = getRandomIntInterval(1, 1000)

const y = 3*x - 6*x - 7
console.log(y)

//Дана масса "M" в килограммах. Используя операцию деления нацело, найти количество полных тонн в ней (1 тонна = 1000 кг).

const M = 6780

const Tonn = Math.floor(M/1000)

console.log(Tonn)

// Дан размер файла в байтах. Используя операцию деления нацело, найти количество полных килобайтов, которые занимает данный файл (1 килобайт = 1024 байта).

const Byte = 4678

const Fale = Math.floor(Byte/1024)

console.log(Fale)

//Дано двузначное число. Найти сумму и произведение его цифр.


function getNumbersSum(num){
        
         return num.toString().split('').reduce(function(a, b) {
    
             return +a + +b;

         }
         )
    }
    console.log(getNumbersSum(25))

   //

   function getStart(num){
        
    return num.toString().split('').reduce(function(a, b) {

        return +a * +b;

    }
    )
}
console.log(getStart(25))

//


const arr = [2, 3, 6]
const newArr = arr.reverse().join()

console.log(newArr)
  
    

// Дано целое число A. Проверить истинность высказывания: «Число A является четным».

const A = 51

if (A%2 == 0) {
    console.log(true)
} else {console.log(false)}

//Даны два целых числа: A, B. Проверить истинность высказывания: «Справедливы неравенства A > 2 и B ≤ 3»


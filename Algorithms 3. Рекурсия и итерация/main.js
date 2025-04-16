
// 1. Факториал числа
// Написать рекурсивную функцию, которая находит факториал числа.

// !5 = 5 * 4 * 3 * 2 * 1 


// function getFactorial(num) {
//     if (num === 1) {
//         return 1;
//     }

//     return num * getFactorial(num - 1);
// }

// console.log(getFactorial(5));


// 2. Число Фибоначи
// Написать рекурсивную функцию, которая вычисляет n-ое число Фибоначи.

// Fn = Fn–2 + Fn–1, где F0 = 0, F1 = 1, а n — больше или равно 2 и является целым числом.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711

// function getFibonachi(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1
//     } else if (n > 1) {
//         return getFibonachi(n - 1) + getFibonachi(n - 2)
//     }
// }

// console.log(getFibonachi(45));



// 3. Поиск элемента в массиве 
// Напишите рекурсивную функцию для поиска элемента в массиве

function findElementInArr(arr, findValue, index = 0) {
    if (arr[index] === findValue) { // Базовый случай
        return arr[index];
    } else if (index < arr.length) { // Рекурсивный случай
        return findElementInArr(arr, findValue, index + 1);
    } else {
        return 'Value don`t finding in array';
    }
}

console.log(findElementInArr([1, 2, 3, 4, 95, 7, 4, 85, 4, 1, 6, 47, 8], 95));

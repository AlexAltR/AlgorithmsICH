// Quick sort

/** Идея:
Выбрать опорный элемент (pivot).
Разбить массив на две части: элементы < pivot и элементы >= pivot.
Рекурсивно отсортировать обе части и собрать результат. */


function quickSort(arr) {
    if (arr.length < 2) {
        return arr; // Базовый случай
    }

    // Выбираем средний элемент
    const pivot = arr[Math.floor(arr.length / 2)];
    const less = [];
    const greater = [];
    const equal = [];

    for (const x of arr) { // Перебираем массив в текущей рекурсии
        if (x < pivot) {
            less.push(x);
        } else if (x > pivot) {
            greater.push(x);
        } else {
            equal.push(x);
        }
    }

    return [quickSort(less), ...equal, quickSort(greater)];
}

console.log(quickSort([8, 54, 69, 74, 21, 20, 3, 7]));


// Сложность
// В среднем О(n * log n)
// В худшем - O(n^2)


// [-1, -2, 1, 3, 5, 8, 11, 14, 15, 19]

// 5 = arr[mid]
// mid = 4

// 3 = arr[mid]
// mid = 4

function magicIndexRecurs(arr, minIndex = 0, maxIndex = arr.length - 1){

    const mid = Math.floor(arr.length / 2);

    if(arr[mid] === mid){
        return mid;
    } else if (arr[mid] < mid) {
        return magicIndexRecurs(arr, mid + 1, maxIndex);
    } else {
        return magicIndexRecurs(arr, minIndex, mid - 1);
    }
}
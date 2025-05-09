// Функция быстрой сортировки

function quickSort(arr) {
    // Базовый случай: длинна массива равна 0 или 1
    if (arr.length <= 1) {
        return arr;
    }

    // Выбираем опрный элемент (pivot)
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];

    // Массивы для хранения элементов, меньше и больше/равные pivot
    const left = [];
    const right = [];

    // Проходим по всем элементам массива arr
    for(let i = 0; i < arr.length; i++){
        // Пропускаем опорный элемент, чтобы не дублировать его
        if (i !== pivotIndex){
            // console.log(arr[i]);
            if(arr[i] < pivot){
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }

    // Рекурсивно сортируем левую и правую части и объединяем результат
    return  [...quickSort(left), pivot, ...quickSort(right)] 

}

const arrNotSort = [6, 9, 4, 1, 85, 85, 85, 7, -8, 3];
console.log(quickSort(arrNotSort));


// Пример, рассмотрение рекурсии
// Посчитать факториал n!

// 5! = 5 * 4 * 3 * 2 * 1

function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));

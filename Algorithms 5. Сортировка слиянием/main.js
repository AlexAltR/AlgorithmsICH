// Основная функция сортировки
function mergeSort(arr) {
    // Базовый случай: если массив длиной 1 или 0, он уже отсортирован
    if (arr.length <= 1) {
        return arr;
    }

    // Делим массив пополам
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);    // Левая часть
    const right = arr.slice(mid);      // Правая часть

    // Рекурсивно сортируем левую и правую части и сливаем их
    return merge(mergeSort(left), mergeSort(right));
}

// Функция слияния двух отсортированных массивов
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    // Пока в обоих массивах есть элементы
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]); // Берем элемент из левого массива
            i++;
        } else {
            result.push(right[j]); // Берем элемент из правого массива
            j++;
        }
    }

    // Добавляем оставшиеся элементы из левого массива (если есть)
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Добавляем оставшиеся элементы из правого массива (если есть)
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    // Возвращаем объединенный отсортированный массив
    return result;
}

// Пример использования
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // [3, 9, 10, 27, 38, 43, 82]




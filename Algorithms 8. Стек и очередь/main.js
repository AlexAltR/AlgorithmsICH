/* Реализуйте класс Queue с методами enqueue() и dequeue(). Напишите простой код, где вы добавляете несколько элементов в очередь с помощью enqueue() и удаляете их с помощью dequeue(). */

class Queue {
    constructor() {
        this.items = [];
    }

    // добавляем элемент в конец очереди
    enqueue(element) {
        this.items.push(element)
    }

    // удаляем элемент из начала очереди
    dequeue(element) {
        if (this.isEmpty()) {
            return "Очередь пуста";
        }
        return this.items.shift(element)
    }

    // проверяем пустая ли очередь
    isEmpty() {
        return this.items.length === 0;
    }

    // возвращаем элемент из начала очереди (не удаляя его)
    front() {
        // if (this.isEmpty()) {
        //     return null;
        // }
        // return this.items[0];

        return this.isEmpty() ? null : this.items[0];
    }

    // Выводим кол-во элементов в очереди
    size() {
        console.log(this.items.length);
    }

    // Выводим содержимое очереди
    print() {
        console.log(this.items.join(" <- "));
    }
}

const queue = new Queue();

console.log(queue);

// FIFO - первый вошел, первый вышел
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");


queue.print();

console.log("Удалено:", queue.dequeue());
queue.print();

queue.enqueue("D");
queue.print();

console.log(queue.front());

queue.print();


// Задача 2

function isBalanceBrackets(str) {
    const stack = [];

    for (let char of str) {
        if (char === "(") {
            stack.push(char) // добавляем в стек открывающуюся скобку
        } else if (char === ")") {
            if (stack.length === 0) {
                return false; // закрывающаяся скобка без пары
            }
            stack.pop();
        }
    }

    return stack.length === 0; // если стек пуст - все сбалансировано   
}
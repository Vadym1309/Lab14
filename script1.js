// Генеруємо масив із випадковими числами (15 елементів)
let array = [];
for (let i = 0; i < 15; i++) {
    array.push(Math.floor(Math.random() * 100)); // Випадкові числа від 0 до 99
}

const root = document.getElementById("task1")
root.insertAdjacentHTML("beforeend", `<p>Початковий масив: ${array.join(", ")}`) 
// Виводимо початковий масив
console.log("Початковий масив:", array.join(", "));

// Знаходимо максимальний елемент
let maxIndex = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] > array[maxIndex]) {
        maxIndex = i;
    }
}

// Міняємо максимальний елемент із передостаннім
let temp = array[array.length - 2];
array[array.length - 2] = array[maxIndex];
array[maxIndex] = temp;

// Виводимо модифікований масив
console.log("Модифікований масив:", array.join(", "));
root.insertAdjacentHTML("beforeend", `Modified масив: ${array.join(", ")}`) 


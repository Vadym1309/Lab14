document.addEventListener("DOMContentLoaded", function() {
    // Створення масиву з 15 елементів (значення випадкові від 0 до 100)
    const arr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 201) - 100); // Генерація чисел від -100 до 100

    // Виведення масиву на сторінку
    document.getElementById('arrayOutput').textContent = "Масив: " + arr.join(", ");

    // Задаємо значення A і B як перший і останній елемент масиву
    const A = arr[0];
    const B = arr[arr.length - 1];

    // Обчислення середнього арифметичного (просто сума двох чисел / 2)
    const average = (A + B) / 2;

    // Виведення середнього арифметичного на сторінку
    document.getElementById('averageOutput').textContent = 
        `Середнє арифметичне двох чисел, що належать проміжку [${A}, ${B}): ${average}`;

    // Пошук кількості додатних чисел на місцях, кратних 4
    const positiveOnMultipleOf4 = arr.filter((num, index) => num > 0 && index % 4 === 0).length;

    // Виведення кількості додатних чисел на місцях, кратних 4 на сторінку
    document.getElementById('positiveCountOutput').textContent = 
        `Кількість додатних чисел на місцях, кратних 4: ${positiveOnMultipleOf4}`;
});

// Створення масиву трикутних чисел
let Treag = [];
for (let n = 1; n <= 10; n++) {
    Treag.push(n * (n + 1) / 2);
}

// Створення масиву квадратів натуральних чисел
let kvd = [];
for (let n = 1; n <= 10; n++) {
    kvd.push(n * n);
}

// Об'єднання масивів
let rez = Treag.concat(kvd);

// Сортування у зворотному порядку
rez.sort((a, b) => b - a);

// Виведення результатів на сторінку
const output = document.getElementById("output");
output.innerHTML = `
    <p>Масив трикутних чисел: ${Treag.join("  ")}</p>
    <p>Масив квадратів: ${kvd.join("  ")}</p>
    <p>Об'єднаний масив: ${rez.join("  ")}</p>
    <p>Відсортований у зворотному порядку масив: ${rez.join("  ")}</p>
`;

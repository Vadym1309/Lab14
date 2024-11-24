document.addEventListener("DOMContentLoaded", function() {
    // Масиви
    const fruits = ['apple', 'pineapple', 'mango', 'melon', 'grape'];
    const citrus = ['orange', 'lemon', 'lime'];

    // Виведення масивів по черзі
    document.getElementById('fruitsOutput').textContent = "Масив fruits: " + fruits.join(", ");
    document.getElementById('citrusOutput').textContent = "Масив citrus: " + citrus.join(", ");
    
    // Об'єднаний масив
    const combinedFruits = fruits.concat(citrus);
    document.getElementById('combinedOutput').textContent = "Об'єднаний масив fruits: " + combinedFruits.join(", ");
    
    // Вставлення елементів після 'mango'
    const fruitsWithNewItems = [...fruits]; // Створюємо копію масиву
    const mangoIndex = fruitsWithNewItems.indexOf('mango');
    if (mangoIndex !== -1) {
        fruitsWithNewItems.splice(mangoIndex + 1, 0, 'pear', 'cherry', 'plum', 'raspberry', 'strawberry');
    }
    document.getElementById('insertedFruitsOutput').textContent = 
        "Масив fruits після mango з новими елементами: " + fruitsWithNewItems.join(", ");

    // Видалення останніх 3 елементів
    const fruitsWithoutLastThree = [...fruits];
    fruitsWithoutLastThree.splice(-3);
    document.getElementById('removeLastThreeOutput').textContent = 
        "Масив fruits після видалення останніх 3 елементів: " + fruitsWithoutLastThree.join(", ");

    // Сортування масиву fruits в алфавітному порядку
    const sortedFruits = [...fruits].sort();
    document.getElementById('sortedFruitsOutput').textContent = 
        "Відсортований масив fruits в алфавітному порядку: " + sortedFruits.join(", ");
    
    // Сортування масиву fruits у зворотному алфавітному порядку
    const reverseSortedFruits = [...fruits].sort().reverse();
    document.getElementById('reverseSortedFruitsOutput').textContent = 
        "Масив fruits у зворотному алфавітному порядку: " + reverseSortedFruits.join(", ");
    
    // Сортування масиву fruits за довжиною слів
    const lengthSortedFruits = [...fruits].sort((a, b) => a.length - b.length);
    document.getElementById('lengthSortedFruitsOutput').textContent = 
        "Масив fruits, відсортований за довжиною слів: " + lengthSortedFruits.join(", ");
});

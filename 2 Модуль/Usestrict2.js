function containsValue(array, value) {
    // Проверка, является ли array массивом
    if (!Array.isArray(array)) {
      throw new Error("Первый аргумент должен быть массивом");
    }
  
    // Использование строгого сравнения ===
    return array.includes(value);
  }

  const numbers = [1, 2, 3, 4, 5];

console.log(containsValue(numbers, 3)); // Вывод: true
console.log(containsValue(numbers, 6)); // Вывод: false
console.log(containsValue(numbers, "3")); // Вывод: false (строгое сравнение)
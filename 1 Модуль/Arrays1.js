function increaseNumbers(numbers) {
    // Проверка, является ли аргумент массивом
    if (!Array.isArray(numbers)) {
      throw new Error("Аргумент должен быть массивом");
    }
  
    // Итерация по элементам массива
    for (let i = 0; i < numbers.length; i++) {
      // Увеличение каждого числа на 10%
      numbers[i] *= 1.1;
    }
  
    // Возврат измененного массива
    return numbers;
  }

  const numbers = [10, 20, 30, 40, 50];
const increasedNumbers = increaseNumbers(numbers);
console.log(increasedNumbers); // Вывод: [11, 22, 33, 44, 55]
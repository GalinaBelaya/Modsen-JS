function sumOfSquares(numbers) {
    if (!Array.isArray(numbers)) {
      throw new TypeError("Аргумент должен быть массивом");
    }
  
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== 'number') {
        throw new TypeError("Все элементы массива должны быть числами");
      }
      sum += numbers[i] * numbers[i];
    }
    return sum;
  }
  
  // Пример использования
  const numbers = [1, 2, 3, 4, 5];
  const sum = sumOfSquares(numbers);
  console.log(`Сумма квадратов элементов массива: ${sum}`); // Вывод: Сумма квадратов элементов массива: 55
  
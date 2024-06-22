  function sumFirstHalf(numbers) {
    // Проверка, является ли numbers массивом
    if (!Array.isArray(numbers)) {
      throw new Error("Аргумент должен быть массивом");
    }
  
    // Проверка, содержит ли массив числа
    if (!numbers.every(Number.isFinite)) {
      throw new Error("Все элементы массива должны быть числами");
    }
  
    // Определение середины массива
    const middleIndex = Math.floor(numbers.length / 2);
  
    // Суммирование элементов первой половины
    let sum = 0;
    for (let i = 0; i < middleIndex; i++) {
      sum += numbers[i];
    }
  
    return sum;
  }

  const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];

const sum = sumFirstHalf(numbers1);
console.log(sum); // Вывод: 10 (1 + 2 + 3 + 4)
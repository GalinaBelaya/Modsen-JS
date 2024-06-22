  function bubbleSort(array) {
    // Проверка, является ли array массивом
    if (!Array.isArray(array)) {
      throw new Error("Аргумент должен быть массивом");
    }
  
    // Проверка, содержит ли массив числа
    if (!array.every(Number.isFinite)) {
      throw new Error("Все элементы массива должны быть числами");
    }
  
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          // Обмен элементов
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }

  const numbers2 = [5, 2, 8, 1, 9, 3];

const sortedNumbers = bubbleSort(numbers2);
console.log(sortedNumbers); // Вывод: [1, 2, 3, 5, 8, 9]
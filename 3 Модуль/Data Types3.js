function sumFirstAndLastDigit(number) {
    if (typeof number !== 'number') {
      throw new TypeError("Аргумент должен быть числом");
    }
  
    if (number < 0) {
      number = -number; // Преобразуем отрицательное число в положительное
    }
  
    if (number === 0) {
      console.log("Сумма первой и последней цифры: 0");
      return;
    }
  
    let firstDigit = number;
    while (firstDigit >= 10) {
      firstDigit = Math.floor(firstDigit / 10);
    }
  
    let lastDigit = number % 10;
  
    console.log(`Сумма первой и последней цифры: ${firstDigit + lastDigit}`);
  }
  
  // Пример использования
  sumFirstAndLastDigit(12345); // Вывод: Сумма первой и последней цифры: 6
  sumFirstAndLastDigit(987654321); // Вывод: Сумма первой и последней цифры: 10
  sumFirstAndLastDigit(-12345); // Вывод: Сумма первой и последней цифры: 6
  sumFirstAndLastDigit(0); // Вывод: Сумма первой и последней цифры: 0
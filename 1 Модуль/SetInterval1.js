function repeatOperation(operation, interval) {
    // Проверка, является ли operation функцией
    if (typeof operation !== 'function') {
      throw new Error("Аргумент operation должен быть функцией");
    }
  
    // Проверка, является ли interval числом
    if (typeof interval !== 'number' || interval <= 0) {
      throw new Error("Аргумент interval должен быть положительным числом");
    }
  
    // Создание интервала
    const intervalId = setInterval(() => {
      // Выполнение операции
      operation();
    }, interval);
  
    // Возврат идентификатора интервала для возможности отмены
    return intervalId;
  }

  function logMessage() {
    console.log("Привет из интервала!");
  }
  
  const intervalId = repeatOperation(logMessage, 1000); // Вывод сообщения каждые 1 секунду
  
  // Отмена интервала после 5 секунд
  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
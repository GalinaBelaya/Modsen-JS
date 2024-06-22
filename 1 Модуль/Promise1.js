async function executeOperations(operations) {
    // Проверка, является ли operations массивом
    if (!Array.isArray(operations)) {
      throw new Error("Аргумент operations должен быть массивом");
    }
  
    // Итерация по операциям с помощью Promise.all
    for (const operation of operations) {
      // Проверка, является ли операция функцией
      if (typeof operation !== 'function') {
        throw new Error("Каждая операция в массиве должна быть функцией");
      }
  
      // Выполнение операции с помощью await
      await operation();
    }
  }

  async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function logMessage(message) {
    console.log(message);
    await delay(1000); // Задержка на 1 секунду
  }
  
  const operations = [
    () => logMessage("Операция 1"),
    () => logMessage("Операция 2"),
    () => logMessage("Операция 3")
  ];
  
  executeOperations(operations);
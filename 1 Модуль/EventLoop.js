function delayCallback(callback) {
  // Проверка, является ли callback функцией
  if (typeof callback !== 'function') {
    throw new Error("Аргумент callback должен быть функцией");
  }

  // Задержка на 2 секунды
  setTimeout(() => {
    // Вызов callback функции
    callback();
  }, 2000);
}

function logMessage() {
  console.log("Привет из задержки!");
}

delayCallback(logMessage); // Вывод сообщения "Привет из задержки!" через 2 секунды
function checkInteger(number) {
    // Проверка, является ли число целым
    if (!Number.isInteger(number)) {
      // Выброс пользовательской ошибки
      throw new Error("Число должно быть целым числом");
    }
  }

  try {
    checkInteger(5); // Все в порядке, число целое
    checkInteger(3.14); // Выброс ошибки, так как число не целое
  } catch (error) {
    console.error(error.message); // Вывод: Число должно быть целым числом
  }
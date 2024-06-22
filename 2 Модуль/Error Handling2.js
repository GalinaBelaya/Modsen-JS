function accessPropertySafely(obj, propertyName) {
    try {
      // Попытка доступа к свойству
      const value = obj[propertyName];
      console.log(`Значение свойства ${propertyName}: ${value}`);
    } catch (error) {
      // Обработка ошибки TypeError
      if (error instanceof TypeError) {
        console.error(`Ошибка: Свойство ${propertyName} не определено в объекте.`);
      } else {
        // Переброс других ошибок
        throw error;
      }
    }
  }
  
  // Пример использования
  const myObject = { name: "John" };
  
  accessPropertySafely(myObject, "name"); // Вывод: Значение свойства name: John
  accessPropertySafely(myObject, "age"); // Вывод: Ошибка: Свойство age не определено в объекте.
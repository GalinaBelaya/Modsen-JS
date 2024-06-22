function printLastCharacter(str) {
    // Проверка, является ли str строкой
    if (typeof str !== 'string') {
      throw new Error("Аргумент должен быть строкой");
    }
  
    // Вывод последнего символа
    console.log(str[str.length - 1]);
  }

  printLastCharacter("Hello"); // Вывод: o
printLastCharacter("World"); // Вывод: d
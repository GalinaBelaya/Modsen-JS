"use strict"; // Включение строгого режима

function countVowels(str) {
  if (typeof str !== 'string') {
    throw new TypeError("Аргумент должен быть строкой");
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

// Пример использования
const text = "Hello, world!";
const vowelCount = countVowels(text);
console.log(`Количество гласных в строке "${text}": ${vowelCount}`); // Вывод: Количество гласных в строке "Hello, world!": 3
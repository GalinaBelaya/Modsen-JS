'use strict';

function factorial(n) {
  if (n < 0) {
    throw new Error("Факториал не определен для отрицательных чисел");
  } else if (n === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

console.log(factorial(5)); // Вывод: 120
console.log(factorial(0)); // Вывод: 1

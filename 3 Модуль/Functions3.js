  function findFirstNonRepeatingCharacter(str) {
    if (typeof str !== 'string') {
      throw new TypeError("Аргумент должен быть строкой");
    }
  
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    return null; // Если все символы повторяются
  }
  
  // Пример использования
  const text1 = "abcabcbb";
  const firstNonRepeatingChar = findFirstNonRepeatingCharacter(text1);
  console.log(`Первый неповторяющийся символ: ${firstNonRepeatingChar}`); // Вывод: Первый неповторяющийся символ: b
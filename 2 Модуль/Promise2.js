async function fetchUrls(urls) {
    // Проверка, является ли urls массивом
    if (!Array.isArray(urls)) {
      throw new Error("Аргумент должен быть массивом");
    }
  
    // Проверка, содержит ли массив строки
    if (!urls.every(url => typeof url === 'string')) {
      throw new Error("Все элементы массива должны быть строками");
    }
  
    // Создание массива промисов для каждого URL
    const promises = urls.map(url => fetch(url).then(response => response.text()));
  
    // Загрузка содержимого всех URL параллельно
    const results = await Promise.all(promises);
  
    return results;
  }
  
  // Пример использования
  const urls = [
    "https://www.example.com/",
    "https://www.google.com/",
    "https://www.facebook.com/",
  ];
  
  fetchUrls(urls)
    .then(results => {
      console.log("Результаты загрузки:");
      results.forEach((result, index) => {
        console.log(`URL ${index + 1}: ${result}`);
      });
    })
    .catch(error => {
      console.error("Ошибка при загрузке:", error);
    });
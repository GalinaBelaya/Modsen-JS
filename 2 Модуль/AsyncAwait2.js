async function fetchDataAndSendToAnotherServer(url1, url2) {
    // Проверка, являются ли url1 и url2 строками
    if (typeof url1 !== 'string' || typeof url2 !== 'string') {
      throw new Error("Аргументы должны быть строками");
    }
  
    try {
      // Загрузка данных с первого сервера
      const response1 = await fetch(url1);
      const data1 = await response1.json();
  
      // Использование данных для запроса к другому серверу
      const response2 = await fetch(url2, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data1)
      });
  
      // Обработка ответа второго сервера
      const data2 = await response2.json();
      console.log("Ответ второго сервера:", data2);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  }
  
  // Пример использования
  const url1 = "https://api.example.com/data";
  const url2 = "https://api.anotherserver.com/process";
  
  fetchDataAndSendToAnotherServer(url1, url2);
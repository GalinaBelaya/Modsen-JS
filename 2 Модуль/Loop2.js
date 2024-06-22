async function fetchDataWithTimeout(url, timeout) {
    // Проверка, является ли url строкой
    if (typeof url !== 'string') {
      throw new Error("Аргумент url должен быть строкой");
    }
  
    // Проверка, является ли timeout числом
    if (typeof timeout !== 'number' || timeout <= 0) {
      throw new Error("Аргумент timeout должен быть положительным числом");
    }
  
    let controller = new AbortController();
    let signal = controller.signal;
  
    // Создание промиса с таймаутом
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Запрос прерван из-за таймаута'));
        controller.abort();
      }, timeout);
    });
  
    // Выполнение запроса с таймаутом
    try {
      const response = await Promise.race([
        fetch(url, { signal }),
        timeoutPromise
      ]);
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(`Ошибка при загрузке данных: ${response.status}`);
      }
    } catch (error) {
      console.error("Ошибка:", error);
      throw error; // Переброс ошибки для дальнейшей обработки
    }
  }
  
  // Пример использования
  const url = "https://api.example.com/data";
  const timeout = 5000; // 5 секунд
  
  fetchDataWithTimeout(url, timeout)
    .then(data => {
      console.log("Данные:", data);
    })
    .catch(error => {
      console.error("Ошибка:", error);
    });
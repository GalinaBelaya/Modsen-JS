async function fetchData(url) {
    try {
      // Выполнение запроса с помощью fetch
      const response = await fetch(url);
  
      // Проверка статуса ответа
      if (!response.ok) {
        throw new Error(`Ошибка при загрузке данных: ${response.status}`);
      }
  
      // Преобразование ответа в JSON
      const data = await response.json();
  
      // Возврат полученных данных
      return data;
    } catch (error) {
      // Обработка ошибок
      console.error("Ошибка:", error);
      throw error; // Переброс ошибки для дальнейшей обработки
    }
  }

  const apiUrl = "https://api.example.com/data";

async function main() {
  try {
    const data = await fetchData(apiUrl);
    console.log("Полученные данные:", data);
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
}

main();
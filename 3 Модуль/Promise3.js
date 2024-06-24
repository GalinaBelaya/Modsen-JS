async function fetchCombinedData(apiUrls) {
    const promises = apiUrls.map(url => fetch(url).then(res => res.json()));
  
    // Используем Promise.all для одновременного выполнения запросов
    const responses = await Promise.all(promises);
  
    // Объединяем результаты
    const combinedData = responses.reduce((acc, data) => ({ ...acc, ...data }), {});
  
    return combinedData;
  }
  
  // Пример использования
  const apiUrls = [
    "https://api.example.com/data1",
    "https://api.example.com/data2",
    "https://api.example.com/data3",
  ];
  
  fetchCombinedData(apiUrls)
    .then(data => console.log(data))
    .catch(error => console.error(error));
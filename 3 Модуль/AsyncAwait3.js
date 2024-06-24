async function fetchParallelData(urls) {
    const promises = urls.map(url => fetch(url).then(res => res.json()));
  
    // Используем Promise.all для одновременного выполнения запросов
    const responses = await Promise.all(promises);
  
    // Возвращаем массив результатов
    return responses;
  }
  
  // Пример использования
  const urls = [
    "https://api.example.com/data1",
    "https://api.example.com/data2",
    "https://api.example.com/data3",
  ];
  
  fetchParallelData(urls)
    .then(data => console.log(data))
    .catch(error => console.error(error));
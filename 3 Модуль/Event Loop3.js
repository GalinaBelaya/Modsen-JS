function generateRandomDelay() {
    return new Promise((resolve, reject) => {
      const randomNum = Math.floor(Math.random() * 10) + 1;
      console.log(`Сгенерированное число: ${randomNum}`);
  
      setTimeout(() => {
        if (randomNum <= 5) {
          resolve(`Промис выполнен успешно! Число: ${randomNum}`);
        } else {
          reject(`Промис отклонен! Число: ${randomNum}`);
        }
      }, randomNum * 1000); // Задержка в секундах
    });
  }
  
  generateRandomDelay()
    .then(result => console.log(result))
    .catch(error => console.error(error));
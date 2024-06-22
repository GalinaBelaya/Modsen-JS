function compareObjects(obj1, obj2) {
    // Проверка, являются ли оба объекта объектами
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return false;
    }
  
    // Проверка, имеют ли объекты одинаковое количество свойств
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
  
    // Сравнение значений свойств
    for (const key in obj1) {
      if (obj1.hasOwnProperty(key)) {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }
  
    // Если все свойства совпадают, возвращаем true
    return true;
  }

  const obj1 = { name: 'John', age: 30 };
const obj2 = { name: 'John', age: 30 };
const obj3 = { name: 'Jane', age: 25 };

console.log(compareObjects(obj1, obj2)); // Вывод: true
console.log(compareObjects(obj1, obj3)); // Вывод: false
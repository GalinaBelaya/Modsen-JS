function testScope() {
    // Блок кода
    {
      var xVar = 10; // Объявление с var
      let xLet = 20; // Объявление с let
      const xConst = 30; // Объявление с const
    }
  
    // Попытка доступа к переменным снаружи блока
    console.log("xVar:", xVar); // Доступно
    console.log("xLet:", xLet); // Ошибка: xLet не определена
    console.log("xConst:", xConst); // Ошибка: xConst не определена
  }
  
  testScope();
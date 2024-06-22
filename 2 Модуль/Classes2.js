class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // Создание экземпляра класса Rectangle
  const myRectangle = new Rectangle(5, 10);
  
  // Вычисление площади
  const area = myRectangle.calculateArea();
  console.log("Площадь:", area); // Вывод: Площадь: 50
  
  // Вычисление периметра
  const perimeter = myRectangle.calculatePerimeter();
  console.log("Периметр:", perimeter); // Вывод: Периметр: 30
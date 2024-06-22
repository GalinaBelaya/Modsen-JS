class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
    }
  }
  
  // Create instances of the class
  const person1 = new Person("John", 30, "USA");
  const person2 = new Person("Jane", 25, "Canada");
  
  // Display information about the people
  person1.displayInfo();
  console.log("-----");
  person2.displayInfo();
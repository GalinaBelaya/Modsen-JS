class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    calculateAnnualSalary() {
      return super.calculateAnnualSalary() + (this.salary * 0.1); // 10% bonus
    }
  }
  
  // Create instances of the "Manager" class
  const manager1 = new Manager("John Doe", 50000, "Sales Department");
  const manager2 = new Manager("Jane Smith", 60000, "Marketing Department");
  
  // Calculate annual salary
  console.log(`${manager1.name}: ${manager1.calculateAnnualSalary()}`); // Output: John Doe: 600000
  console.log(`${manager2.name}: ${manager2.calculateAnnualSalary()}`); // Output: Jane Smith: 720000
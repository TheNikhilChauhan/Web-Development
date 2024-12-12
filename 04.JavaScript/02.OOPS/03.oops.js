let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,

  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

//Can;t create much copies of it, so here comes the use of constructor

/* function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  this.start = () => {
    return `${this.make} car got started in ${this.year}`;
  };
}

let Toyota = new Car("Toyota", "Camry", 2020);
console.log(Toyota);
console.log(Toyota.start());
 */
//2

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

let cat = new Animal("Cat");
// console.log(cat);
// console.log(cat.speak());

//Class

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

//Inheritance

class Car extends Vehicle {
  drive() {
    return `${this.make}: This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

//Encapsulation: restricting direct access to object data

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `Rs ${this.#balance}`;
  }
}

let account = new BankAccount();

account.deposit(200);
// console.log(account.getBalance());

//Abstraction: hiding complex functionality

class CoffeeMachine {
  start() {
    return `Starting the machine....`;
  }

  brewCoffee() {
    //complex calculation
    return `Brewing Coffee..`;
  }

  pressStartButton() {
    let msg = this.start();
    let msg2 = this.brewCoffee();
    return `${msg} + ${msg2}`;
  }
}

let myCoffee = new CoffeeMachine();
// console.log(myCoffee.start());
// console.log(myCoffee.brewCoffee());

// console.log(myCoffee.pressStartButton());

//Polymorphism : ability to have many forms

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

//static method: static can only be called by the class itself.

class Calculator {
  static add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
}

let miniCal = new Calculator();
// console.log(miniCal.add(2, 3));
// console.log(miniCal.multiply(2, 3));

//getters and setters

class Employee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}

let emp = new Employee("Joey", 50000);
console.log(emp.salary);
// console.log(emp._salary);

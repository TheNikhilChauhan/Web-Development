function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
// console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = () => {
    return `this is a cup of ${this.type}`;
  };
}

let lemonTea = new Tea("lemon tea");
console.log(lemonTea);
console.log(lemonTea.describe());

function Animal(species, someSound) {
  this.species = species;
  this.someSound = someSound;
}
//new way:

Animal.prototype.sound = function () {
  return `${this.species} makes ${this.someSound} sound.`;
};

let dog = new Animal("Dog", "Woof Woof");
console.log(dog);
console.log(dog.sound());

let cat = new Animal("Cat", "Meoww");
console.log(cat);
console.log(cat.sound());

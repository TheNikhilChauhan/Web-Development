const Person = {
  name: "Chandler",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};
console.log(this);
Person.greet();

const greetFunction = Person.greet;
greetFunction();

const boundGreet = Person.greet.bind({ name: "Joey" });
boundGreet();

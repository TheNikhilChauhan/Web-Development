//number

let balance = 100;
let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance);

console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance);

//boolean

let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

//null and undefined
let firstName = null;
let lastName = undefined;

console.log(firstName + " " + lastName);

//string

let myString = "hey";
let myStringOne = "hi there";
let username = "Harvey";

let greetMessage = `${myString}, ${myStringOne} ${username}!`;

console.log(greetMessage);

let demo = `Value is ${2 * 2}`;
console.log(demo);

//Symbol

let sy = Symbol("hi");
let sy2 = Symbol("hi");

console.log(sy, sy2);

// Checking if a number is greater than another number

let num1 = 10;
let num2 = 33;

console.log("Regular upper code");

if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else {
  console.log(`${num2} is greater than ${num1}`);
}

console.log("Regular bottom code");

// 2. Check if a string is equal to another stirng

let username = "Harvey";
let anotherUsername = "Ross";

if (username !== anotherUsername) {
  console.log("Pick another username");
}

//3. Checking if a variable is a number or not

let score = 44;

if (typeof score === "number") {
  console.log("This variable is a number");
} else {
  console.log("This variable is not a number");
}

// 4. Checking if an array is empty or not

let items = [];

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}

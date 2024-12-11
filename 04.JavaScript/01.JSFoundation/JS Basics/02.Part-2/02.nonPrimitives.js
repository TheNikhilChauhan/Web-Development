//object

// let obj = {};
// console.log(obj);
// console.log(typeof obj);

const username = {
  firstName: "Gregory",
  lastName: "House",
};
//dot notation
console.log(username.firstName);
console.log(username.lastName);
console.log(username);

username.firstName = "Sherlock";
username.lastName = "Holmes";

//bracket
console.log(username["firstName"]);
console.log(username["lastName"]);
console.log(username);

// ***************************

// Arrays

let characters = ["Harvey", "Dwight", "Jim"];
console.log(characters[0]);

//type conversion

console.log("1" + 1);

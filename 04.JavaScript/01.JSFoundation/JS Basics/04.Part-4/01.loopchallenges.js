/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`
*/

let num = 1;
let sum = 0;
while (num <= 5) {
  sum = sum + num;
  num++;
}

console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let countdown = [];
let count = 5;
while (count >= 1) {
  countdown.push(count);
  count--;
}

console.log(countdown);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter "stop".
    Store each tea type in an array named `teaCollection`
*/

/* let teaCollection = [];
let tea;
do {
    tea = prompt(`Enter the tea type (Type "stop" to finish)`);

  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop"); */

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'.
*/

let total = 0;
let numb = 1;
do {
  total = total + numb;
  numb++;
} while (numb <= 3);
console.log(`Total is: ${total}`);

/* 
5. Write a `for` loop that multiplie each element in the array `[2,4,6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let arr1 = [2, 4, 6];
let multipliedNumbers = [];
for (let i = 0; i < arr1.length; i++) {
  let multi = arr1[i] * 2;
  multipliedNumbers.push(multi);
}

console.log(multipliedNumbers);

/* 
6. Writte a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  console.log(`City ${i + 1}: ${cities[i]}`);
  cityList.push(cities[i]);
}

console.log(cityList);

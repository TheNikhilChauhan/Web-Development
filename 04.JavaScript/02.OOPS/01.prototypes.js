let computer = {
  cpu: 12,
};

let lenovo = {
  screen: "HD",
  __proto__: computer,
};

// console.log("lenovo", lenovo.__proto__);
// console.log(lenovo);

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`generic Car: `, Object.getPrototypeOf(tesla));
console.log(`tesla`, tesla);
console.log(`tesla`, tesla.tyres);

console.log(`tesla`, genericCar);

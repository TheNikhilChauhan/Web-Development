// using object

function memoization(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

const add = (a, b) => {
  console.log("Computing");
  return a + b;
};

const memo = memoization(add);

console.log(memo(2, 5));
console.log(memo(2, 5));
console.log(memo(5, 4));
console.log(memo(5, 4));

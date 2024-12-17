function memoization(fn) {
  let cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log("Fetching from cache for ", args);
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
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

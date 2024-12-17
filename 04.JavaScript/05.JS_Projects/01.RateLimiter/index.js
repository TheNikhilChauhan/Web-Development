function rateLimiter(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    let currentTime = Date.now();

    if (currentTime - lastCall < limit) {
      return `Rate limit exceeded`;
    } else {
      lastCall = currentTime;
      return fn(...args);
    }
  };
}

const greet = () => "Hello there!";
const limitGreet = rateLimiter(greet, 2000);

console.log(limitGreet());
console.log(limitGreet());
setTimeout(() => {
  console.log(limitGreet());
}, 2500);

function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
  }
  let n = 7;
  let fib = fibonacci(n);
  console.log("The " + n + "th Fibonacci number is: " + fib);
    
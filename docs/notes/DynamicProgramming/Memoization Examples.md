# Memoization Examples

## Problem Statement

Memoization is an optimization technique that stores the results of expensive function calls and reuses them when the same inputs occur again. It is a specific form of caching used in dynamic programming to eliminate redundant computations in recursive algorithms with overlapping subproblems.

Without memoization, recursive algorithms can have exponential time complexity — for example, computing the nth Fibonacci number naively runs in O(2^n) because the same subproblems are recomputed repeatedly. Memoization brings this down to O(n) by computing each value only once.

## Examples

- Input: fibonacci(5)
- Output: 5
- Explanation: F(5) = F(4) + F(3). Without memoization, F(3) is computed multiple times. With memoization, each value is computed once and cached.

- Input: multiplyBy10(10) called twice
- Output: 100 (computed first time, returned from cache second time)

## Approach

1. Create a cache (plain object or Map) to store previously computed results.
2. Before computing, check if the result for the given input already exists in the cache.
3. If it does, return the cached result immediately.
4. If it doesn't, compute the result, store it in the cache, then return it.

Two common patterns:
- **Closure-based**: The cache lives inside the outer function and is shared across all calls to the returned inner function.
- **Decorator pattern**: A generic memoize(fn) wrapper that can wrap any pure function, using JSON.stringify(args) as the cache key to support multiple parameters.

## Solution

```js
// 1. Closure-based memoization — single parameter
const memoizedMultiply = () => {
  const cache = {};

  return (num) => {
    if (cache[num] !== undefined) {
      console.log("From cache:", num);
      return cache[num];
    }

    console.log("Computing for:", num);
    const result = num * 10;
    cache[num] = result;
    return result;
  };
};

const multiplyBy10 = memoizedMultiply();

console.log(multiplyBy10(10)); // Computing for: 10 → 100
console.log(multiplyBy10(10)); // From cache: 10 → 100
console.log(multiplyBy10(20)); // Computing for: 20 → 200
console.log(multiplyBy10(20)); // From cache: 20 → 200


// 2. Generic memoize decorator — supports multiple parameters
export const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log("From cache:", key);
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

const add3 = (num1, num2, num3) => {
  console.log("Computing for:", num1, num2, num3);
  return num1 + num2 + num3;
};

const memoizedAdd3 = memoize(add3);

console.log(memoizedAdd3(1, 2, 3)); // Computing for: 1 2 3 → 6
console.log(memoizedAdd3(1, 2, 3)); // From cache → 6
console.log(memoizedAdd3(1, 2, 3)); // From cache → 6
```

## Time Complexity

**O(n)** — With memoization, each unique input is computed exactly once. Without it, overlapping recursive problems like Fibonacci run in O(2^n).

## Space Complexity

**O(n)** — The cache stores one entry per unique input. For Fibonacci, this means O(n) space for n unique subproblems.

## Notes

- Memoization only works correctly on **pure functions** — functions that return the same output for the same input with no side effects.
- JSON.stringify(args) as a cache key works for primitive arguments; for object/array arguments, deep equality is not checked — two different objects with the same shape produce the same key, which can cause subtle bugs.
- Memoization trades space for time. It is most effective when: (1) the function is called repeatedly with the same arguments, and (2) the computation is expensive relative to cache lookup.

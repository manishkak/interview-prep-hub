# Memoization Examples

## Problem Statement

Describe the problem statement for **Memoization Examples** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
What is Memoization?
Memoization is an optimization technique primarily used to enhance the performance of algorithms by storing the results of expensive function calls and
reusing them when the same inputs occur again.
Memoization is particularly effective in scenarios involving repeated computations, like recursive algorithms or dynamic programming, where the same calculations may be performed multiple times.

Why is Memoization used?
Memoization is a specific form of caching that is used in dynamic programming.
The purpose of caching is to improve the performance of our programs and keep data accessible that can be used later.
It basically stores the previously calculated result of the subproblem and reuses the stored result for the same subproblem. This removes the extra effort to calculate again and again for the same problem.

Where to use Memoization?
Memoization is useful in situations where previously calculated results can be reused.
It is particularly effective in recursive problems, especially those involving overlapping subproblems, where the same calculations are repeated multiple times.

Example of Memoization: Finding nth Fibonacci Number
The Fibonacci sequence is a classic example of how memoization can optimize recursive algorithms by eliminating redundant computations.

The Fibonacci sequence is defined as:
Base Case: F(0) = 0 and F(1) = 1
Recursive Cases: F(n) = F(n-1) + F(n-2)

Using recursion, solving F(n) involves repeatedly breaking the problem into smaller subproblems. However, many of these subproblems are recalculated multiple times, leading to inefficiency. For instance, computing F(5) will independently calculate F(3) and F(2) multiple times. By using memoization, we store the results of already computed subproblems in a cache, allowing us to reuse them whenever the same subproblem arises again. This eliminates redundant calculations and significantly improves efficiency.

Without memoization, the time complexity of finding the nth Fibonacci number using recursion is O(2^n), as the function repeatedly solves overlapping subproblems, creating an exponential number of recursive calls. For instance, F(3) and F(2) are recalculated multiple times when computing F(5), leading to inefficiency.
With memoization, the time complexity reduces to O(n) because each Fibonacci number is computed only once and stored for reuse. This eliminates redundant computations and ensures a linear traversalfrom F(0) and F(n), significantly improving performance.
*/

// 1. Simple example
// simple memoized multiply function using closure
const memoizedMultiply = () => {
    const cache = {}; // lives inside closure

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

// get the memoized function
const multiplyBy10 = memoizedMultiply();

// calls
console.log(multiplyBy10(10)); // computes, stores {10: 100}
console.log(multiplyBy10(10)); // from cache
console.log(multiplyBy10(20)); // computes, stores {20: 200}
console.log(multiplyBy10(20)); // from cache



// 2. With a memoize decorator function that is capable of handling multiple parameters.
// this memoize decorator function can be used with any function for computation
// just use that function in place of the const add3 below
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

// function that adds three nums
const add3 = (num1, num2, num3) => {
  console.log("Computing for:", num1, num2, num3);
  return num1 + num2 + num3;
}

// memoized version
const memoizedMultiplyBy10 = memoize(add3);

// called thrice
console.log(memoizedMultiplyBy10(1, 2, 3));  // computes
console.log(memoizedMultiplyBy10(1, 2, 3));  // from cache
console.log(memoizedMultiplyBy10(1, 2, 3));  // from cache

/*
What happens:-
    First call computes 5 * 10
    Second and third calls reuse the cached result
    Console logs clearly show when computation vs cache is used
*/

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

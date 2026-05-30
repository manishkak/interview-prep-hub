const e=`# Memoization Examples

## Problem Statement

Describe the problem statement for **Memoization Examples** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
What is Memoization?\r
Memoization is an optimization technique primarily used to enhance the performance of algorithms by storing the results of expensive function calls and\r
reusing them when the same inputs occur again.\r
Memoization is particularly effective in scenarios involving repeated computations, like recursive algorithms or dynamic programming, where the same calculations may be performed multiple times.\r
\r
Why is Memoization used?\r
Memoization is a specific form of caching that is used in dynamic programming.\r
The purpose of caching is to improve the performance of our programs and keep data accessible that can be used later.\r
It basically stores the previously calculated result of the subproblem and reuses the stored result for the same subproblem. This removes the extra effort to calculate again and again for the same problem.\r
\r
Where to use Memoization?\r
Memoization is useful in situations where previously calculated results can be reused.\r
It is particularly effective in recursive problems, especially those involving overlapping subproblems, where the same calculations are repeated multiple times.\r
\r
Example of Memoization: Finding nth Fibonacci Number\r
The Fibonacci sequence is a classic example of how memoization can optimize recursive algorithms by eliminating redundant computations.\r
\r
The Fibonacci sequence is defined as:\r
Base Case: F(0) = 0 and F(1) = 1\r
Recursive Cases: F(n) = F(n-1) + F(n-2)\r
\r
Using recursion, solving F(n) involves repeatedly breaking the problem into smaller subproblems. However, many of these subproblems are recalculated multiple times, leading to inefficiency. For instance, computing F(5) will independently calculate F(3) and F(2) multiple times. By using memoization, we store the results of already computed subproblems in a cache, allowing us to reuse them whenever the same subproblem arises again. This eliminates redundant calculations and significantly improves efficiency.\r
\r
Without memoization, the time complexity of finding the nth Fibonacci number using recursion is O(2^n), as the function repeatedly solves overlapping subproblems, creating an exponential number of recursive calls. For instance, F(3) and F(2) are recalculated multiple times when computing F(5), leading to inefficiency.\r
With memoization, the time complexity reduces to O(n) because each Fibonacci number is computed only once and stored for reuse. This eliminates redundant computations and ensures a linear traversalfrom F(0) and F(n), significantly improving performance.\r
*/\r
\r
// 1. Simple example\r
// simple memoized multiply function using closure\r
const memoizedMultiply = () => {\r
    const cache = {}; // lives inside closure\r
\r
    return (num) => {\r
        if (cache[num] !== undefined) {\r
            console.log("From cache:", num);\r
            return cache[num];\r
        }\r
\r
        console.log("Computing for:", num);\r
        const result = num * 10;\r
        cache[num] = result;\r
        return result;\r
    };\r
};\r
\r
// get the memoized function\r
const multiplyBy10 = memoizedMultiply();\r
\r
// calls\r
console.log(multiplyBy10(10)); // computes, stores {10: 100}\r
console.log(multiplyBy10(10)); // from cache\r
console.log(multiplyBy10(20)); // computes, stores {20: 200}\r
console.log(multiplyBy10(20)); // from cache\r
\r
\r
\r
// 2. With a memoize decorator function that is capable of handling multiple parameters.\r
// this memoize decorator function can be used with any function for computation\r
// just use that function in place of the const add3 below\r
export const memoize = (fn) => {\r
    const cache = {};\r
\r
    return (...args) => {\r
        const key = JSON.stringify(args);\r
\r
        if (key in cache) {\r
            console.log("From cache:", key);\r
            return cache[key];\r
        }\r
\r
        const result = fn(...args);\r
        cache[key] = result;\r
        return result;\r
    };\r
};\r
\r
// function that adds three nums\r
const add3 = (num1, num2, num3) => {\r
  console.log("Computing for:", num1, num2, num3);\r
  return num1 + num2 + num3;\r
}\r
\r
// memoized version\r
const memoizedMultiplyBy10 = memoize(add3);\r
\r
// called thrice\r
console.log(memoizedMultiplyBy10(1, 2, 3));  // computes\r
console.log(memoizedMultiplyBy10(1, 2, 3));  // from cache\r
console.log(memoizedMultiplyBy10(1, 2, 3));  // from cache\r
\r
/*\r
What happens:-\r
    First call computes 5 * 10\r
    Second and third calls reuse the cached result\r
    Console logs clearly show when computation vs cache is used\r
*/\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};

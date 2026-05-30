# stock Span Problem

## Problem Statement

Describe the problem statement for **stock Span Problem** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem Statement
 * You are given an array prices[] where prices[i] is the price of a stock on day i. For each day, you need to find the Stock Span:
 * The stock span of prices[i] is the number of consecutive days just before i (including i itself) for which the price of the stock was less than or equal to prices[i].
 */
/**
 * Example
 * Input:
    prices = [100, 80, 60, 70, 60, 75, 85]
 * Output:
    span = [1, 1, 1, 2, 1, 4, 6]
 */
/*
Explanation:
Day 0 (100): No previous greater → span = 1
Day 1 (80): No previous greater → span = 1
Day 2 (60): No previous greater → span = 1
Day 3 (70): Previous price 60 ≤ 70 → span = 2
Day 4 (60): No previous greater → span = 1
Day 5 (75): Previous 60, 70 ≤ 75 → span = 4
Day 6 (85): Previous 75, 60, 70, 80 ≤ 85 → span = 6
*/
✅ Optimal Approach (Using Stack of Indices)
// - Use a stack to store indices of days with higher prices.
// - For each day i:
//     - Pop from stack while prices[stack[top]] <= prices[i]
//     - If stack is empty, span = i + 1
//     - Else, span = i - stack[top]
//     - Push i onto the stack

✅ //Steps to Explain to Interviewer
// - Initialize an empty stack and an array span[] of size n.
// - Traverse each day i:
//     - While stack is not empty and current price ≥ price at top of stack, pop.
//     - If stack becomes empty → no greater price on the left → span[i] = i + 1.
//     - Else → span is the gap between current index and index at top → span[i] = i - stack[top].
// - Push current index onto stack.
// - Return span.

✅ Why it works?
// The stack always keeps indices of days with decreasing prices. This way, the top of the stack is the nearest day with a higher price than today.

function stockSpan(prices) {
    const n = prices.length;
    const span = new Array(n);
    const stack = [];

    for (let i = 0; i < n; i++) {
        // Pop elements from stack while current price is greater or equal
        while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            span[i] = i + 1; // Entire range so far
        } else {
            span[i] = i - stack[stack.length - 1];
        }

        stack.push(i); // Push current index
    }

    return span;
}

✅ Dry Run with Example

| i | price | stack before | span\[i] | stack after |
| - | ----- | ------------ | -------- | ----------- |
| 0 | 100   |     []          | 1     |    [0]        |
| 1 | 80    |     [0]         | 1     |    [0,1]      |
| 2 | 60    |     [0,1]       | 1     |    [0,1,2]    |
| 3 | 70    |     [0,1,2]     | 2     |    [0,1,3]    |
| 4 | 60    |     [0,1,3]     | 1     |    [0,1,3,4]  |
| 5 | 75    |     [0,1,3,4]   | 4     |    [0,1,5]    |
| 6 | 85    |     [0,1,5]     | 6     |    [0,6]      |

Result: [1, 1, 1, 2, 1, 4, 6]

🔥 This is O(n) because each index is pushed and popped at most once.
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

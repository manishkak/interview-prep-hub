const n=`# stock Span Problem

## Problem Statement

Describe the problem statement for **stock Span Problem** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem Statement\r
 * You are given an array prices[] where prices[i] is the price of a stock on day i. For each day, you need to find the Stock Span:\r
 * The stock span of prices[i] is the number of consecutive days just before i (including i itself) for which the price of the stock was less than or equal to prices[i].\r
 */\r
/**\r
 * Example\r
 * Input:\r
    prices = [100, 80, 60, 70, 60, 75, 85]\r
 * Output:\r
    span = [1, 1, 1, 2, 1, 4, 6]\r
 */\r
/*\r
Explanation:\r
Day 0 (100): No previous greater → span = 1\r
Day 1 (80): No previous greater → span = 1\r
Day 2 (60): No previous greater → span = 1\r
Day 3 (70): Previous price 60 ≤ 70 → span = 2\r
Day 4 (60): No previous greater → span = 1\r
Day 5 (75): Previous 60, 70 ≤ 75 → span = 4\r
Day 6 (85): Previous 75, 60, 70, 80 ≤ 85 → span = 6\r
*/\r
✅ Optimal Approach (Using Stack of Indices)\r
// - Use a stack to store indices of days with higher prices.\r
// - For each day i:\r
//     - Pop from stack while prices[stack[top]] <= prices[i]\r
//     - If stack is empty, span = i + 1\r
//     - Else, span = i - stack[top]\r
//     - Push i onto the stack\r
\r
✅ //Steps to Explain to Interviewer\r
// - Initialize an empty stack and an array span[] of size n.\r
// - Traverse each day i:\r
//     - While stack is not empty and current price ≥ price at top of stack, pop.\r
//     - If stack becomes empty → no greater price on the left → span[i] = i + 1.\r
//     - Else → span is the gap between current index and index at top → span[i] = i - stack[top].\r
// - Push current index onto stack.\r
// - Return span.\r
\r
✅ Why it works?\r
// The stack always keeps indices of days with decreasing prices. This way, the top of the stack is the nearest day with a higher price than today.\r
\r
function stockSpan(prices) {\r
    const n = prices.length;\r
    const span = new Array(n);\r
    const stack = [];\r
\r
    for (let i = 0; i < n; i++) {\r
        // Pop elements from stack while current price is greater or equal\r
        while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {\r
            stack.pop();\r
        }\r
\r
        if (stack.length === 0) {\r
            span[i] = i + 1; // Entire range so far\r
        } else {\r
            span[i] = i - stack[stack.length - 1];\r
        }\r
\r
        stack.push(i); // Push current index\r
    }\r
\r
    return span;\r
}\r
\r
✅ Dry Run with Example\r
\r
| i | price | stack before | span\\[i] | stack after |\r
| - | ----- | ------------ | -------- | ----------- |\r
| 0 | 100   |     []          | 1     |    [0]        |\r
| 1 | 80    |     [0]         | 1     |    [0,1]      |\r
| 2 | 60    |     [0,1]       | 1     |    [0,1,2]    |\r
| 3 | 70    |     [0,1,2]     | 2     |    [0,1,3]    |\r
| 4 | 60    |     [0,1,3]     | 1     |    [0,1,3,4]  |\r
| 5 | 75    |     [0,1,3,4]   | 4     |    [0,1,5]    |\r
| 6 | 85    |     [0,1,5]     | 6     |    [0,6]      |\r
\r
Result: [1, 1, 1, 2, 1, 4, 6]\r
\r
🔥 This is O(n) because each index is pushed and popped at most once.
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

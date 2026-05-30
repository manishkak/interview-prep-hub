const n=`# largest Rectangle In Histogram

## Problem Statement

Describe the problem statement for **largest Rectangle In Histogram** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*✅ **Problem Statement**\r
\r
You are given an array \`heights[]\` representing the heights of bars in a histogram where each bar has width **1**.\r
Find the **area of the largest rectangle** that can be formed within the histogram.\r
\r
**Example:**/\r
\r
\`\`\`javascript\r
Input: heights = [2, 1, 5, 6, 2, 3]\r
Output: 10\r
Explanation: The largest rectangle is formed by bars with heights 5 and 6 (width = 2), area = 5*2 = 10.\r
\`\`\`\r
\r
/*### ✅ **Brute Force Approach (O(n²))**\r
\r
* For every bar, expand left and right to find how far you can extend while the bars are **≥ current height**.\r
* Calculate area for each and take max.\r
* **Time Complexity:** O(n²) → too slow for large inputs.\r
\r
---\r
\r
### ✅ **Optimal Approach (O(n) using Stack)**\r
\r
This is where stacks shine!\r
The trick:\r
\r
* Use a **monotonic increasing stack** to store bar indices.\r
* When you find a bar **smaller than the top of the stack**, it means the rectangle for the top bar has ended.\r
* Pop from stack and calculate area using the popped height as the smallest bar.\r
\r
**Steps:**\r
\r
1. Initialize an empty stack.\r
2. Iterate over bars:\r
\r
   * While \`stack\` is not empty **and** \`heights[current] < heights[stack.top()]\`:\r
\r
     * Pop the top index → \`height = heights[top]\`.\r
     * Compute width:\r
\r
       * If stack empty → width = current index \`i\`\r
       * Else → width = \`i - stack.top() - 1\`\r
     * Compute area = \`height * width\` and update max.\r
   * Push current index to stack.\r
3. After loop, clear stack using same logic.\r
4. Return max area.\r
\r
---\r
\r
### ✅ **Visualization**\r
\r
For \`[2, 1, 5, 6, 2, 3]\`:\r
\r
* Push 0 → \\[0]\r
* Next 1 < 2 → pop 0 → width=1 → area=2\r
* Push 1 → \\[1]\r
* Push 2 → \\[1,2]\r
* Push 3 → \\[1,2,3]\r
* Next 2 < 6 → pop 3 → area=6\r
* Next 2 < 5 → pop 2 → area=10 ✅\r
* Push 4 → \\[1,4]\r
* Push 5 → \\[1,4,5]\r
\r
---\r
\r
### ✅ **JavaScript Implementation**/\r
\r
\`\`\`javascript\r
function largestRectangleArea(heights) {\r
    let stack = [];\r
    let maxArea = 0;\r
    \r
    for (let i = 0; i <= heights.length; i++) {\r
        let currentHeight = (i === heights.length) ? 0 : heights[i];\r
        \r
        while (stack.length && currentHeight < heights[stack[stack.length - 1]]) {\r
            let height = heights[stack.pop()];\r
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;\r
            maxArea = Math.max(maxArea, height * width);\r
        }\r
        \r
        stack.push(i);\r
    }\r
    \r
    return maxArea;\r
}\r
\r
// Example\r
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // Output: 10\r
\`\`\`\r
\r
---\r
\r
✔ **Time Complexity:** O(n) (each bar pushed and popped at most once)\r
✔ **Space Complexity:** O(n) (stack)\r
\r
---\r
\r
Do you want me to also give you:\r
✅ A **step-by-step dry run** for \`[2,1,5,6,2,3]\` so you can explain in an interview?\r
✅ And a **structured explanation like you're telling an interviewer**?\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

const n=`# 01 Matrix

## Problem Statement

Describe the problem statement for **01 Matrix** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// 01 matrix problem and solution in js with time and space complexity\r
/**\r
 * Given a matrix mat with n rows and m columns where each element is either 0 or 1, return a matrix res where res[i][j] represents the distance of the cell (i, j) in the original matrix to the nearest 0.\r
 */\r
/**\r
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.\r
 * The distance between two adjacent cells is 1.\r
 */\r
/*\r
BFS Approach\r
Steps:\r
Initialize a queue with all the cells that contain 0 and mark the cells as visited.\r
For each 1 in the matrix, its distance will be updated as the BFS progresses.\r
Dequeue each cell, and for each of its four neighbors (up, down, left, right), if the neighbor hasn't been visited, calculate its distance and add it to the queue.\r
Continue until all cells have been processed.\r
*/\r
\r
// https://www.youtube.com/watch?v=gu2MD0mpy9w\r
\r
function updateMatrix(mat) {\r
    const rows = mat.length;\r
    const cols = mat[0].length;\r
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];\r
    const queue = [];\r
    const result = Array.from({ length: rows }, () => Array(cols).fill(Infinity)); // this creates a result array same as 'mat', and sets every value to infinity.. u can set it to anything actually, like '?'\r
\r
    // Initialize the queue with all the 0s and set their distance to 0\r
    for (let r = 0; r < rows; r++) {\r
        for (let c = 0; c < cols; c++) {\r
            if (mat[r][c] === 0) {\r
                queue.push([r, c]); // in 'mat', push cood of 0's into the queue\r
                result[r][c] = 0;   // in result array this sets values to 0, in which 'mat' has 0. others are already set to infinity/?\r
            }\r
        }\r
    }\r
\r
    // Perform BFS from all 0s\r
    while (queue.length > 0) {\r
        const [row, col] = queue.shift(); // pop out first cood from the queue\r
\r
        for (const [dRow, dCol] of directions) {\r
            const newRow = row + dRow;\r
            const newCol = col + dCol;\r
\r
            // Check bounds and whether the new cell can be updated\r
            if (\r
                newRow >= 0 && newRow < rows &&\r
                newCol >= 0 && newCol < cols &&\r
                result[newRow][newCol] > result[row][col] + 1\r
                // the above line means if the potential distance, result[row][col] + 1, is less than the currently stored distance, result[newRow][newCol], Update result[newRow][newCol] to the shorter distance.\r
                // last line can also be replaced with result[newRow][newCol] == Infinity, only if the new cell is still Infinity will we do any BFS on it\r
            ) {\r
                result[newRow][newCol] = result[row][col] + 1;\r
                queue.push([newRow, newCol]);\r
            }\r
        }\r
    }\r
\r
    return result;\r
}\r
\r
// Example usage:\r
const mat = [\r
    [0, 0, 0],\r
    [0, 1, 0],\r
    [1, 1, 1]\r
];\r
console.log(updateMatrix(mat));\r
\r
/*\r
Time and Space Complexity\r
Time Complexity:\r
\r
O(N), where N is the total number of cells in the matrix (N = rows * cols). Each cell is processed at most once, and each cell is enqueued and dequeued once.\r
Space Complexity:\r
\r
O(N) due to the space needed for the queue and the distance matrix. The queue can hold up to all the cells in the worst case, and the distance matrix requires space proportional to the size of the input matrix.\r
*/\r
\r
/*\r
All good — thanks for pasting the code.\r
Let’s dry-run it **exactly as written**, slowly, and **track only 3 things**:\r
\r
* \`queue\`\r
* \`result\`\r
* which cell is being processed\r
\r
No theory, just execution.\r
\r
---\r
\r
## Input\r
\r
\`\`\`js\r
mat =\r
[\r
 [0,0,0],\r
 [0,1,0],\r
 [1,1,1]\r
]\r
\`\`\`\r
\r
---\r
\r
## STEP 1: Initialization loop\r
\r
### result (after initialization)\r
\r
All \`0\` cells copied as \`0\`, rest = \`Infinity\`\r
\r
\`\`\`\r
result =\r
[\r
 [0, 0, 0],\r
 [0, ∞, 0],\r
 [∞, ∞, ∞]\r
]\r
\`\`\`\r
\r
### queue (all 0s pushed)\r
\r
Order matters because of BFS:\r
\r
\`\`\`\r
queue =\r
[(0,0), (0,1), (0,2), (1,0), (1,2)]\r
\`\`\`\r
\r
👉 This means: **all 0s are starting points at distance 0**\r
\r
---\r
\r
## STEP 2: BFS loop starts\r
\r
### 🔹 Iteration 1\r
\r
\`queue.shift()\` → \`(0,0)\`\r
\r
Current distance:\r
\r
\`\`\`\r
result[0][0] = 0\r
\`\`\`\r
\r
Check neighbors:\r
\r
* (1,0) → result = 0 → NOT > 1 → skip\r
* (-1,0) → out of bounds\r
* (0,1) → result = 0 → skip\r
* (0,-1) → out of bounds\r
\r
✅ No updates\r
\r
---\r
\r
### 🔹 Iteration 2\r
\r
Pop \`(0,1)\`\r
\r
Neighbors:\r
\r
* (1,1) → result = ∞ > 0+1 → **UPDATE**\r
* others are 0 or out of bounds\r
\r
Update:\r
\r
\`\`\`\r
result[1][1] = 1\r
queue.push((1,1))   // We push (1,1) into the queue because we just discovered it for the first time with its correct shortest distance, and now its neighbors still need to be explored\r
\`\`\`\r
\r
Now:\r
\r
\`\`\`\r
result =\r
[\r
 [0,0,0],\r
 [0,1,0],\r
 [∞,∞,∞]\r
]\r
\r
queue =\r
[(0,2), (1,0), (1,2), (1,1)]\r
\`\`\`\r
\r
---\r
\r
### 🔹 Iteration 3\r
\r
Pop \`(0,2)\`\r
\r
Neighbors:\r
\r
* (1,2) → result = 0 → skip\r
* others invalid / already better\r
\r
✅ No updates\r
\r
---\r
\r
### 🔹 Iteration 4\r
\r
Pop \`(1,0)\`\r
\r
Neighbors:\r
\r
* (2,0) → ∞ > 0+1 → **UPDATE**\r
\r
\`\`\`\r
result[2][0] = 1\r
queue.push((2,0))\r
\`\`\`\r
\r
State:\r
\r
\`\`\`\r
result =\r
[\r
 [0,0,0],\r
 [0,1,0],\r
 [1,∞,∞]\r
]\r
\r
queue =\r
[(1,2), (1,1), (2,0)]\r
\`\`\`\r
\r
---\r
\r
### 🔹 Iteration 5\r
\r
Pop \`(1,2)\`\r
\r
Neighbors:\r
\r
* (2,2) → ∞ > 0+1 → **UPDATE**\r
\r
\`\`\`\r
result[2][2] = 1\r
queue.push((2,2))\r
\`\`\`\r
\r
\`\`\`\r
result =\r
[\r
 [0,0,0],\r
 [0,1,0],\r
 [1,∞,1]\r
]\r
\r
queue =\r
[(1,1), (2,0), (2,2)]\r
\`\`\`\r
\r
---\r
\r
### 🔹 Iteration 6\r
\r
Pop \`(1,1)\` (distance = 1)\r
\r
Neighbors:\r
\r
* (2,1) → ∞ > 1+1 → **UPDATE**\r
\r
\`\`\`\r
result[2][1] = 2\r
queue.push((2,1))\r
\`\`\`\r
\r
\`\`\`\r
result =\r
[\r
 [0,0,0],\r
 [0,1,0],\r
 [1,2,1]\r
]\r
\r
queue =\r
[(2,0), (2,2), (2,1)]\r
\`\`\`\r
\r
---\r
\r
### 🔹 Iteration 7\r
\r
Pop \`(2,0)\` (distance = 1)\r
\r
Neighbors:\r
\r
* (2,1) → already 2, NOT > 2 → skip\r
\r
---\r
\r
### 🔹 Iteration 8\r
\r
Pop \`(2,2)\` (distance = 1)\r
\r
Neighbors:\r
\r
* (2,1) → already 2 → skip\r
\r
---\r
\r
### 🔹 Iteration 9\r
\r
Pop \`(2,1)\` (distance = 2)\r
\r
All neighbors already smaller → skip\r
\r
Queue empty → **STOP**\r
\r
---\r
\r
## ✅ Final result\r
\r
\`\`\`js\r
[\r
 [0,0,0],\r
 [0,1,0],\r
 [1,2,1]\r
]\r
\`\`\`\r
\r
---\r
\r
## 🔑 The ONE line that matters most\r
\r
\`\`\`js\r
if (result[newRow][newCol] > result[row][col] + 1)\r
\`\`\`\r
\r
This guarantees:\r
\r
* each cell updates **only once with shortest distance**\r
* BFS expands **level by level**\r
\r
---\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

const r=`# Word Search

## Problem Statement

Describe the problem statement for **Word Search** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
79. Word Search\r
- Given an m x n grid of characters "board" and a string "word", return true if word exists in the grid.\r
- The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.\r
\r
eg. Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"\r
Output: true\r
eg. // false case\r
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"\r
Output: false\r
*/\r
// Pattern: DFS + backtracking\r
// One-line mental trigger - “Start DFS from every cell → match char → mark visited → explore 4 dirs → backtrack.”\r
\r
/**\r
 * Approach Steps:\r
- Start DFS from every cell in the grid.\r
- For each cell, check if the current character matches the corresponding character in the word.\r
- If it matches, mark the cell as visited (e.g., change its value temporarily).\r
- Explore all four possible directions (up, down, left, right) recursively for the next character in the word.\r
- If the entire word is matched, return true.\r
- If a path does not lead to a solution, backtrack by unmarking the cell (restore its original value).\r
- If no starting cell leads to a successful match, return false.\r
*/\r
var exist = function (board, word) {\r
    const rows = board.length;\r
    const cols = board[0].length;\r
\r
    // Try DFS from every cell\r
    for (let i = 0; i < rows; i++) {\r
        for (let j = 0; j < cols; j++) {\r
            if (dfs(i, j, 0)) return true;\r
        }\r
    }\r
\r
    function dfs(r, c, index) {\r
        // Base case: full word matched\r
        if (index === word.length) return true; // cos we keep incrementing index with each dfs till it matches word.length\r
\r
        // Boundary and mismatch checks\r
        // board[r][c] !== word[index] means if the current cell's character does not match the character at the current index of the word, return false.\r
        if (\r
            r < 0 || c < 0 ||\r
            r >= rows || c >= cols ||\r
            board[r][c] !== word[index]\r
        ) {\r
            return false;\r
        }\r
\r
        // Save current cell in a temp variable.\r
        const temp = board[r][c];\r
        // Mark the cell as visited by changing its value.\r
        board[r][c] = '#';  // Using '#' as a marker for visited cells\r
\r
        // Explore all 4 directions\r
        const found =\r
            dfs(r + 1, c, index + 1) ||\r
            dfs(r - 1, c, index + 1) ||\r
            dfs(r, c + 1, index + 1) ||\r
            dfs(r, c - 1, index + 1);\r
\r
        // Backtrack, restore the original character (thats why we saved it in 'temp' earlier)\r
        board[r][c] = temp;\r
\r
        return found;   // could be true or false\r
    }\r
\r
    return false;\r
};\r
\r
/*\r
TC & SC (Short + Recall-Friendly)\r
Time: O(m * n * 4^L)\r
Space: O(L) (recursion stack)\r
\r
Explanation:\r
Time Complexity (TC)\r
- Worst case:\r
    O(m × n × 4^L)\r
    where:\r
        - m × n = board size\r
        - L = length of the word\r
- Each cell can branch into 4 directions for each character.\r
\r
Space Complexity (SC)\r
- O(L) due to recursion stack (depth = word length)\r
- Board is modified in-place, so no extra visited array used.\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};

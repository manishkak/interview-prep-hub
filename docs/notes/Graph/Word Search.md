# Word Search

## Problem Statement

Describe the problem statement for **Word Search** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
79. Word Search
- Given an m x n grid of characters "board" and a string "word", return true if word exists in the grid.
- The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

eg. Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
eg. // false case
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
*/
// Pattern: DFS + backtracking
// One-line mental trigger - “Start DFS from every cell → match char → mark visited → explore 4 dirs → backtrack.”

/**
 * Approach Steps:
- Start DFS from every cell in the grid.
- For each cell, check if the current character matches the corresponding character in the word.
- If it matches, mark the cell as visited (e.g., change its value temporarily).
- Explore all four possible directions (up, down, left, right) recursively for the next character in the word.
- If the entire word is matched, return true.
- If a path does not lead to a solution, backtrack by unmarking the cell (restore its original value).
- If no starting cell leads to a successful match, return false.
*/
var exist = function (board, word) {
    const rows = board.length;
    const cols = board[0].length;

    // Try DFS from every cell
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    function dfs(r, c, index) {
        // Base case: full word matched
        if (index === word.length) return true; // cos we keep incrementing index with each dfs till it matches word.length

        // Boundary and mismatch checks
        // board[r][c] !== word[index] means if the current cell's character does not match the character at the current index of the word, return false.
        if (
            r < 0 || c < 0 ||
            r >= rows || c >= cols ||
            board[r][c] !== word[index]
        ) {
            return false;
        }

        // Save current cell in a temp variable.
        const temp = board[r][c];
        // Mark the cell as visited by changing its value.
        board[r][c] = '#';  // Using '#' as a marker for visited cells

        // Explore all 4 directions
        const found =
            dfs(r + 1, c, index + 1) ||
            dfs(r - 1, c, index + 1) ||
            dfs(r, c + 1, index + 1) ||
            dfs(r, c - 1, index + 1);

        // Backtrack, restore the original character (thats why we saved it in 'temp' earlier)
        board[r][c] = temp;

        return found;   // could be true or false
    }

    return false;
};

/*
TC & SC (Short + Recall-Friendly)
Time: O(m * n * 4^L)
Space: O(L) (recursion stack)

Explanation:
Time Complexity (TC)
- Worst case:
    O(m × n × 4^L)
    where:
        - m × n = board size
        - L = length of the word
- Each cell can branch into 4 directions for each character.

Space Complexity (SC)
- O(L) due to recursion stack (depth = word length)
- Board is modified in-place, so no extra visited array used.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

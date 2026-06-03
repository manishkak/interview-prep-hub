# Word Search

## Problem Statement

Given an m x n grid of characters board and a string word, return true if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontally or vertically). The same cell may not be used more than once in a single path.

## Examples

- Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
- Output: true

- Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
- Output: false (B cannot be reused)

## Approach

DFS + backtracking. Try starting DFS from every cell in the grid. At each step, check if the current cell matches word[index]. If the full word is matched (index equals word.length), return true. Temporarily mark the current cell as '#' to prevent reuse within the current DFS path. Recurse in all 4 directions with index + 1. After returning from recursion, restore the original cell value (backtrack) so other paths can use it.

One-line mental trigger: start DFS from every cell, match char, mark visited, explore 4 dirs, backtrack.

## Solution

```js
var exist = function (board, word) {
    const rows = board.length;
    const cols = board[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    function dfs(r, c, index) {
        if (index === word.length) return true;

        if (
            r < 0 || c < 0 ||
            r >= rows || c >= cols ||
            board[r][c] !== word[index]
        ) {
            return false;
        }

        const temp = board[r][c];
        board[r][c] = '#';

        const found =
            dfs(r + 1, c, index + 1) ||
            dfs(r - 1, c, index + 1) ||
            dfs(r, c + 1, index + 1) ||
            dfs(r, c - 1, index + 1);

        board[r][c] = temp;

        return found;
    }

    return false;
};
```

## Time Complexity

**O(M x N x 4^L)** where M x N is the board size and L is the length of the word. DFS branches into up to 4 directions at each of L character positions, starting from each cell.

## Space Complexity

**O(L)** for the recursion stack, which is at most L levels deep (one per character in the word). No extra visited array is needed since cells are marked in-place.

## Notes

- Backtracking (restoring board[r][c] = temp) is essential — without it, a character used in one failed path would be unavailable for other valid paths.
- The '#' marker is an in-place visited technique that avoids allocating a separate visited array.
- LeetCode #79.

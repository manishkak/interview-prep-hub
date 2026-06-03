# Flood Fill

## Problem Statement

Given an m x n integer grid image, a starting pixel (sr, sc), and a new color, perform a flood fill starting from image[sr][sc]. Change the starting pixel and all connected pixels (4-directionally adjacent) that share the same original color to the new color. Return the modified image.

## Examples

- Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
- Output: [[2,2,2],[2,2,0],[2,0,1]]

- Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
- Output: [[0,0,0],[0,0,0]] (no change — new color equals original)

## Approach

DFS from the starting pixel. Record the original color at (sr, sc). If the new color equals the original color, return immediately to avoid infinite recursion. Otherwise, change the current pixel to the new color and recursively fill all 4 neighbors that still have the original color.

The check image[row][col] !== originalColor naturally stops both out-of-color cells and already-filled cells (since filled cells are changed to newColor and no longer match originalColor).

## Solution

```js
function floodFillDFS(image, sr, sc, newColor) {
    const originalColor = image[sr][sc];
    if (originalColor === newColor) return image;

    dfs(sr, sc);
    return image;

    function dfs(row, col) {
        if (
            row < 0 || row >= image.length ||
            col < 0 || col >= image[0].length ||
            image[row][col] !== originalColor
        ) {
            return;
        }

        image[row][col] = newColor;

        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }
}
```

## Time Complexity

**O(M x N)** where M and N are the grid dimensions. Each cell is visited at most once.

## Space Complexity

**O(M x N)** in the worst case due to the recursion stack depth when the entire grid is one connected region of the same color.

## Notes

- The early return when originalColor === newColor is essential — without it, the recursion would loop infinitely since every cell would keep matching.
- No separate visited array is needed because changing the color to newColor prevents revisiting.
- LeetCode #733.

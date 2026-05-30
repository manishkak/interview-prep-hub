# Numberof Islands

## Problem Statement

Describe the problem statement for **Numberof Islands** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Dry Run at the end.

/**
 * Problem Statement: Given a 2D grid (matrix) consisting of '1's (land) and '0's (water), you need to determine the number of islands. An island is formed by connecting adjacent lands horizontally or vertically. You can assume that all four edges of the grid are surrounded by water.
 */

/*
To solve this problem, we can use either Depth-First Search (DFS) or Breadth-First Search (BFS). The idea is to iterate through each cell in the grid, and when we encounter a '1', it indicates the start of a new island. We then perform a DFS or BFS to mark all the connected '1's as visited (by changing them to '0' or any other marker) to avoid counting the same island multiple times.

DFS Approach
Steps:
- Iterate through each cell in the grid.
- When a '1' is found, increment the island count and perform a DFS to mark all connected land ('1's) as visited.
- Continue until all cells have been processed.
*/

/**
 * Steps after understanding the logic-
 * so what needs to be done here is that when we encounter a 1, count that as one island and all four adjacent values (up, down, left, right) will be set to 0. Then move to the next 1 that we find and repeat the process.
 * Start DFS Process-
 * check if grid, else return 0
 * Start two For loops, one for rows (grid.len) and one for columns (grid[0].len)
 *      if 1 i.e. land is found, increment islandCount and call dfs on that row and col; ret islandCount
 * Inside dfs-
 *      if we're out of bounds or at a water cell i.e. grid[row][col] == 0, return
 *      mark current cell as 0 i.e. grid[row][col] = '0';
 *      Explore all four directions
 */

function numIslands(grid) {
    // if not grid or grid length is 0 then return
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // starts at (0,0), it's 1 so we increment islandCount to 1 and call dfs(0,0)
            if (grid[r][c] === '1') {
                islandCount++;
                dfs(r, c); // Perform dfs(0,0) to mark all connected lands as visited
            }
        }
    }

    function dfs(row, col) {
        // Base case: check if we're out of bounds or at a water cell(i.e. '0')
        if (row < 0 || row >= rows ||
            col < 0 || col >= cols ||
            grid[row][col] === '0') {
            return;
        }

        // Mark the current cell as visited by setting it to '0', meaning (0,0) becomes '0'
        grid[row][col] = '0';

        // Explore all four directions (order doesn't matter)
        dfs(row + 1, col); // down, (1,0) // this cell is '1', so mark it as '0' and continue dfs
        dfs(row - 1, col); // up, (-1,0)  // out of bounds, return
        dfs(row, col + 1); // right, (0,1) // this cell is '1', so mark it as '0' and continue dfs
        dfs(row, col - 1); // left, (0,-1) // out of bounds, return
        // after all the 0 cells are returned, the next 1 cell will be (2,2) and islandCount will be incremented to 2 and dfs(2,2) will be called
    }

    return islandCount;
}

// Example usage:
const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
];
console.log(numIslands(grid)); // Output: 3

/**
 * DFS:
 * Time Complexity:
 this problem, we perform a depth-first search (DFS) or breadth-first search (BFS) starting from each unvisited land cell 1, We visit each cell only once, marking it as visited by setting it to 0. Therefore, the time complexity is O(M*N) where each cell is checked once.
 * The space complexity is also O(M*N) due to the recursion stack or queue used for DFS/BFS in the worst-case scenario when the entire grid is one large island.
 */

//  Dry Run:
/*
Perfect example. I’ll do a **tight DFS-style dry run**, no code.

---

## Problem reminder (mental model)

* `'1'` = land
* `'0'` = water
* **Island = connected 1s** (up, down, left, right)
* Goal: **count islands**

---

## Grid with coordinates

```
(0,0) 1   (0,1) 1   0   0   0
(1,0) 1   (1,1) 1   0   0   0
  0     0     (2,2) 1   0   0
  0     0       0   (3,3) 1 (3,4) 1
```

---

## Dry Run (scan row by row)

### 1️⃣ Start at (0,0)

* `'1'` and **not visited** → **Island count = 1**
* DFS marks all connected land:

  * (0,0) → (0,1)
  * (0,0) → (1,0)
  * (1,0) → (1,1)
* All these become **visited**

✅ First island = top-left block

---

### 2️⃣ Continue scanning

* (0,1), (1,0), (1,1) → already visited → skip
* All nearby zeros → skip

---

### 3️⃣ Reach (2,2)

* `'1'` and not visited → **Island count = 2**
* DFS:

  * No adjacent land
* Single-cell island

---

### 4️⃣ Reach (3,3)

* `'1'` and not visited → **Island count = 3**
* DFS:

  * (3,3) → (3,4)

✅ Third island = bottom-right pair

---

## Final Answer

**Total islands = 3**

---

## Why this always works

* You **count only when you find a new unvisited '1'**
* DFS/BFS ensures you don’t double-count connected land

---

*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

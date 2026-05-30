# 01 Matrix

## Problem Statement

Describe the problem statement for **01 Matrix** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// 01 matrix problem and solution in js with time and space complexity
/**
 * Given a matrix mat with n rows and m columns where each element is either 0 or 1, return a matrix res where res[i][j] represents the distance of the cell (i, j) in the original matrix to the nearest 0.
 */
/**
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
 * The distance between two adjacent cells is 1.
 */
/*
BFS Approach
Steps:
Initialize a queue with all the cells that contain 0 and mark the cells as visited.
For each 1 in the matrix, its distance will be updated as the BFS progresses.
Dequeue each cell, and for each of its four neighbors (up, down, left, right), if the neighbor hasn't been visited, calculate its distance and add it to the queue.
Continue until all cells have been processed.
*/

// https://www.youtube.com/watch?v=gu2MD0mpy9w

function updateMatrix(mat) {
    const rows = mat.length;
    const cols = mat[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const queue = [];
    const result = Array.from({ length: rows }, () => Array(cols).fill(Infinity)); // this creates a result array same as 'mat', and sets every value to infinity.. u can set it to anything actually, like '?'

    // Initialize the queue with all the 0s and set their distance to 0
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (mat[r][c] === 0) {
                queue.push([r, c]); // in 'mat', push cood of 0's into the queue
                result[r][c] = 0;   // in result array this sets values to 0, in which 'mat' has 0. others are already set to infinity/?
            }
        }
    }

    // Perform BFS from all 0s
    while (queue.length > 0) {
        const [row, col] = queue.shift(); // pop out first cood from the queue

        for (const [dRow, dCol] of directions) {
            const newRow = row + dRow;
            const newCol = col + dCol;

            // Check bounds and whether the new cell can be updated
            if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                result[newRow][newCol] > result[row][col] + 1
                // the above line means if the potential distance, result[row][col] + 1, is less than the currently stored distance, result[newRow][newCol], Update result[newRow][newCol] to the shorter distance.
                // last line can also be replaced with result[newRow][newCol] == Infinity, only if the new cell is still Infinity will we do any BFS on it
            ) {
                result[newRow][newCol] = result[row][col] + 1;
                queue.push([newRow, newCol]);
            }
        }
    }

    return result;
}

// Example usage:
const mat = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]
];
console.log(updateMatrix(mat));

/*
Time and Space Complexity
Time Complexity:

O(N), where N is the total number of cells in the matrix (N = rows * cols). Each cell is processed at most once, and each cell is enqueued and dequeued once.
Space Complexity:

O(N) due to the space needed for the queue and the distance matrix. The queue can hold up to all the cells in the worst case, and the distance matrix requires space proportional to the size of the input matrix.
*/

/*
All good — thanks for pasting the code.
Let’s dry-run it **exactly as written**, slowly, and **track only 3 things**:

* `queue`
* `result`
* which cell is being processed

No theory, just execution.

---

## Input

```js
mat =
[
 [0,0,0],
 [0,1,0],
 [1,1,1]
]
```

---

## STEP 1: Initialization loop

### result (after initialization)

All `0` cells copied as `0`, rest = `Infinity`

```
result =
[
 [0, 0, 0],
 [0, ∞, 0],
 [∞, ∞, ∞]
]
```

### queue (all 0s pushed)

Order matters because of BFS:

```
queue =
[(0,0), (0,1), (0,2), (1,0), (1,2)]
```

👉 This means: **all 0s are starting points at distance 0**

---

## STEP 2: BFS loop starts

### 🔹 Iteration 1

`queue.shift()` → `(0,0)`

Current distance:

```
result[0][0] = 0
```

Check neighbors:

* (1,0) → result = 0 → NOT > 1 → skip
* (-1,0) → out of bounds
* (0,1) → result = 0 → skip
* (0,-1) → out of bounds

✅ No updates

---

### 🔹 Iteration 2

Pop `(0,1)`

Neighbors:

* (1,1) → result = ∞ > 0+1 → **UPDATE**
* others are 0 or out of bounds

Update:

```
result[1][1] = 1
queue.push((1,1))   // We push (1,1) into the queue because we just discovered it for the first time with its correct shortest distance, and now its neighbors still need to be explored
```

Now:

```
result =
[
 [0,0,0],
 [0,1,0],
 [∞,∞,∞]
]

queue =
[(0,2), (1,0), (1,2), (1,1)]
```

---

### 🔹 Iteration 3

Pop `(0,2)`

Neighbors:

* (1,2) → result = 0 → skip
* others invalid / already better

✅ No updates

---

### 🔹 Iteration 4

Pop `(1,0)`

Neighbors:

* (2,0) → ∞ > 0+1 → **UPDATE**

```
result[2][0] = 1
queue.push((2,0))
```

State:

```
result =
[
 [0,0,0],
 [0,1,0],
 [1,∞,∞]
]

queue =
[(1,2), (1,1), (2,0)]
```

---

### 🔹 Iteration 5

Pop `(1,2)`

Neighbors:

* (2,2) → ∞ > 0+1 → **UPDATE**

```
result[2][2] = 1
queue.push((2,2))
```

```
result =
[
 [0,0,0],
 [0,1,0],
 [1,∞,1]
]

queue =
[(1,1), (2,0), (2,2)]
```

---

### 🔹 Iteration 6

Pop `(1,1)` (distance = 1)

Neighbors:

* (2,1) → ∞ > 1+1 → **UPDATE**

```
result[2][1] = 2
queue.push((2,1))
```

```
result =
[
 [0,0,0],
 [0,1,0],
 [1,2,1]
]

queue =
[(2,0), (2,2), (2,1)]
```

---

### 🔹 Iteration 7

Pop `(2,0)` (distance = 1)

Neighbors:

* (2,1) → already 2, NOT > 2 → skip

---

### 🔹 Iteration 8

Pop `(2,2)` (distance = 1)

Neighbors:

* (2,1) → already 2 → skip

---

### 🔹 Iteration 9

Pop `(2,1)` (distance = 2)

All neighbors already smaller → skip

Queue empty → **STOP**

---

## ✅ Final result

```js
[
 [0,0,0],
 [0,1,0],
 [1,2,1]
]
```

---

## 🔑 The ONE line that matters most

```js
if (result[newRow][newCol] > result[row][col] + 1)
```

This guarantees:

* each cell updates **only once with shortest distance**
* BFS expands **level by level**

---
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

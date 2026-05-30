# Flood Fill

## Problem Statement

Describe the problem statement for **Flood Fill** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
You are given an image represented by an m x n grid of integers image, where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill:
- Begin with the starting pixel and change its color to color.
- Perform the same process for each pixel that is directly adjacent (pixels that share a side with the original pixel, either horizontally or vertically) and shares the same color as the starting pixel.
- Keep repeating this process by checking neighboring pixels of the updated pixels and modifying their color if it matches the original color of the starting pixel.
- The process stops when there are no more adjacent pixels of the original color to update.
Return the modified image after performing the flood fill.
*/

// Problem Overview
	// The Flood Fill problem is akin to the "paint bucket" tool in image editing software. You click on a pixel, and the tool fills the surrounding area with the new color. The fill spreads to adjacent pixels (up, down, left, right) as long as they share the same original color as the starting pixel.

// Input and Output
	// Input:
		// image: A 2D array (matrix) representing the image, where each cell contains an integer that represents a color.
		// sr, sc: The starting pixel's row and column indices.
		// newColor: The color to apply to the connected region starting from (sr, sc).
	// Output:
		// The modified image after performing the flood fill.

// Read description here for more understanding of the problem- https://leetcode.com/problems/flood-fill/description/ 

// How the Algorithm Works
/*
Initial Considerations
Base Case:
    - If the newColor is the same as the color of the starting pixel (image[sr][sc]), there's no need to proceed since the image is already filled with that color.
    - The algorithm simply returns the original image.
Explore the Connected Region:
    - From the starting pixel, explore in all four directions (up, down, left, right).
    - If the adjacent pixel shares the same original color, change it to newColor and continue exploring from that pixel.
*/

// Approaches to Solve the Problem
/*
1. DFS (Depth-First Search) Approach
How it Works:
    - DFS explores as deep as possible along each branch before backtracking.
    - In the context of flood fill, this means that starting from the initial pixel, DFS will keep moving in one direction until it can't go further, then backtrack and try other directions.
*/

function floodFillDFS(image, sr, sc, newColor) {
    const originalColor = image[sr][sc]; // Get the original color at the starting point
    if (originalColor === newColor) return image; // If the new color is the same as the original, return

    dfs(sr, sc); // Start DFS from the initial pixel
    return image; // Return the modified image

    function dfs(row, col) {
        // Base cases: check if we're out of bounds or the current pixel isn't the original color
        if (
            row < 0 || row >= image.length ||
            col < 0 || col >= image[0].length ||
            image[row][col] !== originalColor  // only proceed if the color matches the original color, if not, return; else update current to newColor- line 62
        ) {
            return;
        }

        // Change the current pixel to the new color
        image[row][col] = newColor;

        // Explore all four directions recursively
        dfs(row + 1, col); // down
        dfs(row - 1, col); // up
        dfs(row, col + 1); // right
        dfs(row, col - 1); // left

        /**
         * either do the above 4 dfs calls or-
         * const directions = [
            [1, 0],  // down
            [-1, 0], // up
            [0, 1],  // right
            [0, -1]  // left
           ];

            for (let [dx, dy] of directions) {
                dfs(x + dx, y + dy);
            }
         */
    }
}

/*
Time Complexity:
In this depth-first search (DFS) approach, we visit each cell in the grid once, changing its color if it’s connected to the starting cell and shares the same color.
Since each cell is visited only once, the time complexity is O(M*N)

Space Complexity:
In the worst case, if the flood fill affects every cell in the grid, the recursion stack for DFS could reach a depth of O(M*N)
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

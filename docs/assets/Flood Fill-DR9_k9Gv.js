const e=`# Flood Fill

## Problem Statement

Describe the problem statement for **Flood Fill** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
You are given an image represented by an m x n grid of integers image, where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].\r
\r
To perform a flood fill:\r
- Begin with the starting pixel and change its color to color.\r
- Perform the same process for each pixel that is directly adjacent (pixels that share a side with the original pixel, either horizontally or vertically) and shares the same color as the starting pixel.\r
- Keep repeating this process by checking neighboring pixels of the updated pixels and modifying their color if it matches the original color of the starting pixel.\r
- The process stops when there are no more adjacent pixels of the original color to update.\r
Return the modified image after performing the flood fill.\r
*/\r
\r
// Problem Overview\r
	// The Flood Fill problem is akin to the "paint bucket" tool in image editing software. You click on a pixel, and the tool fills the surrounding area with the new color. The fill spreads to adjacent pixels (up, down, left, right) as long as they share the same original color as the starting pixel.\r
\r
// Input and Output\r
	// Input:\r
		// image: A 2D array (matrix) representing the image, where each cell contains an integer that represents a color.\r
		// sr, sc: The starting pixel's row and column indices.\r
		// newColor: The color to apply to the connected region starting from (sr, sc).\r
	// Output:\r
		// The modified image after performing the flood fill.\r
\r
// Read description here for more understanding of the problem- https://leetcode.com/problems/flood-fill/description/ \r
\r
// How the Algorithm Works\r
/*\r
Initial Considerations\r
Base Case:\r
    - If the newColor is the same as the color of the starting pixel (image[sr][sc]), there's no need to proceed since the image is already filled with that color.\r
    - The algorithm simply returns the original image.\r
Explore the Connected Region:\r
    - From the starting pixel, explore in all four directions (up, down, left, right).\r
    - If the adjacent pixel shares the same original color, change it to newColor and continue exploring from that pixel.\r
*/\r
\r
// Approaches to Solve the Problem\r
/*\r
1. DFS (Depth-First Search) Approach\r
How it Works:\r
    - DFS explores as deep as possible along each branch before backtracking.\r
    - In the context of flood fill, this means that starting from the initial pixel, DFS will keep moving in one direction until it can't go further, then backtrack and try other directions.\r
*/\r
\r
function floodFillDFS(image, sr, sc, newColor) {\r
    const originalColor = image[sr][sc]; // Get the original color at the starting point\r
    if (originalColor === newColor) return image; // If the new color is the same as the original, return\r
\r
    dfs(sr, sc); // Start DFS from the initial pixel\r
    return image; // Return the modified image\r
\r
    function dfs(row, col) {\r
        // Base cases: check if we're out of bounds or the current pixel isn't the original color\r
        if (\r
            row < 0 || row >= image.length ||\r
            col < 0 || col >= image[0].length ||\r
            image[row][col] !== originalColor  // only proceed if the color matches the original color, if not, return; else update current to newColor- line 62\r
        ) {\r
            return;\r
        }\r
\r
        // Change the current pixel to the new color\r
        image[row][col] = newColor;\r
\r
        // Explore all four directions recursively\r
        dfs(row + 1, col); // down\r
        dfs(row - 1, col); // up\r
        dfs(row, col + 1); // right\r
        dfs(row, col - 1); // left\r
\r
        /**\r
         * either do the above 4 dfs calls or-\r
         * const directions = [\r
            [1, 0],  // down\r
            [-1, 0], // up\r
            [0, 1],  // right\r
            [0, -1]  // left\r
           ];\r
\r
            for (let [dx, dy] of directions) {\r
                dfs(x + dx, y + dy);\r
            }\r
         */\r
    }\r
}\r
\r
/*\r
Time Complexity:\r
In this depth-first search (DFS) approach, we visit each cell in the grid once, changing its color if it’s connected to the starting cell and shares the same color.\r
Since each cell is visited only once, the time complexity is O(M*N)\r
\r
Space Complexity:\r
In the worst case, if the flood fill affects every cell in the grid, the recursion stack for DFS could reach a depth of O(M*N)\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};

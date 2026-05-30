const e=`# sum Of Three Values

## Problem Statement

Describe the problem statement for **sum Of Three Values** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Sum of Three Values\r
// 	- Given an array of integers\r
// 	- and a value\r
// 	- determine if there are any three integers in the array\r
// 	- whose sum equals the given value\r
\r
/**\r
 * first sort the array, then use two pointers to find the triplet\r
 * start a loop form 0 to length-2; set i=0,low=i+1;high=length-1; while(low<high) \r
 * if sum = nums i+low+high, found, else if sum < target, low++ else high--\r
 */\r
\r
function findSumOfThree(nums, target) {\r
    // Sorting the input list\r
    nums = nums.sort((a, b) => {\r
        return a - b;\r
    });\r
\r
    // Fix one element at a time and find the other two\r
    for (let i = 0; i < nums.length - 2; i++){\r
        // Set the indexes of the two pointers\r
\r
        // Index of the first of the remaining elements\r
        let low = i + 1;\r
\r
        // Index of the last of the remaining elements\r
        let high = nums.length - 1;\r
\r
        while (low < high) {\r
            // Check if the sum of the triple is equal to the sum\r
            let triple = nums[i] + nums[low] + nums[high];\r
\r
            // Found a triple whose sum equals the target\r
            if (triple == target) {\r
                return true;\r
            }\r
\r
            // Move low pointer forward if the triple sum is less\r
            // than the required sum\r
            else if (triple < target) low++;\r
            // Move the high pointer backwards if the triple\r
            // sum is greater than the required sum\r
            else high--;\r
        }\r
    };\r
    return false;\r
}\r
\r
function main() {\r
    let numsLists = [\r
        [3, 7, 1, 2, 8, 4, 5],\r
        [-1, 2, 1, -4, 5, -3],\r
        [2, 3, 4, 1, 7, 9],\r
        [1, -1, 0],\r
        [2, 4, 2, 7, 6, 3, 1],\r
    ];\r
\r
    let testLists = [\r
        [10, 20, 21],\r
        [-8, 0, 7],\r
        [8, 10, 20],\r
        [1, -1, 0],\r
        [8, 11, 15],\r
    ];\r
\r
    numsLists.map((numList, i) => {\r
        console.log(i + 1 + ".\\tInput array:", numsLists[i]);\r
        testLists[i].map((testList, j) => {\r
            if (findSumOfThree(numsLists[i], testLists[i][j]))\r
                console.log("\\tSum for", testLists[i][j], "exists");\r
            else console.log("\\tSum for", testLists[i][j], "does not exist");\r
        });\r
        console.log("-".repeat(100));\r
    });\r
}\r
\r
main();\r
\r
/**\r
 * TC = O(n^2), Sorting the array: O(nlog(n)); Nested loop to find the triplet: O(n^2); The total time complexity of this solution is O(nlog(n) + n^2), which is asymptotically equivalent to O(N^2).\r
 * SC = O(1), The space complexity of this solution is O(1) because we only use the space needed to store two index values.\r
 */\r
\r
/**\r
 * Solution summary->\r
Sort the array in ascending order.\r
\r
Loop through the entire array and set up two pointers (low and high) on every iteration.\r
\r
The low pointer is set to the current loop index + 1, and high is set to the last index of the array.\r
\r
Calculate the sum of array elements pointed to by the current loop index, and the low and high pointers.\r
\r
If the sum is equal to the target, return TRUE.\r
\r
If the sum is greater than the target, move the high pointer backward.\r
\r
If the sum is less than the target, move the low pointer forward.\r
\r
Repeat until the loop has processed the entire array.\r
\r
If after processing the entire array, we don’t find a triple that matches our requirement, we return FALSE.\r
 */\r
\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};

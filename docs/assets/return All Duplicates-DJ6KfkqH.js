const n=`# return All Duplicates

## Problem Statement

Describe the problem statement for **return All Duplicates** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
var returnAllDuplicates = function(nums) {\r
    let toMap = {};\r
	// let arr = [];\r
    let resultToReturn = false;\r
    for (let i = 0; i < nums.length; i++) {\r
\r
        if (toMap[nums[i]]) {\r
            resultToReturn = true;\r
			// arr.push(toMap[nums[i]]);\r
            console.log(toMap[nums[i]]);\r
        }\r
        toMap[nums[i]] = nums[i];\r
    }\r
	// console.log(arr);\r
}\r
\r
returnAllDuplicates([3, 7, 2, 8,3, 5, 4, 1,7]);\r
\r
\r
/**\r
 * TC = O(n), only one loop\r
 * SC = O(1) if we just have to print the duplicate numbers like console.log; if we need to return an array of duplicate values then add line 3, 9 and 14 above; in that case SC is O(n) where n is the size of array 'arr'.\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

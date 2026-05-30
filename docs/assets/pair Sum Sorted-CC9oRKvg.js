const r=`# pair Sum Sorted

## Problem Statement

Describe the problem statement for **pair Sum Sorted** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// pair sum- sorted\r
// Problem: Given a sorted array and a target, return indices of two numbers that add up to the target.\r
// Example:\r
// Input: arr = [1, 2, 4, 6, 10], target = 8\r
// Output: [1, 3] (because 2 + 6 = 8)\r
\r
let arr = [2,2,3]\r
let target = 5\r
let left = 0;\r
let right = arr.length-1\r
// console.log(right)\r
console.log(paisSumSorted(arr, target))\r
\r
function paisSumSorted(arr, target) {\r
    while(left < right) {\r
        sum = arr[left] + arr[right]\r
        if(sum < target)    \r
            left++\r
        else if(sum > target)\r
            right--\r
        else\r
            return [left,right]\r
    }\r
    \r
    return []\r
}
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};

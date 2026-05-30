const e=`# searchin Rotated Sorted Array

## Problem Statement

Describe the problem statement for **searchin Rotated Sorted Array** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Search in Rotated Sorted Array\r
 * There is an integer array "nums" sorted in ascending order (with distinct values).\r
 * Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]. For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].\r
 * Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.\r
 * You must write an algorithm with O(log n) runtime complexity.\r
 * Solution-> https://dev.to/cod3pineapple/leetcode-33-search-in-rotated-sorted-array-javscript-solution-21l4\r
 * Approach: Since we are looking for O(log N) time complexity, we can use a modified binary search. The idea is to determine which part of the array is sorted (since one part of the rotated array will always be sorted), and then check whether the target lies in the sorted half or the unsorted half\r
*/\r
\r
/**\r
 * Explanation:\r
- Binary Search Setup: We start with two pointers, left and right, to represent the search boundaries.\r
- Mid Calculation: Calculate the middle index, mid.\r
- Target Found: If nums[mid] == target, return mid.\r
- Determine Sorted Half: Check if the left half is sorted (nums[left] <= nums[mid]). If it is, see if the target lies within this sorted range. If not, search the other half.\r
- Repeat: Adjust left or right based on which half the target is likely to be in, and repeat the process until the target is found or the search space is exhausted.\r
 */\r
function searchRotatedArray(nums, target) {\r
    let left = 0;\r
    let right = nums.length - 1;\r
\r
    while (left <= right) {\r
        let mid = Math.floor((left + right) / 2);\r
\r
        if (nums[mid] === target) {\r
            return mid;\r
        }\r
\r
        if (nums[left] <= nums[mid]) { // means left half is sorted, in [4,5,6,7,0,1,2] mid is at 7, left is at 4, 4<=7, so left half is sorted (btw in this case both halves are sorted)\r
        // (In case of [6,7,0,1,2,4,5], mid is at 1, left is at 6, 6<=1 is false, so left half is not sorted but right half is sorted)\r
            if (nums[left] <= target && target < nums[mid]) {   // nums[left] <= target < nums[mid]\r
                // why <= target < nums[mid]? because if target is equal to nums[left], then it is in the left half, and if target is less than nums[mid], then it is also in the left half, so we need to include both conditions to ensure we are checking the correct half.\r
                // why not target <= nums[mid], because if target is equal to nums[mid], then we would have already returned mid in the previous condition, so we can safely exclude it from this condition.\r
                right = mid - 1; // target in left half\r
            } else {\r
                left = mid + 1; // target in right half\r
            }\r
        }\r
        // Right half is sorted\r
        else {\r
            if (nums[mid] < target && target <= nums[right]) {\r
                left = mid + 1; // target in right half\r
            } else {\r
                right = mid - 1; // target in left half\r
            }\r
        }\r
    }\r
\r
    return -1; // not found\r
}\r
\r
\r
\r
/**\r
 * Time Complexity : O(log n), because we are halving the search space at each step\r
 * Space Complexity: O(1), because the algorithm uses a constant amount of extra space (No extra space is used beyond a few variables)\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};

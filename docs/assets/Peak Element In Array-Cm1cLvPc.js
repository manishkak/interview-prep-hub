const e=`# Peak Element In Array

## Problem Statement

Describe the problem statement for **Peak Element In Array** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
Peak Element in an Array (Return index instead of value)\r
Problem: Find any peak element in an array where a peak is greater than its neighbors. Solve in O(log n) time.\r
    - A peak element is an element that is greater than or equal to its neighbors. We need to find any peak element in the array using binary search to achieve O(log n) time complexity.\r
    - If nums[i] > nums[i-1] && nums[i] > nums[i+1], then nums[i] is a peak.\r
    - For edges:\r
        nums[0] is a peak if nums[0] > nums[1]\r
        nums[n-1] is a peak if nums[n-1] > nums[n-2]\r
    - Return the index of any one peak.\r
\r
Example:\r
Input: nums = [1,2,3,1]\r
Output: 2 (Index of peak 3)\r
========================================\r
========================================\r
Time Complexity:\r
O(log n): We are dividing the search range in half on each iteration, which leads to a logarithmic time complexity.\r
Space Complexity:\r
O(1): Only a constant amount of extra space is used for variables.\r
*/\r
\r
// Mental line\r
// Move toward the side where the neighbor is bigger, because a peak must exist in the direction of increasing values.\r
\r
function findPeakElement(nums) {\r
    let left = 0, right = nums.length - 1;\r
\r
    while (left < right) {  // Use < because we want to stop when left and right converge to the same index, which will be the peak. \r
    // so when left == right, we have found the peak, and we can return that index --> THIS IS IMPORTANT!\r
        let mid = Math.floor((left + right) / 2);\r
\r
        if (nums[mid] > nums[mid + 1]) {    // compare value at mid with the next element\r
            // then there must be a peak on the left side (or mid itself), because the sequence is “rising”, and it either ends at a peak or keeps going up until the last element.\r
            // we didnt do mid - 1 because mid could be the peak itself, so we include it in the search space by setting right = mid instead of right = mid - 1\r
            right = mid;\r
        } else {\r
            // If mid is smaller than the next element, peak must be on the right half, because the sequence is “falling”, so mid could be a peak or there’s one earlier.\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;  // left and right will eventually converge to the peak element's index.\r
}\r
// explanation of the code:\r
/*\r
1. We initialize two pointers, left and right, to represent the current search range in the array.\r
2. We enter a loop that continues until left and right converge to the same index --> THIS IS IMPORTANT!\r
3. Inside the loop, we calculate the middle index mid.\r
4. We compare the value at mid with the value at mid + 1:\r
   - If nums[mid] > nums[mid + 1], it means the peak is on the left side (including mid), so we move the right pointer to mid.\r
   - Otherwise, the peak is on the right side, so we move the left pointer to mid + 1.\r
5. When the loop ends, left and right will be pointing to the same index, which is the index of a peak element. We return that index.\r
*/\r
\r
// Example usage:\r
const nums = [1, 2, 3, 1];\r
const peakIndex = findPeakElement(nums);\r
console.log("Peak element index:", peakIndex);  // Output will be the index of the peak element.\r
\r
/*\r
Explanation:\r
    - Binary Search Approach: We use binary search to divide the array in half and check the middle element. If nums[mid] > nums[mid + 1], the peak is on the left side (including mid), so we narrow the search to the left half. Otherwise, the peak is on the right side.\r
    - Termination: The loop continues until left and right converge to the same index, which will be the index of a peak element.\r
*/\r
\r
/*\r
Peak elements in the array [10, 20, 15, 2, 23, 90, 67] are:\r
20 (index 1)\r
90 (index 5)\r
\r
When performing the binary search, the algorithm will find 90 first, but since it’s looking for any peak element, 20 could also be considered a valid peak. Binary search finds the first peak it encounters based on its approach (which, in this case, happens to be 90), but both 20 and 90 are indeed valid peaks.\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};

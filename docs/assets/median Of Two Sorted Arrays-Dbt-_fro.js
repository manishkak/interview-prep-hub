const n=`# median Of Two Sorted Arrays

## Problem Statement

Describe the problem statement for **median Of Two Sorted Arrays** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Median of Two Sorted Arrays\r
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.\r
 * We can avoid creating an additional array of size m + n.\r
 * 		- Since the two arrays are sorted we can use binary search to divide the array and find the median.\r
 * Solution 1 - https://dev.to/phariale/solving-leetcode-median-of-two-sorted-arrays-1og0\r
 */\r
/*\r
Time Complexity:\r
Merging the arrays: O(m + n) where m and n are the lengths of the input arrays.\r
Sorting the merged array: O((m + n) log(m + n)).\r
-> This is less efficient than the optimal solution using binary search, which has a time complexity of O(log(min(m, n))).\r
\r
Space Complexity:\r
O(m + n) due to the space required to store the merged array\r
*/\r
\r
// Example usage:\r
const nums1 = [1, 3];\r
const nums2 = [2];\r
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0\r
\r
// one line mental model: merge the two arrays, sort them, and then find the median based on the length of the merged array.\r
\r
// explanation of the code:\r
/*\r
1. We merge the two sorted arrays nums1 and nums2 into a single array called data using the concat method.\r
2. We sort the merged array in ascending order using the sort method with a custom comparator function (a, b) => a - b to ensure numerical sorting.\r
3. We calculate the length of the sorted array and store it in the variable len.\r
4. We check if the length of the sorted array is even or odd:\r
   - If len is even, we return the average of the two middle elements, which are located at indices (len / 2) - 1 and len / 2.\r
    - If len is odd, we return the middle element, which is located at index Math.floor(len / 2).\r
5. The function returns the calculated median of the two sorted arrays.\r
*/\r
\r
var findMedianSortedArrays = function(nums1, nums2) {\r
  // Merge nums1 and nums2 into a single array\r
  let data = nums1.concat(nums2);\r
\r
  // Sort the merged array\r
  data.sort((a, b) => a - b);\r
\r
  // Calculate median\r
  let len = data.length;\r
  if (len % 2 === 0) {\r
      // If the length is even, return the average of the two middle elements\r
      return (data[(len / 2) - 1] + data[len / 2]) / 2;\r
  } else {\r
      // If the length is odd, return the middle element\r
      return data[Math.floor(len / 2)];\r
  }\r
};\r
// But this is not the optimal solution, we can solve this problem in O(log(min(m, n))) time complexity using binary search, which is more efficient than the above approach.\r
\r
// Below is the optimal solution using binary search, which has a time complexity of O(log(min(m, n))) and space complexity of O(1) since we are not using any extra space for merging or sorting the arrays.\r
\r
function findMedianSortedArrays(nums1, nums2) {\r
  if (nums1.length > nums2.length)\r
    return findMedianSortedArrays(nums2, nums1);\r
\r
  let x = nums1.length;\r
  let y = nums2.length;\r
\r
  let left = 0;\r
  let right = x;\r
\r
  while (left <= right) {\r
    let px = Math.floor((left + right) / 2);\r
    let py = Math.floor((x + y + 1) / 2) - px;\r
\r
    let maxLeftX = px === 0 ? -Infinity : nums1[px - 1];\r
    let minRightX = px === x ? Infinity : nums1[px];\r
\r
    let maxLeftY = py === 0 ? -Infinity : nums2[py - 1];\r
    let minRightY = py === y ? Infinity : nums2[py];\r
\r
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {\r
      if ((x + y) % 2 === 0) {\r
        return (\r
          Math.max(maxLeftX, maxLeftY) +\r
          Math.min(minRightX, minRightY)\r
        ) / 2;\r
      } else {\r
        return Math.max(maxLeftX, maxLeftY);\r
      }\r
    }\r
\r
    else if (maxLeftX > minRightY) {\r
      right = px - 1;\r
    }\r
\r
    else {\r
      left = px + 1;\r
    }\r
  }\r
}\r
\r
\r
/**\r
 * Solution 2 - https://dev.to/chandrasekarg/4-median-of-two-sorted-arrays-2je9\r
 */\r
 var findMedianSortedArrays = function(nums1, nums2) {\r
    let sortedArray = [...nums1, ...nums2].sort((a,b) => a-b);\r
    let median = 0;\r
\r
    if (sortedArray.length % 2 !== 0) {\r
        median = sortedArray[Math.floor(sortedArray.length / 2)];    \r
    } else {\r
        median = (sortedArray[(sortedArray.length/2)] + sortedArray[(sortedArray.length/2) -1])/2;\r
    }\r
\r
    return median;\r
};\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

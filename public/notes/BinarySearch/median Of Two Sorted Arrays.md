# median Of Two Sorted Arrays

## Problem Statement

Describe the problem statement for **median Of Two Sorted Arrays** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Median of Two Sorted Arrays
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * We can avoid creating an additional array of size m + n.
 * 		- Since the two arrays are sorted we can use binary search to divide the array and find the median.
 * Solution 1 - https://dev.to/phariale/solving-leetcode-median-of-two-sorted-arrays-1og0
 */
/*
Time Complexity:
Merging the arrays: O(m + n) where m and n are the lengths of the input arrays.
Sorting the merged array: O((m + n) log(m + n)).
-> This is less efficient than the optimal solution using binary search, which has a time complexity of O(log(min(m, n))).

Space Complexity:
O(m + n) due to the space required to store the merged array
*/

// Example usage:
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0

// one line mental model: merge the two arrays, sort them, and then find the median based on the length of the merged array.

// explanation of the code:
/*
1. We merge the two sorted arrays nums1 and nums2 into a single array called data using the concat method.
2. We sort the merged array in ascending order using the sort method with a custom comparator function (a, b) => a - b to ensure numerical sorting.
3. We calculate the length of the sorted array and store it in the variable len.
4. We check if the length of the sorted array is even or odd:
   - If len is even, we return the average of the two middle elements, which are located at indices (len / 2) - 1 and len / 2.
    - If len is odd, we return the middle element, which is located at index Math.floor(len / 2).
5. The function returns the calculated median of the two sorted arrays.
*/

var findMedianSortedArrays = function(nums1, nums2) {
  // Merge nums1 and nums2 into a single array
  let data = nums1.concat(nums2);

  // Sort the merged array
  data.sort((a, b) => a - b);

  // Calculate median
  let len = data.length;
  if (len % 2 === 0) {
      // If the length is even, return the average of the two middle elements
      return (data[(len / 2) - 1] + data[len / 2]) / 2;
  } else {
      // If the length is odd, return the middle element
      return data[Math.floor(len / 2)];
  }
};
// But this is not the optimal solution, we can solve this problem in O(log(min(m, n))) time complexity using binary search, which is more efficient than the above approach.

// Below is the optimal solution using binary search, which has a time complexity of O(log(min(m, n))) and space complexity of O(1) since we are not using any extra space for merging or sorting the arrays.

function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length)
    return findMedianSortedArrays(nums2, nums1);

  let x = nums1.length;
  let y = nums2.length;

  let left = 0;
  let right = x;

  while (left <= right) {
    let px = Math.floor((left + right) / 2);
    let py = Math.floor((x + y + 1) / 2) - px;

    let maxLeftX = px === 0 ? -Infinity : nums1[px - 1];
    let minRightX = px === x ? Infinity : nums1[px];

    let maxLeftY = py === 0 ? -Infinity : nums2[py - 1];
    let minRightY = py === y ? Infinity : nums2[py];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) % 2 === 0) {
        return (
          Math.max(maxLeftX, maxLeftY) +
          Math.min(minRightX, minRightY)
        ) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    }

    else if (maxLeftX > minRightY) {
      right = px - 1;
    }

    else {
      left = px + 1;
    }
  }
}


/**
 * Solution 2 - https://dev.to/chandrasekarg/4-median-of-two-sorted-arrays-2je9
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let sortedArray = [...nums1, ...nums2].sort((a,b) => a-b);
    let median = 0;

    if (sortedArray.length % 2 !== 0) {
        median = sortedArray[Math.floor(sortedArray.length / 2)];    
    } else {
        median = (sortedArray[(sortedArray.length/2)] + sortedArray[(sortedArray.length/2) -1])/2;
    }

    return median;
};

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

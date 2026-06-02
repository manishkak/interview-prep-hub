const n=`\uFEFF# median Of Two Sorted Arrays

## Problem Statement

Given two sorted arrays nums1 and nums2 of sizes m and n respectively, return the median of the two combined arrays without actually merging them or creating new arrays. Optimize to O(log(min(m, n))) time.

## Examples

- Input: nums1 = [1, 3], nums2 = [2]
  Output: 2.0 (combined [1, 2, 3], median = 2)
- Input: nums1 = [1, 2], nums2 = [3, 4]
  Output: 2.5 (combined [1, 2, 3, 4], median = (2 + 3) / 2 = 2.5)

## Approach

- Binary search on the smaller array to partition both arrays correctly.
- Goal: left partition has (m + n + 1) / 2 elements total.
- Constraint: all elements on left <= all elements on right.
- Adjust partition until valid, then calculate median from boundary values.

## Solution

\`\`\`js
function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  
  let left = 0, right = nums1.length;
  
  while (left <= right) {
    let cut1 = Math.floor((left + right) / 2);
    let cut2 = Math.floor((nums1.length + nums2.length + 1) / 2) - cut1;
    
    let left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
    let right1 = cut1 === nums1.length ? Infinity : nums1[cut1];
    let left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
    let right2 = cut2 === nums2.length ? Infinity : nums2[cut2];
    
    if (left1 <= right2 && left2 <= right1) {
      let max_left = Math.max(left1, left2);
      let min_right = Math.min(right1, right2);
      
      if ((nums1.length + nums2.length) % 2 === 0) {
        return (max_left + min_right) / 2;
      } else {
        return max_left;
      }
    } else if (left1 > right2) {
      right = cut1 - 1;
    } else {
      left = cut1 + 1;
    }
  }
}

const nums1 = [1, 3], nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // 2.0
\`

## Time Complexity

- O(log(min(m, n))) - binary search on smaller array only

## Space Complexity

- O(1) - only partition pointers and variables

## Notes

- Ensure nums1 is the smaller array for efficiency.
- Median position: (m + n + 1) / 2 for left partition.
- Handle edge cases: empty array, single element, different lengths.
- Naive merge: O((m+n)log(m+n)), this is much better.\r
\r
\r
`;export{n as default};

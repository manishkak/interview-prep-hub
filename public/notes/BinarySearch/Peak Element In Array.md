# Peak Element In Array

## Problem Statement

Describe the problem statement for **Peak Element In Array** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
Peak Element in an Array (Return index instead of value)
Problem: Find any peak element in an array where a peak is greater than its neighbors. Solve in O(log n) time.
    - A peak element is an element that is greater than or equal to its neighbors. We need to find any peak element in the array using binary search to achieve O(log n) time complexity.
    - If nums[i] > nums[i-1] && nums[i] > nums[i+1], then nums[i] is a peak.
    - For edges:
        nums[0] is a peak if nums[0] > nums[1]
        nums[n-1] is a peak if nums[n-1] > nums[n-2]
    - Return the index of any one peak.

Example:
Input: nums = [1,2,3,1]
Output: 2 (Index of peak 3)
========================================
========================================
Time Complexity:
O(log n): We are dividing the search range in half on each iteration, which leads to a logarithmic time complexity.
Space Complexity:
O(1): Only a constant amount of extra space is used for variables.
*/

// Mental line
// Move toward the side where the neighbor is bigger, because a peak must exist in the direction of increasing values.

function findPeakElement(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {  // Use < because we want to stop when left and right converge to the same index, which will be the peak. 
    // so when left == right, we have found the peak, and we can return that index --> THIS IS IMPORTANT!
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {    // compare value at mid with the next element
            // then there must be a peak on the left side (or mid itself), because the sequence is “rising”, and it either ends at a peak or keeps going up until the last element.
            // we didnt do mid - 1 because mid could be the peak itself, so we include it in the search space by setting right = mid instead of right = mid - 1
            right = mid;
        } else {
            // If mid is smaller than the next element, peak must be on the right half, because the sequence is “falling”, so mid could be a peak or there’s one earlier.
            left = mid + 1;
        }
    }

    return left;  // left and right will eventually converge to the peak element's index.
}
// explanation of the code:
/*
1. We initialize two pointers, left and right, to represent the current search range in the array.
2. We enter a loop that continues until left and right converge to the same index --> THIS IS IMPORTANT!
3. Inside the loop, we calculate the middle index mid.
4. We compare the value at mid with the value at mid + 1:
   - If nums[mid] > nums[mid + 1], it means the peak is on the left side (including mid), so we move the right pointer to mid.
   - Otherwise, the peak is on the right side, so we move the left pointer to mid + 1.
5. When the loop ends, left and right will be pointing to the same index, which is the index of a peak element. We return that index.
*/

// Example usage:
const nums = [1, 2, 3, 1];
const peakIndex = findPeakElement(nums);
console.log("Peak element index:", peakIndex);  // Output will be the index of the peak element.

/*
Explanation:
    - Binary Search Approach: We use binary search to divide the array in half and check the middle element. If nums[mid] > nums[mid + 1], the peak is on the left side (including mid), so we narrow the search to the left half. Otherwise, the peak is on the right side.
    - Termination: The loop continues until left and right converge to the same index, which will be the index of a peak element.
*/

/*
Peak elements in the array [10, 20, 15, 2, 23, 90, 67] are:
20 (index 1)
90 (index 5)

When performing the binary search, the algorithm will find 90 first, but since it’s looking for any peak element, 20 could also be considered a valid peak. Binary search finds the first peak it encounters based on its approach (which, in this case, happens to be 90), but both 20 and 90 are indeed valid peaks.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

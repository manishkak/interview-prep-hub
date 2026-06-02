# 3Sum

## Problem Statement

Given an integer array nums, return all unique triplets [a, b, c] such that a + b + c === 0. The solution set must not contain duplicate triplets. Implement the solution in JavaScript and return an array of triplet arrays.

## Examples

- Input: [-1, 0, 1, 2, -1, -4]
-	Output: [[-1, -1, 2], [-1, 0, 1]]
- Input: [0, 0, 0]
-	Output: [[0, 0, 0]]
- Input: [1, 2, -2, -1]
-	Output: []

## Approach

- Sort the array to enable a two-pointer search and to make it easy to skip duplicates.
- Iterate i from 0 to n - 3, treat nums[i] as the fixed element.
- Use two pointers left = i + 1 and right = n - 1 to find pairs whose sum equals -nums[i].
- When a triplet is found, push it to the result and move both pointers while skipping duplicates.
- Skip duplicate values for the fixed element i to avoid duplicate triplets.

This yields an O(n²) time algorithm with in-place sorting.

## Solution

```js
/**
 * Return all unique triplets that sum to zero.
 * @param {number[]} nums
 * @returns {number[][]}
 */
function threeSum(nums) {
	const res = [];
	if (!nums || nums.length < 3) return res;

	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate fixed value

		let left = i + 1;
		let right = nums.length - 1;
		const target = -nums[i];

		while (left < right) {
			const sum = nums[left] + nums[right];
			if (sum === target) {
				res.push([nums[i], nums[left], nums[right]]);
				// skip duplicates for left and right
				while (left < right && nums[left] === nums[left + 1]) left++;
				while (left < right && nums[right] === nums[right - 1]) right--;
				left++;
				right--;
			} else if (sum < target) {
				left++;
			} else {
				right--;
			}
		}
	}

	return res;
}

// quick examples
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 0, 0])); // [[0,0,0]]
```

## Time Complexity

- Sorting: O(n log n)
- Two-pointer scan: O(n²)
- Overall: O(n²)

## Space Complexity

- Output storage: O(k) where k is number of triplets returned.
- Sorting in place: O(log n) auxiliary (implementation-dependent). Excluding output, auxiliary space is O(1) to O(log n).

## Notes

- Handle nums.length < 3 early and return an empty array.
- Use sorting and duplicate-skipping to ensure uniqueness of triplets.
- For a different target sum t, change target = t - nums[i] accordingly.
- Watch out for large input sizes: O(n²) may be too slow when n is large.


const t=`# 3Sum\r
\r
## Problem Statement\r
\r
Given an integer array nums, return all unique triplets [a, b, c] such that a + b + c === 0. The solution set must not contain duplicate triplets. Implement the solution in JavaScript and return an array of triplet arrays.\r
\r
## Examples\r
\r
- Input: [-1, 0, 1, 2, -1, -4]\r
-	Output: [[-1, -1, 2], [-1, 0, 1]]\r
- Input: [0, 0, 0]\r
-	Output: [[0, 0, 0]]\r
- Input: [1, 2, -2, -1]\r
-	Output: []\r
\r
## Approach\r
\r
- Sort the array to enable a two-pointer search and to make it easy to skip duplicates.\r
- Iterate i from 0 to n - 3, treat nums[i] as the fixed element.\r
- Use two pointers left = i + 1 and right = n - 1 to find pairs whose sum equals -nums[i].\r
- When a triplet is found, push it to the result and move both pointers while skipping duplicates.\r
- Skip duplicate values for the fixed element i to avoid duplicate triplets.\r
\r
This yields an O(n²) time algorithm with in-place sorting.\r
\r
## Solution\r
\r
\`\`\`js\r
/**\r
 * Return all unique triplets that sum to zero.\r
 * @param {number[]} nums\r
 * @returns {number[][]}\r
 */\r
function threeSum(nums) {\r
	const res = [];\r
	if (!nums || nums.length < 3) return res;\r
\r
	nums.sort((a, b) => a - b);\r
\r
	for (let i = 0; i < nums.length - 2; i++) {\r
		if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate fixed value\r
\r
		let left = i + 1;\r
		let right = nums.length - 1;\r
		const target = -nums[i];\r
\r
		while (left < right) {\r
			const sum = nums[left] + nums[right];\r
			if (sum === target) {\r
				res.push([nums[i], nums[left], nums[right]]);\r
				// skip duplicates for left and right\r
				while (left < right && nums[left] === nums[left + 1]) left++;\r
				while (left < right && nums[right] === nums[right - 1]) right--;\r
				left++;\r
				right--;\r
			} else if (sum < target) {\r
				left++;\r
			} else {\r
				right--;\r
			}\r
		}\r
	}\r
\r
	return res;\r
}\r
\r
// quick examples\r
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]\r
console.log(threeSum([0, 0, 0])); // [[0,0,0]]\r
\`\`\`\r
\r
## Time Complexity\r
\r
- Sorting: O(n log n)\r
- Two-pointer scan: O(n²)\r
- Overall: O(n²)\r
\r
## Space Complexity\r
\r
- Output storage: O(k) where k is number of triplets returned.\r
- Sorting in place: O(log n) auxiliary (implementation-dependent). Excluding output, auxiliary space is O(1) to O(log n).\r
\r
## Notes\r
\r
- Handle nums.length < 3 early and return an empty array.\r
- Use sorting and duplicate-skipping to ensure uniqueness of triplets.\r
- For a different target sum t, change target = t - nums[i] accordingly.\r
- Watch out for large input sizes: O(n²) may be too slow when n is large.\r
\r
`;export{t as default};

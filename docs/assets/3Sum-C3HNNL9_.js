const r=`# 3Sum\r
\r
## Problem Statement\r
\r
Describe the problem statement for **3Sum** here.\r
\r
## Examples\r
\r
- Example input:\r
- Example output:\r
\r
## Approach\r
\r
Explain the general approach, intuition, and algorithms.\r
\r
## Solution\r
\r
\`\`\`js\r
/**\r
 * Edge cases:\r
 * Array length < 3.\r
 * Presence of duplicate numbers (e.g., [-1, -1, 2, 2]).\r
 * All numbers are positive or all are negative.\r
 */\r
/*\r
1. Triplet Sum to Zero - Old Grokking\r
2. Sum of Three Values - Grokking JS\r
3. Sum of Three Values - CodeRust\r
\r
1. 	Triplet Sum to Zero aka 3Sum\r
	- Given an array of unsorted numbers,\r
	- find "all unique triplets" \r
	- that add up to zero\r
\r
2. 	Sum of Three Values\r
	- Given an array of integers\r
	- and an integer value\r
	- determine if there are "any three integers" in the array\r
	- whose sum equals the target. \r
	- "Return "true if three such integers are found in the array. \r
	- Otherwise, return False.\r
\r
3.	Sum of Three Values\r
	- Given an array of integers\r
	- and a value\r
	- determine if there are "any three integers" in the array\r
	- whose "sum equals the given value"\r
\r
	* Approach:\r
		- Sort the array.\r
		- Iterate through the array, fixing one element at a time.\r
		- Use a two-pointer technique to find the other two elements that sum up to zero with the fixed - element.\r
		- Skip duplicate elements to ensure the uniqueness of triplets\r
\r
Overall TC will be O(n²)\r
*/\r
\r
/**\r
 * Solution 2 from ChatGPT\r
 */\r
\r
function threeSum(nums, target) {\r
    nums.sort((a, b) => a - b); // Sort the array in ascending order\r
    const result = [];\r
\r
	// loop will run from 0 to 2nd last element (nums.length - 2), this is because the last element is set to the variable 'right'\r
    for (let i = 0; i < nums.length - 2; i++) {\r
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) { // Skip duplicate values\r
            let left = i + 1;\r
            let right = nums.length - 1;\r
            const sum = target - nums[i];\r
            \r
            while (left < right) {\r
                if (nums[left] + nums[right] === sum) {\r
                    result.push([nums[i], nums[left], nums[right]]);\r
                    while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicate values\r
                    while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicate values\r
                    left++;\r
                    right--;\r
                } else if (nums[left] + nums[right] < sum) {\r
                    left++; // cos its a sorted arr and we need a larger sum, so just move left fwd\r
                } else {\r
                    right--;\r
                }\r
            }\r
        }\r
    }\r
    \r
    return result;\r
}\r
\r
// Example usage:\r
const nums1 = [-1, 0, 1, 2, -1, -4];\r
const target1 = 0;\r
console.log(threeSum(nums1, target1)); // Output: [[-1, -1, 2], [-1, 0, 1]]\r
\r
const nums2 = [0, 0, 0, 0];\r
const target2 = 0;\r
console.log(threeSum(nums2, target2)); // Output: [[0, 0, 0]]\r
\r
\r
\r
// 3 Sum or Triplet Sum to Zero : Solution 1 (Solution 2 is below)\r
\r
function search_triplets(arr) {\r
	arr.sort((a, b) => a - b);\r
	const triplets = [];\r
	for (i = 0; i < arr.length; i++) {\r
	  if (i > 0 && arr[i] === arr[i - 1]) { // skip same element to avoid duplicate triplets\r
		continue;\r
	  }\r
	  search_pair(arr, -arr[i], i + 1, triplets);\r
	}\r
  \r
	return triplets;\r
  }\r
  \r
  \r
  function search_pair(arr, target_sum, left, triplets) {\r
	let right = arr.length - 1;\r
	while (left < right) {\r
	  const current_sum = arr[left] + arr[right];\r
	  if (current_sum === target_sum) { // found the triplet\r
		triplets.push([-target_sum, arr[left], arr[right]]);\r
		left += 1;\r
		right -= 1;\r
		while (left < right && arr[left] === arr[left - 1]) {\r
		  left += 1; // skip same element to avoid duplicate triplets\r
		}\r
		while (left < right && arr[right] === arr[right + 1]) {\r
		  right -= 1; // skip same element to avoid duplicate triplets\r
		}\r
	  } else if (target_sum > current_sum) {\r
		left += 1; // we need a pair with a bigger sum\r
	  } else {\r
		right -= 1; // we need a pair with a smaller sum\r
	  }\r
	}\r
  }\r
  \r
  \r
  console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));\r
  console.log(search_triplets([-5, 2, -1, -2, 3]));\r
\r
\r
/**\r
 * TC = O(n^2), Sorting the array will take O(N * logN), if its already sorted then TC is O(n)-> for sorting an already sorted array; The searchPair() function will take O(N); As we are calling searchPair() for every number in the input array, this means that overall searchTriplets() will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).\r
 * SC = O(N), Ignoring the space required for the output array, SC of the above algorithm will be O(N) which is required for sorting. If the array is already sorted then the SC is O(1), excluding the result storage.\r
 */\r
\r
\r
/*\r
Time Complexity Breakdown\r
1. Sorting the Array: O(n log n)\r
First, you sort the array. Sorting typically takes O(n log n) time using algorithms like Timsort (which is used by JavaScript's .sort()).\r
\r
2. Two-Pointer Technique: O(n²)\r
After sorting the array, the three-sum problem is reduced to a two-pointer problem. For each element in the array, you fix one element (nums[i]) and then look for pairs of numbers (nums[j] and nums[k]) that sum to the negative of nums[i] by using two pointers (j and k).\r
\r
You iterate through each element of the array, treating it as the fixed element.\r
For each fixed element, you use the two-pointer technique to find pairs that sum to -nums[i].\r
The two-pointer traversal takes O(n) for each element, and since you do this for every element, the total time complexity of this part is O(n²).\r
Overall Time Complexity\r
Sorting the array: O(n log n)\r
Finding triplets using two pointers: O(n²)\r
Therefore, the overall time complexity is dominated by the two-pointer approach, which is O(n²).\r
\r
*/\r
\`\`\`\r
\r
\r
## Time Complexity\r
\r
\r
## Space Complexity\r
\r
\r
## Notes\r
\r
- Add notes, edge cases, and patterns here.\r
`;export{r as default};

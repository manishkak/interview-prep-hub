# 3Sum

## Problem Statement

Describe the problem statement for **3Sum** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Edge cases:
 * Array length < 3.
 * Presence of duplicate numbers (e.g., [-1, -1, 2, 2]).
 * All numbers are positive or all are negative.
 */
/*
1. Triplet Sum to Zero - Old Grokking
2. Sum of Three Values - Grokking JS
3. Sum of Three Values - CodeRust

1. 	Triplet Sum to Zero aka 3Sum
	- Given an array of unsorted numbers,
	- find "all unique triplets" 
	- that add up to zero

2. 	Sum of Three Values
	- Given an array of integers
	- and an integer value
	- determine if there are "any three integers" in the array
	- whose sum equals the target. 
	- "Return "true if three such integers are found in the array. 
	- Otherwise, return False.

3.	Sum of Three Values
	- Given an array of integers
	- and a value
	- determine if there are "any three integers" in the array
	- whose "sum equals the given value"

	* Approach:
		- Sort the array.
		- Iterate through the array, fixing one element at a time.
		- Use a two-pointer technique to find the other two elements that sum up to zero with the fixed - element.
		- Skip duplicate elements to ensure the uniqueness of triplets

Overall TC will be O(n²)
*/

/**
 * Solution 2 from ChatGPT
 */

function threeSum(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const result = [];

	// loop will run from 0 to 2nd last element (nums.length - 2), this is because the last element is set to the variable 'right'
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) { // Skip duplicate values
            let left = i + 1;
            let right = nums.length - 1;
            const sum = target - nums[i];
            
            while (left < right) {
                if (nums[left] + nums[right] === sum) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicate values
                    while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicate values
                    left++;
                    right--;
                } else if (nums[left] + nums[right] < sum) {
                    left++; // cos its a sorted arr and we need a larger sum, so just move left fwd
                } else {
                    right--;
                }
            }
        }
    }
    
    return result;
}

// Example usage:
const nums1 = [-1, 0, 1, 2, -1, -4];
const target1 = 0;
console.log(threeSum(nums1, target1)); // Output: [[-1, -1, 2], [-1, 0, 1]]

const nums2 = [0, 0, 0, 0];
const target2 = 0;
console.log(threeSum(nums2, target2)); // Output: [[0, 0, 0]]



// 3 Sum or Triplet Sum to Zero : Solution 1 (Solution 2 is below)

function search_triplets(arr) {
	arr.sort((a, b) => a - b);
	const triplets = [];
	for (i = 0; i < arr.length; i++) {
	  if (i > 0 && arr[i] === arr[i - 1]) { // skip same element to avoid duplicate triplets
		continue;
	  }
	  search_pair(arr, -arr[i], i + 1, triplets);
	}
  
	return triplets;
  }
  
  
  function search_pair(arr, target_sum, left, triplets) {
	let right = arr.length - 1;
	while (left < right) {
	  const current_sum = arr[left] + arr[right];
	  if (current_sum === target_sum) { // found the triplet
		triplets.push([-target_sum, arr[left], arr[right]]);
		left += 1;
		right -= 1;
		while (left < right && arr[left] === arr[left - 1]) {
		  left += 1; // skip same element to avoid duplicate triplets
		}
		while (left < right && arr[right] === arr[right + 1]) {
		  right -= 1; // skip same element to avoid duplicate triplets
		}
	  } else if (target_sum > current_sum) {
		left += 1; // we need a pair with a bigger sum
	  } else {
		right -= 1; // we need a pair with a smaller sum
	  }
	}
  }
  
  
  console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
  console.log(search_triplets([-5, 2, -1, -2, 3]));


/**
 * TC = O(n^2), Sorting the array will take O(N * logN), if its already sorted then TC is O(n)-> for sorting an already sorted array; The searchPair() function will take O(N); As we are calling searchPair() for every number in the input array, this means that overall searchTriplets() will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).
 * SC = O(N), Ignoring the space required for the output array, SC of the above algorithm will be O(N) which is required for sorting. If the array is already sorted then the SC is O(1), excluding the result storage.
 */


/*
Time Complexity Breakdown
1. Sorting the Array: O(n log n)
First, you sort the array. Sorting typically takes O(n log n) time using algorithms like Timsort (which is used by JavaScript's .sort()).

2. Two-Pointer Technique: O(n²)
After sorting the array, the three-sum problem is reduced to a two-pointer problem. For each element in the array, you fix one element (nums[i]) and then look for pairs of numbers (nums[j] and nums[k]) that sum to the negative of nums[i] by using two pointers (j and k).

You iterate through each element of the array, treating it as the fixed element.
For each fixed element, you use the two-pointer technique to find pairs that sum to -nums[i].
The two-pointer traversal takes O(n) for each element, and since you do this for every element, the total time complexity of this part is O(n²).
Overall Time Complexity
Sorting the array: O(n log n)
Finding triplets using two pointers: O(n²)
Therefore, the overall time complexity is dominated by the two-pointer approach, which is O(n²).

*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

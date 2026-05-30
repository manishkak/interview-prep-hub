const n=`# longest Consecutive Sequence

## Problem Statement

Describe the problem statement for **longest Consecutive Sequence** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Longest Consecutive Sequence\r
 * Given an array of elements, find a subsequence in the array such that all the elements in the sequence are consecutive irrespective of their order - meaning its an unsorted array.\r
 * For an unsorted array, Set-based approach is better, as it provides O(n) time without needing to sort the array. (and Sets automatically discard duplicate elements)\r
 * For a sorted array, this approach runs in O(n) time and uses O(1) space, making it more efficient than the set-based approach that works for unsorted arrays. \r
 *          However, if sorting is required, this method will have O(n log n) time complexity due to the sorting step.\r
 * */\r
\r
/**\r
 * ChatGpt solution-\r
 * convert array into Set to facilitate O(1) lookups;\r
 * iterate through the set, for every num, check if its prev is not in the set;\r
 * then set currentNum to current num, and currentStreak to 1 (meaning begin from start)\r
 * start a while loop, and check if set has (currNum+1)->cos we're checking for consec. seq.\r
 * if yes, then incr both currStreak and currNum\r
 * longestStreak is max of longestStreak and currStreak\r
 */\r
/**\r
 * Complexity Analysis\r
Time Complexity: O(n), where n is the number of elements in the input array. Each number is processed at most twice (once when checking for the start of a sequence and once when counting the length of the sequence).\r
Space Complexity: O(n), where n is the number of elements in the input array, due to the space required to store the set.\r
 */\r
\r
function longestConsecutive(nums) {\r
    if (nums.length === 0) return 0;\r
\r
    const numSet = new Set(nums);\r
    /**\r
     * Storing unique elements in a Set in JavaScript is straightforward, as a Set is a collection of unique values. When you add elements to a Set, duplicates are automatically discarded, ensuring that only one instance of each element remains.\r
     */\r
    let longestStreak = 0;\r
\r
    for (let num of numSet) {\r
        // Check if num is the "start of a sequence"\r
        // Only start counting if 'num' is the start of a sequence\r
        // so eg. for '4', it fails the 'if' because 4-1 = 3 is in the Set, so 4 cannot be the start of a sequence\r
        if (!numSet.has(num - 1)) {\r
            let currentNum = num;\r
            let currentStreak = 1;\r
\r
            // Check for the next numbers in the sequence\r
            // Continue counting while the next consecutive number exists in the set\r
            while (numSet.has(currentNum + 1)) {\r
                currentNum += 1;\r
                currentStreak += 1;\r
            }\r
\r
            // Update the longest streak found\r
            longestStreak = Math.max(longestStreak, currentStreak);\r
        }\r
    }\r
\r
    return longestStreak;\r
}\r
\r
// Example usage:\r
const arr = [100, 4, 200, 1, 3, 2];\r
console.log(longestConsecutive(arr)); // Output: 4\r
\r
// Solution for Sorted Array\r
\r
function longestConsecutiveSorted(nums) {\r
    if (nums.length === 0) return 0;\r
\r
    let longestStreak = 1;\r
    let currentStreak = 1;\r
\r
    for (let i = 1; i < nums.length; i++) {\r
        if (nums[i] !== nums[i - 1]) {  // Skip duplicates\r
            if (nums[i] === nums[i - 1] + 1) {\r
                currentStreak += 1;\r
            } else {\r
                longestStreak = Math.max(longestStreak, currentStreak);\r
                currentStreak = 1;  // Reset for a new sequence\r
            }\r
        }\r
    }\r
\r
    // Compare for the final streak at the end of the array\r
    return Math.max(longestStreak, currentStreak);\r
}\r
\r
\r
// Sol 1 -> https://learnersbucket.com/examples/algorithms/longest-consecutive-sequence/\r
\r
const LCS = (arr) => {\r
	//get unique elms  \r
	const S = new Set(arr);\r
	\r
	//store the result\r
	let max = 1;\r
	\r
	// iterate array elements\r
	for (let e of arr) {\r
	  \r
	  // if the current element begins a new seq\r
	  if (!S.has(e - 1)) {\r
		\r
		// tracks the length of subsequence\r
		let len = 1;\r
  \r
		// count all the elements of the subsequence\r
		// e+1, e+2,...\r
		while (S.has(e + len)) {\r
		  len++;\r
		}\r
  \r
		// get the max subsequence\r
		max = Math.max(max, len);\r
	  }\r
	}\r
  \r
	return max;\r
  }\r
\r
// ---------------------------------------------------\r
\r
// Sol 2 -> https://leetcode.com/problems/longest-consecutive-sequence/solutions/1394200/javascript-solution-using-hash-table-with-comments/\r
\r
var longestConsecutive = function(nums) {\r
    // h will store the values in the nums array that are non duplicates\r
    // max will hold the longest consecutive sequence\r
    let h = {},\r
        max = 0; \r
    \r
    \r
    // removes duplicates and adds the items to the hash table\r
    for(const num of nums) if (!h.hasOwnProperty(num)) h[num] = true; \r
    \r
    // loop around the nums array\r
    for(let i = 0; i < nums.length; i++){\r
        // the current number\r
        let num = nums[i];\r
        \r
        // keeps an internal counter for the current number \r
        let counter = 0; \r
        \r
        /* \r
            !h.hasOwnProperty(num - 1) ensures that we are looking at the start of \r
            the sequence because it will make sure the number before does not exists\r
        */\r
        if (!h.hasOwnProperty(num - 1)){\r
            \r
            // goes into while loop looking for next number \r
            while(h.hasOwnProperty(num)){\r
                // increment counter\r
                counter+= 1; \r
                // increments number to look for next sequence in hash map \r
                num+=1; \r
            };\r
        };\r
        \r
        // gets the max between the current max and what the counter has found\r
        max = Math.max(max, counter);\r
\r
    };\r
    \r
    return max;\r
};\r
\r
// ---------------------------------------------------\r
\r
// Sol 3 -> Code from Sol 2 but using logic from Sol 1\r
\r
var longestConsecutive = function(nums) {\r
    // h will store the values in the nums array that are non duplicates\r
    // max will hold the longest consecutive sequence\r
    let h = {},\r
        max = 0;\r
\r
    // removes duplicates and adds the items to the hash table\r
    for(const num of nums) if (!h.hasOwnProperty(num)) h[num] = true; \r
    \r
    // loop around the nums array\r
    for(let i = 0; i < nums.length; i++){\r
        // the current number\r
        let num = nums[i];\r
        \r
        // keeps an internal counter for the current number \r
        // let counter = 0; \r
        \r
        /* \r
            !h.hasOwnProperty(num - 1) ensures that we are looking at the start of \r
            the sequence because it will make sure the number before does not exists\r
        */\r
        if (!h.hasOwnProperty(num - 1)){\r
            let counter = 1;\r
            // goes into while loop looking for next number \r
            while(h.hasOwnProperty(num+counter)){\r
                // increment counter\r
                counter+= 1; \r
                // increments number to look for next sequence in hash map \r
                // num+=1; \r
            };\r
            max = Math.max(max, counter);\r
        };\r
        \r
        // gets the max between the current max and what the counter has found\r
        // max = Math.max(max, counter);\r
\r
    };\r
    \r
    return max;\r
};\r
\r
const nums = [0,3,7,2,5,8,4,6,0,1];\r
console.log(longestConsecutive(nums));\r
\r
\r
/**\r
 * TC = O(n);\r
 * SC = O(n)\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

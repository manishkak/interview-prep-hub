# longest Consecutive Sequence

## Problem Statement

Describe the problem statement for **longest Consecutive Sequence** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Longest Consecutive Sequence
 * Given an array of elements, find a subsequence in the array such that all the elements in the sequence are consecutive irrespective of their order - meaning its an unsorted array.
 * For an unsorted array, Set-based approach is better, as it provides O(n) time without needing to sort the array. (and Sets automatically discard duplicate elements)
 * For a sorted array, this approach runs in O(n) time and uses O(1) space, making it more efficient than the set-based approach that works for unsorted arrays. 
 *          However, if sorting is required, this method will have O(n log n) time complexity due to the sorting step.
 * */

/**
 * ChatGpt solution-
 * convert array into Set to facilitate O(1) lookups;
 * iterate through the set, for every num, check if its prev is not in the set;
 * then set currentNum to current num, and currentStreak to 1 (meaning begin from start)
 * start a while loop, and check if set has (currNum+1)->cos we're checking for consec. seq.
 * if yes, then incr both currStreak and currNum
 * longestStreak is max of longestStreak and currStreak
 */
/**
 * Complexity Analysis
Time Complexity: O(n), where n is the number of elements in the input array. Each number is processed at most twice (once when checking for the start of a sequence and once when counting the length of the sequence).
Space Complexity: O(n), where n is the number of elements in the input array, due to the space required to store the set.
 */

function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    /**
     * Storing unique elements in a Set in JavaScript is straightforward, as a Set is a collection of unique values. When you add elements to a Set, duplicates are automatically discarded, ensuring that only one instance of each element remains.
     */
    let longestStreak = 0;

    for (let num of numSet) {
        // Check if num is the "start of a sequence"
        // Only start counting if 'num' is the start of a sequence
        // so eg. for '4', it fails the 'if' because 4-1 = 3 is in the Set, so 4 cannot be the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Check for the next numbers in the sequence
            // Continue counting while the next consecutive number exists in the set
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // Update the longest streak found
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

// Example usage:
const arr = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(arr)); // Output: 4

// Solution for Sorted Array

function longestConsecutiveSorted(nums) {
    if (nums.length === 0) return 0;

    let longestStreak = 1;
    let currentStreak = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {  // Skip duplicates
            if (nums[i] === nums[i - 1] + 1) {
                currentStreak += 1;
            } else {
                longestStreak = Math.max(longestStreak, currentStreak);
                currentStreak = 1;  // Reset for a new sequence
            }
        }
    }

    // Compare for the final streak at the end of the array
    return Math.max(longestStreak, currentStreak);
}


// Sol 1 -> https://learnersbucket.com/examples/algorithms/longest-consecutive-sequence/

const LCS = (arr) => {
	//get unique elms  
	const S = new Set(arr);
	
	//store the result
	let max = 1;
	
	// iterate array elements
	for (let e of arr) {
	  
	  // if the current element begins a new seq
	  if (!S.has(e - 1)) {
		
		// tracks the length of subsequence
		let len = 1;
  
		// count all the elements of the subsequence
		// e+1, e+2,...
		while (S.has(e + len)) {
		  len++;
		}
  
		// get the max subsequence
		max = Math.max(max, len);
	  }
	}
  
	return max;
  }

// ---------------------------------------------------

// Sol 2 -> https://leetcode.com/problems/longest-consecutive-sequence/solutions/1394200/javascript-solution-using-hash-table-with-comments/

var longestConsecutive = function(nums) {
    // h will store the values in the nums array that are non duplicates
    // max will hold the longest consecutive sequence
    let h = {},
        max = 0; 
    
    
    // removes duplicates and adds the items to the hash table
    for(const num of nums) if (!h.hasOwnProperty(num)) h[num] = true; 
    
    // loop around the nums array
    for(let i = 0; i < nums.length; i++){
        // the current number
        let num = nums[i];
        
        // keeps an internal counter for the current number 
        let counter = 0; 
        
        /* 
            !h.hasOwnProperty(num - 1) ensures that we are looking at the start of 
            the sequence because it will make sure the number before does not exists
        */
        if (!h.hasOwnProperty(num - 1)){
            
            // goes into while loop looking for next number 
            while(h.hasOwnProperty(num)){
                // increment counter
                counter+= 1; 
                // increments number to look for next sequence in hash map 
                num+=1; 
            };
        };
        
        // gets the max between the current max and what the counter has found
        max = Math.max(max, counter);

    };
    
    return max;
};

// ---------------------------------------------------

// Sol 3 -> Code from Sol 2 but using logic from Sol 1

var longestConsecutive = function(nums) {
    // h will store the values in the nums array that are non duplicates
    // max will hold the longest consecutive sequence
    let h = {},
        max = 0;

    // removes duplicates and adds the items to the hash table
    for(const num of nums) if (!h.hasOwnProperty(num)) h[num] = true; 
    
    // loop around the nums array
    for(let i = 0; i < nums.length; i++){
        // the current number
        let num = nums[i];
        
        // keeps an internal counter for the current number 
        // let counter = 0; 
        
        /* 
            !h.hasOwnProperty(num - 1) ensures that we are looking at the start of 
            the sequence because it will make sure the number before does not exists
        */
        if (!h.hasOwnProperty(num - 1)){
            let counter = 1;
            // goes into while loop looking for next number 
            while(h.hasOwnProperty(num+counter)){
                // increment counter
                counter+= 1; 
                // increments number to look for next sequence in hash map 
                // num+=1; 
            };
            max = Math.max(max, counter);
        };
        
        // gets the max between the current max and what the counter has found
        // max = Math.max(max, counter);

    };
    
    return max;
};

const nums = [0,3,7,2,5,8,4,6,0,1];
console.log(longestConsecutive(nums));


/**
 * TC = O(n);
 * SC = O(n)
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

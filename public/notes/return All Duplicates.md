# return All Duplicates

## Problem Statement

Describe the problem statement for **return All Duplicates** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
var returnAllDuplicates = function(nums) {
    let toMap = {};
	// let arr = [];
    let resultToReturn = false;
    for (let i = 0; i < nums.length; i++) {

        if (toMap[nums[i]]) {
            resultToReturn = true;
			// arr.push(toMap[nums[i]]);
            console.log(toMap[nums[i]]);
        }
        toMap[nums[i]] = nums[i];
    }
	// console.log(arr);
}

returnAllDuplicates([3, 7, 2, 8,3, 5, 4, 1,7]);


/**
 * TC = O(n), only one loop
 * SC = O(1) if we just have to print the duplicate numbers like console.log; if we need to return an array of duplicate values then add line 3, 9 and 14 above; in that case SC is O(n) where n is the size of array 'arr'.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

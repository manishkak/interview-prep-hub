# contains Duplicate

## Problem Statement

Describe the problem statement for **contains Duplicate** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * In JavaScript, an object consists of key-value pairs where keys are similar to indexes in an array and 
 * are unique. If one tries to add a duplicate key with a different value, then the previous value for that
 *  key is overwritten by the new value. We use this concept to compare the and find the duplicates.
 */

// SOLUTION 1->

function containsDuplicate(nums) {
  let map = {}
  for(let i = 0; i< nums.length; i++) {
    if(map[nums[i]]) {
      return 'duplicate found'
    } else {
      map[nums[i]] = true
    }
  }
  return 'no duplicates'
}

console.log(containsDuplicate([-2,-4,-1,-2]))

/**
 * TC = O(n), 
 * SC = O(n), 
 */

// SOLUTION 2-> (both 1 & 2 are same, just written differently; if values found in the hashMap then update the flag and say yes array has duplicate, otherwise return false)

var containsDuplicate = function(nums) {
    let toMap = {};
    let resultToReturn = 0;
    for (let i = 0; i < nums.length; i++) {

        toMap[nums[i]] = (toMap[nums[i]]|0)+1;

        if(toMap[nums[i]] > 1) {
            resultToReturn = 1;
            console.log(true);  // contains duplicate
        }
    }


        if (resultToReturn == 0) {
            console.log(false); // no duplicate
        }
}

containsDuplicate([1,2,8,3,7]);

/**
 * TC = O(n), 
 * SC = O(n), 
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

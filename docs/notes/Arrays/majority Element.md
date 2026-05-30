# majority Element

## Problem Statement

Describe the problem statement for **majority Element** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem: Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */

function findMajorityElement(nums) {
    let half = nums.length/2;
    let hashMap = {};
    for(let i = 0; i<nums.length; i++) {
        // create a frequency map
        hashMap[nums[i]] = (hashMap[nums[i]] | 0) + 1;
        if(hashMap[nums[i]] > half) {
            return nums[i];
        }
    }
}

/**
 * TC = O(n), hashMap is used and there is only one loop so 'linear' TC
 * SC = O(n), SC for a hashMap is linear
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

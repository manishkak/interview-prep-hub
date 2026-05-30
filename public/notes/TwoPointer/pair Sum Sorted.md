# pair Sum Sorted

## Problem Statement

Describe the problem statement for **pair Sum Sorted** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// pair sum- sorted
// Problem: Given a sorted array and a target, return indices of two numbers that add up to the target.
// Example:
// Input: arr = [1, 2, 4, 6, 10], target = 8
// Output: [1, 3] (because 2 + 6 = 8)

let arr = [2,2,3]
let target = 5
let left = 0;
let right = arr.length-1
// console.log(right)
console.log(paisSumSorted(arr, target))

function paisSumSorted(arr, target) {
    while(left < right) {
        sum = arr[left] + arr[right]
        if(sum < target)    
            left++
        else if(sum > target)
            right--
        else
            return [left,right]
    }
    
    return []
}
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

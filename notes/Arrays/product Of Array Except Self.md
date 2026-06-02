# product Of Array Except Self

## Problem Statement

Given an integer array nums of length n, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i], without using division.

## Examples

- Input: [1,2,3,4]
  Output: [24,12,8,6]

## Approach

- Use left and right running products. First pass computes product of values to the left of each index, second pass multiplies by product of values to the right.

## Solution

```js
function productExceptSelf(nums) {
  const n = nums.length;
  const res = new Array(n).fill(1);
  let leftProd = 1;
  for (let i = 0; i < n; i++) {
    res[i] = leftProd;
    leftProd *= nums[i];
  }
  let rightProd = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= rightProd;
    rightProd *= nums[i];
  }
  return res;
}

console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
```

## Time Complexity

- O(n)

## Space Complexity

- O(1) extra space (output excluded)

## Notes

- Handles zeros correctly by constructing left/right products separately.

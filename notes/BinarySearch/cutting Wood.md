# cutting Wood

## Problem Statement

Given an array of wood heights and a required amount k of wood to cut, find the maximum height at which to cut the wood pieces such that the total wood harvested is at least k units. Cutting at height h from a piece of height H yields (H - h) wood.

## Examples

- Input: heights = [4, 42, 40, 26, 46], k = 20
  Output: 36 (cutting at 36: (42-36) + (40-36) + (46-36) = 6 + 4 + 10 = 20)
- Input: heights = [1, 2, 3], k = 5
  Output: 1 (cutting at 1: (2-1) + (3-1) = 1 + 2 = 3, cutting at 0: 2 + 3 = 5)

## Approach

- Binary search the answer (saw height) from 0 to max(heights).
- For each candidate height, calculate total wood harvested.
- If wood >= k, try a higher height (go right).
- If wood < k, try a lower height (go left).
- Track the maximum valid height found.

## Solution

```js
function maxSawHeight(heights, k) {
  let left = 0;
  let right = Math.max(...heights);
  let result = 0;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let wood = 0;
    
    for (let h of heights) {
      wood += Math.max(0, h - mid);
    }
    
    if (wood >= k) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return result;
}

const heights = [4, 42, 40, 26, 46];
console.log(maxSawHeight(heights, 20)); // 36
```

## Time Complexity

- O(n log m) where n = number of trees, m = maximum height; binary search O(log m), each check O(n)

## Space Complexity

- O(1) - only constant variables

## Notes

- Binary search on the answer: the search space is possible saw heights.
- If no height yields k wood, return 0.
- Greedy verification: higher heights always produce less or equal wood.
- Problem variant: cut wood pieces to exact length (harder).



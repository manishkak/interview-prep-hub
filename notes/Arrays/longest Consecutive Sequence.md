# longest Consecutive Sequence

## Problem Statement

Given an unsorted array of integers, return the length of the longest consecutive elements sequence.

## Examples

- Input: [100,4,200,1,3,2]
  Output: 4

## Approach

- Use a set for O(1) lookups.
- For each number, only start a sequence if num-1 is not in the set.
- Count consecutive numbers from that starting point.

## Solution
```js
function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let longestStreak = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

console.log(longestConsecutive([100,4,200,1,3,2])); // 4
```

## Time Complexity

- O(n)

## Space Complexity

- O(n)

## Notes

- Use the set to skip non-starting values.
- A sequence starts when num-1 is absent.



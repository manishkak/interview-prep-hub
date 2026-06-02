const n=`\uFEFF# first Bad Version

## Problem Statement

You have n versions numbered 1 to n. Some early versions are good, then from some version onwards all versions are bad. Find the first bad version using minimum API calls to isBadVersion(). Each call to API takes O(1) time but is expensive.

## Examples

- Input: n = 10, firstBadVersion = 4
  Output: 4 (versions 1-3 good, 4-10 bad)
- Input: n = 5, firstBadVersion = 1
  Output: 1 (all versions are bad)

## Approach

- Use binary search to narrow down the first bad version.
- If mid is bad, first bad is at mid or left (set right = mid).
- If mid is good, first bad is to the right (set left = mid + 1).
- Continue until finding the boundary between good and bad versions.

## Solution

\`\`\`js
function firstBadVersion(n, isBadVersion) {
  let left = 1;
  let right = n;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  
  return left;
}

// Test with mock API
let badVersion = 4;
const isBadVersion = (v) => v >= badVersion;

console.log(firstBadVersion(10, isBadVersion)); // 4
\`

## Time Complexity

- O(log n) - binary search on version range 1 to n

## Space Complexity

- O(1) - only pointers and temporary variables

## Notes

- Key: use left < right (not <=) to exit when left == right (answer found).
- This finds the leftmost bad version efficiently.
- API calls minimized: O(log n) calls instead of O(n) linear search.
- Pattern: finding boundary between two states (good/bad, valid/invalid).\r
\r
\r
`;export{n as default};

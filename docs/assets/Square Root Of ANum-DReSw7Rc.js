const n=`\uFEFF# Square Root Of ANum

## Problem Statement

Given a non-negative integer x, compute the integer square root (floor of sqrt(x)). Return the largest integer whose square is less than or equal to x. Must solve in O(log x) time.

## Examples

- Input: x = 8
  Output: 2 (2² = 4 ≤ 8, but 3² = 9 > 8)
- Input: x = 9
  Output: 3 (3² = 9 = 9)
- Input: x = 1
  Output: 1

## Approach

- Binary search in range [0, x] for the square root.
- If mid² = x, return mid immediately.
- If mid² < x, save mid as candidate and search right for potentially larger root.
- If mid² > x, search left for smaller values.
- Return the largest integer whose square doesn't exceed x.

## Solution

\`\`\`js
function mySqrt(x) {
  if (x < 2) return x;
  
  let left = 2, right = x;
  let result = 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;
    
    if (square === x) {
      return mid;
    } else if (square < x) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return result;
}

console.log(mySqrt(8)); // 2
console.log(mySqrt(9)); // 3
console.log(mySqrt(1)); // 1
\`

## Time Complexity

- O(log x) - binary search on range [0, x]

## Space Complexity

- O(1) - only pointers and result variable

## Notes

- Optimization: start with left = 2 (since sqrt of 0, 1 are themselves).
- Save candidate when mid² < x and continue searching right.
- Handle perfect squares immediately for early exit.
- Avoid overflow: use mid * mid instead of Math.pow(mid, 2).
- Related: binary search for square root with floating point precision.\r
\r
\r
`;export{n as default};

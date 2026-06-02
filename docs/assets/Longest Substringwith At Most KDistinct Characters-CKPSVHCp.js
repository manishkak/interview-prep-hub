const n=`\uFEFF# Longest Substringwith At Most KDistinct Characters

## Problem Statement

Given a string s and an integer k, find the length of the longest substring that contains at most k distinct characters.

## Examples

- Input: s =  eceba, k = 2
  Output: 3
- Input: s = aa, k = 1
  Output: 2

## Approach

- Use a sliding window and a map of character counts.
- Expand the window until the distinct count exceeds k.
- Shrink from the left until the window is valid again.

## Solution

\`js
function lengthOfLongestSubstringKDistinct(s, k) {
  if (k === 0) return 0;
  const count = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    count.set(ch, (count.get(ch) ; 0) + 1);
    while (count.size > k) {
      const leftChar = s[left];
      count.set(leftChar, count.get(leftChar) - 1);
      if (count.get(leftChar) === 0) {
        count.delete(leftChar);
      }
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstringKDistinct(eceba, 2)); // 3
console.log(lengthOfLongestSubstringKDistinct(aa, 1)); // 2
\`

## Time Complexity

- O(n)

## Space Complexity

- O(k)

## Notes

- The window expands until there are more than k distinct characters.
- The map stores counts for the current window.\r
`;export{n as default};

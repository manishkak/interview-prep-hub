# Longest Substring Without Repeating Characters

## Problem Statement
Given a string `s`, find the length of the longest substring without repeating characters.

## Examples

```txt
Input: s = "abcabcbb"
Output: 3
Explanation: "abc"
```

## Approach
Use a sliding window with a map to track the last index of each character. Expand the window and move the left boundary when duplicates appear.

## Solution

```ts
function lengthOfLongestSubstring(s: string): number {
  const lastIndex = new Map<string, number>()
  let left = 0
  let maxLen = 0

  for (let right = 0; right < s.length; right += 1) {
    const char = s[right]
    if (lastIndex.has(char) && lastIndex.get(char)! >= left) {
      left = lastIndex.get(char)! + 1
    }
    lastIndex.set(char, right)
    maxLen = Math.max(maxLen, right - left + 1)
  }

  return maxLen
}
```

## Time Complexity
O(n)

## Space Complexity
O(min(n, m)) where m is the size of the character set.

## Notes
- Keep the window boundaries clear.
- Use the last seen index to skip duplicate characters reliably.

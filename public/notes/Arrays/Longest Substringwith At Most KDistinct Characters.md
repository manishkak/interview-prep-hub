# Longest Substringwith At Most KDistinct Characters

## Problem Statement

Describe the problem statement for **Longest Substringwith At Most KDistinct Characters** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Longest Substring with At Most K Distinct Characters (Sliding Window + Hash Map)

/**
 * Given a string s and an integer k,
 *      return the length of the longest substring that contains at most k distinct characters.
*/

/**
 * Approach: Sliding Window + Hash Map
Idea:
    - Use a window (left → right) that contains at most k distinct characters
    - Expand the window to the right
    - Shrink the window from the left when distinct count exceeds k
    - Keep track of the max window size
*/

function lengthOfLongestSubstringKDistinct(s, k) {
    if (k === 0) return 0;
  
    let left = 0;
    let maxLen = 0;
    const map = new Map();
  
    for (let right = 0; right < s.length; right++) {
      const char = s[right];
      map.set(char, (map.get(char) || 0) + 1); // this maps the character to the num of occurences inside the current window
      // if char is not present in map, then map char with 0, otherwise add 1 to the num (if it is present 3 times, then 3 + 1 = 4)
  
      // Shrink window if distinct chars > k
      // meaning if the number of distinct characters exceeds k (map.size will check the num of distinct characters cos in a Map, characters are mapped with num of occurence, and no character can be present twice in the keys, but there can be 2,3,4 in the value), we must shrink the window from the left (obviously)
      while (map.size > k) {
        const leftChar = s[left];
        map.set(leftChar, map.get(leftChar) - 1); // Reduce the count of the character at left (since it's leaving the window)
  
        // If a character's count drops to 0, remove it from the map
        //      (We care only about distinct characters, so zero-frequency ones don’t count)
        if (map.get(leftChar) === 0) {
          map.delete(leftChar);
        }
        left++; // Move the left pointer rightward to shrink the window
      }
  
    // Update maxLen
      maxLen = Math.max(maxLen, right - left + 1);
    }
  
    return maxLen;
}
/*
Dry run on s = "eceba", k = 2

Initial: left = 0, maxLen = 0, count = {}

right = 0, ch = 'e'

count = { e:1 } → size = 1 (≤ 2)

maxLen = max(0, 0-0+1) = 1 → window = "e"

right = 1, ch = 'c'

count = { e:1, c:1 } → size = 2 (≤ 2)

maxLen = max(1, 1-0+1) = 2 → window = "ec"

right = 2, ch = 'e'

count = { e:2, c:1 } → size = 2 (≤ 2)

maxLen = max(2, 2-0+1) = 3 → window = "ece"

right = 3, ch = 'b'

count = { e:2, c:1, b:1 } → size = 3 (> 2) → shrink:

leftCh = 'e' (left=0) → decrement e:1, not zero → left=1 → count size still 3

leftCh = 'c' (left=1) → decrement c:0 → delete c → left=2 → now count = { e:1, b:1 } size = 2 (≤2), stop

maxLen = max(3, 3-2+1) = 3 → window = "eb"

right = 4, ch = 'a'

count = { e:1, b:1, a:1 } → size = 3 (>2) → shrink:

leftCh = 'e' (left=2) → decrement e:0 → delete e → left=3 → count now { b:1, a:1 } size = 2

maxLen = max(3, 4-3+1) = 3 → window = "ba"

End → return 3.
*/

/**
 * Time & Space:
Time: O(n)
Space: O(k) → max size of map at any time
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

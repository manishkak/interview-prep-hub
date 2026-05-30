const n=`# Longest Substringwith At Most KDistinct Characters

## Problem Statement

Describe the problem statement for **Longest Substringwith At Most KDistinct Characters** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Longest Substring with At Most K Distinct Characters (Sliding Window + Hash Map)\r
\r
/**\r
 * Given a string s and an integer k,\r
 *      return the length of the longest substring that contains at most k distinct characters.\r
*/\r
\r
/**\r
 * Approach: Sliding Window + Hash Map\r
Idea:\r
    - Use a window (left → right) that contains at most k distinct characters\r
    - Expand the window to the right\r
    - Shrink the window from the left when distinct count exceeds k\r
    - Keep track of the max window size\r
*/\r
\r
function lengthOfLongestSubstringKDistinct(s, k) {\r
    if (k === 0) return 0;\r
  \r
    let left = 0;\r
    let maxLen = 0;\r
    const map = new Map();\r
  \r
    for (let right = 0; right < s.length; right++) {\r
      const char = s[right];\r
      map.set(char, (map.get(char) || 0) + 1); // this maps the character to the num of occurences inside the current window\r
      // if char is not present in map, then map char with 0, otherwise add 1 to the num (if it is present 3 times, then 3 + 1 = 4)\r
  \r
      // Shrink window if distinct chars > k\r
      // meaning if the number of distinct characters exceeds k (map.size will check the num of distinct characters cos in a Map, characters are mapped with num of occurence, and no character can be present twice in the keys, but there can be 2,3,4 in the value), we must shrink the window from the left (obviously)\r
      while (map.size > k) {\r
        const leftChar = s[left];\r
        map.set(leftChar, map.get(leftChar) - 1); // Reduce the count of the character at left (since it's leaving the window)\r
  \r
        // If a character's count drops to 0, remove it from the map\r
        //      (We care only about distinct characters, so zero-frequency ones don’t count)\r
        if (map.get(leftChar) === 0) {\r
          map.delete(leftChar);\r
        }\r
        left++; // Move the left pointer rightward to shrink the window\r
      }\r
  \r
    // Update maxLen\r
      maxLen = Math.max(maxLen, right - left + 1);\r
    }\r
  \r
    return maxLen;\r
}\r
/*\r
Dry run on s = "eceba", k = 2\r
\r
Initial: left = 0, maxLen = 0, count = {}\r
\r
right = 0, ch = 'e'\r
\r
count = { e:1 } → size = 1 (≤ 2)\r
\r
maxLen = max(0, 0-0+1) = 1 → window = "e"\r
\r
right = 1, ch = 'c'\r
\r
count = { e:1, c:1 } → size = 2 (≤ 2)\r
\r
maxLen = max(1, 1-0+1) = 2 → window = "ec"\r
\r
right = 2, ch = 'e'\r
\r
count = { e:2, c:1 } → size = 2 (≤ 2)\r
\r
maxLen = max(2, 2-0+1) = 3 → window = "ece"\r
\r
right = 3, ch = 'b'\r
\r
count = { e:2, c:1, b:1 } → size = 3 (> 2) → shrink:\r
\r
leftCh = 'e' (left=0) → decrement e:1, not zero → left=1 → count size still 3\r
\r
leftCh = 'c' (left=1) → decrement c:0 → delete c → left=2 → now count = { e:1, b:1 } size = 2 (≤2), stop\r
\r
maxLen = max(3, 3-2+1) = 3 → window = "eb"\r
\r
right = 4, ch = 'a'\r
\r
count = { e:1, b:1, a:1 } → size = 3 (>2) → shrink:\r
\r
leftCh = 'e' (left=2) → decrement e:0 → delete e → left=3 → count now { b:1, a:1 } size = 2\r
\r
maxLen = max(3, 4-3+1) = 3 → window = "ba"\r
\r
End → return 3.\r
*/\r
\r
/**\r
 * Time & Space:\r
Time: O(n)\r
Space: O(k) → max size of map at any time\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

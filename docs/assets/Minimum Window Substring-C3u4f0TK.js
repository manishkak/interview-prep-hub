const n=`# Minimum Window Substring

## Problem Statement

Describe the problem statement for **Minimum Window Substring** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Minimum Window Substring\r
\r
/**\r
 * Problem Statement:\r
        - Given two strings s and t, return the smallest substring in s that contains all the characters of t (including duplicates).\r
        - If there is no such substring, return an empty string "".\r
*/\r
\r
/**\r
 * Input: s = "ADOBECODEBANC", t = "ABC"\r
 * Output: "BANC"\r
 */\r
\r
/*\r
We’re looking for the minimum-length window in s that contains all chars from t.\r
                - As we move right, we expand the window to include all required chars.\r
                - When valid (contains all t chars), we shrink from left to find the smallest possible valid window.\r
👉 This is a variable-size sliding window problem.\r
*/\r
\r
/*Quick variable summary (so you don’t forget):\r
need: freq map for t (what we must have).\r
window: freq map for current window in s.\r
needCount: how many distinct chars t requires.\r
have: how many of those distinct chars are currently satisfied in window.\r
left, right: window boundaries.\r
minLen, res: best window tracking.*/\r
\r
// Step-by-step approach\r
// 1️⃣ Count the required characters\r
// Use a frequency map of characters in t (because duplicates matter):\r
// t = "ABC" → need = { A:1, B:1, C:1 }\r
\r
// 2️⃣ Use two pointers (left, right) to slide over s\r
// Expand right to include more characters.\r
// Track how many required characters are fulfilled in the current window.\r
// When all are fulfilled, try to shrink left to minimize the window.\r
\r
// 3️⃣ Keep track of the smallest valid window\r
\r
function minWindow(s, t) {\r
  if (t.length > s.length) return "";\r
\r
  const need = new Map();\r
  for (let char of t) need.set(char, (need.get(char) || 0) + 1);\r
\r
  const window = new Map();\r
  let have = 0;\r
  const needCount = need.size;\r
\r
  let left = 0;\r
  let minLen = Infinity;\r
  let res = [-1, -1];\r
\r
  for (let right = 0; right < s.length; right++) {\r
    const c = s[right];\r
    window.set(c, (window.get(c) || 0) + 1);\r
\r
    // if char count matches what we need\r
    if (need.has(c) && window.get(c) === need.get(c)) {\r
      have++;\r
    }\r
\r
    // when window valid, try to shrink\r
    while (have === needCount) {\r
      // update smallest window\r
      if (right - left + 1 < minLen) {\r
        minLen = right - left + 1;\r
        res = [left, right];\r
      }\r
\r
      // shrink from left\r
      const leftChar = s[left];\r
      window.set(leftChar, window.get(leftChar) - 1);\r
      if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {\r
        have--;\r
      }\r
      left++;\r
    }\r
  }\r
\r
  const [start, end] = res;\r
  return minLen === Infinity ? "" : s.slice(start, end + 1);\r
}\r
\r
console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

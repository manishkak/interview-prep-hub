const n=`# Longest Substring Without Repeating Characters\r
\r
## Problem Statement\r
Given a string \`s\`, find the length of the longest substring without repeating characters.\r
\r
## Examples\r
\r
\`\`\`txt\r
Input: s = "abcabcbb"\r
Output: 3\r
Explanation: "abc"\r
\`\`\`\r
\r
## Approach\r
Use a sliding window with a map to track the last index of each character. Expand the window and move the left boundary when duplicates appear.\r
\r
## Solution\r
\r
\`\`\`ts\r
function lengthOfLongestSubstring(s: string): number {\r
  const lastIndex = new Map<string, number>()\r
  let left = 0\r
  let maxLen = 0\r
\r
  for (let right = 0; right < s.length; right += 1) {\r
    const char = s[right]\r
    if (lastIndex.has(char) && lastIndex.get(char)! >= left) {\r
      left = lastIndex.get(char)! + 1\r
    }\r
    lastIndex.set(char, right)\r
    maxLen = Math.max(maxLen, right - left + 1)\r
  }\r
\r
  return maxLen\r
}\r
\`\`\`\r
\r
## Time Complexity\r
O(n)\r
\r
## Space Complexity\r
O(min(n, m)) where m is the size of the character set.\r
\r
## Notes\r
- Keep the window boundaries clear.\r
- Use the last seen index to skip duplicate characters reliably.\r
`;export{n as default};

const n=`# Longest Palindromic Substring

## Problem Statement

Describe the problem statement for **Longest Palindromic Substring** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
Perfect — let’s go line-by-line 👇\r
We’ll break down the **JS expand-around-center solution** for *Longest Palindromic Substring* in the simplest way possible.\r
\r
---\r
\r
### 🧩 The Code\r
\r
\`\`\`js\r
function longestPalindrome(s) {\r
  if (s.length < 2) return s;\r
\r
  let start = 0, end = 0;\r
\r
  function expandAroundCenter(left, right) {\r
    while (left >= 0 && right < s.length && s[left] === s[right]) {\r
      left--;\r
      right++;\r
    }\r
    return [left + 1, right - 1];\r
  }\r
\r
  for (let i = 0; i < s.length; i++) {\r
    let [l1, r1] = expandAroundCenter(i, i);\r
    let [l2, r2] = expandAroundCenter(i, i + 1);\r
\r
    if (r1 - l1 > end - start) [start, end] = [l1, r1];\r
    if (r2 - l2 > end - start) [start, end] = [l2, r2];\r
  }\r
\r
  return s.substring(start, end + 1);\r
}\r
\`\`\`\r
\r
---\r
\r
### 🧠 Let’s explain line-by-line\r
\r
#### Step 1:\r
\r
\`\`\`js\r
if (s.length < 2) return s;\r
\`\`\`\r
\r
If the string has 0 or 1 characters, it’s **already a palindrome**, so just return it.\r
\r
---\r
\r
#### Step 2:\r
\r
\`\`\`js\r
let start = 0, end = 0;\r
\`\`\`\r
\r
We’ll store the **start** and **end indices** of the *longest palindrome* found so far.\r
\r
Initially, the longest palindrome is just the first character.\r
\r
---\r
\r
#### Step 3: helper function\r
\r
\`\`\`js\r
function expandAroundCenter(left, right) {\r
  while (left >= 0 && right < s.length && s[left] === s[right]) {\r
    left--;\r
    right++;\r
  }\r
  return [left + 1, right - 1];\r
}\r
\`\`\`\r
\r
🧩 What this does:\r
\r
* We try to **expand outward** as long as the characters at both ends are equal.\r
* Example: \`"aba"\`\r
\r
  * left = 1, right = 1 (center \`'b'\`)\r
  * expands → left = 0, right = 2, because \`s[0] == s[2] == 'a'\`\r
  * stops when we go out of bounds or mismatch\r
* When we stop, \`left\` and \`right\` are **one step outside** the palindrome.\r
\r
  * So we return \`[left + 1, right - 1]\` → actual palindrome bounds.\r
\r
---\r
\r
#### Step 4:\r
\r
\`\`\`js\r
for (let i = 0; i < s.length; i++) {\r
\`\`\`\r
\r
We will treat each character (and each *gap* between characters) as a potential **center** of a palindrome.\r
\r
---\r
\r
#### Step 5:\r
\r
\`\`\`js\r
let [l1, r1] = expandAroundCenter(i, i);\r
let [l2, r2] = expandAroundCenter(i, i + 1);\r
\`\`\`\r
\r
We check **two cases** at each index:\r
\r
1. \`(i, i)\` → **odd-length** palindrome (like \`"aba"\`)\r
2. \`(i, i + 1)\` → **even-length** palindrome (like \`"abba"\`)\r
\r
---\r
\r
#### Step 6:\r
\r
\`\`\`js\r
if (r1 - l1 > end - start) [start, end] = [l1, r1];\r
if (r2 - l2 > end - start) [start, end] = [l2, r2];\r
\`\`\`\r
\r
After each expansion:\r
\r
* We calculate the palindrome’s length (\`r - l\`)\r
* If it’s longer than the previously stored one, update \`start\` and \`end\`.\r
\r
---\r
\r
#### Step 7:\r
\r
\`\`\`js\r
return s.substring(start, end + 1);\r
\`\`\`\r
\r
Extract and return the substring between \`start\` and \`end\` (inclusive).\r
\r
---\r
\r
### 🧮 Dry Run Example\r
\r
\`s = "babad"\`\r
\r
#### i = 0\r
\r
* Odd: expand(0,0) → \`"b"\`\r
* Even: expand(0,1) → \`""\`\r
* longest = \`"b"\`\r
\r
#### i = 1\r
\r
* Odd: expand(1,1) → \`"bab"\`\r
* Even: expand(1,2) → \`""\`\r
* longest = \`"bab"\`\r
\r
#### i = 2\r
\r
* Odd: expand(2,2) → \`"aba"\`\r
* Even: expand(2,3) → \`""\`\r
* \`"aba"\` length 3 = \`"bab"\` length 3 → keep first found \`"bab"\`\r
\r
#### i = 3, 4\r
\r
* Palindromes are smaller (\`"a"\`, \`"d"\`)\r
\r
✅ **Final output:** \`"bab"\`\r
\r
---\r
\r
### ⏱️ Complexity\r
\r
| Metric    | Complexity                          |\r
| --------- | ----------------------------------- |\r
| **Time**  | O(n²) – we expand from every center |\r
| **Space** | O(1) – no extra structures          |\r
\r
---\r
\r
Would you like me to show a **visual expansion trace** for \`"babad"\` (with arrows showing how \`left\` and \`right\` move step-by-step)? It makes it click instantly.\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

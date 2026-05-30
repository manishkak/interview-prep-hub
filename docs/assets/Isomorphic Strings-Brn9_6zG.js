const n=`# Isomorphic Strings

## Problem Statement

Describe the problem statement for **Isomorphic Strings** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem Statement:\r
    Given two strings s and t, determine if they are isomorphic.\r
    Two strings are isomorphic if the characters in s can be replaced to get t.\r
\r
    Each character in s must map to a unique character in t — but the order must stay.\r
\r
    Input: s = "egg", t = "add"\r
    Output: true\r
    Input: s = "foo", t = "bar"\r
    Output: false\r
    Input: s = "paper", t = "title"\r
    Output: true; but paepr and title are not isomorphic cos the order is wrong.\r
 */\r
/**\r
 * 🧠 Steps:\r
Step 1: If s.length !== t.length, return false\r
Step 2: Create two maps: sToT, tToS\r
Step 3: Loop through the strings\r
If s[i] already mapped to something different → return false\r
If t[i] already mapped to something different → return false\r
Else, create both mappings\r
Step 4: If loop completes, return true\r
 */\r
// ✅ JavaScript Code:\r
\r
function isIsomorphic(s, t) {\r
  if (s.length !== t.length) return false;\r
\r
  const mapST = new Map(); // s → t\r
  const mapTS = new Map(); // t → s\r
\r
  for (let i = 0; i < s.length; i++) {\r
    const charS = s[i];\r
    const charT = t[i];\r
\r
    // Check existing mapping s → t\r
    if (mapST.has(charS) && mapST.get(charS) !== charT) {\r
      return false;\r
    }\r
\r
    // Check existing mapping t → s\r
    if (mapTS.has(charT) && mapTS.get(charT) !== charS) {\r
      return false;\r
    }\r
\r
    // Create the mapping\r
    mapST.set(charS, charT);\r
    mapTS.set(charT, charS);\r
  }\r
\r
  return true;\r
}\r
\r
\r
// 🧪 Test Cases:\r
\r
console.log(isIsomorphic("egg", "add"));    // true\r
console.log(isIsomorphic("foo", "bar"));    // false\r
console.log(isIsomorphic("paper", "title")); // true\r
console.log(isIsomorphic("paepr", "title")); // false (your case)\r
\r
// ⏱️ Time & Space Complexity\r
\r
// Time:** O(n) — one pass through strings\r
// Space:** O(n) — for two hash maps (one-to-one mapping)
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

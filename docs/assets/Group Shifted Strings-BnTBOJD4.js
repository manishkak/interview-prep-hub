const n=`# Group Shifted Strings

## Problem Statement

Describe the problem statement for **Group Shifted Strings** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Group Shifted Strings\r
\r
/**\r
 * Given a list of strings, group all shifted strings together.\r
 * Two strings are considered shifted if:\r
 *      The difference between every adjacent character is the same.\r
 *      Wraparound from 'z' → 'a' is allowed.\r
 */\r
// We’ll use a hash map where the key is a string's "shift pattern", and the value is a list of strings with that same pattern.\r
\r
function groupStrings(strings) {\r
    const map = new Map();\r
  \r
    for (let str of strings) {\r
      let key = "";\r
  \r
      for (let i = 1; i < str.length; i++) {\r
        // Difference between current and previous char (mod 26)\r
        const diff = (str.charCodeAt(i) - str.charCodeAt(i - 1) + 26) % 26;\r
        key += diff + ",";\r
      }\r
  \r
      // Group by shift pattern\r
      if (!map.has(key)) map.set(key, []);\r
      map.get(key).push(str);\r
    }\r
    return Array.from(map.values());\r
}\r
/**\r
## 📦 Input:\r
\r
\`\`\`js\r
strings = ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]\r
\`\`\`\r
\r
We use a \`Map\` where:\r
\r
* **Key** = the shift pattern (e.g., \`"1,1,"\`)\r
* **Value** = array of strings with that pattern\r
\r
---\r
\r
## 🧮 Step-by-Step Dry Run:\r
\r
### 🔹 1. \`"abc"\`\r
\r
Loop from i=1:\r
\r
* \`'b' - 'a'\` → \`(98 - 97 + 26) % 26 = 1\`\r
* \`'c' - 'b'\` → \`(99 - 98 + 26) % 26 = 1\`\r
\r
Key = \`"1,1,"\`\r
Map:\r
\r
\`\`\`js\r
{ "1,1,": ["abc"] }\r
\`\`\`\r
\r
---\r
\r
### 🔹 2. \`"bcd"\`\r
\r
* \`'c' - 'b'\` → 1\r
* \`'d' - 'c'\` → 1\r
\r
Key = \`"1,1,"\`\r
Map:\r
\r
\`\`\`js\r
{ "1,1,": ["abc", "bcd"] }\r
\`\`\`\r
\r
---\r
\r
### 🔹 3. \`"acef"\`\r
\r
* \`'c' - 'a'\` → 2\r
* \`'e' - 'c'\` → 2\r
* \`'f' - 'e'\` → 1\r
\r
Key = \`"2,2,1,"\`\r
Map:\r
\r
\`\`\`js\r
{\r
  "1,1,": ["abc", "bcd"],\r
  "2,2,1,": ["acef"]\r
}\r
\`\`\`\r
\r
---\r
\r
### 🔹 4. \`"xyz"\`\r
\r
* \`'y' - 'x'\` → 1\r
* \`'z' - 'y'\` → 1\r
\r
Key = \`"1,1,"\`\r
Map:\r
\r
\`\`\`js\r
{\r
  "1,1,": ["abc", "bcd", "xyz"],\r
  "2,2,1,": ["acef"]\r
}\r
\`\`\`\r
\r
---\r
\r
### 🔹 5. \`"az"\`\r
\r
* \`'z' - 'a'\` → \`(122 - 97 + 26) % 26 = 25\`\r
\r
Key = \`"25,"\`\r
Map:\r
\r
\`\`\`js\r
{\r
  "1,1,": ["abc", "bcd", "xyz"],\r
  "2,2,1,": ["acef"],\r
  "25,": ["az"]\r
}\r
\`\`\`\r
\r
---\r
\r
### 🔹 6. \`"ba"\`\r
\r
* \`'a' - 'b'\` → \`(97 - 98 + 26) % 26 = 25\`\r
\r
Key = \`"25,"\`\r
Map:\r
\r
\`\`\`js\r
{\r
  "1,1,": ["abc", "bcd", "xyz"],\r
  "2,2,1,": ["acef"],\r
  "25,": ["az", "ba"]\r
}\r
\`\`\`\r
\r
---\r
\r
### 🔹 7. \`"a"\`\r
\r
Single letter → no differences → key = \`""\`\r
\r
Map:\r
\r
\`\`\`js\r
{\r
  "1,1,": ["abc", "bcd", "xyz"],\r
  "2,2,1,": ["acef"],\r
  "25,": ["az", "ba"],\r
  "": ["a"]\r
}\r
\`\`\`\r
\r
---\r
\r
### 🔹 8. \`"z"\`\r
\r
Same — single letter → key = \`""\`\r
\r
Final Map:\r
\r
\`\`\`js\r
{\r
  "1,1,": ["abc", "bcd", "xyz"],\r
  "2,2,1,": ["acef"],\r
  "25,": ["az", "ba"],\r
  "": ["a", "z"]\r
}\r
\`\`\`\r
\r
---\r
\r
### ✅ Output:\r
\r
\`\`\`js\r
[\r
  ["abc", "bcd", "xyz"],\r
  ["acef"],\r
  ["az", "ba"],\r
  ["a", "z"]\r
]\r
\`\`\`\r
\r
 */\r
\r
// Input = ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]\r
\r
/**\r
[\r
  ["abc", "bcd", "xyz"],\r
  ["acef"],\r
  ["az", "ba"],\r
  ["a", "z"]\r
]\r
 */\r
\r
/**\r
 * Time & Space Complexity:\r
 * Time: O(N * L)\r
        N = number of strings, L = average length of each string\r
 * Space: O(N * L) → for storing the map and final groups\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

const r=`# longest Common Prefix

## Problem Statement

Describe the problem statement for **longest Common Prefix** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// longest common prefix\r
\r
// The **Longest Common Prefix** problem asks you to find the longest common prefix string among an array of strings. If there is no common prefix, return an empty string.\r
\r
// ### Problem Statement:\r
// Given an array of strings, find the longest common prefix among them.\r
\r
// ### Example:\r
/*\`\`\`js\r
	Input: strs = ["flower", "flow", "flight"]\r
	Output: "fl"\r
\`\`\`*/\r
\r
// ### Approach:\r
/*\r
1. If the input array is empty, return an empty string.\r
2. Assume the first string in the array as the prefix.\r
3. Iterate through the remaining strings and check if the current string starts with the prefix.\r
4. If the string doesn't start with the prefix, gradually reduce the prefix (by chopping off characters from the end) until it becomes a prefix of the current string.\r
5. Continue this process for all strings in the array.\r
6. If at any point the prefix becomes an empty string, return it.\r
*/\r
\r
// ### JavaScript Code:\r
\r
\r
function longestCommonPrefix(strs) {\r
    if (strs.length === 0) return "";\r
\r
    // Start with the first string as the prefix\r
    let prefix = strs[0];\r
\r
    // Iterate over the rest of the strings\r
    for (let i = 1; i < strs.length; i++) {\r
        // Keep reducing the prefix until it matches the start of strs[i]\r
        while (strs[i].indexOf(prefix) !== 0) {\r
            prefix = prefix.substring(0, prefix.length - 1);\r
            // If prefix becomes empty, return it\r
            if (prefix === "") return "";\r
        }\r
    }\r
\r
    return prefix;\r
}\r
\r
\r
// ### Explanation:\r
/*\r
	1. **Initial Prefix**: Start by assuming that the first string (\`strs[0]\`) is the common prefix.\r
	2. **Check for Each String**: For each subsequent string, check if it starts with the current prefix.\r
	3. **Reduce the Prefix**: If a string does not start with the current prefix, reduce the prefix by one character at a time from the end until it matches or becomes an empty string.\r
	4. **Return**: After checking all the strings, return the longest common prefix found.\r
*/\r
\r
// ### Example Walkthrough:\r
/*\r
\`\`\`js\r
Input: ["flower", "flow", "flight"]\r
\r
1. Initial prefix = "flower"\r
2. Compare with "flow" -> "flower" doesn't match, reduce to "flow"\r
3. Compare with "flight" -> "flow" doesn't match, reduce to "fl"\r
4. "fl" matches with "flight"\r
*/\r
\r
// Output: "fl"\r
// \`\`\`\r
\r
/*\r
### Time Complexity:\r
- **O(n * m)**, where \`n\` is the number of strings and \`m\` is the length of the first string. In the worst case, we might check all characters of the first string with each other string.\r
\r
### Space Complexity:\r
- **O(1)**, as we are using only a few extra variables for storing the prefix.\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};

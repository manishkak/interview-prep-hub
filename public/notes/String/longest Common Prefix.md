# longest Common Prefix

## Problem Statement

Describe the problem statement for **longest Common Prefix** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// longest common prefix

// The **Longest Common Prefix** problem asks you to find the longest common prefix string among an array of strings. If there is no common prefix, return an empty string.

// ### Problem Statement:
// Given an array of strings, find the longest common prefix among them.

// ### Example:
/*```js
	Input: strs = ["flower", "flow", "flight"]
	Output: "fl"
```*/

// ### Approach:
/*
1. If the input array is empty, return an empty string.
2. Assume the first string in the array as the prefix.
3. Iterate through the remaining strings and check if the current string starts with the prefix.
4. If the string doesn't start with the prefix, gradually reduce the prefix (by chopping off characters from the end) until it becomes a prefix of the current string.
5. Continue this process for all strings in the array.
6. If at any point the prefix becomes an empty string, return it.
*/

// ### JavaScript Code:


function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    // Start with the first string as the prefix
    let prefix = strs[0];

    // Iterate over the rest of the strings
    for (let i = 1; i < strs.length; i++) {
        // Keep reducing the prefix until it matches the start of strs[i]
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            // If prefix becomes empty, return it
            if (prefix === "") return "";
        }
    }

    return prefix;
}


// ### Explanation:
/*
	1. **Initial Prefix**: Start by assuming that the first string (`strs[0]`) is the common prefix.
	2. **Check for Each String**: For each subsequent string, check if it starts with the current prefix.
	3. **Reduce the Prefix**: If a string does not start with the current prefix, reduce the prefix by one character at a time from the end until it matches or becomes an empty string.
	4. **Return**: After checking all the strings, return the longest common prefix found.
*/

// ### Example Walkthrough:
/*
```js
Input: ["flower", "flow", "flight"]

1. Initial prefix = "flower"
2. Compare with "flow" -> "flower" doesn't match, reduce to "flow"
3. Compare with "flight" -> "flow" doesn't match, reduce to "fl"
4. "fl" matches with "flight"
*/

// Output: "fl"
// ```

/*
### Time Complexity:
- **O(n * m)**, where `n` is the number of strings and `m` is the length of the first string. In the worst case, we might check all characters of the first string with each other string.

### Space Complexity:
- **O(1)**, as we are using only a few extra variables for storing the prefix.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

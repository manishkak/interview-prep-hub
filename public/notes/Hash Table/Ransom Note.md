# Ransom Note

## Problem Statement

Describe the problem statement for **Ransom Note** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Ransom Note

/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 */

// The **Ransom Note** problem asks whether you can construct a given note (string `ransomNote`) by using characters from another string (`magazine`). Each character from the magazine can only be used once.

// ### Problem Statement:
// Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed from `magazine` and `false` otherwise.

// ### Example:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// ### Approach:
/*1. **Character Counting**: We can solve this problem by counting the frequency of each character in both the `ransomNote` and the `magazine`.
2. For each character in the `ransomNote`, check if it appears enough times in the `magazine`. If any character in the `ransomNote` appears more frequently than in the `magazine`, return `false`.
3. Use a hash map (or JavaScript object) to count the frequency of characters in the `magazine`, then decrement the counts as you process the `ransomNote`.*/

// ### JavaScript Code:

function canConstruct(ransomNote, magazine) {
    const charCount = {};

    // Count characters in magazine
    for (let char of magazine) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Check if ransomNote can be constructed
    for (let char of ransomNote) {
        if (!charCount[char]) {
            return false;  // Not enough characters in magazine
        }
        charCount[char]--;  // Use one instance of this character
    }

    return true;
}

/*
### Explanation:
1. **Counting Characters in Magazine**: 
   - We loop through the `magazine` and build a frequency count of each character using a JavaScript object (`charCount`). For each character in the magazine, if it's already in `charCount`, we increment its count, otherwise we set it to 1.
   
2. **Checking Against Ransom Note**: 
   - We then loop through each character in the `ransomNote`. For each character:
     - If the character does not exist in the `charCount` object or its count is zero, return `false`.
     - If the character exists, decrement its count in `charCount` to indicate that we've used one instance of it.
   
3. **Final Return**: 
   - If all characters in the `ransomNote` can be found in sufficient quantity in `magazine`, return `true`.

### Example Walkthrough:

#### Input 1: `"a"`, `"b"`
- `charCount = { "b": 1 }` (from `magazine`)
- We check `ransomNote = "a"`, but `charCount["a"]` is `undefined`, so return `false`.

#### Input 2: `"aa"`, `"aab"`
- `charCount = { "a": 2, "b": 1 }` (from `magazine`)
- We check the first `a` in `ransomNote`, and `charCount["a"]` becomes `1`.
- We check the second `a` in `ransomNote`, and `charCount["a"]` becomes `0`.
- All characters are available, so return `true`.

### Time Complexity:
- **O(n + m)**, where `n` is the length of `ransomNote` and `m` is the length of `magazine`. We traverse both strings once.

### Space Complexity:
- **O(k)**, where `k` is the number of unique characters in the `magazine`. The space is used to store the frequency counts in the hash map
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

# Ransom Note

## Problem Statement

Given two strings ransomNote and magazine, return true if ransomNote can be constructed using the letters from magazine, and false otherwise. Each letter in magazine can only be used once.

## Examples

- Input: ransomNote = "a", magazine = "b"
- Output: false

- Input: ransomNote = "aa", magazine = "ab"
- Output: false (only one 'a' in magazine, but two needed)

- Input: ransomNote = "aa", magazine = "aab"
- Output: true

## Approach

Character frequency counting using a hash map.

1. Loop through magazine and build a frequency count of each character in a map.
2. Loop through ransomNote. For each character, check if it exists in the map with a count greater than zero. If not, return false immediately. If yes, decrement the count.
3. If the entire ransomNote is processed without running out of any character, return true.

## Solution

```js
function canConstruct(ransomNote, magazine) {
    const charCount = {};

    for (let char of magazine) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of ransomNote) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}
```

## Time Complexity

**O(n + m)** where n is the length of ransomNote and m is the length of magazine. Both strings are traversed once.

## Space Complexity

**O(k)** where k is the number of unique characters in magazine. In practice k <= 26 for lowercase English letters, making this effectively O(1).

## Notes

- The check !charCount[char] covers both the case where the character is absent (undefined) and where its count has been depleted to 0.
- LeetCode #383.

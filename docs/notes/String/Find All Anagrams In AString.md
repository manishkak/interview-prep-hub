# Find All Anagrams In AString

## Problem Statement

Describe the problem statement for **Find All Anagrams In AString** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// find all anagrams in a string

/**
 * Problem Statement:
Given two strings s and p, return a list of all the start indices of p's anagrams in s. You can return the answer in any order.
 */

/**
 * Example
 * Input: s = "cbaebabacd", p = "abc"
Output: [0, 6]
Explanation: The substring starting at index 0 is "cba", which is an anagram of "abc". The substring starting at index 6 is "bac", which is an anagram of "abc".
 */

// Approach
/**
 * This is a sliding window problem where we can efficiently check substrings of s that have the same character counts as p (since anagrams have the same character counts).
 * Algorithm:
 * 		Use two frequency arrays or hash maps:
		-	One for the string p (the anagram pattern).
		-	Another for the current window of characters in s that is the same length as p.
		Slide a window over s:
		- 	Start by creating the first window of length equal to p.
		- 	For each new character, update the window by removing the leftmost character and adding the new character.
		- 	Compare the frequency maps to check if they match, indicating an anagram.
		Return the starting indices of all such windows.
 */

function findAnagrams(s, p) {
  const result = [];
  if (s.length < p.length) return result;

  const pCount = new Map();
  const sCount = new Map();

  // Step 1: Build frequency map for p
  for (let ch of p) {
    pCount.set(ch, (pCount.get(ch) || 0) + 1);
  }

  let left = 0;

  // Step 2: Slide the window
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    sCount.set(ch, (sCount.get(ch) || 0) + 1);

    // If window too big → shrink from left
    if (right - left + 1 > p.length) {
      const leftChar = s[left];
      sCount.set(leftChar, sCount.get(leftChar) - 1);
      if (sCount.get(leftChar) === 0) sCount.delete(leftChar);
      left++;
    }

    // Step 3: Compare frequency maps when window size == p.length
    if (right - left + 1 === p.length) {
      let match = true;
      for (let [key, val] of pCount) {
        if (sCount.get(key) !== val) {
          match = false;
          break;
        }
      }
      if (match) result.push(left);
    }
  }

  return result;
}

console.log(findAnagrams("cbaebabacd", "abc")); // [0, 6]
console.log(findAnagrams("abab", "ab"));        // [0, 1, 2]


// Explanation:
/*	Character Count Arrays:
		- pCount stores the frequency of characters in string p.
		- sCount stores the frequency of characters in the current window of length p.length in string s.

	Sliding Window:
		As we iterate over s, we add the current character to the window and remove the leftmost character once the window size exceeds p.length.
	Comparison:
		After each update, we compare the frequency counts of the current window in s with that of p. If they match, it means the current window is an anagram of p.
	Result:
		We store the starting index of each anagram we find in the result array.*/

// Example Walkthrough:
Input: s = "cbaebabacd", p = "abc"

// Initial pCount for "abc": [1, 1, 1] (for 'a', 'b', 'c').
// Sliding over the first three characters of s, sCount becomes [1, 1, 1] (for "cba").
		// This matches pCount, so we record index 0.
// Slide one character to the right, the next window is "bae":
		// sCount becomes [1, 1, 0], which does not match pCount, so no anagram.
// Continue sliding until index 6, where the window "bac" matches pCount again.
		// Record index 6.

// Time Complexity:
// O(n + m), where n is the length of s and m is the length of p. We traverse s and compare frequency counts using arrays of fixed size (26 for lowercase letters), which takes constant time.

// Space Complexity:
// O(1) because we use fixed-size arrays for the frequency counts (size 26 for lowercase English letters).
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

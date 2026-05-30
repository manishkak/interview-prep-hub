const n=`# Find All Anagrams In AString

## Problem Statement

Describe the problem statement for **Find All Anagrams In AString** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// find all anagrams in a string\r
\r
/**\r
 * Problem Statement:\r
Given two strings s and p, return a list of all the start indices of p's anagrams in s. You can return the answer in any order.\r
 */\r
\r
/**\r
 * Example\r
 * Input: s = "cbaebabacd", p = "abc"\r
Output: [0, 6]\r
Explanation: The substring starting at index 0 is "cba", which is an anagram of "abc". The substring starting at index 6 is "bac", which is an anagram of "abc".\r
 */\r
\r
// Approach\r
/**\r
 * This is a sliding window problem where we can efficiently check substrings of s that have the same character counts as p (since anagrams have the same character counts).\r
 * Algorithm:\r
 * 		Use two frequency arrays or hash maps:\r
		-	One for the string p (the anagram pattern).\r
		-	Another for the current window of characters in s that is the same length as p.\r
		Slide a window over s:\r
		- 	Start by creating the first window of length equal to p.\r
		- 	For each new character, update the window by removing the leftmost character and adding the new character.\r
		- 	Compare the frequency maps to check if they match, indicating an anagram.\r
		Return the starting indices of all such windows.\r
 */\r
\r
function findAnagrams(s, p) {\r
  const result = [];\r
  if (s.length < p.length) return result;\r
\r
  const pCount = new Map();\r
  const sCount = new Map();\r
\r
  // Step 1: Build frequency map for p\r
  for (let ch of p) {\r
    pCount.set(ch, (pCount.get(ch) || 0) + 1);\r
  }\r
\r
  let left = 0;\r
\r
  // Step 2: Slide the window\r
  for (let right = 0; right < s.length; right++) {\r
    const ch = s[right];\r
    sCount.set(ch, (sCount.get(ch) || 0) + 1);\r
\r
    // If window too big → shrink from left\r
    if (right - left + 1 > p.length) {\r
      const leftChar = s[left];\r
      sCount.set(leftChar, sCount.get(leftChar) - 1);\r
      if (sCount.get(leftChar) === 0) sCount.delete(leftChar);\r
      left++;\r
    }\r
\r
    // Step 3: Compare frequency maps when window size == p.length\r
    if (right - left + 1 === p.length) {\r
      let match = true;\r
      for (let [key, val] of pCount) {\r
        if (sCount.get(key) !== val) {\r
          match = false;\r
          break;\r
        }\r
      }\r
      if (match) result.push(left);\r
    }\r
  }\r
\r
  return result;\r
}\r
\r
console.log(findAnagrams("cbaebabacd", "abc")); // [0, 6]\r
console.log(findAnagrams("abab", "ab"));        // [0, 1, 2]\r
\r
\r
// Explanation:\r
/*	Character Count Arrays:\r
		- pCount stores the frequency of characters in string p.\r
		- sCount stores the frequency of characters in the current window of length p.length in string s.\r
\r
	Sliding Window:\r
		As we iterate over s, we add the current character to the window and remove the leftmost character once the window size exceeds p.length.\r
	Comparison:\r
		After each update, we compare the frequency counts of the current window in s with that of p. If they match, it means the current window is an anagram of p.\r
	Result:\r
		We store the starting index of each anagram we find in the result array.*/\r
\r
// Example Walkthrough:\r
Input: s = "cbaebabacd", p = "abc"\r
\r
// Initial pCount for "abc": [1, 1, 1] (for 'a', 'b', 'c').\r
// Sliding over the first three characters of s, sCount becomes [1, 1, 1] (for "cba").\r
		// This matches pCount, so we record index 0.\r
// Slide one character to the right, the next window is "bae":\r
		// sCount becomes [1, 1, 0], which does not match pCount, so no anagram.\r
// Continue sliding until index 6, where the window "bac" matches pCount again.\r
		// Record index 6.\r
\r
// Time Complexity:\r
// O(n + m), where n is the length of s and m is the length of p. We traverse s and compare frequency counts using arrays of fixed size (26 for lowercase letters), which takes constant time.\r
\r
// Space Complexity:\r
// O(1) because we use fixed-size arrays for the frequency counts (size 26 for lowercase English letters).
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

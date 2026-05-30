# Longest Substring Without Repeating Characters

## Problem Statement

Describe the problem statement for **Longest Substring Without Repeating Characters** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// longest substring without repeating characters solution in js

// Longest Substring Without Repeating Characters problem asks for the length of the longest substring in a given string that does not contain any repeating characters

/**
 * Approach:
To solve this problem efficiently, you can use a sliding window technique with a hash map to keep track of the characters and their most recent positions. The idea is to maintain a window of characters that doesn't contain any duplicates, and expand or shrink this window as necessary to maintain the property
 */

/**
 * Algorithm:
	- Use two pointers: left and right, which define the current window of non-repeating characters.
	- Use a hash map (charMap) to store the last index of each character.
	- Start with both pointers at the beginning of the string. Expand the window by moving the right pointer, and update the hash map with the current character's index.
	- If you encounter a repeated character (i.e., the character is already in the window), move the left pointer to the right of the previous occurrence of that character.
	- Calculate the length of the current window and update the maximum length.
	- Continue until the right pointer reaches the end of the string.
 */
/**
 *  Summary of Steps:
	- Initialize map, left, maxLen
	- Loop over string(character by character) with right pointer
	- If char was seen after left, update left to map[char] + 1
	- Update current char with current index i.e. right
	- Update maxLen = max of maxLen and right-left+1
	- Return maxLen
 */

/**
 * TC: O(n), Each character is visited at most twice; Once by the right pointer, Possibly once more by the start pointer. So it's a linear scan over the string.
 * SC: O(min(n, m))
n = length of input string
m = size of character set (e.g., 26 for lowercase, 128 for ASCII)
We're storing at most one entry per unique character in the map
→ Worst case: all characters are unique → O(n)
 */

function lengthOfLongestSubstring(s) {
	let charMap = new Map();  // Map to store the last index of each character
	let left = 0;  // Left pointer of the window
	let maxLength = 0;

	// Iterate through the string using the right pointer
	for (let right = 0; right < s.length; right++) {
		const currentChar = s[right];

		// If the character is already in the window, move the left pointer
		// charMap.get(currentChar) >= left, is to make sure the repeating character is inside the current window.
		// If it's outside (before start), it doesn't affect us anymore
		if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
			// move the left pointer
			left = charMap.get(currentChar) + 1;
		}

		// Update the last seen index of the current character
		charMap.set(currentChar, right);

		// Calculate the max length of the current window
		maxLength = Math.max(maxLength, right - left + 1);
	}

	return maxLength;
}
console.log(lengthOfLongestSubstring("abcacbab"));
/* Map stores just the key->value
| Step | right | s[right] | charMap (before) | Condition                  | left | Update  | maxLen |
| ---- | ----- | -------- | ---------------- | -------------------------- | ---- | ------- | ------ |
| 0    | 0     | a        | {}               | not found                  | 0    | set a→0 | 1      |
| 1    | 1     | b        | {a:0}            | not found                  | 0    | set b→1 | 2      |
| 2    | 2     | c        | {a:0,b:1}        | not found                  | 0    | set c→2 | 3      |
| 3    | 3     | a        | {a:0,b:1,c:2}    | found `a:0≥0` → left=0+1=1 | 1    | set a→3 | 3      |
| 4    | 4     | c        | {a:3,b:1,c:2}    | found `c:2≥1` → left=2+1=3 | 3    | set c→4 | 3      |
| 5    | 5     | b        | {a:3,b:1,c:4}    | found `b:1<3` → ignore     | 3    | set b→5 | 3      |
| 6    | 6     | a        | {a:3,b:5,c:4}    | found `a:3≥3` → left=3+1=4 | 4    | set a→6 | 3      |
| 7    | 7     | b        | {a:6,b:5,c:4}    | found `b:5≥4` → left=5+1=6 | 6    | set b→7 | 3      |
*/

// Solution using sets->
function lengthOfLongestSubstring(s) {
  const seen = new Set();
  let left = 0, maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstring("abcacbab")); // 3
/*	Set stores just the value
| Step | right | s[right] | Action                                                        | Set contents | left | Window  | maxLen |
| ---- | ----- | -------- | ------------------------------------------------------------- | ------------ | ---- | ------- | ------ |
| 0    | 0     | a        | add `a`                                                       | {a}          | 0    | `"a"`   | 1      |
| 1    | 1     | b        | add `b`                                                       | {a,b}        | 0    | `"ab"`  | 2      |
| 2    | 2     | c        | add `c`                                                       | {a,b,c}      | 0    | `"abc"` | 3      |
| 3    | 3     | a        | duplicate! delete `a` (left→1) → add `a`                      | {b,c,a}      | 1    | `"bca"` | 3      |
| 4    | 4     | c        | duplicate! delete `b` (left→2), delete `c` (left→3) → add `c` | {a,c}        | 3    | `"ac"`  | 3      |
| 5    | 5     | b        | add `b`                                                       | {a,c,b}      | 3    | `"acb"` | 3      |
| 6    | 6     | a        | duplicate! delete `a` (left→4) → add `a`                      | {c,b,a}      | 4    | `"cba"` | 3      |
| 7    | 7     | b        | duplicate! delete `c` (left→5), delete `b` (left→6) → add `b` | {a,b}        | 6    | `"ab"`  | 3      |
*/


/**
 * Explanation:
	- Two Pointers (left, right):
		- right expands the window by moving through the string.
		- left shrinks the window when a duplicate character is found, ensuring no repeated characters within the window.
	- Hash Map (charMap): Stores the most recent position of each character. When a repeated character is encountered, move the left pointer to just after its previous occurrence.
	- Updating the Result: At each step, the length of the current window is right - left + 1, and the result (maxLength) is updated if the current window is longer than the previous longest.
 */

/**
 * Example Walkthrough
 * Initially, both left and right are at the start (0).
Expand the window:
Add 'a' to charMap. Now the substring is "a" (length 1).
Add 'b' to charMap. Now the substring is "ab" (length 2).
Add 'c' to charMap. Now the substring is "abc" (length 3).
When the next character 'a' is found at right = 3:
Since 'a' is already in the map at index 0, move left to 1 (left = charMap.get('a') + 1), so the substring becomes "bca".
Continue expanding and adjusting the window as needed.
Final result: The longest substring without repeating characters is "abc", with a length of 3.

Time and Space Complexity:
Time Complexity: O(n), where n is the length of the string. We traverse the string once with the right pointer and adjust the left pointer as necessary.
Space Complexity: O(min(n, m)), where n is the length of the string and m is the size of the character set. In the worst case, the hash map stores every character of the string.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

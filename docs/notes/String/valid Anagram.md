# valid Anagram

## Problem Statement

Describe the problem statement for **valid Anagram** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Valid Anagram
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * 		An anagram is a word formed by rearranging the letters of another.
 */
/**
 * APPROACH Steps:
**Step 1:**
🔹 Check if lengths of `s` and `t` are different.
If yes, return `false` immediately.
---
**Step 2:**
🔹 Create a hash map for string `s`
* Count how many times each character appears
**Step 3:**
🔹 Loop through string `t`
* If the character is **not in the map**, return `false`
* If it **is in the map**, decrement its count
* If count becomes **0**, delete the character from the map
**Step 4:**
🔹 After the loop, check if the map is empty
* If `map.size === 0`, return `true`
* Else, return `false`
 */

function isAnagram(s, t) {
	if (s.length !== t.length) return false;
  
	const map = new Map();
  
	/**
	 * another way of creating hashmap
	 */
	// for (let char of s) {
	// 	if (map.has(char)) {
	// 	  map.set(char, map.get(char) + 1);
	// 	} else {
	// 	  map.set(char, 1);
	// 	}
	//   }

	// first create a hashmap of s
	for (let char of s) {
	  map.set(char, (map.get(char) || 0) + 1);
	}
  
	// loop over t and check if that character appears in map, then decrement count by 1
	// and when count of that character hits 0, then delete
	for (let char of t) {
	  if (!map.has(char)) return false; // meaning it's not an anagram
  
	  // doesnt fall under the above if, so just decrement count as char IS IN map
	  map.set(char, map.get(char) - 1);
  
	  if (map.get(char) === 0) {
		map.delete(char);
	  }
	}
  
	// true is returned if map.size is 0, meaning all characters match in both strings
	return map.size === 0;
  }
  

 const isAnagram = (s, t) => {
	// Create a hash
	let strS = {};
	// Return false immediately when the lengths of the two strings are not the same
	if (s.length !== t.length) { console.log('length not same'); return false; }
	// Iterate through the first string to create a counter object
	for (let char of s) {
	// Check if the character is in the object:
	// If it is, increment its value by 1
	// If not, add it to the object as a key with value 1.
		strS[char] = (strS[char] || 0) + 1
	}
	// Iterate through the second string
	for (let char of t) {
	   // Check if the object has that character in its keys:
	   // If not, return false
	   if (!strS[char]) { console.log('not anagram'); return false; }
	   // If it has, decrement its value by 1
	   strS[char]--; // if we dont do this then words like aabb and abbb will also be true, that have all same characters but diff. frequencies
	}
	console.log('is anagram!');
	return true
   };
   
isAnagram('kka','kak');

/**
 * TC = For our approach, we used two iterations (one per string) and provided a solution in linear time, so the time complexity is O(n), where n is the length of the string. Note that we are looping over both strings only once.
 * SC = Even if the string is 10,000 characters long, the freq object will hold at most 26 keys.
 * 		so, Space used by `freq` = O(1); This is because 26 is a constant — it doesn’t grow with input size.
 * What if characters were Unicode / emojis?
 * Then space complexity would be O(n), where n is the number of characters in the string — because there could be many unique ones.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

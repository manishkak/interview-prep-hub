const t=`# valid Anagram

## Problem Statement

Describe the problem statement for **valid Anagram** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Valid Anagram\r
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.\r
 * 		An anagram is a word formed by rearranging the letters of another.\r
 */\r
/**\r
 * APPROACH Steps:\r
**Step 1:**\r
🔹 Check if lengths of \`s\` and \`t\` are different.\r
If yes, return \`false\` immediately.\r
---\r
**Step 2:**\r
🔹 Create a hash map for string \`s\`\r
* Count how many times each character appears\r
**Step 3:**\r
🔹 Loop through string \`t\`\r
* If the character is **not in the map**, return \`false\`\r
* If it **is in the map**, decrement its count\r
* If count becomes **0**, delete the character from the map\r
**Step 4:**\r
🔹 After the loop, check if the map is empty\r
* If \`map.size === 0\`, return \`true\`\r
* Else, return \`false\`\r
 */\r
\r
function isAnagram(s, t) {\r
	if (s.length !== t.length) return false;\r
  \r
	const map = new Map();\r
  \r
	/**\r
	 * another way of creating hashmap\r
	 */\r
	// for (let char of s) {\r
	// 	if (map.has(char)) {\r
	// 	  map.set(char, map.get(char) + 1);\r
	// 	} else {\r
	// 	  map.set(char, 1);\r
	// 	}\r
	//   }\r
\r
	// first create a hashmap of s\r
	for (let char of s) {\r
	  map.set(char, (map.get(char) || 0) + 1);\r
	}\r
  \r
	// loop over t and check if that character appears in map, then decrement count by 1\r
	// and when count of that character hits 0, then delete\r
	for (let char of t) {\r
	  if (!map.has(char)) return false; // meaning it's not an anagram\r
  \r
	  // doesnt fall under the above if, so just decrement count as char IS IN map\r
	  map.set(char, map.get(char) - 1);\r
  \r
	  if (map.get(char) === 0) {\r
		map.delete(char);\r
	  }\r
	}\r
  \r
	// true is returned if map.size is 0, meaning all characters match in both strings\r
	return map.size === 0;\r
  }\r
  \r
\r
 const isAnagram = (s, t) => {\r
	// Create a hash\r
	let strS = {};\r
	// Return false immediately when the lengths of the two strings are not the same\r
	if (s.length !== t.length) { console.log('length not same'); return false; }\r
	// Iterate through the first string to create a counter object\r
	for (let char of s) {\r
	// Check if the character is in the object:\r
	// If it is, increment its value by 1\r
	// If not, add it to the object as a key with value 1.\r
		strS[char] = (strS[char] || 0) + 1\r
	}\r
	// Iterate through the second string\r
	for (let char of t) {\r
	   // Check if the object has that character in its keys:\r
	   // If not, return false\r
	   if (!strS[char]) { console.log('not anagram'); return false; }\r
	   // If it has, decrement its value by 1\r
	   strS[char]--; // if we dont do this then words like aabb and abbb will also be true, that have all same characters but diff. frequencies\r
	}\r
	console.log('is anagram!');\r
	return true\r
   };\r
   \r
isAnagram('kka','kak');\r
\r
/**\r
 * TC = For our approach, we used two iterations (one per string) and provided a solution in linear time, so the time complexity is O(n), where n is the length of the string. Note that we are looping over both strings only once.\r
 * SC = Even if the string is 10,000 characters long, the freq object will hold at most 26 keys.\r
 * 		so, Space used by \`freq\` = O(1); This is because 26 is a constant — it doesn’t grow with input size.\r
 * What if characters were Unicode / emojis?\r
 * Then space complexity would be O(n), where n is the number of characters in the string — because there could be many unique ones.\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{t as default};

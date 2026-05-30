const n=`# backspace String Compare

## Problem Statement

Describe the problem statement for **backspace String Compare** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Backspace String Compare\r
 * Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.\r
   Note that after backspacing an empty text, the text will continue empty.\r
*/\r
\r
 var backspaceCompare = function (s, t) {\r
	s = parse(s);\r
	t = parse(t);\r
	return s === t;\r
	function parse(string) {\r
	  let count = 0,\r
		stack = [];\r
	  while (count < string.length) {\r
		if (string[count] == "#") {\r
		  stack.pop();\r
		} else {\r
		  stack.push(string[count]);\r
		}\r
		count++;\r
	  }\r
	  return stack.join("");\r
	}\r
  };\r
  \r
  console.log(backspaceCompare("ab#cdd##f", "ad#cer##f"));\r
  \r
\r
/**\r
 * TC = O(n); The time complexity is O(n) where n is the number of characters present in the string.\r
 * SC = O(n); because we use constant space to store two indices.\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

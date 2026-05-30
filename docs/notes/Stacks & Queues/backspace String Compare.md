# backspace String Compare

## Problem Statement

Describe the problem statement for **backspace String Compare** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Backspace String Compare
 * Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
   Note that after backspacing an empty text, the text will continue empty.
*/

 var backspaceCompare = function (s, t) {
	s = parse(s);
	t = parse(t);
	return s === t;
	function parse(string) {
	  let count = 0,
		stack = [];
	  while (count < string.length) {
		if (string[count] == "#") {
		  stack.pop();
		} else {
		  stack.push(string[count]);
		}
		count++;
	  }
	  return stack.join("");
	}
  };
  
  console.log(backspaceCompare("ab#cdd##f", "ad#cer##f"));
  

/**
 * TC = O(n); The time complexity is O(n) where n is the number of characters present in the string.
 * SC = O(n); because we use constant space to store two indices.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

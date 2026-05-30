# valid Parentheses

## Problem Statement

Describe the problem statement for **valid Parentheses** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Valid Parentheses
 * Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid. A string is considered valid if:
 * 		Open brackets must be closed by the same type of brackets.
 * 		Open brackets must be closed in the correct order
 * To solve the problem of determining if a string containing parentheses is valid, we can use a stack to keep track of the opening parentheses
 */
/*
Use a stack to keep track of the opening brackets.
- Iterate over each character in the string.
- If the character is an opening bracket, push it onto the stack.
- If the character is a closing bracket, check the stack:
	- If the stack is empty or the top of the stack does not match the corresponding opening bracket, the string is not valid.
	- If it matches, pop the stack.
- After processing all characters, if the stack is empty, the string is valid; otherwise, it's not.
*/
/*
Explanation:
	'map' holds the corresponding closing brackets for each opening bracket.
	We iterate over each character:
		If it's an opening bracket, we push it onto the stack.
		If it's a closing bracket, we pop the top of the stack and check if it matches the corresponding opening bracket.
	Finally, if the stack is empty, it means all the opening brackets have been matched correctly, so the string is valid.
*/

function isValid(s) {
  const stack = [];
  const map = { ')': '(', ']': '[', '}': '{' };

  for (let char of s) {
    if (!map[char]) {
      // Opening bracket
      stack.push(char);
    } else {
      // Closing bracket
      if (stack.pop() !== map[char]) return false;
    }
  }

  return stack.length === 0;
}

// Example usage:
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true

/**
 * TC: time complexity of O(n), where n is the length of the string.
 * SC: The worst-case scenario occurs when all characters in the string are opening brackets, in which case all of them are pushed onto the stack. The stack can grow to a maximum size equal to the length of the string.		Therefore, the space complexity is O(n), where n is the length of the input string s.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

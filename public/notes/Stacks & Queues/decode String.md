# decode String

## Problem Statement

Describe the problem statement for **decode String** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Decode String
 * Given an encoded string, return its decoded string.
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
 * You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
 * Input: s = "3[a]2[bc]"
Output: "aaabcbc"
 * Input: s = "3[a2[c]]"
Output: "accaccacc"

Approach:
We can solve this problem using a stack. As we parse through the string, we'll:

- Push numbers and characters onto the stack.
- When we encounter a closing bracket ], we pop from the stack to reconstruct the substring and repeat it the required number of times.

1. Stack for Characters and Numbers: We'll maintain a stack where we can store characters, numbers, and partial decoded strings.

2. Process Each Character:
	- If it's a digit, we keep track of it (since there can be multiple digits in the numer, like 432).
	- If it's an opening bracket [, it signals that we'll start a new encoded section, so we push the current number onto the stack and reset the number.
	- If it's a closing bracket ], we start popping from the stack to decode the current section.
	- If it's a character, we just add it to our current string or push it onto the stack.

3. Reconstruct the String: Once we encounter a ], we pop characters until we hit a number, indicating how many times to repeat the string within the brackets.

 */
// chat gpt solution

function decodeString(s) {
    const stack = [];
    let currentString = '';
    let currentNum = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!isNaN(char)) {
            // If it's a digit, update the current number (accounting for multi-digit numbers)
            currentNum = currentNum * 10 + Number(char);
        } else if (char === '[') {
            // Push the current string and current number onto the stack
            stack.push(currentString);
            stack.push(currentNum);
            // Reset current string and number for the next section
            currentString = '';
            currentNum = 0;
        } else if (char === ']') {
            // Pop the number of times to repeat from the stack
            const num = stack.pop();
            // Pop the last accumulated string from the stack and append the repeated section to it
            const previousString = stack.pop();
            currentString = previousString + currentString.repeat(num);
        } else {
            // Append the character to the current string
            currentString += char;
        }
    }

    return currentString;
}

// Example usage:
console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
console.log(decodeString("3[a2[c]]")); // "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // "abcabccdcdcdef"
// ==============================
// ==============================

var decodeString = (s) => {
	let multiply = [];
	let repeatStr = [];
	let solution = '';
	let tempMult = '';

	for(let char of s) {
		if(!isNaN(char)) {
			tempMult  = tempMult+char;
		} else if(char === '[') {
			multiply.push(tempMult);
			tempMult = '';
			
			repeatStr.push(solution);
			solution = '';
		} else if(char === ']') {
			solution = repeatStr.pop() + solution.repeat(multiply.pop());
		} else {
			solution += char;
		}
	}
	return solution;
  }
  
  console.log(decodeString("2[2[a]10[c]]"));

  /**
   * Time and Space Complexity:
Time Complexity: O(n), where n is the length of the string. We process each character in the string once.
Space Complexity: O(n), for the stack and the resulting string.	
   */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

const t=`# decode String

## Problem Statement

Describe the problem statement for **decode String** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Decode String\r
 * Given an encoded string, return its decoded string.\r
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.\r
 * You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].\r
 * Input: s = "3[a]2[bc]"\r
Output: "aaabcbc"\r
 * Input: s = "3[a2[c]]"\r
Output: "accaccacc"\r
\r
Approach:\r
We can solve this problem using a stack. As we parse through the string, we'll:\r
\r
- Push numbers and characters onto the stack.\r
- When we encounter a closing bracket ], we pop from the stack to reconstruct the substring and repeat it the required number of times.\r
\r
1. Stack for Characters and Numbers: We'll maintain a stack where we can store characters, numbers, and partial decoded strings.\r
\r
2. Process Each Character:\r
	- If it's a digit, we keep track of it (since there can be multiple digits in the numer, like 432).\r
	- If it's an opening bracket [, it signals that we'll start a new encoded section, so we push the current number onto the stack and reset the number.\r
	- If it's a closing bracket ], we start popping from the stack to decode the current section.\r
	- If it's a character, we just add it to our current string or push it onto the stack.\r
\r
3. Reconstruct the String: Once we encounter a ], we pop characters until we hit a number, indicating how many times to repeat the string within the brackets.\r
\r
 */\r
// chat gpt solution\r
\r
function decodeString(s) {\r
    const stack = [];\r
    let currentString = '';\r
    let currentNum = 0;\r
\r
    for (let i = 0; i < s.length; i++) {\r
        const char = s[i];\r
\r
        if (!isNaN(char)) {\r
            // If it's a digit, update the current number (accounting for multi-digit numbers)\r
            currentNum = currentNum * 10 + Number(char);\r
        } else if (char === '[') {\r
            // Push the current string and current number onto the stack\r
            stack.push(currentString);\r
            stack.push(currentNum);\r
            // Reset current string and number for the next section\r
            currentString = '';\r
            currentNum = 0;\r
        } else if (char === ']') {\r
            // Pop the number of times to repeat from the stack\r
            const num = stack.pop();\r
            // Pop the last accumulated string from the stack and append the repeated section to it\r
            const previousString = stack.pop();\r
            currentString = previousString + currentString.repeat(num);\r
        } else {\r
            // Append the character to the current string\r
            currentString += char;\r
        }\r
    }\r
\r
    return currentString;\r
}\r
\r
// Example usage:\r
console.log(decodeString("3[a]2[bc]")); // "aaabcbc"\r
console.log(decodeString("3[a2[c]]")); // "accaccacc"\r
console.log(decodeString("2[abc]3[cd]ef")); // "abcabccdcdcdef"\r
// ==============================\r
// ==============================\r
\r
var decodeString = (s) => {\r
	let multiply = [];\r
	let repeatStr = [];\r
	let solution = '';\r
	let tempMult = '';\r
\r
	for(let char of s) {\r
		if(!isNaN(char)) {\r
			tempMult  = tempMult+char;\r
		} else if(char === '[') {\r
			multiply.push(tempMult);\r
			tempMult = '';\r
			\r
			repeatStr.push(solution);\r
			solution = '';\r
		} else if(char === ']') {\r
			solution = repeatStr.pop() + solution.repeat(multiply.pop());\r
		} else {\r
			solution += char;\r
		}\r
	}\r
	return solution;\r
  }\r
  \r
  console.log(decodeString("2[2[a]10[c]]"));\r
\r
  /**\r
   * Time and Space Complexity:\r
Time Complexity: O(n), where n is the length of the string. We process each character in the string once.\r
Space Complexity: O(n), for the stack and the resulting string.	\r
   */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{t as default};

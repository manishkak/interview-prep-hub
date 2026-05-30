# reverse Polish Notation

## Problem Statement

Describe the problem statement for **reverse Polish Notation** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * evaluate reverse polish notation
 * Given an array of strings tokens representing an RPN expression, evaluate the expression and return the result.
 * Reverse Polish Notation (RPN) is a mathematical notation in which "every operator follows all of its operands".
 * To evaluate an expression in RPN, we can use a "stack to keep track of the operands".
 * When we encounter an operator, we pop the required number of operands from the stack, apply the operator, and push the result back onto the stack
 * Input: ["2", "1", "+", "3", "*"]
 * Output: 9
 * 		Explanation: ((2 + 1) * 3) = 9
* Input: ["4", "13", "5", "/", "+"]
* Output: 6
* 		Explanation: (4 + (13 / 5)) = 6
 */
function evalRPN(tokens) {
	const stack = [];

	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i];

		if (!isNaN(token)) {
			// If the token "is a number", "push" it to the stack
			stack.push(Number(token));
		} else {
			// Otherwise, the token is an operator, so pop two elements from the stack
			const b = stack.pop();
			const a = stack.pop();
			let result;

			switch (token) {
				case '+':
					result = a + b;
					break;
				case '-':
					result = a - b;
					break;
				case '*':
					result = a * b;
					break;
				case '/':
					// Use Math.trunc to truncate the division result towards zero
					result = Math.trunc(a / b);
					break;
				default:
					throw new Error("Invalid operator");
			}

			// Push the result back to the stack
			stack.push(result);
		}
	}

	// The final result will be the only element left in the stack
	return stack.pop();
}

// Example usage:
console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22

/*
Explanation:
	- Stack for Numbers: We use a stack to store the operands (numbers).
	- Iteration: We iterate through each token in the tokens array:
		- If the token is a number, push it onto the stack.
		- If the token is an operator (+, -, *, /), pop the top two numbers from the stack, apply the operator, and push the result back onto the stack.
Operators:
	- The two numbers are popped in the order they were pushed (b is the most recent, a is the one before b).
	- Perform the operation corresponding to the operator (+, -, *, /).
	- Push the result back onto the stack.
Final Result: After processing all tokens, the stack will contain a single element, which is the result of the RPN expression.

Key Points:
	- Division (/): In RPN, division between two integers should truncate towards zero, which is handled using Math.trunc() in JavaScript.
	- Edge Cases: The code assumes valid input as per the problem statement. Invalid operators or incorrect token formats would raise an error.

Time and Space Complexity:
	- Time Complexity: O(n), where n is the number of tokens.
	- Space Complexity: O(n), due to the stack used for storing numbers during computation.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

const n=`# happy Number

## Problem Statement

Describe the problem statement for **happy Number** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem- Happy Number\r
	A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (which is the ultimate goal) or it loops endlessly in a cycle that does not include 1. Those numbers for which this process ends in 1 are happy numbers.\r
 * So there two results are possible, either process ends in 1 or ends in a loop (loops means a sum that has appeared before has been encountered again)\r
 */\r
\r
function isHappyNumber(n) {\r
\r
// Helper function that calculates the sum of squared digits.\r
function sumOfSquaredDigits(number) {\r
	let totalSum = 0;\r
	while (number > 0) {\r
		let digit = number % 10; // Extract the digit before division\r
		number = Math.floor(number / 10); // Update the number\r
		totalSum += digit ** 2;\r
	}\r
	return totalSum;\r
}\r
\r
let slowPointer = n; \r
let fastPointer = sumOfSquaredDigits(n);\r
\r
while (fastPointer !== 1 && slowPointer !== fastPointer) {\r
	slowPointer = sumOfSquaredDigits(slowPointer);\r
	// fastPointer needs to move twice as fast as the slow pointer to check for a loop/cycle, same as check for a cycle in a linked list logic. Do this until slowPointer !== fastPointer, cos once this is true means same num is encountered again and we come out of the while loop and retun false. Otherwise fastPointer will become 1 and we come out of the while loop, and next If is true and we return true.\r
	fastPointer = sumOfSquaredDigits(sumOfSquaredDigits(fastPointer));\r
}\r
\r
if(fastPointer == 1){\r
	return true		//means it is a happy number\r
}\r
return false\r
}\r
\r
// Driver code\r
function main() {\r
inputs = [1, 5, 19, 25, 7];\r
for (var i = 0; i < inputs.length; i++) {\r
	console.log(i + 1 + ".\\tInput Number:", inputs[i])\r
\r
	var result = (isHappyNumber(inputs[i])) ? "True" : "False"\r
\r
	console.log("\\n\\tIs it a happy number?", result)\r
	console.log("-".repeat(100));\r
}\r
}	  \r
/**\r
 * TC = O(log n) - worst case TC is in case of a non-happy number, since it gets stuck in a cycle; because the number of digits in the number n is log n, so O(log n);\r
 * SC = O(1) (the use of a HashSet (or similar data structure) to store encountered numbers ensures that each number is visited at most once, resulting in an amortized time complexity of O(1) for each lookup)\r
 */\r
\r
// ================================================================================\r
// ================================================================================\r
\r
/**\r
 * Solution from ChatGPT using Sets in JS\r
 */\r
\r
function isHappy(n) {\r
	// Helper function to calculate the sum of the squares of the digits\r
	function getSumOfSquares(num) {\r
	  let sum = 0;\r
	  while (num > 0) {\r
		let digit = num % 10;\r
		sum += digit * digit;\r
		num = Math.floor(num / 10);\r
	  }\r
	  return sum;\r
	}\r
  \r
	// Set to keep track of numbers we have seen\r
	let seen = new Set();\r
  \r
	// Loop to apply the process repeatedly\r
	while (n !== 1 && !seen.has(n)) {\r
	  seen.add(n);\r
	  n = getSumOfSquares(n);\r
	}\r
  \r
	// If n equals 1, it is a happy number\r
	return n === 1;\r
  }\r
  \r
  // Example usage\r
  console.log(isHappy(19)); // Output: true (19 is a happy number)\r
  console.log(isHappy(2));  // Output: false (2 is not a happy number)\r
  
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

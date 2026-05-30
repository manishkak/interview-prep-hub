# happy Number

## Problem Statement

Describe the problem statement for **happy Number** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem- Happy Number
	A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (which is the ultimate goal) or it loops endlessly in a cycle that does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 * So there two results are possible, either process ends in 1 or ends in a loop (loops means a sum that has appeared before has been encountered again)
 */

function isHappyNumber(n) {

// Helper function that calculates the sum of squared digits.
function sumOfSquaredDigits(number) {
	let totalSum = 0;
	while (number > 0) {
		let digit = number % 10; // Extract the digit before division
		number = Math.floor(number / 10); // Update the number
		totalSum += digit ** 2;
	}
	return totalSum;
}

let slowPointer = n; 
let fastPointer = sumOfSquaredDigits(n);

while (fastPointer !== 1 && slowPointer !== fastPointer) {
	slowPointer = sumOfSquaredDigits(slowPointer);
	// fastPointer needs to move twice as fast as the slow pointer to check for a loop/cycle, same as check for a cycle in a linked list logic. Do this until slowPointer !== fastPointer, cos once this is true means same num is encountered again and we come out of the while loop and retun false. Otherwise fastPointer will become 1 and we come out of the while loop, and next If is true and we return true.
	fastPointer = sumOfSquaredDigits(sumOfSquaredDigits(fastPointer));
}

if(fastPointer == 1){
	return true		//means it is a happy number
}
return false
}

// Driver code
function main() {
inputs = [1, 5, 19, 25, 7];
for (var i = 0; i < inputs.length; i++) {
	console.log(i + 1 + ".\tInput Number:", inputs[i])

	var result = (isHappyNumber(inputs[i])) ? "True" : "False"

	console.log("\n\tIs it a happy number?", result)
	console.log("-".repeat(100));
}
}	  
/**
 * TC = O(log n) - worst case TC is in case of a non-happy number, since it gets stuck in a cycle; because the number of digits in the number n is log n, so O(log n);
 * SC = O(1) (the use of a HashSet (or similar data structure) to store encountered numbers ensures that each number is visited at most once, resulting in an amortized time complexity of O(1) for each lookup)
 */

// ================================================================================
// ================================================================================

/**
 * Solution from ChatGPT using Sets in JS
 */

function isHappy(n) {
	// Helper function to calculate the sum of the squares of the digits
	function getSumOfSquares(num) {
	  let sum = 0;
	  while (num > 0) {
		let digit = num % 10;
		sum += digit * digit;
		num = Math.floor(num / 10);
	  }
	  return sum;
	}
  
	// Set to keep track of numbers we have seen
	let seen = new Set();
  
	// Loop to apply the process repeatedly
	while (n !== 1 && !seen.has(n)) {
	  seen.add(n);
	  n = getSumOfSquares(n);
	}
  
	// If n equals 1, it is a happy number
	return n === 1;
  }
  
  // Example usage
  console.log(isHappy(19)); // Output: true (19 is a happy number)
  console.log(isHappy(2));  // Output: false (2 is not a happy number)
  
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

# valid Palindrome

## Problem Statement

Describe the problem statement for **valid Palindrome** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Valid Palindrome
 * Write a function that takes a string 's' as input and checks whether it’s a palindrome or not.
 */

/**
 * Pair of two pointers, where the first pointer is at the starting element of our string while the second pointer is at the end of the string. We move the two pointers towards the middle of the string and, at each step, we compare each element to its counterpart. The moment we encounter a non identical pair, we can return FALSE because our string can’t be a palindrome.
 */

 function isPalindrome(s) {
    let left = 0,
        right = s.length - 1;

    while (left < right) {
		if (s[left] != s[right]) { 
			return false;
		}
		left++;
		right--;
    }
    return true;
}

function main() {
    let testCases = ["RACEACAR", "A", "ABCDEFGFEDCBA",
					"ABC", "ABCBA", "ABBA", "RACEACAR"],
	i = 1;

    testCases.map((s, index) => {
        console.log("Test Case #", i);
        console.log("-".repeat(100));
		console.log(`\tThe input string is '${s}' and the length of the string is ${s.length}.`);
		console.log("\n\tIs it a palindrome?.....", isPalindrome(s));
        console.log("-".repeat(100));
		i++;
    });
}

main();

/**
 * TC = O(n); The time complexity is O(n) where n is the number of characters present in the string.
 * SC = O(1); because we use constant space to store two indices.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

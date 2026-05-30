# Split Linked Listin Parts

## Problem Statement

Describe the problem statement for **Split Linked Listin Parts** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Split Linked List in Parts
 * The "Split Linked List in Parts" problem requires you to split a linked list into k consecutive parts. The length of each part should be as equal as possible. If the linked list has fewer than k nodes, some parts will be empty (null).
 * Example
Given the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 and k = 3, the output should be:
Part 1: 1 -> 2 -> 3 -> 4
Part 2: 5 -> 6 -> 7
Part 3: 8 -> 9 -> 10
 * Approach
		Find the Length of the List: Traverse the linked list to find its length.
		Determine Part Sizes:
			Calculate the base size of each part: partSize = Math.floor(length / k).
			Calculate the number of parts that need an extra node: extraNodes = length % k.
		Split the List:
			Traverse the list again, splitting it into parts with the calculated sizes
 */

function ListNode(val, next = null) {
	this.val = val;
	this.next = next;
}

function splitListToParts(root, k) {
	// Step 1: Find the length of the linked list
	let length = 0;
	let current = root;
	while (current) {
		length++;
		current = current.next;
	}

	// Step 2: Determine the size of each part
	let partSize = Math.floor(length / k);
	let extraNodes = length % k;

	let result = new Array(k).fill(null);
	current = root;

	for (let i = 0; i < k; i++) {
		if (!current) break;

		// Assign the head of the current part
		result[i] = current;
		
		// Determine the current part size
		let currentPartSize = partSize + (extraNodes > 0 ? 1 : 0);
		extraNodes--;

		// Move to the end of the current part
		for (let j = 1; j < currentPartSize; j++) {
			current = current.next;
		}

		// Split the list
		let next = current.next;
		current.next = null;
		current = next;
	}

	return result;
}

/**
 * Time and Space Complexity
Time Complexity: O(n + k), where n is the number of nodes in the linked list. The list is traversed twice: once to determine its length and once to split it into parts.
Space Complexity: O(k), for storing the result array of size k.
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

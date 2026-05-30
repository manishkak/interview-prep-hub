# sort Colors

## Problem Statement

Describe the problem statement for **sort Colors** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/** PROBLEM-> (aka Dutch national flag problem)
 * Given an array, colors, which contains a combination of the following three elements:
 * 0 (representing red)
 * 1 (representing white)
 * 2 (representing blue)
 * Sort the array in place so that the elements of the same color are adjacent, with the colors in the order of red, white, and blue
 */

/** SOLUTION->
 * Declare 3 pointers- start=0,current=0,end= length(colors)-1
 * If colors[current] is 0, 
 * 		swap its value with colors[start] and 
 * 		increment both the current and start pointers
 * Otherwise, if colors[current] is 1, 
 * 		just increment the current pointer
 * Otherwise, colors[current] will be 2, 
 * 		so swap its value with colors[end] and decrement the end pointer
 * Keep iterating until the current pointer exceeds the end pointer
 */

/**
 * The "time complexity" of this solution is O(n) since we’re only traversing the array once
 * The "space complexity" of this solution is O(1) since no extra space is used
 */

function sortColors(colors) {

    let start = 0;    // Declare 3 pointers
    let current = 0;
    let end = colors.length - 1;

    while (current <= end) {
        
        if (colors[current] === 0) {   //If colors[current] is 0

            if (colors[start] !== 0) {
                [colors[start], colors[current]] = [colors[current], colors[start]];   //swap its value with colors[start]
            }

            current++;   //increment both the current and start pointers
            start++;
        }

        else if (colors[current] === 1) {   //if colors[current] is 1
            current++;     //increment the current pointer
        }

        else {

            if (colors[end] !== 2) {      //colors[current] will be 2
				//swap its value with colors[end]
                [colors[current], colors[end]] = [colors[end], colors[current]];
            }

            end--;    //decrement the end pointer
        }
    }

    return colors;
}

// Driver code
const inputs = [
    [0, 1, 0],
    [1, 1, 0, 2],
    [2, 1, 1, 0, 0],
    [2, 2, 2, 0, 1, 0],
    [2, 1, 1, 0, 1, 0, 2]
];

// Iterate over the inputs and print the sorted array for each
for (let i = 0; i < inputs.length; i++) {

    console.log(i + 1 + ".\tcolors:", arrayToString(inputs[i]),
                "\n\n\tThe sorted array is:", arrayToString(sortColors(inputs[i])));

    console.log("-".repeat(100));
}
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

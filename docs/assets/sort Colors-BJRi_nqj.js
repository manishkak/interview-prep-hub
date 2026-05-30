const r=`# sort Colors

## Problem Statement

Describe the problem statement for **sort Colors** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/** PROBLEM-> (aka Dutch national flag problem)\r
 * Given an array, colors, which contains a combination of the following three elements:\r
 * 0 (representing red)\r
 * 1 (representing white)\r
 * 2 (representing blue)\r
 * Sort the array in place so that the elements of the same color are adjacent, with the colors in the order of red, white, and blue\r
 */\r
\r
/** SOLUTION->\r
 * Declare 3 pointers- start=0,current=0,end= length(colors)-1\r
 * If colors[current] is 0, \r
 * 		swap its value with colors[start] and \r
 * 		increment both the current and start pointers\r
 * Otherwise, if colors[current] is 1, \r
 * 		just increment the current pointer\r
 * Otherwise, colors[current] will be 2, \r
 * 		so swap its value with colors[end] and decrement the end pointer\r
 * Keep iterating until the current pointer exceeds the end pointer\r
 */\r
\r
/**\r
 * The "time complexity" of this solution is O(n) since we’re only traversing the array once\r
 * The "space complexity" of this solution is O(1) since no extra space is used\r
 */\r
\r
function sortColors(colors) {\r
\r
    let start = 0;    // Declare 3 pointers\r
    let current = 0;\r
    let end = colors.length - 1;\r
\r
    while (current <= end) {\r
        \r
        if (colors[current] === 0) {   //If colors[current] is 0\r
\r
            if (colors[start] !== 0) {\r
                [colors[start], colors[current]] = [colors[current], colors[start]];   //swap its value with colors[start]\r
            }\r
\r
            current++;   //increment both the current and start pointers\r
            start++;\r
        }\r
\r
        else if (colors[current] === 1) {   //if colors[current] is 1\r
            current++;     //increment the current pointer\r
        }\r
\r
        else {\r
\r
            if (colors[end] !== 2) {      //colors[current] will be 2\r
				//swap its value with colors[end]\r
                [colors[current], colors[end]] = [colors[end], colors[current]];\r
            }\r
\r
            end--;    //decrement the end pointer\r
        }\r
    }\r
\r
    return colors;\r
}\r
\r
// Driver code\r
const inputs = [\r
    [0, 1, 0],\r
    [1, 1, 0, 2],\r
    [2, 1, 1, 0, 0],\r
    [2, 2, 2, 0, 1, 0],\r
    [2, 1, 1, 0, 1, 0, 2]\r
];\r
\r
// Iterate over the inputs and print the sorted array for each\r
for (let i = 0; i < inputs.length; i++) {\r
\r
    console.log(i + 1 + ".\\tcolors:", arrayToString(inputs[i]),\r
                "\\n\\n\\tThe sorted array is:", arrayToString(sortColors(inputs[i])));\r
\r
    console.log("-".repeat(100));\r
}
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};

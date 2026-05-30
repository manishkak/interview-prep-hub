const e=`# repeated DNASequences

## Problem Statement

Describe the problem statement for **repeated DNASequences** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Repeated DNA Sequences\r
/*\r
Given a string s that represents a DNA subsequence, and a number k, return all the contiguous subsequences (substrings) of length k that occur more than once in the string. \r
The order of the returned subsequences does not matter. \r
If no repeated substring is found, the function should return an empty set.\r
\r
Solution-\r
iterate over the k length substrings of the input string\r
store the hash of the current substring to keep track of all unique substrings\r
if the hash of a substring has already been stored, means that the substring is repeated, so we add it to the output\r
when all substrings have been evaluated, return the output\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};

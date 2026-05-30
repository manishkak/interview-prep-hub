# repeated DNASequences

## Problem Statement

Describe the problem statement for **repeated DNASequences** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Repeated DNA Sequences
/*
Given a string s that represents a DNA subsequence, and a number k, return all the contiguous subsequences (substrings) of length k that occur more than once in the string. 
The order of the returned subsequences does not matter. 
If no repeated substring is found, the function should return an empty set.

Solution-
iterate over the k length substrings of the input string
store the hash of the current substring to keep track of all unique substrings
if the hash of a substring has already been stored, means that the substring is repeated, so we add it to the output
when all substrings have been evaluated, return the output
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

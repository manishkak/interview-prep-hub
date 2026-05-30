# Reorganiza String

## Problem Statement

Describe the problem statement for **Reorganiza String** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Given a string, str, rearrange it so that any two adjacent characters are not the same. If such a reorganization of the characters is possible, output any possible valid arrangement. Otherwise, return an empty string.

/*Explanation of the Code:
Frequency Map:

We first count the frequency of each character in the input string using a Map.
Max-Heap:

We sort the character-frequency pairs in descending order based on frequency. This will help us always pick the most frequent character that can be placed.
Feasibility Check:

If the frequency of the most frequent character exceeds (str.length + 1) / 2, it means that the rearrangement is impossible. For example, in a string "aaa", there are too many 'a's to place them without adjacent duplicates.
Rebuilding the String:

We pop the most frequent character, append it to the result, and then push it back into the heap if there are still occurrences left.
To prevent placing the same character next to itself, we alternate between characters and re-sort the heap after each step to ensure we're always adding the most frequent character that hasn't been placed already.
*/
/**
 * TC: O(n log k)
 * SC: O(n), for storing the frequency map and the result string
 */

function reorganizeString(str) {
    // Step 1: Count the frequency of each character
    const freqMap = new Map();
    for (let char of str) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // Step 2: Use a max-heap to store characters by their frequency
    const maxHeap = [];
    for (let [char, freq] of freqMap) {
        maxHeap.push([char, freq]);
    }

    // Sort by frequency in descending order
    maxHeap.sort((a, b) => b[1] - a[1]);

    // Step 3: If the most frequent character appears more than (n + 1) / 2 times, it's impossible
    if (maxHeap[0][1] > Math.floor((str.length + 1) / 2)) {
        return "";
    }

    // Step 4: Reorganize the string
    let result = [];
    while (maxHeap.length > 0) {
        let [char, freq] = maxHeap.shift(); // Get the most frequent character
        result.push(char); // Add it to the result

        // If there are more occurrences of this character, push it back to the heap with updated frequency
        if (freq > 1) {
            maxHeap.push([char, freq - 1]);
        }

        // After placing the most frequent character, make sure the next one is different.
        if (maxHeap.length > 0) {
            let [nextChar, nextFreq] = maxHeap.shift();
            result.push(nextChar);
            if (nextFreq > 1) {
                maxHeap.push([nextChar, nextFreq - 1]);
            }
        }

        // Re-sort the heap after each iteration to always pick the most frequent character
        maxHeap.sort((a, b) => b[1] - a[1]);
    }

    return result.join('');
}

// Example usage:
console.log(reorganizeString("aab")); // "aba" or "bab"
console.log(reorganizeString("aaab")); // ""
console.log(reorganizeString("aabbcc")); // "abcabc" or any valid rearrangement

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

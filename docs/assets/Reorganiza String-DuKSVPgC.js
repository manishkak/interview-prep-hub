const e=`# Reorganiza String

## Problem Statement

Describe the problem statement for **Reorganiza String** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Given a string, str, rearrange it so that any two adjacent characters are not the same. If such a reorganization of the characters is possible, output any possible valid arrangement. Otherwise, return an empty string.\r
\r
/*Explanation of the Code:\r
Frequency Map:\r
\r
We first count the frequency of each character in the input string using a Map.\r
Max-Heap:\r
\r
We sort the character-frequency pairs in descending order based on frequency. This will help us always pick the most frequent character that can be placed.\r
Feasibility Check:\r
\r
If the frequency of the most frequent character exceeds (str.length + 1) / 2, it means that the rearrangement is impossible. For example, in a string "aaa", there are too many 'a's to place them without adjacent duplicates.\r
Rebuilding the String:\r
\r
We pop the most frequent character, append it to the result, and then push it back into the heap if there are still occurrences left.\r
To prevent placing the same character next to itself, we alternate between characters and re-sort the heap after each step to ensure we're always adding the most frequent character that hasn't been placed already.\r
*/\r
/**\r
 * TC: O(n log k)\r
 * SC: O(n), for storing the frequency map and the result string\r
 */\r
\r
function reorganizeString(str) {\r
    // Step 1: Count the frequency of each character\r
    const freqMap = new Map();\r
    for (let char of str) {\r
        freqMap.set(char, (freqMap.get(char) || 0) + 1);\r
    }\r
\r
    // Step 2: Use a max-heap to store characters by their frequency\r
    const maxHeap = [];\r
    for (let [char, freq] of freqMap) {\r
        maxHeap.push([char, freq]);\r
    }\r
\r
    // Sort by frequency in descending order\r
    maxHeap.sort((a, b) => b[1] - a[1]);\r
\r
    // Step 3: If the most frequent character appears more than (n + 1) / 2 times, it's impossible\r
    if (maxHeap[0][1] > Math.floor((str.length + 1) / 2)) {\r
        return "";\r
    }\r
\r
    // Step 4: Reorganize the string\r
    let result = [];\r
    while (maxHeap.length > 0) {\r
        let [char, freq] = maxHeap.shift(); // Get the most frequent character\r
        result.push(char); // Add it to the result\r
\r
        // If there are more occurrences of this character, push it back to the heap with updated frequency\r
        if (freq > 1) {\r
            maxHeap.push([char, freq - 1]);\r
        }\r
\r
        // After placing the most frequent character, make sure the next one is different.\r
        if (maxHeap.length > 0) {\r
            let [nextChar, nextFreq] = maxHeap.shift();\r
            result.push(nextChar);\r
            if (nextFreq > 1) {\r
                maxHeap.push([nextChar, nextFreq - 1]);\r
            }\r
        }\r
\r
        // Re-sort the heap after each iteration to always pick the most frequent character\r
        maxHeap.sort((a, b) => b[1] - a[1]);\r
    }\r
\r
    return result.join('');\r
}\r
\r
// Example usage:\r
console.log(reorganizeString("aab")); // "aba" or "bab"\r
console.log(reorganizeString("aaab")); // ""\r
console.log(reorganizeString("aabbcc")); // "abcabc" or any valid rearrangement\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};

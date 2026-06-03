# Reorganiza String

## Problem Statement

Given a string str, rearrange its characters so that no two adjacent characters are the same. Return any valid rearrangement, or an empty string if it is impossible.

## Examples

- Input: "aab"
- Output: "aba"

- Input: "aaab"
- Output: "" (impossible — too many 'a's)

- Input: "aabbcc"
- Output: "abcabc" (or any valid arrangement)

## Approach

Greedy with a max-heap (simulated by sorting). Always place the most frequent remaining character next, then alternate with the second most frequent.

Steps:
1. Build a frequency map of all characters.
2. If the most frequent character appears more than Math.floor((str.length + 1) / 2) times, return "" — it is impossible to avoid adjacency.
3. Sort the character-frequency pairs by frequency descending (max-heap simulation).
4. At each step: take the most frequent character and append it, then take the second most frequent and append it. Push any character with remaining count back and re-sort.
5. Return the joined result.

## Solution

```js
function reorganizeString(str) {
    const freqMap = new Map();
    for (let char of str) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    const maxHeap = [];
    for (let [char, freq] of freqMap) {
        maxHeap.push([char, freq]);
    }
    maxHeap.sort((a, b) => b[1] - a[1]);

    if (maxHeap[0][1] > Math.floor((str.length + 1) / 2)) {
        return "";
    }

    let result = [];
    while (maxHeap.length > 0) {
        let [char, freq] = maxHeap.shift();
        result.push(char);
        if (freq > 1) maxHeap.push([char, freq - 1]);

        if (maxHeap.length > 0) {
            let [nextChar, nextFreq] = maxHeap.shift();
            result.push(nextChar);
            if (nextFreq > 1) maxHeap.push([nextChar, nextFreq - 1]);
        }

        maxHeap.sort((a, b) => b[1] - a[1]);
    }

    return result.join('');
}

console.log(reorganizeString("aab"));    // "aba"
console.log(reorganizeString("aaab"));   // ""
console.log(reorganizeString("aabbcc")); // "abcabc" or similar
```

## Time Complexity

**O(n log k)** where n is the string length and k is the number of unique characters. Each character is placed once, and sorting the heap (of at most k entries) takes O(k log k) per step.

## Space Complexity

**O(n)** for the frequency map and result array.

## Notes

- The feasibility check (max frequency > (n+1)/2) is the key guard. For a string of length n, the most any single character can appear without causing adjacency conflicts is ceil(n/2).
- LeetCode #767.

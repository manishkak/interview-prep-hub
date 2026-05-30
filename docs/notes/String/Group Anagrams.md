# Group Anagrams

## Problem Statement

Describe the problem statement for **Group Anagrams** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/* Problem: Group Anagrams (LeetCode #49)
    - Given an array of strings, group the anagrams together.
    - Return the result as an array of string arrays.
*/

/**
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
 */

// HINT: Anagrams, when sorted, look the same
// Use that sorted string as a key in a hash map- Key: sorted word, Value: list of original words

/**
 * Your Goal:
    Write a function in JavaScript that:
        - Loops through each word  
        - Sorts the word (to get its anagram key)
        - Uses a hash map to group words by that key
 */

function groupAnagrams(strs) {
    const map = new Map();
  
    for (let word of strs) {
      // sort each word from strs
      const key = word.split('').sort().join(''); // e.g., "eat" -> "aet"
  
      // false → initialize: map.set("aet", [])
      if (!map.has(key)) {
        map.set(key, []); // if the sorted word i.e. key does not exist in the Map then set that key to an empty array
      }
  
      // Push "eat" into map.get("aet")
      map.get(key).push(word); // set that key to a value, and that value is an array with 'word'

    // Map after the first word "eat"-
    //   {
    //     "aet" => ["eat"]
    //   }
    }
  
    return Array.from(map.values());
}
  
/**
 * const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
 * console.log(groupAnagrams(input));
    // Output: [ ["eat", "tea", "ate"], ["tan", "nat"], ["bat"] ]
*/

/*
    TC and SC
    | Metric    | Value            |
    | --------- | ---------------- |
    | **Time**  | `O(n * k log k)` |
    | **Space** | `O(n * k)`       | (You're storing all n words in arrays (grouped), so space grows with total characters)
    n = number of words
    k = average word length
    k log k comes from sorting each word
    1. Looping over all words → O(n)
    2. Sorting each word → O(k log k) (k is the number of characters in the word)
    3. Map operations → O(1) average
    Total = n * O(k log k)
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

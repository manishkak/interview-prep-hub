const n=`# Group Anagrams

## Problem Statement

Describe the problem statement for **Group Anagrams** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/* Problem: Group Anagrams (LeetCode #49)\r
    - Given an array of strings, group the anagrams together.\r
    - Return the result as an array of string arrays.\r
*/\r
\r
/**\r
 * Example:\r
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]\r
 * Output: [["eat","tea","ate"],["tan","nat"],["bat"]]\r
 */\r
\r
// HINT: Anagrams, when sorted, look the same\r
// Use that sorted string as a key in a hash map- Key: sorted word, Value: list of original words\r
\r
/**\r
 * Your Goal:\r
    Write a function in JavaScript that:\r
        - Loops through each word  \r
        - Sorts the word (to get its anagram key)\r
        - Uses a hash map to group words by that key\r
 */\r
\r
function groupAnagrams(strs) {\r
    const map = new Map();\r
  \r
    for (let word of strs) {\r
      // sort each word from strs\r
      const key = word.split('').sort().join(''); // e.g., "eat" -> "aet"\r
  \r
      // false → initialize: map.set("aet", [])\r
      if (!map.has(key)) {\r
        map.set(key, []); // if the sorted word i.e. key does not exist in the Map then set that key to an empty array\r
      }\r
  \r
      // Push "eat" into map.get("aet")\r
      map.get(key).push(word); // set that key to a value, and that value is an array with 'word'\r
\r
    // Map after the first word "eat"-\r
    //   {\r
    //     "aet" => ["eat"]\r
    //   }\r
    }\r
  \r
    return Array.from(map.values());\r
}\r
  \r
/**\r
 * const input = ["eat", "tea", "tan", "ate", "nat", "bat"];\r
 * console.log(groupAnagrams(input));\r
    // Output: [ ["eat", "tea", "ate"], ["tan", "nat"], ["bat"] ]\r
*/\r
\r
/*\r
    TC and SC\r
    | Metric    | Value            |\r
    | --------- | ---------------- |\r
    | **Time**  | \`O(n * k log k)\` |\r
    | **Space** | \`O(n * k)\`       | (You're storing all n words in arrays (grouped), so space grows with total characters)\r
    n = number of words\r
    k = average word length\r
    k log k comes from sorting each word\r
    1. Looping over all words → O(n)\r
    2. Sorting each word → O(k log k) (k is the number of characters in the word)\r
    3. Map operations → O(1) average\r
    Total = n * O(k log k)\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

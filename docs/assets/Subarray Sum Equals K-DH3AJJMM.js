const n=`# Subarray Sum Equals K

## Problem Statement

Describe the problem statement for **Subarray Sum Equals K** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// 📝 Problem Statement:\r
//  Given an array of integers nums and an integer k,\r
//      return the total number of continuous subarrays whose sum equals k.\r
\r
/**\r
 * Input: nums = [1, 1, 1], k = 2  \r
Output: 2  \r
Explanation: [1,1] appears twice\r
 */\r
\r
/**\r
 * Input: nums = [1, 2, 3], k = 3  \r
Output: 2  // [1,2] and [3]\r
 */\r
// Why not sliding window?\r
// Because nums can include negative numbers, the window size isn’t predictable — so we use prefix sum + hashmap, not the window pattern.\r
\r
function subarraySum(nums, k) {\r
    const map = new Map();\r
    map.set(0, 1);  // base case: prefix sum 0 appears once\r
  \r
    let sum = 0;\r
    let count = 0;\r
  \r
    for (let num of nums) {\r
      sum += num;\r
  \r
      // Check if there's a prefix that would make the current window sum to k\r
      if (map.has(sum - k)) {\r
        count += map.get(sum - k);\r
      }\r
  \r
      // Record this prefix sum occurrence\r
      map.set(sum, (map.get(sum) || 0) + 1);\r
    }\r
  \r
    return count;\r
}\r
\r
/**\r
 * Step-by-Step Explanation:\r
    - We keep a running sum (sum) as we go through the array — this is called a prefix sum. \r
    - We use a hash map (map) to store how many times each prefix sum has occurred so far.\r
    - For each number in the array:\r
        - Add it to sum\r
        - Then check: have we ever seen (sum - k)?\r
            - Why? Because if sum - k was seen earlier, the subarray from that point to now adds up to k.\r
        - If yes, add the count of how many times (sum - k) has occurred to our answer.\r
    - Then, store/update this sum in the map, saying “hey, I’ve seen this prefix sum one more time.”\r
    - At the end, the total count will tell you how many valid subarrays exist.\r
 */\r
// To understand better, write this prompt on gpt-\r
// can you run these steps for nums = [1, 2, 3], k = 3\r
\r
// Time & Space Complexity\r
// Time: O(n)\r
// Space: O(n) (for prefix sum map)\r
\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

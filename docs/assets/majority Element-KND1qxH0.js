const n=`# majority Element

## Problem Statement

Describe the problem statement for **majority Element** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem: Given an array nums of size n, return the majority element.\r
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.\r
 */\r
\r
function findMajorityElement(nums) {\r
    let half = nums.length/2;\r
    let hashMap = {};\r
    for(let i = 0; i<nums.length; i++) {\r
        // create a frequency map\r
        hashMap[nums[i]] = (hashMap[nums[i]] | 0) + 1;\r
        if(hashMap[nums[i]] > half) {\r
            return nums[i];\r
        }\r
    }\r
}\r
\r
/**\r
 * TC = O(n), hashMap is used and there is only one loop so 'linear' TC\r
 * SC = O(n), SC for a hashMap is linear\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

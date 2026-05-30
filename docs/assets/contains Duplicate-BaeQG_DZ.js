const n=`# contains Duplicate

## Problem Statement

Describe the problem statement for **contains Duplicate** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * In JavaScript, an object consists of key-value pairs where keys are similar to indexes in an array and \r
 * are unique. If one tries to add a duplicate key with a different value, then the previous value for that\r
 *  key is overwritten by the new value. We use this concept to compare the and find the duplicates.\r
 */\r
\r
// SOLUTION 1->\r
\r
function containsDuplicate(nums) {\r
  let map = {}\r
  for(let i = 0; i< nums.length; i++) {\r
    if(map[nums[i]]) {\r
      return 'duplicate found'\r
    } else {\r
      map[nums[i]] = true\r
    }\r
  }\r
  return 'no duplicates'\r
}\r
\r
console.log(containsDuplicate([-2,-4,-1,-2]))\r
\r
/**\r
 * TC = O(n), \r
 * SC = O(n), \r
 */\r
\r
// SOLUTION 2-> (both 1 & 2 are same, just written differently; if values found in the hashMap then update the flag and say yes array has duplicate, otherwise return false)\r
\r
var containsDuplicate = function(nums) {\r
    let toMap = {};\r
    let resultToReturn = 0;\r
    for (let i = 0; i < nums.length; i++) {\r
\r
        toMap[nums[i]] = (toMap[nums[i]]|0)+1;\r
\r
        if(toMap[nums[i]] > 1) {\r
            resultToReturn = 1;\r
            console.log(true);  // contains duplicate\r
        }\r
    }\r
\r
\r
        if (resultToReturn == 0) {\r
            console.log(false); // no duplicate\r
        }\r
}\r
\r
containsDuplicate([1,2,8,3,7]);\r
\r
/**\r
 * TC = O(n), \r
 * SC = O(n), \r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

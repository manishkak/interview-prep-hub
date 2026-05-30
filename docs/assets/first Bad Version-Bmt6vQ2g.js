const n=`# first Bad Version

## Problem Statement

Describe the problem statement for **first Bad Version** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * First Bad Version\r
 * You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.\r
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.\r
 * You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.\r
 */\r
\r
/**\r
 * Educative Solution - https://www.educative.io/module/page/k5m3gACoNZE7BMp8m/10370001/5724100263411712/6451719632060416\r
 * \r
 * TC: O(log n)\r
 * SC: O(1)\r
 */\r
\r
// Mental solution (1 line):\r
// If mid is bad, answer could be there or left; otherwise search right.\r
\r
// Mock implementation of isBadVersion API\r
function isBadVersion(version) {\r
    const firstBad = 4; // Example: version 4 is the first bad version\r
    return version >= firstBad; // meaning return true for version 4 and above, false for versions below 4\r
}\r
\r
// Solution function that returns the first bad version finder\r
function firstBadVersion(n) {\r
    let start = 1, end = n;\r
    let firstBad = n; // default in case all are bad\r
\r
    while (start <= end) {\r
        let mid = Math.floor((start + end) / 2);\r
        if (isBadVersion(mid)) {    // meaning if mid is bad, the first bad version is at mid or to the left of mid\r
            firstBad = mid;    // potential first bad, we save it but we continue searching to the left to find if there is an earlier bad version (just like in find first and last occurrence problems)\r
            end = mid - 1;     // search left\r
        } else {\r
            start = mid + 1;   // search right\r
        }\r
    }\r
\r
    return firstBad;\r
}\r
\r
// Example usage\r
const n = 10; // Total versions\r
const result = firstBadVersion(n);\r
console.log("First bad version is:", result); // Output: 4\r
\r
\r
// ===\r
// ===\r
\r
\r
// Solution 1 -> https://dev.to/cod3pineapple/leetcode-278-first-bad-version-javascript-solution-4em2\r
var solution = function(isBadVersion) {\r
    /**\r
     * @param {integer} n Total versions\r
     * @return {integer} The first bad version\r
     */\r
    return function(n) {\r
        // Min left start is 1\r
        let left = 1, right = n\r
        while(left < right) {\r
            const mid = left + Math.floor((right-left)/2)\r
            // if mid = the bad version, then right = mid else left++\r
            if(isBadVersion(mid)) {\r
                right = mid\r
            } else {\r
                left = mid + 1\r
            }\r
        }\r
        return left\r
    };\r
};\r
\r
/**\r
 * Time Complexity : O(log(n))\r
 * Space Complexity: O(1)\r
 */\r
\r
// Solution 2 -> https://dev.to/tanvirrahman/can-you-solve-it-js-day-10-54a5\r
const solution = (isBadVersion) => {\r
    return n => {\r
      let left = 0;\r
      let right = n;\r
\r
      while(left <= right){\r
        let mid = parseInt((left+right)/2)\r
        let version = isBadVersion(mid);\r
        if(version !== isBadVersion(mid+1)){\r
           return mid+1\r
        }else if(version === false){\r
          left = mid+1\r
        }else{\r
          right = mid-1\r
        }\r
      }\r
    };\r
};\r
\r
/**\r
 * Time Complexity : O(log(n))\r
 * Space Complexity: O(1)\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

# first Bad Version

## Problem Statement

Describe the problem statement for **first Bad Version** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * First Bad Version
 * You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
 * You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
 */

/**
 * Educative Solution - https://www.educative.io/module/page/k5m3gACoNZE7BMp8m/10370001/5724100263411712/6451719632060416
 * 
 * TC: O(log n)
 * SC: O(1)
 */

// Mental solution (1 line):
// If mid is bad, answer could be there or left; otherwise search right.

// Mock implementation of isBadVersion API
function isBadVersion(version) {
    const firstBad = 4; // Example: version 4 is the first bad version
    return version >= firstBad; // meaning return true for version 4 and above, false for versions below 4
}

// Solution function that returns the first bad version finder
function firstBadVersion(n) {
    let start = 1, end = n;
    let firstBad = n; // default in case all are bad

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (isBadVersion(mid)) {    // meaning if mid is bad, the first bad version is at mid or to the left of mid
            firstBad = mid;    // potential first bad, we save it but we continue searching to the left to find if there is an earlier bad version (just like in find first and last occurrence problems)
            end = mid - 1;     // search left
        } else {
            start = mid + 1;   // search right
        }
    }

    return firstBad;
}

// Example usage
const n = 10; // Total versions
const result = firstBadVersion(n);
console.log("First bad version is:", result); // Output: 4


// ===
// ===


// Solution 1 -> https://dev.to/cod3pineapple/leetcode-278-first-bad-version-javascript-solution-4em2
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // Min left start is 1
        let left = 1, right = n
        while(left < right) {
            const mid = left + Math.floor((right-left)/2)
            // if mid = the bad version, then right = mid else left++
            if(isBadVersion(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return left
    };
};

/**
 * Time Complexity : O(log(n))
 * Space Complexity: O(1)
 */

// Solution 2 -> https://dev.to/tanvirrahman/can-you-solve-it-js-day-10-54a5
const solution = (isBadVersion) => {
    return n => {
      let left = 0;
      let right = n;

      while(left <= right){
        let mid = parseInt((left+right)/2)
        let version = isBadVersion(mid);
        if(version !== isBadVersion(mid+1)){
           return mid+1
        }else if(version === false){
          left = mid+1
        }else{
          right = mid-1
        }
      }
    };
};

/**
 * Time Complexity : O(log(n))
 * Space Complexity: O(1)
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

# Minimum Window Substring

## Problem Statement

Describe the problem statement for **Minimum Window Substring** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Minimum Window Substring

/**
 * Problem Statement:
        - Given two strings s and t, return the smallest substring in s that contains all the characters of t (including duplicates).
        - If there is no such substring, return an empty string "".
*/

/**
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 */

/*
We’re looking for the minimum-length window in s that contains all chars from t.
                - As we move right, we expand the window to include all required chars.
                - When valid (contains all t chars), we shrink from left to find the smallest possible valid window.
👉 This is a variable-size sliding window problem.
*/

/*Quick variable summary (so you don’t forget):
need: freq map for t (what we must have).
window: freq map for current window in s.
needCount: how many distinct chars t requires.
have: how many of those distinct chars are currently satisfied in window.
left, right: window boundaries.
minLen, res: best window tracking.*/

// Step-by-step approach
// 1️⃣ Count the required characters
// Use a frequency map of characters in t (because duplicates matter):
// t = "ABC" → need = { A:1, B:1, C:1 }

// 2️⃣ Use two pointers (left, right) to slide over s
// Expand right to include more characters.
// Track how many required characters are fulfilled in the current window.
// When all are fulfilled, try to shrink left to minimize the window.

// 3️⃣ Keep track of the smallest valid window

function minWindow(s, t) {
  if (t.length > s.length) return "";

  const need = new Map();
  for (let char of t) need.set(char, (need.get(char) || 0) + 1);

  const window = new Map();
  let have = 0;
  const needCount = need.size;

  let left = 0;
  let minLen = Infinity;
  let res = [-1, -1];

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    window.set(c, (window.get(c) || 0) + 1);

    // if char count matches what we need
    if (need.has(c) && window.get(c) === need.get(c)) {
      have++;
    }

    // when window valid, try to shrink
    while (have === needCount) {
      // update smallest window
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        res = [left, right];
      }

      // shrink from left
      const leftChar = s[left];
      window.set(leftChar, window.get(leftChar) - 1);
      if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
        have--;
      }
      left++;
    }
  }

  const [start, end] = res;
  return minLen === Infinity ? "" : s.slice(start, end + 1);
}

console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

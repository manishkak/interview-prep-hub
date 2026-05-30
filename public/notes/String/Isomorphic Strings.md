# Isomorphic Strings

## Problem Statement

Describe the problem statement for **Isomorphic Strings** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem Statement:
    Given two strings s and t, determine if they are isomorphic.
    Two strings are isomorphic if the characters in s can be replaced to get t.

    Each character in s must map to a unique character in t — but the order must stay.

    Input: s = "egg", t = "add"
    Output: true
    Input: s = "foo", t = "bar"
    Output: false
    Input: s = "paper", t = "title"
    Output: true; but paepr and title are not isomorphic cos the order is wrong.
 */
/**
 * 🧠 Steps:
Step 1: If s.length !== t.length, return false
Step 2: Create two maps: sToT, tToS
Step 3: Loop through the strings
If s[i] already mapped to something different → return false
If t[i] already mapped to something different → return false
Else, create both mappings
Step 4: If loop completes, return true
 */
// ✅ JavaScript Code:

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const mapST = new Map(); // s → t
  const mapTS = new Map(); // t → s

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // Check existing mapping s → t
    if (mapST.has(charS) && mapST.get(charS) !== charT) {
      return false;
    }

    // Check existing mapping t → s
    if (mapTS.has(charT) && mapTS.get(charT) !== charS) {
      return false;
    }

    // Create the mapping
    mapST.set(charS, charT);
    mapTS.set(charT, charS);
  }

  return true;
}


// 🧪 Test Cases:

console.log(isIsomorphic("egg", "add"));    // true
console.log(isIsomorphic("foo", "bar"));    // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("paepr", "title")); // false (your case)

// ⏱️ Time & Space Complexity

// Time:** O(n) — one pass through strings
// Space:** O(n) — for two hash maps (one-to-one mapping)
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

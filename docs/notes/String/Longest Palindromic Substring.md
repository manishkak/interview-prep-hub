# Longest Palindromic Substring

## Problem Statement

Describe the problem statement for **Longest Palindromic Substring** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
Perfect — let’s go line-by-line 👇
We’ll break down the **JS expand-around-center solution** for *Longest Palindromic Substring* in the simplest way possible.

---

### 🧩 The Code

```js
function longestPalindrome(s) {
  if (s.length < 2) return s;

  let start = 0, end = 0;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1];
  }

  for (let i = 0; i < s.length; i++) {
    let [l1, r1] = expandAroundCenter(i, i);
    let [l2, r2] = expandAroundCenter(i, i + 1);

    if (r1 - l1 > end - start) [start, end] = [l1, r1];
    if (r2 - l2 > end - start) [start, end] = [l2, r2];
  }

  return s.substring(start, end + 1);
}
```

---

### 🧠 Let’s explain line-by-line

#### Step 1:

```js
if (s.length < 2) return s;
```

If the string has 0 or 1 characters, it’s **already a palindrome**, so just return it.

---

#### Step 2:

```js
let start = 0, end = 0;
```

We’ll store the **start** and **end indices** of the *longest palindrome* found so far.

Initially, the longest palindrome is just the first character.

---

#### Step 3: helper function

```js
function expandAroundCenter(left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return [left + 1, right - 1];
}
```

🧩 What this does:

* We try to **expand outward** as long as the characters at both ends are equal.
* Example: `"aba"`

  * left = 1, right = 1 (center `'b'`)
  * expands → left = 0, right = 2, because `s[0] == s[2] == 'a'`
  * stops when we go out of bounds or mismatch
* When we stop, `left` and `right` are **one step outside** the palindrome.

  * So we return `[left + 1, right - 1]` → actual palindrome bounds.

---

#### Step 4:

```js
for (let i = 0; i < s.length; i++) {
```

We will treat each character (and each *gap* between characters) as a potential **center** of a palindrome.

---

#### Step 5:

```js
let [l1, r1] = expandAroundCenter(i, i);
let [l2, r2] = expandAroundCenter(i, i + 1);
```

We check **two cases** at each index:

1. `(i, i)` → **odd-length** palindrome (like `"aba"`)
2. `(i, i + 1)` → **even-length** palindrome (like `"abba"`)

---

#### Step 6:

```js
if (r1 - l1 > end - start) [start, end] = [l1, r1];
if (r2 - l2 > end - start) [start, end] = [l2, r2];
```

After each expansion:

* We calculate the palindrome’s length (`r - l`)
* If it’s longer than the previously stored one, update `start` and `end`.

---

#### Step 7:

```js
return s.substring(start, end + 1);
```

Extract and return the substring between `start` and `end` (inclusive).

---

### 🧮 Dry Run Example

`s = "babad"`

#### i = 0

* Odd: expand(0,0) → `"b"`
* Even: expand(0,1) → `""`
* longest = `"b"`

#### i = 1

* Odd: expand(1,1) → `"bab"`
* Even: expand(1,2) → `""`
* longest = `"bab"`

#### i = 2

* Odd: expand(2,2) → `"aba"`
* Even: expand(2,3) → `""`
* `"aba"` length 3 = `"bab"` length 3 → keep first found `"bab"`

#### i = 3, 4

* Palindromes are smaller (`"a"`, `"d"`)

✅ **Final output:** `"bab"`

---

### ⏱️ Complexity

| Metric    | Complexity                          |
| --------- | ----------------------------------- |
| **Time**  | O(n²) – we expand from every center |
| **Space** | O(1) – no extra structures          |

---

Would you like me to show a **visual expansion trace** for `"babad"` (with arrows showing how `left` and `right` move step-by-step)? It makes it click instantly.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

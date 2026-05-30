# Insert Delete Get Random

## Problem Statement

Describe the problem statement for **Insert Delete Get Random** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Insert Delete GetRandom O(1) — LeetCode #380
 * ### Insert Delete GetRandom O(1) — LeetCode #380

**Problem statement**
Design a data structure that supports the following operations in **average O(1) time**:

1. **insert(val)** → Inserts `val` if it doesn’t already exist. Returns `true` if inserted, `false` otherwise.
2. **remove(val)** → Removes `val` if it exists. Returns `true` if removed, `false` otherwise.
3. **getRandom()** → Returns a random element from the current set, with **equal probability**.

---

### Why this problem is tricky

* Arrays give **O(1) getRandom**, but **O(n) delete**.
* HashMaps give **O(1) insert/delete**, but **no random access**.

The trick is to **combine both**.

---

### Core Idea (the only way this works)

Use **two data structures together**:

1. **Array (`arr`)** → stores values for O(1) random access
2. **Map (`map`)** → stores `value → index in arr` for O(1) lookup

---

### How each operation stays O(1)

#### 1️⃣ insert(val)

* If `val` exists in `map` → return `false`
* Otherwise:

  * Push `val` into `arr`
  * Store `map[val] = arr.length - 1`
* Return `true`

#### 2️⃣ remove(val)

To remove in O(1), **never shift the array**.

Steps:

1. Get index of `val` from `map`
2. Take the **last element** in `arr`
3. Swap last element with `val`
4. Update the moved element’s index in `map`
5. Pop last element
6. Delete `val` from `map`

This avoids O(n) shifting.

#### 3️⃣ getRandom()

* Generate random index `0 → arr.length - 1`
* Return `arr[randomIndex]`

---

### JavaScript Implementation
*/

class RandomizedSet {
  constructor() {
    this.arr = [];
    this.map = new Map();
  }

  insert(val) {
    if (this.map.has(val)) return false;

    this.arr.push(val);                         // Push val into arr (at the end)
    this.map.set(val, this.arr.length - 1);     // Map val to its index in arr (cos val is at the end of arr ie. at arr.length - 1)
    return true;
  }

  remove(val) {
    if (!this.map.has(val)) return false;

    const idx = this.map.get(val);                  // from map, get index of val in arr
    const lastVal = this.arr[this.arr.length - 1];  // get last value in arr

    // swap with last
    this.arr[idx] = lastVal;                        // put lastVal in place of val to be removed
    this.map.set(lastVal, idx);                     // update map with new index of lastVal

    // remove last
    this.arr.pop();
    this.map.delete(val);

    return true;
  }

  getRandom() {
    const randIdx = Math.floor(Math.random() * this.arr.length);    // Generate random index between 0 and arr.length - 1
    /* Math.random() returns a floating-point number between 0 (inclusive) and 1 (exclusive).
    Example outputs: 0.0, 0.237, 0.9999, but never 1 */
    return this.arr[randIdx];
  }
}

/*
---

### Complexity

* **insert:** O(1)
* **remove:** O(1)
* **getRandom:** O(1)
* **Space:** O(n)

---

### Memory hook (important)

> **Array gives randomness, Map gives location, swap-with-last avoids shifting.**

If you remember that sentence, you can rebuild the solution from scratch.

This is a **design + data-structure thinking problem**, not backtracking or DP, and is a common interview favorite exactly because it tests this hybrid idea.

 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

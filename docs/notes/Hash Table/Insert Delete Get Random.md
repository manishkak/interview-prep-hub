# Insert Delete Get Random

## Problem Statement

Design a data structure that supports the following three operations each in average O(1) time:

1. insert(val) — inserts val into the set if not already present. Returns true if inserted, false otherwise.
2. remove(val) — removes val from the set if present. Returns true if removed, false otherwise.
3. getRandom() — returns a random element from the current set, with every element having equal probability.

## Examples

- insert(1) → true, insert(2) → true, insert(2) → false (already exists)
- remove(1) → true, remove(3) → false (not present)
- getRandom() → returns either 1 or 2 with equal probability

## Approach

Neither an array alone nor a map alone can satisfy all three constraints:
- Arrays give O(1) random access but O(n) deletion (requires shifting).
- Maps give O(1) insert/delete but no random index access.

The trick is to combine both:
- An array stores the values for O(1) random index access.
- A map stores value → index in array for O(1) lookup.

The critical insight for O(1) deletion is the swap-with-last technique: instead of removing an element and shifting the array, swap the target element with the last element, update the last element's index in the map, then pop the end of the array. This avoids any shifting.

Operations:
- insert: push to array, map the value to its index (arr.length - 1).
- remove: get index of val, swap with last element, update map for the moved element, pop array, delete val from map.
- getRandom: return arr[random index from 0 to arr.length - 1].

## Solution

```js
class RandomizedSet {
  constructor() {
    this.arr = [];
    this.map = new Map();
  }

  insert(val) {
    if (this.map.has(val)) return false;

    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
  }

  remove(val) {
    if (!this.map.has(val)) return false;

    const idx = this.map.get(val);
    const lastVal = this.arr[this.arr.length - 1];

    this.arr[idx] = lastVal;
    this.map.set(lastVal, idx);

    this.arr.pop();
    this.map.delete(val);

    return true;
  }

  getRandom() {
    const randIdx = Math.floor(Math.random() * this.arr.length);
    return this.arr[randIdx];
  }
}
```

## Time Complexity

**O(1) average** for all three operations — insert, remove, and getRandom each perform a constant number of array and map operations.

## Space Complexity

**O(n)** where n is the number of elements currently in the set, for the array and map combined.

## Notes

- Memory hook: array gives randomness, map gives location, swap-with-last avoids shifting.
- Edge case in remove: if the element being removed is already the last element, the swap is a no-op but the code still works correctly.
- LeetCode #380.

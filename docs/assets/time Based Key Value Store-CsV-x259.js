const e=`\uFEFF# time Based Key Value Store

## Problem Statement

Design a time-based key-value store that supports storing multiple values for the same key at different timestamps. Given a key and timestamp, retrieve the value set for that key at the most recent timestamp less than or equal to the given timestamp. Timestamps are strictly increasing.

## Examples

- set("foo", "bar", 1), set("foo", "baz", 4)
  get("foo", 1) → "bar"
  get("foo", 3) → "bar" (most recent <= 3)
  get("foo", 4) → "baz"

## Approach

- Use HashMap to map key → list of [timestamp, value] pairs.
- Values for each key are stored in sorted order by timestamp.
- On get, use binary search to find the largest timestamp <= given timestamp.
- Return value at that timestamp, or empty string if no timestamp <= given.

## Solution

\`\`\`js
class TimeMap {
  constructor() {
    this.map = new Map();
  }
  
  set(key, value, timestamp) {
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }
    this.map.get(key).push([timestamp, value]);
  }
  
  get(key, timestamp) {
    if (!this.map.has(key)) return "";
    
    const values = this.map.get(key);
    let left = 0, right = values.length - 1;
    let result = "";
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (values[mid][0] <= timestamp) {
        result = values[mid][1];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return result;
  }
}

const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
timeMap.set("foo", "baz", 4);
console.log(timeMap.get("foo", 1)); // "bar"
console.log(timeMap.get("foo", 3)); // "bar"
console.log(timeMap.get("foo", 4)); // "baz"
\`

## Time Complexity

- set: O(1) append operation
- get: O(log n) where n is number of values for that key

## Space Complexity

- O(n * m) where n is number of unique keys, m is average values per key

## Notes

- Timestamps are strictly increasing per key (ensures sorted order).
- Binary search finds the rightmost timestamp <= query timestamp.
- When timestamps exactly match, return that value immediately.
- Handle case where no timestamp exists (return empty string).
- TreeMap or similar structure would provide automatic sorting in other languages.\r
\r
\r
`;export{e as default};

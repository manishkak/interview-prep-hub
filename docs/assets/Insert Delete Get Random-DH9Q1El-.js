const r=`# Insert Delete Get Random

## Problem Statement

Describe the problem statement for **Insert Delete Get Random** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Insert Delete GetRandom O(1) — LeetCode #380\r
 * ### Insert Delete GetRandom O(1) — LeetCode #380\r
\r
**Problem statement**\r
Design a data structure that supports the following operations in **average O(1) time**:\r
\r
1. **insert(val)** → Inserts \`val\` if it doesn’t already exist. Returns \`true\` if inserted, \`false\` otherwise.\r
2. **remove(val)** → Removes \`val\` if it exists. Returns \`true\` if removed, \`false\` otherwise.\r
3. **getRandom()** → Returns a random element from the current set, with **equal probability**.\r
\r
---\r
\r
### Why this problem is tricky\r
\r
* Arrays give **O(1) getRandom**, but **O(n) delete**.\r
* HashMaps give **O(1) insert/delete**, but **no random access**.\r
\r
The trick is to **combine both**.\r
\r
---\r
\r
### Core Idea (the only way this works)\r
\r
Use **two data structures together**:\r
\r
1. **Array (\`arr\`)** → stores values for O(1) random access\r
2. **Map (\`map\`)** → stores \`value → index in arr\` for O(1) lookup\r
\r
---\r
\r
### How each operation stays O(1)\r
\r
#### 1️⃣ insert(val)\r
\r
* If \`val\` exists in \`map\` → return \`false\`\r
* Otherwise:\r
\r
  * Push \`val\` into \`arr\`\r
  * Store \`map[val] = arr.length - 1\`\r
* Return \`true\`\r
\r
#### 2️⃣ remove(val)\r
\r
To remove in O(1), **never shift the array**.\r
\r
Steps:\r
\r
1. Get index of \`val\` from \`map\`\r
2. Take the **last element** in \`arr\`\r
3. Swap last element with \`val\`\r
4. Update the moved element’s index in \`map\`\r
5. Pop last element\r
6. Delete \`val\` from \`map\`\r
\r
This avoids O(n) shifting.\r
\r
#### 3️⃣ getRandom()\r
\r
* Generate random index \`0 → arr.length - 1\`\r
* Return \`arr[randomIndex]\`\r
\r
---\r
\r
### JavaScript Implementation\r
*/\r
\r
class RandomizedSet {\r
  constructor() {\r
    this.arr = [];\r
    this.map = new Map();\r
  }\r
\r
  insert(val) {\r
    if (this.map.has(val)) return false;\r
\r
    this.arr.push(val);                         // Push val into arr (at the end)\r
    this.map.set(val, this.arr.length - 1);     // Map val to its index in arr (cos val is at the end of arr ie. at arr.length - 1)\r
    return true;\r
  }\r
\r
  remove(val) {\r
    if (!this.map.has(val)) return false;\r
\r
    const idx = this.map.get(val);                  // from map, get index of val in arr\r
    const lastVal = this.arr[this.arr.length - 1];  // get last value in arr\r
\r
    // swap with last\r
    this.arr[idx] = lastVal;                        // put lastVal in place of val to be removed\r
    this.map.set(lastVal, idx);                     // update map with new index of lastVal\r
\r
    // remove last\r
    this.arr.pop();\r
    this.map.delete(val);\r
\r
    return true;\r
  }\r
\r
  getRandom() {\r
    const randIdx = Math.floor(Math.random() * this.arr.length);    // Generate random index between 0 and arr.length - 1\r
    /* Math.random() returns a floating-point number between 0 (inclusive) and 1 (exclusive).\r
    Example outputs: 0.0, 0.237, 0.9999, but never 1 */\r
    return this.arr[randIdx];\r
  }\r
}\r
\r
/*\r
---\r
\r
### Complexity\r
\r
* **insert:** O(1)\r
* **remove:** O(1)\r
* **getRandom:** O(1)\r
* **Space:** O(n)\r
\r
---\r
\r
### Memory hook (important)\r
\r
> **Array gives randomness, Map gives location, swap-with-last avoids shifting.**\r
\r
If you remember that sentence, you can rebuild the solution from scratch.\r
\r
This is a **design + data-structure thinking problem**, not backtracking or DP, and is a common interview favorite exactly because it tests this hybrid idea.\r
\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};

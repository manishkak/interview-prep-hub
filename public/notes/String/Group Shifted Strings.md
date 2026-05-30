# Group Shifted Strings

## Problem Statement

Describe the problem statement for **Group Shifted Strings** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
// Group Shifted Strings

/**
 * Given a list of strings, group all shifted strings together.
 * Two strings are considered shifted if:
 *      The difference between every adjacent character is the same.
 *      Wraparound from 'z' → 'a' is allowed.
 */
// We’ll use a hash map where the key is a string's "shift pattern", and the value is a list of strings with that same pattern.

function groupStrings(strings) {
    const map = new Map();
  
    for (let str of strings) {
      let key = "";
  
      for (let i = 1; i < str.length; i++) {
        // Difference between current and previous char (mod 26)
        const diff = (str.charCodeAt(i) - str.charCodeAt(i - 1) + 26) % 26;
        key += diff + ",";
      }
  
      // Group by shift pattern
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(str);
    }
    return Array.from(map.values());
}
/**
## 📦 Input:

```js
strings = ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]
```

We use a `Map` where:

* **Key** = the shift pattern (e.g., `"1,1,"`)
* **Value** = array of strings with that pattern

---

## 🧮 Step-by-Step Dry Run:

### 🔹 1. `"abc"`

Loop from i=1:

* `'b' - 'a'` → `(98 - 97 + 26) % 26 = 1`
* `'c' - 'b'` → `(99 - 98 + 26) % 26 = 1`

Key = `"1,1,"`
Map:

```js
{ "1,1,": ["abc"] }
```

---

### 🔹 2. `"bcd"`

* `'c' - 'b'` → 1
* `'d' - 'c'` → 1

Key = `"1,1,"`
Map:

```js
{ "1,1,": ["abc", "bcd"] }
```

---

### 🔹 3. `"acef"`

* `'c' - 'a'` → 2
* `'e' - 'c'` → 2
* `'f' - 'e'` → 1

Key = `"2,2,1,"`
Map:

```js
{
  "1,1,": ["abc", "bcd"],
  "2,2,1,": ["acef"]
}
```

---

### 🔹 4. `"xyz"`

* `'y' - 'x'` → 1
* `'z' - 'y'` → 1

Key = `"1,1,"`
Map:

```js
{
  "1,1,": ["abc", "bcd", "xyz"],
  "2,2,1,": ["acef"]
}
```

---

### 🔹 5. `"az"`

* `'z' - 'a'` → `(122 - 97 + 26) % 26 = 25`

Key = `"25,"`
Map:

```js
{
  "1,1,": ["abc", "bcd", "xyz"],
  "2,2,1,": ["acef"],
  "25,": ["az"]
}
```

---

### 🔹 6. `"ba"`

* `'a' - 'b'` → `(97 - 98 + 26) % 26 = 25`

Key = `"25,"`
Map:

```js
{
  "1,1,": ["abc", "bcd", "xyz"],
  "2,2,1,": ["acef"],
  "25,": ["az", "ba"]
}
```

---

### 🔹 7. `"a"`

Single letter → no differences → key = `""`

Map:

```js
{
  "1,1,": ["abc", "bcd", "xyz"],
  "2,2,1,": ["acef"],
  "25,": ["az", "ba"],
  "": ["a"]
}
```

---

### 🔹 8. `"z"`

Same — single letter → key = `""`

Final Map:

```js
{
  "1,1,": ["abc", "bcd", "xyz"],
  "2,2,1,": ["acef"],
  "25,": ["az", "ba"],
  "": ["a", "z"]
}
```

---

### ✅ Output:

```js
[
  ["abc", "bcd", "xyz"],
  ["acef"],
  ["az", "ba"],
  ["a", "z"]
]
```

 */

// Input = ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]

/**
[
  ["abc", "bcd", "xyz"],
  ["acef"],
  ["az", "ba"],
  ["a", "z"]
]
 */

/**
 * Time & Space Complexity:
 * Time: O(N * L)
        N = number of strings, L = average length of each string
 * Space: O(N * L) → for storing the map and final groups
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

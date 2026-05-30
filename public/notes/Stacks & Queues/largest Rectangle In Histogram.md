# largest Rectangle In Histogram

## Problem Statement

Describe the problem statement for **largest Rectangle In Histogram** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*✅ **Problem Statement**

You are given an array `heights[]` representing the heights of bars in a histogram where each bar has width **1**.
Find the **area of the largest rectangle** that can be formed within the histogram.

**Example:**/

```javascript
Input: heights = [2, 1, 5, 6, 2, 3]
Output: 10
Explanation: The largest rectangle is formed by bars with heights 5 and 6 (width = 2), area = 5*2 = 10.
```

/*### ✅ **Brute Force Approach (O(n²))**

* For every bar, expand left and right to find how far you can extend while the bars are **≥ current height**.
* Calculate area for each and take max.
* **Time Complexity:** O(n²) → too slow for large inputs.

---

### ✅ **Optimal Approach (O(n) using Stack)**

This is where stacks shine!
The trick:

* Use a **monotonic increasing stack** to store bar indices.
* When you find a bar **smaller than the top of the stack**, it means the rectangle for the top bar has ended.
* Pop from stack and calculate area using the popped height as the smallest bar.

**Steps:**

1. Initialize an empty stack.
2. Iterate over bars:

   * While `stack` is not empty **and** `heights[current] < heights[stack.top()]`:

     * Pop the top index → `height = heights[top]`.
     * Compute width:

       * If stack empty → width = current index `i`
       * Else → width = `i - stack.top() - 1`
     * Compute area = `height * width` and update max.
   * Push current index to stack.
3. After loop, clear stack using same logic.
4. Return max area.

---

### ✅ **Visualization**

For `[2, 1, 5, 6, 2, 3]`:

* Push 0 → \[0]
* Next 1 < 2 → pop 0 → width=1 → area=2
* Push 1 → \[1]
* Push 2 → \[1,2]
* Push 3 → \[1,2,3]
* Next 2 < 6 → pop 3 → area=6
* Next 2 < 5 → pop 2 → area=10 ✅
* Push 4 → \[1,4]
* Push 5 → \[1,4,5]

---

### ✅ **JavaScript Implementation**/

```javascript
function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;
    
    for (let i = 0; i <= heights.length; i++) {
        let currentHeight = (i === heights.length) ? 0 : heights[i];
        
        while (stack.length && currentHeight < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        
        stack.push(i);
    }
    
    return maxArea;
}

// Example
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // Output: 10
```

---

✔ **Time Complexity:** O(n) (each bar pushed and popped at most once)
✔ **Space Complexity:** O(n) (stack)

---

Do you want me to also give you:
✅ A **step-by-step dry run** for `[2,1,5,6,2,3]` so you can explain in an interview?
✅ And a **structured explanation like you're telling an interviewer**?

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

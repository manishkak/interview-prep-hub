# monotonic Stack

## Problem Statement

Describe the problem statement for **monotonic Stack** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
Let’s go deep into **monotonic stacks** — what they are, how they work, and how you can *see* the logic instead of memorizing code.

---

## 🧠 1️⃣ What is a Monotonic Stack?

A **monotonic stack** is a stack (LIFO structure) that is **always sorted in one direction** — either **increasing** or **decreasing**, depending on the problem.

“Monotonic” just means “one-way” — it either never goes up or never goes down.

---

### ✳️ Two main types

| Type                           | Stack Order                  | Used For                      |
| ------------------------------ | ---------------------------- | ----------------------------- |
| **Monotonic Increasing Stack** | bottom → top: **increasing** | find **next smaller** element |
| **Monotonic Decreasing Stack** | bottom → top: **decreasing** | find **next greater** element |

---

### Example:

Let’s say we are building a **monotonic decreasing stack** (used in Next Greater Element).

As we go through the array:

* When we see a **bigger** number than the top of stack → we pop smaller ones out.
* This ensures the stack’s top is always the *most recent number that’s larger than everything below it.*

---

## 🧩 2️⃣ Why is it useful?

Many problems want you to find the **next greater** or **next smaller** element:

* “Next Greater Element”
* “Stock Span”
* “Daily Temperatures”
* “Trapping Rain Water”
* “Largest Rectangle in Histogram”

Instead of scanning to the right for every element (O(n²)),
the stack helps track *which elements are waiting for a greater/smaller one*,
so the entire thing becomes **O(n)**.

---

## 🔍 3️⃣ Intuitive Explanation — “People in a Queue” Analogy

Imagine each number in the array is a **person with height** standing in a line.

You (the algorithm) move from **left to right**, and each new person looks at the line behind them:

* If the new person is **taller** than people behind them →
  those shorter people’s “next taller person” is found (the current one).
  So they leave the queue (we pop them).

* If the new person is **shorter**, they wait for someone taller to come (we push them).

This is literally what the `while` condition does:

```js
while (stack.length > 0 && nums[i] > nums[stack[top]]) {
    const shorter = stack.pop();
    result[shorter] = nums[i];
}
```

---

## ⚙️ 4️⃣ Core Mechanism (Decreasing Stack – for “Next Greater Element”)

We keep the stack **monotonically decreasing** — meaning top always smaller or equal than below.

Algorithm:

1. Traverse array from left to right.
2. For each element:

   * While current element > top of stack → pop → assign next greater.
   * Push current element (or its index).
3. Done.

This ensures each element is popped only once → O(n).

---

## 💡 5️⃣ Visual Example

Let’s dry run with `nums = [2, 1, 3]`

We want **next greater element** → use a **monotonic decreasing stack**.

```
result = [-1, -1, -1]
stack = []
```

|  i | nums[i] | Stack (indices) | Action                     | Result     |
| -: | :-----: | :-------------- | :------------------------- | :--------- |
|  0 |    2    | []              | push(0)                    | [-1,-1,-1] |
|  1 |    1    | [0]             | 1<2 → push(1)              | [-1,-1,-1] |
|  2 |    3    | [0,1]           | 3>1 → pop(1) → result[1]=3 | [-1,3,-1]  |
|    |         | [0]             | 3>2 → pop(0) → result[0]=3 | [3,3,-1]   |
|    |         | []              | push(2)                    | [3,3,-1]   |

✅ Final result = `[3,3,-1]`

---

## ⚖️ 6️⃣ Increasing vs Decreasing — Cheat Table

| Stack Type     | Maintains                   | Pops When                  | Solves               |
| -------------- | --------------------------- | -------------------------- | -------------------- |
| **Decreasing** | Top smaller → bottom bigger | new element is **bigger**  | Next Greater Element |
| **Increasing** | Top bigger → bottom smaller | new element is **smaller** | Next Smaller Element |

---

## 🧱 7️⃣ Monotonic Stack Patterns (3 Core Templates)

| Problem Type          | Stack Type | Direction    | Example                 |
| --------------------- | ---------- | ------------ | ----------------------- |
| Next Greater to Right | Decreasing | Left → Right | `nums[i] > stack.top()` |
| Next Greater to Left  | Decreasing | Right → Left | reverse loop            |
| Next Smaller to Right | Increasing | Left → Right | `nums[i] < stack.top()` |

---

## 🧩 8️⃣ Complexity

| Operation                | Complexity                    |
| ------------------------ | ----------------------------- |
| Each element pushed once | O(n)                          |
| Each element popped once | O(n)                          |
| Total                    | **O(n)** time, **O(n)** space |

---

## 🧠 9️⃣ How to Identify Monotonic Stack Problems

If the question says:

* “Next greater/smaller element”
* “Nearest greater/smaller to left/right”
* “Span / Range / Temperature / Stock Price”
* “Previous less/greater element”
  → 🚨 You probably need a monotonic stack.

---

## ✅ 10️⃣ Quick mental template (to write from scratch)

### For “Next Greater to Right”:

```js
function nextGreater(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length && nums[i] > nums[stack.at(-1)]) {
      const index = stack.pop();
      result[index] = nums[i];
    }
    stack.push(i);
  }

  return result;
}
```

### For “Next Smaller to Right”:

Just flip the comparison:

```js
while (stack.length && nums[i] < nums[stack.at(-1)]) { ... }
```

---

## 🧩 TL;DR Summary

| Concept         | Monotonic Stack Essence                                |
| --------------- | ------------------------------------------------------ |
| Purpose         | Efficiently find next greater/smaller element          |
| Key property    | Stack is always sorted (increasing/decreasing)         |
| Time complexity | O(n)                                                   |
| When to use     | When question mentions “next/previous greater/smaller” |
| Trick           | Use indices → easier to store + get positions          |

---

Would you like me to show a **visual animation-style walkthrough** (ASCII or diagram) showing how the stack evolves step-by-step for both increasing and decreasing cases?
That’s usually the “click” moment when it all starts to make sense.

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

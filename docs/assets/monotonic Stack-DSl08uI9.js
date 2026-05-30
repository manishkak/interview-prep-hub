const n=`# monotonic Stack

## Problem Statement

Describe the problem statement for **monotonic Stack** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
Let’s go deep into **monotonic stacks** — what they are, how they work, and how you can *see* the logic instead of memorizing code.\r
\r
---\r
\r
## 🧠 1️⃣ What is a Monotonic Stack?\r
\r
A **monotonic stack** is a stack (LIFO structure) that is **always sorted in one direction** — either **increasing** or **decreasing**, depending on the problem.\r
\r
“Monotonic” just means “one-way” — it either never goes up or never goes down.\r
\r
---\r
\r
### ✳️ Two main types\r
\r
| Type                           | Stack Order                  | Used For                      |\r
| ------------------------------ | ---------------------------- | ----------------------------- |\r
| **Monotonic Increasing Stack** | bottom → top: **increasing** | find **next smaller** element |\r
| **Monotonic Decreasing Stack** | bottom → top: **decreasing** | find **next greater** element |\r
\r
---\r
\r
### Example:\r
\r
Let’s say we are building a **monotonic decreasing stack** (used in Next Greater Element).\r
\r
As we go through the array:\r
\r
* When we see a **bigger** number than the top of stack → we pop smaller ones out.\r
* This ensures the stack’s top is always the *most recent number that’s larger than everything below it.*\r
\r
---\r
\r
## 🧩 2️⃣ Why is it useful?\r
\r
Many problems want you to find the **next greater** or **next smaller** element:\r
\r
* “Next Greater Element”\r
* “Stock Span”\r
* “Daily Temperatures”\r
* “Trapping Rain Water”\r
* “Largest Rectangle in Histogram”\r
\r
Instead of scanning to the right for every element (O(n²)),\r
the stack helps track *which elements are waiting for a greater/smaller one*,\r
so the entire thing becomes **O(n)**.\r
\r
---\r
\r
## 🔍 3️⃣ Intuitive Explanation — “People in a Queue” Analogy\r
\r
Imagine each number in the array is a **person with height** standing in a line.\r
\r
You (the algorithm) move from **left to right**, and each new person looks at the line behind them:\r
\r
* If the new person is **taller** than people behind them →\r
  those shorter people’s “next taller person” is found (the current one).\r
  So they leave the queue (we pop them).\r
\r
* If the new person is **shorter**, they wait for someone taller to come (we push them).\r
\r
This is literally what the \`while\` condition does:\r
\r
\`\`\`js\r
while (stack.length > 0 && nums[i] > nums[stack[top]]) {\r
    const shorter = stack.pop();\r
    result[shorter] = nums[i];\r
}\r
\`\`\`\r
\r
---\r
\r
## ⚙️ 4️⃣ Core Mechanism (Decreasing Stack – for “Next Greater Element”)\r
\r
We keep the stack **monotonically decreasing** — meaning top always smaller or equal than below.\r
\r
Algorithm:\r
\r
1. Traverse array from left to right.\r
2. For each element:\r
\r
   * While current element > top of stack → pop → assign next greater.\r
   * Push current element (or its index).\r
3. Done.\r
\r
This ensures each element is popped only once → O(n).\r
\r
---\r
\r
## 💡 5️⃣ Visual Example\r
\r
Let’s dry run with \`nums = [2, 1, 3]\`\r
\r
We want **next greater element** → use a **monotonic decreasing stack**.\r
\r
\`\`\`\r
result = [-1, -1, -1]\r
stack = []\r
\`\`\`\r
\r
|  i | nums[i] | Stack (indices) | Action                     | Result     |\r
| -: | :-----: | :-------------- | :------------------------- | :--------- |\r
|  0 |    2    | []              | push(0)                    | [-1,-1,-1] |\r
|  1 |    1    | [0]             | 1<2 → push(1)              | [-1,-1,-1] |\r
|  2 |    3    | [0,1]           | 3>1 → pop(1) → result[1]=3 | [-1,3,-1]  |\r
|    |         | [0]             | 3>2 → pop(0) → result[0]=3 | [3,3,-1]   |\r
|    |         | []              | push(2)                    | [3,3,-1]   |\r
\r
✅ Final result = \`[3,3,-1]\`\r
\r
---\r
\r
## ⚖️ 6️⃣ Increasing vs Decreasing — Cheat Table\r
\r
| Stack Type     | Maintains                   | Pops When                  | Solves               |\r
| -------------- | --------------------------- | -------------------------- | -------------------- |\r
| **Decreasing** | Top smaller → bottom bigger | new element is **bigger**  | Next Greater Element |\r
| **Increasing** | Top bigger → bottom smaller | new element is **smaller** | Next Smaller Element |\r
\r
---\r
\r
## 🧱 7️⃣ Monotonic Stack Patterns (3 Core Templates)\r
\r
| Problem Type          | Stack Type | Direction    | Example                 |\r
| --------------------- | ---------- | ------------ | ----------------------- |\r
| Next Greater to Right | Decreasing | Left → Right | \`nums[i] > stack.top()\` |\r
| Next Greater to Left  | Decreasing | Right → Left | reverse loop            |\r
| Next Smaller to Right | Increasing | Left → Right | \`nums[i] < stack.top()\` |\r
\r
---\r
\r
## 🧩 8️⃣ Complexity\r
\r
| Operation                | Complexity                    |\r
| ------------------------ | ----------------------------- |\r
| Each element pushed once | O(n)                          |\r
| Each element popped once | O(n)                          |\r
| Total                    | **O(n)** time, **O(n)** space |\r
\r
---\r
\r
## 🧠 9️⃣ How to Identify Monotonic Stack Problems\r
\r
If the question says:\r
\r
* “Next greater/smaller element”\r
* “Nearest greater/smaller to left/right”\r
* “Span / Range / Temperature / Stock Price”\r
* “Previous less/greater element”\r
  → 🚨 You probably need a monotonic stack.\r
\r
---\r
\r
## ✅ 10️⃣ Quick mental template (to write from scratch)\r
\r
### For “Next Greater to Right”:\r
\r
\`\`\`js\r
function nextGreater(nums) {\r
  const n = nums.length;\r
  const result = new Array(n).fill(-1);\r
  const stack = [];\r
\r
  for (let i = 0; i < n; i++) {\r
    while (stack.length && nums[i] > nums[stack.at(-1)]) {\r
      const index = stack.pop();\r
      result[index] = nums[i];\r
    }\r
    stack.push(i);\r
  }\r
\r
  return result;\r
}\r
\`\`\`\r
\r
### For “Next Smaller to Right”:\r
\r
Just flip the comparison:\r
\r
\`\`\`js\r
while (stack.length && nums[i] < nums[stack.at(-1)]) { ... }\r
\`\`\`\r
\r
---\r
\r
## 🧩 TL;DR Summary\r
\r
| Concept         | Monotonic Stack Essence                                |\r
| --------------- | ------------------------------------------------------ |\r
| Purpose         | Efficiently find next greater/smaller element          |\r
| Key property    | Stack is always sorted (increasing/decreasing)         |\r
| Time complexity | O(n)                                                   |\r
| When to use     | When question mentions “next/previous greater/smaller” |\r
| Trick           | Use indices → easier to store + get positions          |\r
\r
---\r
\r
Would you like me to show a **visual animation-style walkthrough** (ASCII or diagram) showing how the stack evolves step-by-step for both increasing and decreasing cases?\r
That’s usually the “click” moment when it all starts to make sense.\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

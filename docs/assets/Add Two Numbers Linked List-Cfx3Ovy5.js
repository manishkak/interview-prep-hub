const n=`# Add Two Numbers Linked List

## Problem Statement

Describe the problem statement for **Add Two Numbers Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Add Two Numbers\r
 */\r
/*\r
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)\r
Represents: 342 + 465\r
Output: 7 -> 0 -> 8\r
Explanation: 342 + 465 = 807\r
*/\r
/*\r
Approach (Step-by-Step)\r
1. Initialize:\r
    - A dummyHead node to simplify adding nodes.\r
    - current pointer starting at dummyHead.\r
    - carry = 0 to store carry-over from addition.\r
2. Traverse both lists simultaneously:\r
    - Add the digits of the current nodes from both lists plus carry.\r
    - Compute sum = val1 + val2 + carry.\r
    - New digit to add: sum % 10.\r
    - Update carry = Math.floor(sum / 10).\r
3. Move to the next nodes in both lists (if they exist).\r
4. After traversal, if carry > 0, add a final node.\r
5. Return dummyHead.next (the actual start of the result list).\r
*/\r
class Node {\r
    constructor(data) {\r
        this.data = data;\r
        this.next = null;\r
    }\r
}\r
\r
class LinkedList {\r
    constructor() {\r
        this.head = null;\r
    }\r
\r
    append(data) {\r
        const newNode = new Node(data);\r
        if (!this.head) {\r
            this.head = newNode;\r
            return;\r
        }\r
        let current = this.head;\r
        while (current.next) current = current.next;\r
        current.next = newNode;\r
    }\r
\r
    print() {\r
        let current = this.head;\r
        const values = [];\r
        while (current) {\r
            values.push(current.data);\r
            current = current.next;\r
        }\r
        console.log(values.join(" -> "));\r
    }\r
}\r
\r
// Function to add two numbers represented as linked lists\r
function addTwoNumbers(l1, l2) {\r
    let dummyHead = new Node(0);\r
    let current = dummyHead;\r
    let carry = 0;\r
    let p = l1.head;\r
    let q = l2.head;\r
\r
    while (p || q) {\r
        const x = p ? p.data : 0;\r
        const y = q ? q.data : 0;\r
        const sum = x + y + carry;\r
        carry = Math.floor(sum / 10);\r
        current.next = new Node(sum % 10); // a%b will return a if a<b\r
        current = current.next;\r
\r
        if (p) p = p.next;\r
        if (q) q = q.next;\r
    }\r
\r
    if (carry > 0) {\r
        current.next = new Node(carry);\r
    }\r
\r
    // Return as a new LinkedList\r
    const result = new LinkedList();\r
    result.head = dummyHead.next;\r
    return result;\r
}\r
\r
// Example usage\r
const l1 = new LinkedList();\r
l1.append(2);\r
l1.append(4);\r
l1.append(3);\r
\r
const l2 = new LinkedList();\r
l2.append(5);\r
l2.append(6);\r
l2.append(4);\r
\r
const result = addTwoNumbers(l1, l2);\r
result.print(); // Output: 7 -> 0 -> 8\r
\r
\r
/**\r
Absolutely! Let’s do a **step-by-step dry run** of your linked list addition algorithm for:\r
\r
\`\`\`\r
Input: l1 = 2 -> 4 -> 3\r
       l2 = 5 -> 6 -> 4\r
\`\`\`\r
\r
We are adding **342 + 465**, stored in reverse.\r
\r
---\r
\r
### Initial Setup\r
\r
\`\`\`\r
dummyHead = Node(0)\r
current = dummyHead\r
carry = 0\r
p = l1.head (2)\r
q = l2.head (5)\r
\`\`\`\r
\r
---\r
\r
### Step 1 — Add first nodes\r
\r
\`\`\`\r
x = p.data = 2\r
y = q.data = 5\r
sum = x + y + carry = 2 + 5 + 0 = 7\r
carry = Math.floor(7 / 10) = 0\r
current.next = Node(7)\r
\r
Move current: current = current.next\r
Move p: p = p.next (4)\r
Move q: q = q.next (6)\r
\`\`\`\r
\r
**Result list so far:** \`7\`\r
\r
---\r
\r
### Step 2 — Add second nodes\r
\r
\`\`\`\r
x = p.data = 4\r
y = q.data = 6\r
sum = 4 + 6 + carry = 4 + 6 + 0 = 10\r
carry = Math.floor(10 / 10) = 1\r
current.next = Node(10 % 10) = Node(0)\r
\r
Move current: current = current.next\r
Move p: p = p.next (3)\r
Move q: q = q.next (4)\r
\`\`\`\r
\r
**Result list so far:** \`7 -> 0\`\r
\r
---\r
\r
### Step 3 — Add third nodes\r
\r
\`\`\`\r
x = p.data = 3\r
y = q.data = 4\r
sum = 3 + 4 + carry = 3 + 4 + 1 = 8\r
carry = Math.floor(8 / 10) = 0\r
current.next = Node(8 % 10) = Node(8)\r
\r
Move current: current = current.next\r
Move p: p = p.next (null)\r
Move q: q = q.next (null)\r
\`\`\`\r
\r
**Result list so far:** \`7 -> 0 -> 8\`\r
\r
---\r
\r
### Step 4 — Check remaining carry\r
\r
\`\`\`\r
carry = 0 → nothing to add\r
\`\`\`\r
\r
---\r
\r
### ✅ Final Result\r
\r
\`\`\`\r
Result Linked List: 7 -> 0 -> 8\r
Which represents the number: 807 (correct!)\r
\`\`\`\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

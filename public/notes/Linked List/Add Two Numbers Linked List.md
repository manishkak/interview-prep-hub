# Add Two Numbers Linked List

## Problem Statement

Describe the problem statement for **Add Two Numbers Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Add Two Numbers
 */
/*
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Represents: 342 + 465
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807
*/
/*
Approach (Step-by-Step)
1. Initialize:
    - A dummyHead node to simplify adding nodes.
    - current pointer starting at dummyHead.
    - carry = 0 to store carry-over from addition.
2. Traverse both lists simultaneously:
    - Add the digits of the current nodes from both lists plus carry.
    - Compute sum = val1 + val2 + carry.
    - New digit to add: sum % 10.
    - Update carry = Math.floor(sum / 10).
3. Move to the next nodes in both lists (if they exist).
4. After traversal, if carry > 0, add a final node.
5. Return dummyHead.next (the actual start of the result list).
*/
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) current = current.next;
        current.next = newNode;
    }

    print() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.data);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }
}

// Function to add two numbers represented as linked lists
function addTwoNumbers(l1, l2) {
    let dummyHead = new Node(0);
    let current = dummyHead;
    let carry = 0;
    let p = l1.head;
    let q = l2.head;

    while (p || q) {
        const x = p ? p.data : 0;
        const y = q ? q.data : 0;
        const sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new Node(sum % 10); // a%b will return a if a<b
        current = current.next;

        if (p) p = p.next;
        if (q) q = q.next;
    }

    if (carry > 0) {
        current.next = new Node(carry);
    }

    // Return as a new LinkedList
    const result = new LinkedList();
    result.head = dummyHead.next;
    return result;
}

// Example usage
const l1 = new LinkedList();
l1.append(2);
l1.append(4);
l1.append(3);

const l2 = new LinkedList();
l2.append(5);
l2.append(6);
l2.append(4);

const result = addTwoNumbers(l1, l2);
result.print(); // Output: 7 -> 0 -> 8


/**
Absolutely! Let’s do a **step-by-step dry run** of your linked list addition algorithm for:

```
Input: l1 = 2 -> 4 -> 3
       l2 = 5 -> 6 -> 4
```

We are adding **342 + 465**, stored in reverse.

---

### Initial Setup

```
dummyHead = Node(0)
current = dummyHead
carry = 0
p = l1.head (2)
q = l2.head (5)
```

---

### Step 1 — Add first nodes

```
x = p.data = 2
y = q.data = 5
sum = x + y + carry = 2 + 5 + 0 = 7
carry = Math.floor(7 / 10) = 0
current.next = Node(7)

Move current: current = current.next
Move p: p = p.next (4)
Move q: q = q.next (6)
```

**Result list so far:** `7`

---

### Step 2 — Add second nodes

```
x = p.data = 4
y = q.data = 6
sum = 4 + 6 + carry = 4 + 6 + 0 = 10
carry = Math.floor(10 / 10) = 1
current.next = Node(10 % 10) = Node(0)

Move current: current = current.next
Move p: p = p.next (3)
Move q: q = q.next (4)
```

**Result list so far:** `7 -> 0`

---

### Step 3 — Add third nodes

```
x = p.data = 3
y = q.data = 4
sum = 3 + 4 + carry = 3 + 4 + 1 = 8
carry = Math.floor(8 / 10) = 0
current.next = Node(8 % 10) = Node(8)

Move current: current = current.next
Move p: p = p.next (null)
Move q: q = q.next (null)
```

**Result list so far:** `7 -> 0 -> 8`

---

### Step 4 — Check remaining carry

```
carry = 0 → nothing to add
```

---

### ✅ Final Result

```
Result Linked List: 7 -> 0 -> 8
Which represents the number: 807 (correct!)
```
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

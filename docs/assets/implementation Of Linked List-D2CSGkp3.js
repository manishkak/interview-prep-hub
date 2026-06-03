const e=`# implementation Of Linked List

## Problem Statement

Implement a singly linked list with the following operations: append (add to end), prepend (add to front), delete (remove by value), insertAtNthPosition, and reverse.

## Examples

- append(1), append(2), append(3), prepend(0) → 0 -> 1 -> 2 -> 3
- delete(2) → 0 -> 1 -> 3
- insertAtNthPosition(10, 2) → 0 -> 1 -> 10 -> 3
- reverse() → 3 -> 10 -> 1 -> 0

## Approach

Each node holds a data value and a next pointer. The LinkedList class holds a head pointer.

- append: traverse to the last node (where next is null), then set current.next to the new node.
- prepend: point new node's next to current head, then update head.
- delete: if head matches, update head. Otherwise traverse until current.next matches the target value, then skip that node.
- insertAtNthPosition: traverse to position - 1, wire new node in between.
- reverse: iterate through the list, reversing each next pointer, tracking prev and current.

## Solution

\`\`\`js
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
        if (!this.head) { this.head = newNode; return; }
        let current = this.head;
        while (current.next !== null) current = current.next;
        current.next = newNode;
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(data) {
        if (!this.head) return;
        if (this.head.data === data) { this.head = this.head.next; return; }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) { current.next = current.next.next; return; }
            current = current.next;
        }
    }

    insertAtNthPosition(data, position) {
        const newNode = new Node(data);
        if (position === 0 || !this.head) { newNode.next = this.head; this.head = newNode; return; }
        let current = this.head;
        let count = 0;
        while (current.next && count < position - 1) { current = current.next; count++; }
        newNode.next = current.next;
        current.next = newNode;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    print() {
        let current = this.head;
        const values = [];
        while (current !== null) { values.push(current.data); current = current.next; }
        console.log(values.join(" -> "));
    }
}

const list = new LinkedList();
list.append(1); list.append(2); list.append(3); list.prepend(0);
list.delete(2);
list.print();                      // 0 -> 1 -> 3
list.insertAtNthPosition(10, 2);
list.print();                      // 0 -> 1 -> 10 -> 3
list.reverse();
list.print();                      // 3 -> 10 -> 1 -> 0
\`\`\`

## Time Complexity

**O(n)** for append, delete, insertAtNthPosition, and reverse — all require traversal in the worst case.
**O(1)** for prepend — always inserts at head.

## Space Complexity

**O(n)** total to store n nodes. Each individual operation uses O(1) extra space.

## Notes

- For delete, there is no actual "delete" keyword needed — simply bypassing a node with current.next = current.next.next removes it from the list.
- The reverse operation uses three pointers: prev, current, and a saved next to avoid losing the rest of the list.
`;export{e as default};

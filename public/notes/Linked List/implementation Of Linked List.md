# implementation Of Linked List

## Problem Statement

Describe the problem statement for **implementation Of Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Implementation of LinkedList class
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

  // Method to add a new node at the end of the linked list
  append(data) {
      const newNode = new Node(data);

      // !head means there is no node, then just add newNode to head
      if (!this.head) {
          this.head = newNode;
          return;
      }

      let current = this.head;
      while (current.next !== null) {
        // traverse current until last node (until curr.nxt == null is reached)
          current = current.next;
      }
      current.next = newNode; // set newNode to curr.next
  }

  // Method to add a new node at the beginning of the linked list
  prepend(data) {
    const newNode = new Node(data);
    if (this.head == null){
        this.head = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
  }

  // Method to delete a node by its value
  // For delete in linked list there is no actual 'delete' per se, its just next or current= curr.next;
  delete(data) {
      if (!this.head) {
          return;
      }

     // if value to be removed is the head of the ll
      if (this.head.data === data) {
          this.head = this.head.next;
          return;
      }

      // value to be removed is NOT the head of the ll, need to traverse from start/head until you reach the node to be deleted
      let current = this.head;
      while (current.next !== null) {
          if (current.next.data === data) {
              current.next = current.next.next;
              return;
          }
          current = current.next;
      }
  }

  // Method to print the linked list
  print() {
      let current = this.head;
      while (current !== null) {
          console.log(current.data);
          current = current.next;
      }
  }

  insertAtNthPosition(data, position) {
    const newNode = new Node(data);

    // Special case: insert at head
    if (position === 0 || !this.head) {
        newNode.next = this.head;
        this.head = newNode;
        return;
    }

    let current = this.head;
    let count = 0;

    // Traverse to the (position-1)th node
    while (current.next && count < position - 1) {
        current = current.next;
        count++;
    }

    // Insert new node
    newNode.next = current.next;
    current.next = newNode;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
        next = current.next;   // save next
        current.next = prev;   // reverse pointer
        prev = current;        // move prev forward
        current = next;        // move current forward
    }

    this.head = prev;         // new head
 }
}

// Example usage:
const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append(2);
linkedList1.append(3);
linkedList1.prepend(0);
linkedList1.delete(2);
linkedList1.print(); // 0 -> 1 -> 3
linkedList1.insertAtNthPosition(10, 2);
linkedList1.print(); // e.g., 0 -> 1 -> 10 -> 3
linkedList1.reverse();
linkedList1.print(); // original list reversed

```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

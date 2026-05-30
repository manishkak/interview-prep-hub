const n=`# implementation Of Linked List

## Problem Statement

Describe the problem statement for **implementation Of Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Implementation of LinkedList class\r
 */\r
\r
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
  // Method to add a new node at the end of the linked list\r
  append(data) {\r
      const newNode = new Node(data);\r
\r
      // !head means there is no node, then just add newNode to head\r
      if (!this.head) {\r
          this.head = newNode;\r
          return;\r
      }\r
\r
      let current = this.head;\r
      while (current.next !== null) {\r
        // traverse current until last node (until curr.nxt == null is reached)\r
          current = current.next;\r
      }\r
      current.next = newNode; // set newNode to curr.next\r
  }\r
\r
  // Method to add a new node at the beginning of the linked list\r
  prepend(data) {\r
    const newNode = new Node(data);\r
    if (this.head == null){\r
        this.head = newNode;\r
    } else {\r
        newNode.next = this.head;\r
        this.head = newNode;\r
    }\r
  }\r
\r
  // Method to delete a node by its value\r
  // For delete in linked list there is no actual 'delete' per se, its just next or current= curr.next;\r
  delete(data) {\r
      if (!this.head) {\r
          return;\r
      }\r
\r
     // if value to be removed is the head of the ll\r
      if (this.head.data === data) {\r
          this.head = this.head.next;\r
          return;\r
      }\r
\r
      // value to be removed is NOT the head of the ll, need to traverse from start/head until you reach the node to be deleted\r
      let current = this.head;\r
      while (current.next !== null) {\r
          if (current.next.data === data) {\r
              current.next = current.next.next;\r
              return;\r
          }\r
          current = current.next;\r
      }\r
  }\r
\r
  // Method to print the linked list\r
  print() {\r
      let current = this.head;\r
      while (current !== null) {\r
          console.log(current.data);\r
          current = current.next;\r
      }\r
  }\r
\r
  insertAtNthPosition(data, position) {\r
    const newNode = new Node(data);\r
\r
    // Special case: insert at head\r
    if (position === 0 || !this.head) {\r
        newNode.next = this.head;\r
        this.head = newNode;\r
        return;\r
    }\r
\r
    let current = this.head;\r
    let count = 0;\r
\r
    // Traverse to the (position-1)th node\r
    while (current.next && count < position - 1) {\r
        current = current.next;\r
        count++;\r
    }\r
\r
    // Insert new node\r
    newNode.next = current.next;\r
    current.next = newNode;\r
  }\r
\r
  reverse() {\r
    let prev = null;\r
    let current = this.head;\r
    let next = null;\r
\r
    while (current) {\r
        next = current.next;   // save next\r
        current.next = prev;   // reverse pointer\r
        prev = current;        // move prev forward\r
        current = next;        // move current forward\r
    }\r
\r
    this.head = prev;         // new head\r
 }\r
}\r
\r
// Example usage:\r
const linkedList1 = new LinkedList();\r
linkedList1.append(1);\r
linkedList1.append(2);\r
linkedList1.append(3);\r
linkedList1.prepend(0);\r
linkedList1.delete(2);\r
linkedList1.print(); // 0 -> 1 -> 3\r
linkedList1.insertAtNthPosition(10, 2);\r
linkedList1.print(); // e.g., 0 -> 1 -> 10 -> 3\r
linkedList1.reverse();\r
linkedList1.print(); // original list reversed\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

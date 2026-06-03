const e=`# delete Node From Linked List

## Problem Statement

You are given a node to delete from a singly linked list, but you are NOT given access to the head of the list. The node to delete is guaranteed to not be the tail. Delete the node in-place.

## Examples

- Input: list = 4 -> 5 -> 1 -> 9, node to delete = 5
- Output: 4 -> 1 -> 9

- Input: list = 4 -> 5 -> 1 -> 9, node to delete = 1
- Output: 4 -> 5 -> 9

## Approach

Since the head is not accessible, we cannot traverse from the start to find the previous node. The trick is to copy the value of the next node into the current node, then skip the next node — effectively deleting it instead of the original node.

Steps:
1. Copy node.next.val into node.val.
2. Set node.next = node.next.next.

## Solution

\`\`\`js
function deleteNode(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}
\`\`\`

## Time Complexity

**O(1)** — only two pointer operations, no traversal needed.

## Space Complexity

**O(1)** — no extra space used.

## Notes

- This works because we never actually delete the given node — we overwrite it with its successor's data and remove the successor.
- The problem guarantees the node is not the tail, so node.next always exists.
- LeetCode #237.
`;export{e as default};

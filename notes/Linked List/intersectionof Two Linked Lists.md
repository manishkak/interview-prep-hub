# intersectionof Two Linked Lists

## Problem Statement

Given the heads of two singly linked lists, return the node at which the two lists intersect (share the same node object, not just the same value). Return null if they do not intersect.

## Examples

- Input: A = 4 -> 1 -> 8 -> 4 -> 5, B = 5 -> 6 -> 1 -> 8 -> 4 -> 5, where node 8 is shared
- Output: node with value 8

- Input: A = 2 -> 6 -> 4, B = 1 -> 5, no shared nodes
- Output: null

## Approach

Two-pointer technique. Use two pointers p1 and p2 starting at headA and headB respectively. Advance both one step at a time. When a pointer reaches the end of its list, redirect it to the head of the other list. If the lists intersect, the two pointers will meet at the intersection node after at most m + n steps — because both pointers traverse the same total distance (m + n). If they don't intersect, both will reach null simultaneously.

## Solution

```js
function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    let p1 = headA;
    let p2 = headB;

    while (p1 !== p2) {
        p1 = p1 ? p1.next : headB;
        p2 = p2 ? p2.next : headA;
    }

    return p1;
}
```

## Time Complexity

**O(m + n)** where m and n are the lengths of the two lists. Each pointer traverses at most m + n nodes.

## Space Complexity

**O(1)** — only two pointers, no extra data structures.

## Notes

- The key insight: after one full traversal each pointer has covered the same total distance (m + n), so if there is an intersection they must meet there; if not, both become null at the same time.
- Alternative using a hash set: traverse list B, store all node references in a Set, then traverse list A checking for membership. TC = O(m + n), SC = O(n).
- LeetCode #160.

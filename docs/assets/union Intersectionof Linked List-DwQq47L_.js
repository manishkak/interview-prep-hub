const n=`# union Intersectionof Linked List

## Problem Statement

Given two linked lists, compute:
- Union: a list containing all nodes that appear in either list (no duplicates).
- Intersection: a list containing all nodes that appear in both lists.

## Examples

- Input: A = 1 -> 2 -> 3 -> 4, B = 3 -> 4 -> 5 -> 6
- Union output: 1 -> 2 -> 3 -> 4 -> 5 -> 6
- Intersection output: 3 -> 4

## Approach

Union: traverse to the tail of the first list, link it to the head of the second list, then remove duplicates from the combined list.

Intersection (length-alignment method): find the lengths of both lists. Advance the pointer of the longer list by the difference in lengths. Then traverse both simultaneously — the first node where both pointers are equal is the intersection.

This works for node-reference intersection (same node object, not just same value).

## Solution

\`\`\`js
function getIntersectionNode(headA, headB) {
    let len1 = getLength(headA);
    let len2 = getLength(headB);

    while (len1 > len2) { headA = headA.next; len1--; }
    while (len2 > len1) { headB = headB.next; len2--; }

    while (headA !== null && headB !== null) {
        if (headA === headB) return headA;
        headA = headA.next;
        headB = headB.next;
    }

    return null;
}

function getAllIntersectionNodes(headA, headB) {
    const intersections = [];
    let len1 = getLength(headA);
    let len2 = getLength(headB);

    while (len1 > len2) { headA = headA.next; len1--; }
    while (len2 > len1) { headB = headB.next; len2--; }

    while (headA !== null && headB !== null) {
        if (headA === headB) intersections.push(headA);
        headA = headA.next;
        headB = headB.next;
    }

    return intersections;
}

function getLength(head) {
    let length = 0;
    while (head !== null) { length++; head = head.next; }
    return length;
}
\`\`\`

## Time Complexity

**O(m + n)** — finding both lengths is O(m + n), aligning and traversing simultaneously is O(min(m, n)).

## Space Complexity

**O(1)** for intersection (only pointer operations).
**O(k)** for getAllIntersectionNodes where k is the number of intersection nodes.

## Notes

- The length-alignment approach for intersection is essentially the same as the two-pointer redirect approach (LeetCode #160) — both ensure pointers cover the same total distance.
- For union, the time complexity including duplicate removal is O((m+n)^2) in the naive case; using a hash set brings it down to O(m+n).
`;export{n as default};

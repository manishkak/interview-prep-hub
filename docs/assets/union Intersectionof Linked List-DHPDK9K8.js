const e=`# union Intersectionof Linked List

## Problem Statement

Describe the problem statement for **union Intersectionof Linked List** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem: Union: all nodes that are either in A or B or both.\r
 * Intersection: all nodes that are in A and B both.\r
 */\r
/**\r
 * Approach: Union: We traverse to the tail of the first list and link it to the first node of the second list. All we have to do now is remove duplicates from the combined list.\r
 */\r
// UNION\r
function union(list1, list2) {\r
	if (list1.isEmpty()) {\r
	  return list2;\r
	} else if (list2.isEmpty()) {\r
	  return list1;\r
	}\r
  \r
	let start = list1.head();\r
  \r
	//Traverse the first list till the tail\r
	while (start.next != null) {\r
	  start = start.next;\r
	}\r
  \r
	//Link last element of first list to the first element of second list\r
	start.next = list2.head();\r
	list1.removeDuplicates();\r
  \r
	return list1;\r
  }\r
/**\r
 * If we did not have the care of duplicates, the runtime complexity of this algorithm would be O(m)\r
 where m is the size of the first list. However, because of duplicates, we need to traverse the whole union list. This increases the time complexity to O(m+n)^2 where m is the size of the first list and n is the size of the second list.\r
 */\r
\r
 // INTERSECTION\r
 /**\r
  * Approach: \r
  * Find the Lengths: Traverse both linked lists and find their lengths (len1 and len2).\r
  * Align the Pointers: Start traversing from the heads of both linked lists. If one list is longer than the other, move the pointer of the longer list forward by the difference in lengths.\r
  * Traverse Simultaneously: Now, traverse both linked lists simultaneously until you find a common node (intersection point).\r
  * Intersection Found: If at any point during traversal, the pointers of both linked lists point to the same node, you have found the intersection point. Return this node.\r
  * No Intersection: If you reach the end of both linked lists without finding a common node, it means the lists do not intersect.\r
  */\r
 // If there is only one intersection and to return that intersection node\r
 class Node {\r
    constructor(data) {\r
        this.data = data;\r
        this.next = null;\r
    }\r
}\r
\r
function getIntersectionNode(headA, headB) {\r
    let len1 = getLength(headA);\r
    let len2 = getLength(headB);\r
\r
    // Align the pointers\r
    while (len1 > len2) {\r
        headA = headA.next;\r
        len1--;\r
    }\r
\r
    while (len2 > len1) {\r
        headB = headB.next;\r
        len2--;\r
    }\r
\r
    // Traverse simultaneously\r
    while (headA !== null && headB !== null) {\r
        if (headA === headB) {\r
            return headA; // Intersection found\r
        }\r
        headA = headA.next;\r
        headB = headB.next;\r
    }\r
\r
    return null; // No intersection\r
}\r
\r
function getLength(head) {\r
    let length = 0;\r
    let current = head;\r
    while (current !== null) {\r
        length++;\r
        current = current.next;\r
    }\r
    return length;\r
}\r
\r
// if there are more than one intersecting nodes, return all those nodes\r
function getAllIntersectionNodes(headA, headB) {\r
    const intersections = [];\r
    \r
    let len1 = getLength(headA);\r
    let len2 = getLength(headB);\r
\r
    // Align the pointers\r
    while (len1 > len2) {\r
        headA = headA.next;\r
        len1--;\r
    }\r
\r
    while (len2 > len1) {\r
        headB = headB.next;\r
        len2--;\r
    }\r
\r
    // Traverse simultaneously\r
    while (headA !== null && headB !== null) {\r
        if (headA === headB) {\r
            intersections.push(headA); // Intersection found\r
        }\r
        headA = headA.next;\r
        headB = headB.next;\r
    }\r
\r
    return intersections;\r
}\r
\r
\r
/**\r
 * The time complexity of the getIntersectionNode function depends on the length of the two linked lists and the number of nodes before the intersection point, denoted as n and m.\r
\r
	Finding Lengths:\r
		Traversing each linked list to find its length takes O(n) and O(m) time, respectively.\r
	Aligning Pointers:\r
		Adjusting pointers to align them at the same starting point takes O(max(n, m)) time, as we may need to move one pointer by the difference in lengths between the two lists.\r
	Traversing Simultaneously:\r
		Traversing the aligned lists simultaneously until finding the intersection node or reaching the end takes at most O(min(n, m)) time, as we are traversing at most the smaller of the two linked lists.\r
Therefore, the overall time complexity of the getIntersectionNode function is O(n + m), where n and m are the lengths of the two linked lists, respectively.\r
\r
This time complexity arises from the need to traverse each linked list once to find its length and then traverse the aligned lists simultaneously until finding the intersection node or reaching the end. Since each step involves traversing the linked lists once or adjusting pointers based on the lengths of the lists, the time complexity is linear with respect to the lengths of the lists.\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};

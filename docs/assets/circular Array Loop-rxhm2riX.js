const e=`# circular Array Loop

## Problem Statement

Describe the problem statement for **circular Array Loop** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem: We are given a circular array of non-zero integers, nums, where each integer represents the number of steps to be taken either forward or backward from its current index. Positive values indicate forward movement, while negative values imply backward movement. When reaching either end of the array, the traversal wraps around to the opposite end.\r
\r
The input array may contain a cycle, which is a sequence of indexes characterized by the following:\r
\r
The sequence starts and ends at the same index.\r
The length of the sequence is at least two.\r
The loop must be in a single direction, forward or backward.\r
 */\r
/**\r
 * Approach:\r
 * Move the slow pointer x steps forward/backward, where x is the value at the i th index of the array.\r
Move the fast pointer x steps forward/backward, where x is the value at i th index. Then, move fast pointer y\r
steps forward/backward, where y is the value at x th index.\r
Return TRUE when both pointers meet at the same point.\r
If the direction changes after moving the slow or fast pointer or taking a step, return to the same location, then follow the steps above for the next element of the array.\r
Return FALSE if we have traversed every element of the array without finding a loop.\r
 */\r
function circularArrayLoop(nums) {\r
    let size = nums.length;\r
\r
    for (let i = 0; i < size; i++) {\r
        let slow = i;\r
        let fast = i;\r
        let forward = nums[i] > 0;\r
\r
        while (true) {\r
            slow = nextStep(slow, nums[slow], size);\r
            if (isNotCycle(nums, forward, slow)) {\r
                break;\r
            }\r
\r
            fast = nextStep(fast, nums[fast], size);\r
            if (isNotCycle(nums, forward, fast)) {\r
                break;\r
            }\r
\r
            fast = nextStep(fast, nums[fast], size);\r
            if (isNotCycle(nums, forward, fast)) {\r
                break;\r
            }\r
\r
            if (slow === fast) {\r
                return true;\r
            }\r
        }\r
    }\r
    return false;\r
}\r
\r
/**\r
 * TC : O(n^2)\r
 * SC : O(1)\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};

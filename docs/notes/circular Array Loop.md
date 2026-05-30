# circular Array Loop

## Problem Statement

Describe the problem statement for **circular Array Loop** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem: We are given a circular array of non-zero integers, nums, where each integer represents the number of steps to be taken either forward or backward from its current index. Positive values indicate forward movement, while negative values imply backward movement. When reaching either end of the array, the traversal wraps around to the opposite end.

The input array may contain a cycle, which is a sequence of indexes characterized by the following:

The sequence starts and ends at the same index.
The length of the sequence is at least two.
The loop must be in a single direction, forward or backward.
 */
/**
 * Approach:
 * Move the slow pointer x steps forward/backward, where x is the value at the i th index of the array.
Move the fast pointer x steps forward/backward, where x is the value at i th index. Then, move fast pointer y
steps forward/backward, where y is the value at x th index.
Return TRUE when both pointers meet at the same point.
If the direction changes after moving the slow or fast pointer or taking a step, return to the same location, then follow the steps above for the next element of the array.
Return FALSE if we have traversed every element of the array without finding a loop.
 */
function circularArrayLoop(nums) {
    let size = nums.length;

    for (let i = 0; i < size; i++) {
        let slow = i;
        let fast = i;
        let forward = nums[i] > 0;

        while (true) {
            slow = nextStep(slow, nums[slow], size);
            if (isNotCycle(nums, forward, slow)) {
                break;
            }

            fast = nextStep(fast, nums[fast], size);
            if (isNotCycle(nums, forward, fast)) {
                break;
            }

            fast = nextStep(fast, nums[fast], size);
            if (isNotCycle(nums, forward, fast)) {
                break;
            }

            if (slow === fast) {
                return true;
            }
        }
    }
    return false;
}

/**
 * TC : O(n^2)
 * SC : O(1)
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

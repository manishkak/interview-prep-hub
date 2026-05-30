# daily Temperatures

## Problem Statement

Describe the problem statement for **daily Temperatures** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/*
dailyTemperatures

Given an array of integers temperatures represents the daily temperatures, return an array result such that result[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep result[i] == 0 instead.

Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0]

Approach:
A common approach to solve this problem is to use a "monotonic stack". The stack will store the indices of the days, and we will process each day's temperature as follows:

- We iterate through the temperature list.
- For each day, we compare its temperature with the temperature corresponding to the indices stored in the stack.
- If the current day's temperature is higher than the temperature of the day at the index on the top of the stack, it means we've found a warmer day for that earlier day.
    - We then calculate the difference in days and pop that index from the stack.
- We continue this process until we can no longer find a warmer day for the day at the top of the stack.
- Push the current day's index onto the stack.
- After processing all days, the indices left in the stack do not have any warmer future day, so their corresponding values in the result array remain 0.
*/

// "stack" array will only store "indexes"; "result" array will only store "difference"
// while loop over temp. array
    // check each temp. if it’s higher than the temperature at the index stored on top of the stack
    // meaning if temp[i] > temp[stack[stack.len-1]]
    // if yes then pop the index at top of stack and store the diff. in result
        // result[popped element] = i - popped element;
    // stack.push(i)

function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const result = new Array(n).fill(0); // Initialize the result array with 0s
    const stack = []; // Stack to store indices of the temperatures array

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex; // Calculate the number of days to wait
        }
        stack.push(i); // Push the current index onto the stack
    }

    return result;
}

// Dry Run for [30, 60, 50, 90]:
// Step	Current Index	Temperature	    Stack	Action	                                    Result Array
// 1	    0	            30	        [0]	    Push index 0 (since the stack is empty)	    [0, 0, 0, 0]
// 2	    1	            60	        []	    Pop index 0 (because 60 > 30). Update res[0] = 1 - 0 = 1. Push index 1	                                                                                [1, 0, 0, 0]
// 3	    2	            50	        [1, 2]	Push index 2 (since 50 is not greater than 60)	[1, 0, 0, 0]
// 4	    3	            90	        []	    Pop index 2 (because 90 > 50). Update res[2] = 3 - 2 = 1. Pop index 1, update res[1] = 3 - 1 = 2	                                                    [1, 2, 1, 0]



// Example usage:
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
console.log(dailyTemperatures([30, 60, 90])); // [1, 1, 0]

/*
Explanation:
Stack: The stack stores the indices of the temperatures that are waiting to find a warmer day.
Main Loop: We iterate over each day and check if the current day's temperature is higher than the temperatures of the days stored in the stack.
If it is, we pop the index from the stack, calculate the difference between the current index and the popped index, and store it in the result array.
We then push the current day's index onto the stack.
Result: The result array contains the number of days you have to wait to get a warmer temperature for each day.
Time and Space Complexity:
Time Complexity: O(n), where n is the number of days in the temperatures array. Each index is pushed and popped from the stack at most once.
Space Complexity: O(n), for storing the stack and the result array.
*/

/**
 * do this on chatgpt-
 * Given an array of integers `temperatures` representing the daily temperatures, return an array `result` such that `result[i]` is the number of days you have to wait after the `i-th` day to get a warmer temperature. If there is no future day for which this is possible, put `0` in the result array.
explain with an example please
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

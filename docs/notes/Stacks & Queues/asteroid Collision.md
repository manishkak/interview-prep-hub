# asteroid Collision

## Problem Statement

Describe the problem statement for **asteroid Collision** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
function asteroidCollision(asteroids) {
    const stack = [];

    for (const asteroid of asteroids) {
        let destroyed = false;
        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            if (stack[stack.length - 1] < -asteroid) {
                stack.pop(); // The right-moving asteroid is smaller and gets destroyed
            } else if (stack[stack.length - 1] === -asteroid) {
                stack.pop(); // Both asteroids are the same size, both get destroyed
                destroyed = true;
                break;
            } else {
                destroyed = true; // The current left-moving asteroid gets destroyed
                break;
            }
        }
        if (!destroyed) {
            stack.push(asteroid);
        }
    }

    return stack;
}

// Example usage:
console.log(asteroidCollision([5, 10, -5]));  // Output: [5, 10]
console.log(asteroidCollision([8, -8]));      // Output: []
console.log(asteroidCollision([10, 2, -5]));  // Output: [10]
console.log(asteroidCollision([-2, -1, 1, 2])); // Output: [-2, -1, 1, 2]

/*
Approach:
To solve this problem, we can use a stack. As we iterate through the array of asteroids, we simulate the process of collisions:

Push to Stack: If the asteroid is moving to the right (positive), push it onto the stack.
Collision Handling: If the asteroid is moving to the left (negative), check the top of the stack:
If the top of the stack is a smaller positive asteroid, pop it (since it gets destroyed).
If the top of the stack is the same size, pop it and ignore the current asteroid (both get destroyed).
If the top of the stack is larger, ignore the current asteroid (it gets destroyed).
If the stack is empty or the top of the stack is negative, push the current asteroid.


Time and Space Complexity:
Time Complexity: O(n), where n is the number of asteroids. We process each asteroid once, and each asteroid can be pushed to and popped from the stack at most once.
Space Complexity: O(n), in the worst case, all asteroids are moving in the same direction, and we store all of them in the stack.
*/
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

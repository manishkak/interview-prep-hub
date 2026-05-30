const e=`# asteroid Collision

## Problem Statement

Describe the problem statement for **asteroid Collision** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
function asteroidCollision(asteroids) {\r
    const stack = [];\r
\r
    for (const asteroid of asteroids) {\r
        let destroyed = false;\r
        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {\r
            if (stack[stack.length - 1] < -asteroid) {\r
                stack.pop(); // The right-moving asteroid is smaller and gets destroyed\r
            } else if (stack[stack.length - 1] === -asteroid) {\r
                stack.pop(); // Both asteroids are the same size, both get destroyed\r
                destroyed = true;\r
                break;\r
            } else {\r
                destroyed = true; // The current left-moving asteroid gets destroyed\r
                break;\r
            }\r
        }\r
        if (!destroyed) {\r
            stack.push(asteroid);\r
        }\r
    }\r
\r
    return stack;\r
}\r
\r
// Example usage:\r
console.log(asteroidCollision([5, 10, -5]));  // Output: [5, 10]\r
console.log(asteroidCollision([8, -8]));      // Output: []\r
console.log(asteroidCollision([10, 2, -5]));  // Output: [10]\r
console.log(asteroidCollision([-2, -1, 1, 2])); // Output: [-2, -1, 1, 2]\r
\r
/*\r
Approach:\r
To solve this problem, we can use a stack. As we iterate through the array of asteroids, we simulate the process of collisions:\r
\r
Push to Stack: If the asteroid is moving to the right (positive), push it onto the stack.\r
Collision Handling: If the asteroid is moving to the left (negative), check the top of the stack:\r
If the top of the stack is a smaller positive asteroid, pop it (since it gets destroyed).\r
If the top of the stack is the same size, pop it and ignore the current asteroid (both get destroyed).\r
If the top of the stack is larger, ignore the current asteroid (it gets destroyed).\r
If the stack is empty or the top of the stack is negative, push the current asteroid.\r
\r
\r
Time and Space Complexity:\r
Time Complexity: O(n), where n is the number of asteroids. We process each asteroid once, and each asteroid can be pushed to and popped from the stack at most once.\r
Space Complexity: O(n), in the worst case, all asteroids are moving in the same direction, and we store all of them in the stack.\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};

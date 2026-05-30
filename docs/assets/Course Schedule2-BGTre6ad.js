const e=`# Course Schedule2

## Problem Statement

Describe the problem statement for **Course Schedule2** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
// Course Schedule 2\r
/**\r
 * Problem Statement: You are given the number of courses (numCourses) and a list of prerequisite pairs where each pair [a, b] indicates that course 'a' depends on course 'b'. Your task is to determine an order in which you can finish all courses given these prerequisites. If it's not possible to finish all courses, return an empty array.\r
 */\r
function findCourseOrder(numCourses, prerequisites) {\r
    const graph = {};\r
    const inDegree = new Array(numCourses).fill(0);\r
    const courseOrder = [];\r
    // Build the graph and in-degree array\r
    for (let [course, prereq] of prerequisites) {\r
        if (!graph[prereq]) {\r
            graph[prereq] = [];\r
        }\r
        graph[prereq].push(course);\r
        inDegree[course]++;\r
    }\r
    const queue = [];\r
    // Enqueue courses with no prerequisites\r
    for (let course = 0; course < numCourses; course++) {\r
        if (inDegree[course] === 0) {\r
            queue.push(course);\r
        }\r
    }\r
    while (queue.length > 0) {\r
        const course = queue.shift();\r
        courseOrder.push(course);\r
        const neighbors = graph[course] || [];\r
        for (let neighbor of neighbors) {\r
            inDegree[neighbor]--;\r
            if (inDegree[neighbor] === 0) {\r
                queue.push(neighbor);\r
            }\r
        }\r
    }\r
    // If we were able to include all courses in the order, return it; otherwise, return an empty array\r
    return courseOrder.length === numCourses ? courseOrder : [];\r
}\r
// Example usage:\r
const numCourses = 4;\r
const prerequisites = [[1, 0], [2, 1], [3, 2]];\r
console.log(findCourseOrder(numCourses, prerequisites)); // Output: [0, 1, 2, 3]\r
/*\r
Time Complexity:\r
O(V + E):\r
V is the number of courses (vertices).\r
E is the number of prerequisite pairs (edges).\r
Each course and prerequisite is processed exactly once.\r
Space Complexity:\r
O(V + E):\r
The space used by the graph and in-degree array.\r
The queue and course order array in the worst-case scenario.\r
*/
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{e as default};

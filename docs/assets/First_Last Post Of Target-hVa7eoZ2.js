const r=`# First&Last Post Of Target

## Problem Statement

Describe the problem statement for **First&Last Post Of Target** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/*\r
Find First and Last Position of a Target\r
Problem: Given a sorted array, find the starting and ending position of a target value.\r
\r
Use binary search to find the leftmost and rightmost occurrences.\r
Example:\r
Input: nums = [5,7,7,8,8,10], target = 8\r
Output: [3, 4]\r
\r
Time Complexity:\r
O(log n): Each call to findBound performs a binary search, halving the range each time.\r
Total: O(log n) + O(log n) = O(log n).\r
Space Complexity:\r
O(1): No additional space is used outside of variables\r
 */\r
\r
\r
// **Problem**\r
\r
/* Input: \`arr = [5,7,7,8,8,10]\`, \`target = 8\`\r
* Output: \`[3,4]\` → first and last positions of \`8\`\r
* If target not found → return \`[-1, -1]\` */\r
\r
// > Important: Array is **sorted**, so we can use **binary search**.\r
\r
// **Approach**\r
\r
/* Instead of scanning the array linearly, we can **use modified binary search twice**:\r
\r
1. **Find First Occurrence**:\r
   * Use binary search\r
   * If \`arr[mid] === target\`, move **left** (\`end = mid - 1\`) to find first occurrence.\r
\r
2. **Find Last Occurrence**:\r
   * Use binary search\r
   * If \`arr[mid] === target\`, move **right** (\`start = mid + 1\`) to find last occurrence.\r
\r
3. Combine results into \`[first, last]\`. */\r
\r
// > Both searches are **O(log n)** → total **O(log n)**\r
\r
// ## **Step-by-Step Example**\r
\r
// Array: \`[5,7,7,8,8,10]\`, target = \`8\`\r
\r
/* **First occurrence**:\r
\r
  * mid=2 → arr[2]=7 < 8 → move right\r
  * mid=4 → arr[4]=8 → move left to check earlier occurrence\r
  * mid=3 → arr[3]=8 → move left → now start > end → first index = 3\r
\r
* **Last occurrence**:\r
\r
  * mid=2 → arr[2]=7 < 8 → move right\r
  * mid=4 → arr[4]=8 → move right to check later occurrence\r
  * mid=5 → arr[5]=10 > 8 → move left → now start > end → last index = 4\r
\r
Result → \`[3, 4]\` */\r
\r
// ## **JavaScript Implementation**\r
\r
/*\r
Optimize Using Binary Search:\r
// Rule:\r
if found target, store it (in a variable called 'bound')\r
keep searching left (right = mid - 1) to find first occurrence\r
if found target, store it\r
keep searching right (left = mid + 1) to find last occurrence\r
\r
-> Now show you know the better solution. You can say something like:\r
    “Since the array is sorted, we can use binary search. Normally binary search finds one occurrence of the target, but here we need the first and last occurrence. So we do a slight modification:”\r
\r
Find first occurrence:\r
    - Do normal binary search\r
    - If arr[mid] === target, instead of stopping, move left (end = mid - 1) to check if there’s an earlier occurrence\r
\r
Find last occurrence:\r
    - Do normal binary search\r
    - If arr[mid] === target, move right (start = mid + 1) to check if there’s a later occurrence\r
\r
Both searches run in O(log n), which is much faster than O(n). \r
*/\r
\r
function findFirstAndLast(arr, target) {\r
    function findBound(isFirst) {\r
        let start = 0, end = arr.length - 1;\r
        let bound = -1;\r
\r
        while (start <= end) {  // Use <= to include the case when start and end are the same\r
            let mid = Math.floor((start + end) / 2);\r
\r
            if (arr[mid] === target) {\r
                bound = mid;    // Store the index of the found target\r
                if (isFirst) end = mid - 1; // search left for first occurrence\r
                else start = mid + 1;       // search right for last occurrence\r
            } else if (arr[mid] < target) {\r
                start = mid + 1;\r
            } else {\r
                end = mid - 1;\r
            }\r
        }\r
\r
        return bound;\r
    }\r
\r
    const first = findBound(true);\r
    const last = findBound(false);\r
\r
    return [first, last];\r
}\r
\r
// Example usage\r
console.log(findFirstAndLast([5,7,7,8,8,10], 8)); // Output: [3, 4]\r
console.log(findFirstAndLast([5,7,7,8,8,10], 6)); // Output: [-1, -1]\r
\r
\r
// ✅ **Key Points**\r
\r
// * Uses **binary search twice** → very efficient\r
// * Works for arrays with **duplicates**\r
// * Time Complexity: \`O(log n)\`\r
// * Space Complexity: \`O(1)\`\r
\r

\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{r as default};

const n=`# find Maximum Profit In Job Scheduling

## Problem Statement

Describe the problem statement for **find Maximum Profit In Job Scheduling** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Find Maximum Profit in Job Scheduling\r
 * This is a Hard Level Problem\r
 * Solution 1 - https://mansimanhas.medium.com/interview-questions-series-part-1-dynamic-progrogramming-find-maximum-profit-in-job-scheduling-bf95c17146ba\r
 */\r
\r
function findMaxProfit(myJobObject){\r
    \r
    let n = myJobObject.length;\r
    \r
    let maxProfit = [];\r
    \r
    //initializing first profit\r
    maxProfit[0] = myJobObject[0].profit; \r
    \r
    for (let i=1; i<n; i++) {\r
        let j = findLatestNonConflictDelivery(myJobObject, i);\r
        let profit = myJobObject[i].profit;\r
        \r
        if (j != -1) {\r
           //when next non conflicting job is found\r
           profit = maxProfit[j] + profit;\r
        }\r
 \r
        //we will store max\r
        maxProfit[i] = Math.max(profit, maxProfit[i-1]);\r
    }\r
 \r
    //we will store the result of the max profit\r
    let result = maxProfit[n-1];\r
 \r
    return result;\r
}\r
\r
/**\r
 * Solution 2 - https://beizhedenglong.github.io/leetcode-solutions/docs/maximum-profit-in-job-scheduling\r
 */\r
\r
 const jobScheduling = function (startTime, endTime, profit) {\r
	const arr = startTime.reduce((acc, start, index) => {\r
	  acc.push([start, endTime[index], profit[index]])\r
	  return acc\r
	}, [])\r
	arr.sort((a, b) => a[1] - b[1])\r
	const memo = []\r
	let max = 0\r
	const getPrevIndex = (left, right, target) => {\r
	  let result = -1\r
	  while (left <= right) {\r
		const middle = Math.floor((left + right) / 2)\r
		if (arr[middle][1] <= target) {\r
		  left = middle + 1\r
		  result = middle\r
		} else {\r
		  right = middle - 1\r
		}\r
	  }\r
	  return result\r
	}\r
	for (let i = 0; i < arr.length; i++) {\r
	  const prevIndex = getPrevIndex(0, i, arr[i][0])\r
	  memo[i] = Math.max(\r
		(memo[i - 1] || 0),\r
		arr[i][2] + (memo[prevIndex] || 0),\r
	  )\r
	  max = Math.max(max, memo[i])\r
	}\r
	return max\r
  }\r
  
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

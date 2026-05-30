# find Maximum Profit In Job Scheduling

## Problem Statement

Describe the problem statement for **find Maximum Profit In Job Scheduling** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Find Maximum Profit in Job Scheduling
 * This is a Hard Level Problem
 * Solution 1 - https://mansimanhas.medium.com/interview-questions-series-part-1-dynamic-progrogramming-find-maximum-profit-in-job-scheduling-bf95c17146ba
 */

function findMaxProfit(myJobObject){
    
    let n = myJobObject.length;
    
    let maxProfit = [];
    
    //initializing first profit
    maxProfit[0] = myJobObject[0].profit; 
    
    for (let i=1; i<n; i++) {
        let j = findLatestNonConflictDelivery(myJobObject, i);
        let profit = myJobObject[i].profit;
        
        if (j != -1) {
           //when next non conflicting job is found
           profit = maxProfit[j] + profit;
        }
 
        //we will store max
        maxProfit[i] = Math.max(profit, maxProfit[i-1]);
    }
 
    //we will store the result of the max profit
    let result = maxProfit[n-1];
 
    return result;
}

/**
 * Solution 2 - https://beizhedenglong.github.io/leetcode-solutions/docs/maximum-profit-in-job-scheduling
 */

 const jobScheduling = function (startTime, endTime, profit) {
	const arr = startTime.reduce((acc, start, index) => {
	  acc.push([start, endTime[index], profit[index]])
	  return acc
	}, [])
	arr.sort((a, b) => a[1] - b[1])
	const memo = []
	let max = 0
	const getPrevIndex = (left, right, target) => {
	  let result = -1
	  while (left <= right) {
		const middle = Math.floor((left + right) / 2)
		if (arr[middle][1] <= target) {
		  left = middle + 1
		  result = middle
		} else {
		  right = middle - 1
		}
	  }
	  return result
	}
	for (let i = 0; i < arr.length; i++) {
	  const prevIndex = getPrevIndex(0, i, arr[i][0])
	  memo[i] = Math.max(
		(memo[i - 1] || 0),
		arr[i][2] + (memo[prevIndex] || 0),
	  )
	  max = Math.max(max, memo[i])
	}
	return max
  }
  
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

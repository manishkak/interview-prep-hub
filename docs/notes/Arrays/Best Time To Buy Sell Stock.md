# Best Time To Buy Sell Stock

## Problem Statement

 The solution set must not contain duplicate triplets. Implement the solution in JavaScript and return an array of triplet arrays.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

```js
/**
 * Problem: You are given an array 'prices' where prices[i] is the price of a given stock on the i th day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.
 */

// We'll use a one-pass approach, keeping track of the minimum price seen so far and calculating the profit for each day. The maximum profit will be updated whenever a higher profit is found

// chatgpt solution-
function maxProfit(prices) {
    let minPrice = Infinity; // Initialize to the highest possible value
    let maxProfit = 0;

    for (let price of prices) {
        // Update the minimum price if the current price is lower
        minPrice = Math.min(minPrice, price); // 7, 1, 

        // Calculate the profit if we were to sell at the current price
        const profit = price - minPrice; // 7-7=0, 

        // Update the maximum profit if the current profit is higher
        maxProfit = Math.max(maxProfit, profit); // 0, 
    }

    return maxProfit;
}


// Solution 2-

export function maxProfit(prices) {
    let minBuyPrice = prices[0]; // 1
    let maxProfit = 0;

    // loop over prices array and keep updating the max profit and minBuyPrice
    for(let i = 0; i < prices.length; i++) {
        const sellPrice = prices[i]; // 1, 5, 3
        const profit = sellPrice - minBuyPrice; // 0, 4, 2

        maxProfit = Math.max(maxProfit,profit) // 0, 4, 4
        minBuyPrice = Math.min(minBuyPrice,prices[i]) // 1, 1, 1
    }

    return maxProfit;
}

const prices = [ 1, 5, 3];
console.log(maxProfit(prices));

/**
 * TC = O(n), there is only one loop so 'linear' TC
 * SC = O(1), no extra space so 'constant' SC
 */
```


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.

# Best Time To Buy Sell Stock

## Problem Statement

Given an array prices where prices[i] is the price of a given stock on day i, maximize profit by choosing a single day to buy and a later day to sell. Return the maximum profit; if no profit possible return 0.

## Examples

- Input: [7,1,5,3,6,4]
    Output: 5 (buy at 1, sell at 6)
- Input: [7,6,4,3,1]
    Output: 0

## Approach

- Track the minimum price seen so far and compute potential profit at each day.
- Update max profit when a larger profit is found.

## Solution

```js
function maxProfit(prices) {
    let minPrice = Infinity, maxProfit = 0;
    for (const p of prices) {
        minPrice = Math.min(minPrice, p);
        maxProfit = Math.max(maxProfit, p - minPrice);
    }
    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4])); // 5
```

## Time Complexity

- O(n)

## Space Complexity

- O(1)

## Notes

- This solves the single-transaction variant. For multiple transactions, a different approach is needed.

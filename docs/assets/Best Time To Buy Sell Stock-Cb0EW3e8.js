const n=`# Best Time To Buy Sell Stock

## Problem Statement

Describe the problem statement for **Best Time To Buy Sell Stock** here.

## Examples

- Example input:
- Example output:

## Approach

Explain the general approach, intuition, and algorithms.

## Solution

\`\`\`js
/**\r
 * Problem: You are given an array 'prices' where prices[i] is the price of a given stock on the i th day.\r
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\r
Return the maximum profit you can achieve from this transaction. \r
If you cannot achieve any profit, return 0.\r
 */\r
\r
// We'll use a one-pass approach, keeping track of the minimum price seen so far and calculating the profit for each day. The maximum profit will be updated whenever a higher profit is found\r
\r
// chatgpt solution-\r
function maxProfit(prices) {\r
    let minPrice = Infinity; // Initialize to the highest possible value\r
    let maxProfit = 0;\r
\r
    for (let price of prices) {\r
        // Update the minimum price if the current price is lower\r
        minPrice = Math.min(minPrice, price); // 7, 1, \r
\r
        // Calculate the profit if we were to sell at the current price\r
        const profit = price - minPrice; // 7-7=0, \r
\r
        // Update the maximum profit if the current profit is higher\r
        maxProfit = Math.max(maxProfit, profit); // 0, \r
    }\r
\r
    return maxProfit;\r
}\r
\r
\r
// Solution 2-\r
\r
export function maxProfit(prices) {\r
    let minBuyPrice = prices[0]; // 1\r
    let maxProfit = 0;\r
\r
    // loop over prices array and keep updating the max profit and minBuyPrice\r
    for(let i = 0; i < prices.length; i++) {\r
        const sellPrice = prices[i]; // 1, 5, 3\r
        const profit = sellPrice - minBuyPrice; // 0, 4, 2\r
\r
        maxProfit = Math.max(maxProfit,profit) // 0, 4, 4\r
        minBuyPrice = Math.min(minBuyPrice,prices[i]) // 1, 1, 1\r
    }\r
\r
    return maxProfit;\r
}\r
\r
const prices = [ 1, 5, 3];\r
console.log(maxProfit(prices));\r
\r
/**\r
 * TC = O(n), there is only one loop so 'linear' TC\r
 * SC = O(1), no extra space so 'constant' SC\r
 */
\`\`\`


## Time Complexity


## Space Complexity


## Notes

- Add notes, edge cases, and patterns here.
`;export{n as default};

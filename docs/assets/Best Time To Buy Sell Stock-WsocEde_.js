const r=`# Best Time To Buy Sell Stock\r
\r
## Problem Statement\r
\r
Given an array prices where prices[i] is the price of a given stock on day i, maximize profit by choosing a single day to buy and a later day to sell. Return the maximum profit; if no profit possible return 0.\r
\r
## Examples\r
\r
- Input: [7,1,5,3,6,4]\r
    Output: 5 (buy at 1, sell at 6)\r
- Input: [7,6,4,3,1]\r
    Output: 0\r
\r
## Approach\r
\r
- Track the minimum price seen so far and compute potential profit at each day.\r
- Update max profit when a larger profit is found.\r
\r
## Solution\r
\r
\`\`\`js\r
function maxProfit(prices) {\r
    let minPrice = Infinity, maxProfit = 0;\r
    for (const p of prices) {\r
        minPrice = Math.min(minPrice, p);\r
        maxProfit = Math.max(maxProfit, p - minPrice);\r
    }\r
    return maxProfit;\r
}\r
\r
console.log(maxProfit([7,1,5,3,6,4])); // 5\r
\`\`\`\r
\r
## Time Complexity\r
\r
- O(n)\r
\r
## Space Complexity\r
\r
- O(1)\r
\r
## Notes\r
\r
- This solves the single-transaction variant. For multiple transactions, a different approach is needed.\r
`;export{r as default};

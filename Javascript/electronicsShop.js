/**
 * Problem: Electronics Shop
 * -------------------------------------------------------------
 * A person wants to buy one keyboard and one USB drive within a budget `b`.
 * Given arrays of keyboard prices and USB drive prices, determine the maximum
 * amount of money they can spend buying both items.
 * 
 * If it is impossible to buy one of each within the budget, return -1.
 * 
 * Parameters:
 *   @param {number[]} keyboards - Array of prices for each keyboard model
 *   @param {number[]} drives - Array of prices for each USB drive model
 *   @param {number} b - Total budget
 * 
 * Returns:
 *   @returns {number} - Maximum expenditure <= b, or -1 if unaffordable
 * 
 * Complexity:
 *   - Time Complexity: O(n * m) where n = keyboards.length, m = drives.length
 *   - Space Complexity: O(1)
 */
function getMoneySpent(keyboards, drives, b) {
    let maxBudget = -1;

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            const cost = keyboards[i] + drives[j];
            if (cost <= b && cost > maxBudget) {
                maxBudget = cost;
            }
        }
    }
    return maxBudget;
}

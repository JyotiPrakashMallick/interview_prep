/**
 * Problem: Chocolate Feast
 * -------------------------------------------------------------
 * Bobby has `n` money, each chocolate bar costs `c`, and `m` wrappers can be
 * traded in for one free bar. Every free bar also leaves a wrapper behind.
 * How many bars can Bobby eat in total?
 *
 * Example:
 *   n = 15, c = 3, m = 2
 *   Buy 15 / 3 = 5 bars          -> 5 wrappers
 *   Trade 4 -> 2 bars (1 left)   -> 1 + 2 = 3 wrappers
 *   Trade 2 -> 1 bar  (1 left)   -> 1 + 1 = 2 wrappers
 *   Trade 2 -> 1 bar  (0 left)   -> 0 + 1 = 1 wrapper (stop)
 *   Total eaten: 5 + 2 + 1 + 1 = 9
 *
 * Strategic Insight:
 * Buy as many bars as possible up front, then keep trading wrappers:
 *   free     = floor(wrappers / m)
 *   wrappers = (wrappers % m) + free    // leftovers + wrappers of the new bars
 * Stop when wrappers < m.
 *
 * Each trade reduces the wrapper count by (m - 1) per free bar, so the loop
 * runs O(log_m(n / c)) rounds.
 *
 * (Closed form, for reference: if bought = floor(n / c), then
 *  total = bought + floor((bought - 1) / (m - 1)). The loop is clearer.)
 *
 * Parameters:
 *   @param {number} n - Bobby's initial amount of money
 *   @param {number} c - The cost of one chocolate bar
 *   @param {number} m - Wrappers needed for one free bar
 *
 * Returns:
 *   @returns {number} - Total number of chocolates eaten
 *
 * Complexity:
 *   - Time Complexity: O(log_m(n / c))
 *   - Space Complexity: O(1)
 */

function chocolateFeast(n, c, m) {
    let eaten = Math.floor(n / c);
    let wrappers = eaten;

    while (wrappers >= m) {
        const free = Math.floor(wrappers / m);
        eaten += free;
        wrappers = (wrappers % m) + free;
    }

    return eaten;
}

// Example / Test Cases:
console.log("Example  (15, 3, 2):", chocolateFeast(15, 3, 2)); // 9
console.log("Sample 1 (10, 2, 5):", chocolateFeast(10, 2, 5)); // 6
console.log("Sample 2 (12, 4, 4):", chocolateFeast(12, 4, 4)); // 3
console.log("Sample 3 (6, 2, 2):", chocolateFeast(6, 2, 2));   // 5

module.exports = { chocolateFeast };

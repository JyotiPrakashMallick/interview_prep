/**
 * Problem: Sales by Match (Sock Merchant)
 * -------------------------------------------------------------
 * There is a large pile of socks that must be paired by color.
 * Given an array of integers representing the color of each sock,
 * determine how many pairs of socks with matching colors there are.
 * 
 * Formula:
 * For each unique color with count `c`, the number of complete pairs is `floor(c / 2)`.
 * 
 * Parameters:
 *   @param {number} n - The number of socks in the pile
 *   @param {number[]} ar - Colors of each sock
 * 
 * Returns:
 *   @returns {number} - Total number of matching sock pairs
 * 
 * Complexity:
 *   - Time Complexity: O(n) where n = ar.length
 *   - Space Complexity: O(u) where u is the number of unique colors
 */
function sockMerchant(n, ar) {
    const colorCounts = {};
    let totalPairs = 0;

    for (let i = 0; i < n; i++) {
        const sockColor = ar[i];
        colorCounts[sockColor] = (colorCounts[sockColor] || 0) + 1;
    }

    for (const color in colorCounts) {
        totalPairs += Math.floor(colorCounts[color] / 2);
    }

    return totalPairs;
}

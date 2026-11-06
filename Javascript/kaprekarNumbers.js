/**
 * Problem: Modified Kaprekar Numbers
 * -------------------------------------------------------------
 * A modified Kaprekar number is a positive whole number `n` with `d` digits
 * such that when you square `n`:
 *   sq = n * n
 * You split the string representation of `sq` into two parts:
 *   - Right part `r`: exactly `d` digits long.
 *   - Left part `l`: the remaining substring (or 0 if empty).
 * If `parseInt(l) + parseInt(r) === n`, then `n` is a modified Kaprekar number.
 * 
 * Examples:
 * - n = 1: 1^2 = 1. d = 1. r = "1", l = "". 0 + 1 = 1 === n. -> Valid Kaprekar!
 * - n = 9: 9^2 = 81. d = 1. r = "1", l = "8". 8 + 1 = 9 === n. -> Valid Kaprekar!
 * - n = 45: 45^2 = 2025. d = 2. r = "25", l = "20". 20 + 25 = 45 === n. -> Valid Kaprekar!
 * - n = 55: 55^2 = 3025. d = 2. r = "25", l = "30". 30 + 25 = 55 === n. -> Valid Kaprekar!
 * - n = 99: 99^2 = 9801. d = 2. r = "01", l = "98". 98 + 1 = 99 === n. -> Valid Kaprekar!
 * 
 * Note on Constraints:
 * 1 <= p < q <= 100,000.
 * For n = 100,000, n^2 = 10^10, which comfortably fits inside JavaScript's safe integers
 * (Number.MAX_SAFE_INTEGER is 9 * 10^15).
 * 
 * Objective:
 * Print all modified Kaprekar numbers between p and q inclusive, space-separated.
 * If none exist, print "INVALID RANGE".
 * 
 * Parameters:
 *   @param {number} p - Lower integer limit (inclusive)
 *   @param {number} q - Upper integer limit (inclusive)
 * 
 * Returns:
 *   @returns {string} - Space-separated list of numbers or "INVALID RANGE"
 * 
 * Complexity:
 *   - Time Complexity: O((q - p) * d) where d is the number of digits in n (d <= 5)
 *   - Space Complexity: O(k) where k is the number of Kaprekar numbers in the range
 */

function isKaprekar(n) {
    if (n === 1) return true;

    const square = (n * n).toString();
    const d = n.toString().length;

    // Right part must be d digits long
    const rightStr = square.slice(-d);
    // Left part is the remaining leading substring
    const leftStr = square.slice(0, -d);

    const r = parseInt(rightStr, 10) || 0;
    const l = leftStr ? parseInt(leftStr, 10) : 0;

    return (l + r) === n;
}

function kaprekarNumbers(p, q) {
    const results = [];

    for (let i = p; i <= q; i++) {
        if (isKaprekar(i)) {
            results.push(i);
        }
    }

    const output = results.length > 0 ? results.join(' ') : "INVALID RANGE";
    console.log(output);
    return output;
}

// Example / Test Cases:
console.log("Sample 1 (p=1, q=100):");
kaprekarNumbers(1, 100); // 1 9 45 55 99

console.log("\nSample 2 (p=100, q=300):");
kaprekarNumbers(100, 300); // 297

module.exports = { kaprekarNumbers, isKaprekar };

/**
 * Problem: Divisible Sum Pairs
 * -------------------------------------------------------------
 * Given an array of integers `ar` and a positive integer `k`, determine the
 * number of pairs (i, j) where i < j and ar[i] + ar[j] is divisible by k.
 * 
 * Condition:
 *   (ar[i] + ar[j]) % k === 0  with  0 <= i < j < n
 * 
 * Parameters:
 *   @param {number} n - Length of the array
 *   @param {number} k - The integer divisor
 *   @param {number[]} ar - Array of integers
 * 
 * Returns:
 *   @returns {number} - Count of valid (i, j) pairs
 * 
 * Complexity:
 *   - Time Complexity: O(n^2) using nested search (can be optimized to O(n) using remainder frequencies)
 *   - Space Complexity: O(1)
 */
function divisibleSumPairs(n, k, ar) {
    let countOfValue = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                countOfValue++;
            }
        }
    }
    return countOfValue;
}

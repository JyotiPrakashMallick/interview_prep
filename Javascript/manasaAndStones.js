/**
 * Problem: Manasa and Stones
 * -------------------------------------------------------------
 * Manasa finds a trail of stones starting with stone 0 (not counted in n).
 * She finds `n` stones total including the final treasure stone, or more precisely,
 * there are `n - 1` steps/transitions between the first stone (value 0) and the last stone.
 * 
 * At each step, the stone's value increases by either `a` or `b`.
 * 
 * Objective:
 * Compute all possible numbers that might occur on the LAST stone.
 * Return the list sorted in ascending order with no duplicates.
 * 
 * Mathematical Insight:
 * If there are `n - 1` steps in total:
 * Suppose we take `i` steps of size `b` and `(n - 1 - i)` steps of size `a`, where `0 <= i <= n - 1`.
 * Then the value of the last stone is:
 *   value = (n - 1 - i) * a + i * b
 * 
 * Since addition is commutative, the order in which steps of size `a` and `b`
 * are taken does not affect the final value!
 * Thus, there are at most `n` distinct possible values:
 * for i = 0, 1, 2, ..., n - 1.
 * 
 * Edge Case:
 * If a === b, all combinations result in the exact same value:
 *   (n - 1) * a
 * We must ensure values are unique.
 * 
 * Parameters:
 *   @param {number} n - Total number of stones (1 <= n <= 1000)
 *   @param {number} a - First possible difference (1 <= a <= 1000)
 *   @param {number} b - Second possible difference (1 <= b <= 1000)
 * 
 * Returns:
 *   @returns {number[]} - Array of unique possible values of the last stone, sorted ascending
 * 
 * Complexity:
 *   - Time Complexity: O(n log n) or O(n) if min(a,b) is chosen first
 *   - Space Complexity: O(n) to store the result array
 */
function stones(n, a, b) {
    // If differences are identical, only 1 outcome is possible
    if (a === b) {
        return [(n - 1) * a];
    }

    const diff1 = Math.min(a, b);
    const diff2 = Math.max(a, b);
    const result = [];
    const steps = n - 1;

    // By iterating i from 0 to steps with diff1 < diff2,
    // values are naturally generated in strictly increasing order!
    for (let i = 0; i <= steps; i++) {
        const val = (steps - i) * diff1 + i * diff2;
        result.push(val);
    }

    return result;
}

// Example / Test Cases:
console.log("Sample 1 (n=3, a=1, b=2):", stones(3, 1, 2));
// Expected: [ 2, 3, 4 ]

console.log("Sample 2 (n=4, a=10, b=100):", stones(4, 10, 100));
// Expected: [ 30, 120, 210, 300 ]

console.log("Sample 3 (n=2, a=2, b=3):", stones(2, 2, 3));
// Expected: [ 4, 5, 6 ] if n refers to non-zero count or [ 2, 3 ] for n=2 total stones
// Note: problem statement states starting stone is 0, for n=2 total stones steps=1 -> [2, 3]
// If n=3 stones total -> steps=2 -> [4, 5, 6]

module.exports = stones;

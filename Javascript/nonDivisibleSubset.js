/**
 * Problem: Non-Divisible Subset
 * -------------------------------------------------------------
 * Given a set of distinct integers S, determine the size of a maximal subset S'
 * such that the sum of any 2 numbers in S' is NOT evenly divisible by k:
 *   (a + b) % k !== 0  for all a, b in S' where a !== b.
 * 
 * Mathematical Remainder Principle:
 * For any two numbers a and b:
 *   (a + b) % k === 0   <===>   (a % k + b % k) % k === 0
 * 
 * Therefore, if we take remainder r = a % k, its conflicting complement remainder
 * is comp = (k - r) % k:
 * 1. For each complementary pair (r, k - r) where r !== k - r:
 *    - We CANNOT pick numbers with remainder r AND numbers with remainder (k - r) together!
 *    - To maximize the subset size, we greedily pick the group with the larger count:
 *      `max(count[r], count[k - r])`
 * 
 * 2. Special Case 1: Remainder 0:
 *    - Numbers with remainder 0 add up with other remainder 0 numbers:
 *      (0 + 0) % k === 0.
 *    - Therefore, we can include AT MOST ONE number with remainder 0:
 *      `min(count[0], 1)`
 * 
 * 3. Special Case 2: Even k where r === k / 2:
 *    - If k is even, numbers with remainder k / 2 add up:
 *      (k/2 + k/2) = k % k === 0.
 *    - Therefore, we can include AT MOST ONE number with remainder k / 2:
 *      `min(count[k / 2], 1)`
 * 
 * Parameters:
 *   @param {number} k - The divisor (1 <= k <= 100)
 *   @param {number[]} s - Array of distinct integers (1 <= n <= 10^5)
 * 
 * Returns:
 *   @returns {number} - The length of the longest valid non-divisible subset
 * 
 * Complexity:
 *   - Time Complexity: O(n + k) where n is s.length
 *   - Space Complexity: O(k) for the remainder frequency array
 */
function nonDivisibleSubset(k, s) {
    // Step 1: Count frequency of each remainder (0 to k - 1)
    const remainderCounts = new Array(k).fill(0);
    for (const num of s) {
        remainderCounts[num % k]++;
    }

    let maxSubsetSize = 0;

    // Step 2: Handle remainder 0 (at most 1 element permitted)
    if (remainderCounts[0] > 0) {
        maxSubsetSize += 1;
    }

    // Step 3: Greedily pick between remainder r and complement (k - r)
    const halfK = Math.floor(k / 2);
    for (let r = 1; r <= halfK; r++) {
        const complement = k - r;

        if (r === complement) {
            // Special Case: When k is even and r === k / 2 (e.g. k=4, r=2)
            // Any two elements with remainder k/2 sum to a multiple of k.
            // At most 1 element can be chosen.
            if (remainderCounts[r] > 0) {
                maxSubsetSize += 1;
            }
        } else {
            // Greedily pick the larger count between r and (k - r)
            maxSubsetSize += Math.max(remainderCounts[r], remainderCounts[complement]);
        }
    }

    return maxSubsetSize;
}

// Example / Test Cases:
console.log("Sample 1 (k=3, s=[1, 7, 2, 4]):", nonDivisibleSubset(3, [1, 7, 2, 4]));
// Remainders % 3:
// 1%3=1, 7%3=1, 4%3=1 -> count[1] = 3
// 2%3=2 -> count[2] = 1
// Pick max(count[1], count[2]) = max(3, 1) = 3 -> Result: 3 ([1, 7, 4])

console.log("Sample 2 (k=4, s=[19, 10, 12, 10, 24, 25, 22]):", nonDivisibleSubset(4, [19, 10, 12, 24, 25, 22]));
// Result: 3

module.exports = nonDivisibleSubset;

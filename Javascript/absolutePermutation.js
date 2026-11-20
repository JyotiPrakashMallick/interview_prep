/**
 * Problem: Absolute Permutation
 *
 * We define P to be a permutation of the first n natural numbers in the range [1, n].
 * P is an absolute permutation if |pos[i] - i| = k holds true for every i in [1, n] (1-based indexing).
 *
 * Find the lexicographically smallest absolute permutation P. If none exists, return [-1].
 *
 * Mathematical Insights:
 * 1. If k === 0:
 *    |pos[i] - i| = 0 => pos[i] = i for all i.
 *    The identity permutation [1, 2, ..., n] is always valid and lexicographically smallest.
 *
 * 2. If k > 0:
 *    For position 1, pos[1] can only be 1 + k (since 1 - k <= 0 is invalid).
 *    This forces position 1 + k to take value 1 (since 1 has already been claimed by position 1,
 *    and position 1 + k cannot take (1 + k) + k = 1 + 2k without leaving 1 unpaired).
 *    Generally, elements must swap in blocks of size 2*k:
 *      The first k elements [1 .. k] are mapped to [1+k .. 2k] (i.e. pos[i] = i + k)
 *      The next k elements [k+1 .. 2k] are mapped to [1 .. k] (i.e. pos[i] = i - k)
 *    For this block structure to cover all n numbers without leaving remainder elements,
 *    n MUST be divisible by 2*k (i.e., n % (2 * k) === 0).
 *    If n % (2 * k) !== 0, no valid permutation exists -> return [-1].
 *
 * @param {number} n - Upper bound of natural numbers (1 to n)
 * @param {number} k - Required absolute difference
 * @returns {number[]} - Lexicographically smallest permutation or [-1]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function absolutePermutation(n, k) {
    // Case 1: k === 0 -> Identity permutation
    if (k === 0) {
        const result = new Array(n);
        for (let i = 0; i < n; i++) {
            result[i] = i + 1;
        }
        return result;
    }

    // Case 2: n must be divisible by 2*k for valid pairing of blocks
    if (n % (2 * k) !== 0) {
        return [-1];
    }

    // Case 3: Alternate adding and subtracting k in blocks of size k
    const result = new Array(n);
    let add = true;

    for (let i = 1; i <= n; i++) {
        if (add) {
            result[i - 1] = i + k;
        } else {
            result[i - 1] = i - k;
        }

        // Every k elements, flip the operation
        if (i % k === 0) {
            add = !add;
        }
    }

    return result;
}

// Verification Test Cases
if (require.main === module) {
    // Example: n = 4, k = 2 -> [3, 4, 1, 2]
    console.log("n=4, k=2:", absolutePermutation(4, 2)); // [3, 4, 1, 2]

    // Sample Input 0 queries:
    // 2 1 -> [2, 1]
    // 3 0 -> [1, 2, 3]
    // 3 2 -> [-1]
    console.log("n=2, k=1:", absolutePermutation(2, 1)); // [2, 1]
    console.log("n=3, k=0:", absolutePermutation(3, 0)); // [1, 2, 3]
    console.log("n=3, k=2:", absolutePermutation(3, 2)); // [-1]

    // Additional cases:
    // n = 8, k = 2 -> [3, 4, 1, 2, 7, 8, 5, 6]
    console.log("n=8, k=2:", absolutePermutation(8, 2));
}

module.exports = { absolutePermutation };

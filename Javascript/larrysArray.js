/**
 * Problem: Larry's Array
 *
 * Larry has a permutation of natural numbers from 1 to n.
 * He can choose any 3 consecutive indices and rotate their elements:
 *   ABC -> BCA -> CAB -> ABC
 *
 * Determine whether the array can be fully sorted in ascending order.
 *
 * Mathematical Invariant (Permutation Parity):
 * - A 3-cycle rotation (A, B, C) -> (B, C, A) is equivalent to two transpositions:
 *     (A, B, C) -> swap(A, B) -> (B, A, C)
 *     (B, A, C) -> swap(A, C) -> (B, C, A)
 * - Each swap (transposition) flips the parity of the number of inversions.
 * - Two swaps leave the inversion parity unchanged!
 * - Therefore, 3-element rotations PRESERVE the parity of the total inversion count.
 * - A fully sorted array has 0 inversions (an even number: 0 % 2 === 0).
 * - Hence, an array can be sorted if and only if the total number of inversions
 *   in the initial permutation is EVEN.
 *
 * Inversion Definition:
 * An inversion is a pair of indices (i, j) such that i < j and A[i] > A[j].
 *
 * @param {number[]} A - Permutation of integers 1 to n
 * @returns {string} - "YES" if the array can be fully sorted, else "NO"
 *
 * Time Complexity: O(n^2) or O(n log n) with merge sort / Fenwick tree.
 * Given n <= 1000, O(n^2) runs in ~1 ms (<= 500,000 comparisons).
 * Space Complexity: O(1) auxiliary space.
 */
function larrysArray(A) {
    let inversions = 0;
    const n = A.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (A[i] > A[j]) {
                inversions++;
            }
        }
    }

    return inversions % 2 === 0 ? "YES" : "NO";
}

// Verification Test Cases
if (require.main === module) {
    // Example from problem description:
    // A = [1, 6, 5, 2, 4, 3] -> YES
    console.log("Example:", larrysArray([1, 6, 5, 2, 4, 3])); // Expected: YES

    // Sample Input cases:
    // [3, 1, 2] -> inversions: (3,1), (3,2) = 2 (even) -> YES
    // [1, 3, 4, 2] -> inversions: (3,2), (4,2) = 2 (even) -> YES
    // [1, 2, 3, 5, 4] -> inversions: (5,4) = 1 (odd) -> NO
    console.log("Test 1 [3, 1, 2]:", larrysArray([3, 1, 2]));             // Expected: YES
    console.log("Test 2 [1, 3, 4, 2]:", larrysArray([1, 3, 4, 2]));       // Expected: YES
    console.log("Test 3 [1, 2, 3, 5, 4]:", larrysArray([1, 2, 3, 5, 4])); // Expected: NO
}

module.exports = { larrysArray };

/**
 * Problem: Minimum Distances
 * -------------------------------------------------------------
 * The distance between two array values is the number of indices between
 * them: d[i, j] = |j - i|.
 * Given an array `a`, find the minimum distance between any pair of EQUAL
 * elements. If no value repeats, return -1.
 *
 * Example:
 *   a = [3, 2, 1, 2, 3]
 *   3's at i = 0, j = 4 -> distance 4
 *   2's at i = 1, j = 3 -> distance 2
 *   Minimum = 2
 *
 * Strategic Insight:
 * For any value, the closest equal pair is always two CONSECUTIVE occurrences
 * (an occurrence further back can only be farther away).
 * So scan left to right, remember the LAST index where each value was seen,
 * and whenever a value reappears, compare (i - lastSeen[value]) to the best.
 *
 * Parameters:
 *   @param {number[]} a - The array of integers
 *
 * Returns:
 *   @returns {number} - The minimum distance, or -1 if no equal pair exists
 *
 * Complexity:
 *   - Time Complexity: O(n) — single pass with O(1) map lookups
 *   - Space Complexity: O(n) — last-seen index for each distinct value
 */

function minimumDistances(a) {
    const lastSeen = new Map();
    let minDist = Infinity;

    for (let i = 0; i < a.length; i++) {
        if (lastSeen.has(a[i])) {
            minDist = Math.min(minDist, i - lastSeen.get(a[i]));
        }
        lastSeen.set(a[i], i);
    }

    return minDist === Infinity ? -1 : minDist;
}

// Example / Test Cases:
console.log("Example (a=[3,2,1,2,3]):", minimumDistances([3, 2, 1, 2, 3])); // 2
console.log("Sample  (a=[7,1,3,4,1,7]):", minimumDistances([7, 1, 3, 4, 1, 7])); // 3
console.log("None    (a=[1,2,3,4]):", minimumDistances([1, 2, 3, 4])); // -1
console.log("Triple  (a=[5,1,5,5]):", minimumDistances([5, 1, 5, 5])); // 1

module.exports = { minimumDistances };

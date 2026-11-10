/**
 * Problem: Beautiful Triplets
 * -------------------------------------------------------------
 * Given a sequence of integers `arr` (sorted ascending) and a value `d`,
 * a triplet (arr[i], arr[j], arr[k]) is beautiful if:
 *   - i < j < k
 *   - arr[j] - arr[i] === arr[k] - arr[j] === d
 *
 * In other words: for some value x, the triplet is (x, x + d, x + 2d).
 * Count the number of beautiful triplets (by index).
 *
 * Example:
 *   arr = [2, 2, 3, 4, 5], d = 1
 *   Triplets by index: [0,2,3], [1,2,3], [2,3,4] -> 3
 *
 * Strategic Insight:
 * Because the array is sorted, every x comes before every x + d, and every
 * x + d comes before every x + 2d. So the index-order condition (i < j < k)
 * is automatically satisfied for any choice of positions holding those values.
 *
 * The number of beautiful triplets starting at value x is therefore:
 *   count(x) * count(x + d) * count(x + 2d)
 *
 * Build a frequency map once, then sum that product over every distinct x.
 * (This also handles duplicates like the sample's [2, 2, ...], even though
 * the constraints say arr is strictly increasing.)
 *
 * Parameters:
 *   @param {number} d - The beautiful difference
 *   @param {number[]} arr - The sequence, sorted ascending
 *
 * Returns:
 *   @returns {number} - The number of beautiful triplets
 *
 * Complexity:
 *   - Time Complexity: O(n) — one pass to count, one pass over distinct values
 *   - Space Complexity: O(n) — frequency map
 */

function beautifulTriplets(d, arr) {
    const freq = new Map();
    for (const value of arr) {
        freq.set(value, (freq.get(value) || 0) + 1);
    }

    let count = 0;
    for (const [x, cx] of freq) {
        const cMid = freq.get(x + d) || 0;
        const cEnd = freq.get(x + 2 * d) || 0;
        count += cx * cMid * cEnd;
    }

    return count;
}

// Example / Test Cases:
console.log("Example (d=1, arr=[2,2,3,4,5]):", beautifulTriplets(1, [2, 2, 3, 4, 5])); // 3
console.log("Sample  (d=3, arr=[1,2,4,5,7,8,10]):", beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10])); // 3
console.log("None    (d=5, arr=[1,2,3]):", beautifulTriplets(5, [1, 2, 3])); // 0

module.exports = { beautifulTriplets };

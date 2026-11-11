/**
 * Problem: Service Lane
 * -------------------------------------------------------------
 * A service lane runs next to a highway and its width varies along its length.
 * `width[k]` is the lane width at point k. For each case [i, j] (entry and exit
 * indices, inclusive), find the widest vehicle that can drive from i to j.
 *
 * A vehicle fits through the segment only if it fits through EVERY point in it,
 * so the answer for [i, j] is simply min(width[i..j]).
 *
 * Example (0-based indices, as in the constraints 0 <= i < j < n):
 *   width = [2, 3, 1, 2, 3, 2, 3, 3]
 *   [0, 3] -> min(2, 3, 1, 2) = 1
 *   [4, 6] -> min(3, 2, 3)    = 2
 *   [6, 7] -> min(3, 3)       = 3
 *   [3, 5] -> min(2, 3, 2)    = 2
 *   [0, 7] -> min(all)        = 1
 *
 * ⚠️ Note on the statement's example:
 *   width = [2, 3, 2, 1], cases = [[1, 2], [2, 4]] uses 1-BASED indices
 *   (index 4 doesn't exist in a 4-element 0-based array). The real input and
 *   constraints are 0-based, which is what this solution uses.
 *
 * ⚠️ HackerRank template quirk:
 *   The stub's signature is serviceLane(n, cases), but `width` is needed too.
 *   Pass `width` into the function (and update the call in main), as below.
 *
 * Constraints keep this simple: each segment has at most 1000 points and there
 * are at most 1000 cases, so a direct scan is at most ~10^6 steps.
 *
 * Parameters:
 *   @param {number[]} width - Lane width at each point
 *   @param {number[][]} cases - Each [i, j] is an inclusive segment
 *
 * Returns:
 *   @returns {number[]} - Widest vehicle for each segment
 *
 * Complexity:
 *   - Time Complexity: O(t * L), where L = j - i + 1 <= 1000
 *   - Space Complexity: O(t) for the results
 */

function serviceLane(width, cases) {
    return cases.map(([i, j]) => {
        let narrowest = width[i];
        for (let k = i + 1; k <= j; k++) {
            if (width[k] < narrowest) narrowest = width[k];
        }
        return narrowest;
    });
}

// Example / Test Cases:
const width = [2, 3, 1, 2, 3, 2, 3, 3];
const cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];
console.log("Sample:", serviceLane(width, cases).join(" ")); // 1 2 3 2 1

// Statement example, converted from 1-based to 0-based: [1,2] -> [0,1], [2,4] -> [1,3]
console.log("Example:", serviceLane([2, 3, 2, 1], [[0, 1], [1, 3]]).join(" ")); // 2 1

module.exports = { serviceLane };

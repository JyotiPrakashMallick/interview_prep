/**
 * Problem: Flatland Space Stations
 * -------------------------------------------------------------
 * Cities 0..n-1 sit in a line, 1 km apart (not circular). Some cities have a
 * space station (indices in c, unordered and distinct). Find the maximum
 * distance from any city to its nearest space station.
 *
 * Approach:
 *   Sort the station indices. Then only three kinds of stretches matter:
 *     1. Left edge:  cities before the first station -> farthest is city 0,
 *                    distance c[0].
 *     2. Right edge: cities after the last station  -> farthest is city n-1,
 *                    distance (n - 1) - c[m-1].
 *     3. Between two stations a and b: the worst city is in the middle,
 *                    distance floor((b - a) / 2).
 *   The answer is the largest of these.
 *
 * Example:
 *   n = 5, c = [0, 4]
 *   left edge = 0, right edge = 0, gap (0, 4) -> floor(4 / 2) = 2
 *   Answer: 2 (city 2 is 2 km from both stations)
 *
 * ⚠️ Sort numerically: c.sort() without a comparator sorts as strings,
 *    so [10, 9] would stay [10, 9].
 *
 * Parameters:
 *   @param {number} n   - Number of cities
 *   @param {number[]} c - Indices of cities with a space station
 *
 * Returns:
 *   @returns {number} - Maximum distance from any city to its nearest station
 *
 * Complexity:
 *   - Time Complexity: O(m log m) for the sort, then O(m) for the scan
 *   - Space Complexity: O(1) extra (sorts in place)
 */

function flatlandSpaceStations(n, c) {
    c.sort((a, b) => a - b);

    let maxDistance = Math.max(c[0], n - 1 - c[c.length - 1]);

    for (let i = 1; i < c.length; i++) {
        const middle = Math.floor((c[i] - c[i - 1]) / 2);
        if (middle > maxDistance) maxDistance = middle;
    }

    return maxDistance;
}

// Example / Test Cases:
console.log("Example:", flatlandSpaceStations(3, [1]));                  // 1
console.log("Sample 0:", flatlandSpaceStations(5, [0, 4]));              // 2
console.log("Sample 1:", flatlandSpaceStations(6, [0, 1, 2, 4, 3, 5]));  // 0
console.log("Unsorted:", flatlandSpaceStations(20, [13, 1, 11, 10, 6])); // 6 (right edge 19 - 13)

module.exports = { flatlandSpaceStations };

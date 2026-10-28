/**
 * Problem: Migratory Birds (Frequency Array Approach)
 * -------------------------------------------------------------
 * Given an array of bird sightings (where each bird id is guaranteed to be in 1..5),
 * find the most frequently sighted bird type with the lowest type ID in case of ties.
 * 
 * Approach:
 * Using a fixed-size frequency array `count[6]`:
 * - Since bird IDs are 1 to 5, we count each occurrence in `count[id]`.
 * - Finding the index of `Math.max(...count)` naturally returns the lowest ID
 *   because `indexOf` returns the first matching index.
 * 
 * Parameters:
 *   @param {number[]} arr - Array of bird sightings
 * 
 * Returns:
 *   @returns {number} - Lowest bird ID among the highest count
 * 
 * Complexity:
 *   - Time Complexity: O(n) where n = arr.length
 *   - Space Complexity: O(1) (fixed array of size 6)
 */
function migratoryBirds(arr) {
    const count = new Array(6).fill(0);
    for (const bird of arr) {
        count[bird]++;
    }
    // Find maximum frequency starting from bird id 1..5
    let maxFreq = 0;
    let minBirdId = 1;
    for (let id = 1; id <= 5; id++) {
        if (count[id] > maxFreq) {
            maxFreq = count[id];
            minBirdId = id;
        }
    }
    return minBirdId;
}

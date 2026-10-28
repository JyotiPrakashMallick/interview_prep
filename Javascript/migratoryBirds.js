/**
 * Problem: Migratory Birds
 * -------------------------------------------------------------
 * Given an array of bird sightings where each element represents a bird type id,
 * find the most frequently sighted bird type.
 * 
 * If more than one type has the same maximum frequency, return the smallest type id.
 * 
 * Parameters:
 *   @param {number[]} arr - Array of integers representing bird type sightings (types 1 to 5)
 * 
 * Returns:
 *   @returns {number} - The lowest type id among the most common birds
 * 
 * Complexity:
 *   - Time Complexity: O(n) where n = arr.length
 *   - Space Complexity: O(k) where k is the number of distinct bird types
 */
function findMostFrequentBirdType(arr) {
    const birdCounts = {};
    let maxCount = 0;
    let mostFrequentTypeBird = null;

    for (const birdType of arr) {
        // Increment count for current bird type
        birdCounts[birdType] = (birdCounts[birdType] || 0) + 1;

        // Compare with current maximum frequency
        if (birdCounts[birdType] > maxCount) {
            maxCount = birdCounts[birdType];
            mostFrequentTypeBird = birdType;
        } else if (birdCounts[birdType] === maxCount && (mostFrequentTypeBird === null || birdType < mostFrequentTypeBird)) {
            mostFrequentTypeBird = birdType;
        }
    }

    return mostFrequentTypeBird;
}

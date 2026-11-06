/**
 * Problem: Counting Valleys
 * -------------------------------------------------------------
 * An avid hiker tracks each step of a hike as either 'U' (uphill) or 'D' (downhill).
 * The hike always starts and ends at sea level (altitude = 0).
 * Each step changes the altitude by +1 ('U') or -1 ('D').
 * 
 * Definitions:
 * - Mountain: Sequence of consecutive steps above sea level (altitude > 0).
 * - Valley: Sequence of consecutive steps below sea level (altitude < 0).
 * 
 * Objective:
 * Find and return the total number of valleys traversed.
 * 
 * Crucial Insight / Key Condition:
 * A valley is completed when the hiker takes a step 'U' and arrives exactly back
 * at sea level (altitude becomes 0 from -1):
 *   `if (step === 'U' && altitude === 0) valleyCount++;`
 * (Alternatively: entering a valley when altitude drops from 0 to -1).
 * 
 * Parameters:
 *   @param {number} steps - Total number of steps taken in the hike
 *   @param {string} path - String of length `steps` containing only 'U' and 'D'
 * 
 * Returns:
 *   @returns {number} - Total number of valleys walked through
 * 
 * Complexity:
 *   - Time Complexity: O(n) where n is the number of steps
 *   - Space Complexity: O(1) auxiliary memory
 */
function countingValleys(steps, path) {
    let altitude = 0;
    let valleys = 0;

    for (let i = 0; i < steps; i++) {
        const step = path[i];

        if (step === 'U') {
            altitude++;
            // If we just stepped UP to sea level (altitude === 0), we just finished climbing out of a valley!
            if (altitude === 0) {
                valleys++;
            }
        } else if (step === 'D') {
            altitude--;
        }
    }

    return valleys;
}

// Example / Test Cases:
console.log("Valleys (Sample 1 - UDDDUDUU):", countingValleys(8, "UDDDUDUU")); // Output: 1
console.log("Valleys (DDUUUUDD):", countingValleys(8, "DDUUUUDD"));             // Output: 1 (1 valley, then 1 mountain)
console.log("Valleys (UDUUUDUDDD):", countingValleys(10, "UDUUUDUDDD"));         // Output: 0 (all mountain)
console.log("Valleys (DDUUDD):", countingValleys(6, "DDUUDD"));                 // Output: 1 (valley completed, then halfway down another)

module.exports = countingValleys;

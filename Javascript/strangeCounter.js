/**
 * Problem: Strange Counter
 * -------------------------------------------------------------
 * A counter starts at time t = 1 displaying value 3.
 * Each second, the value displayed decrements by 1 until it reaches 1.
 * In the next second, the timer resets to 2 * (initial value for prior cycle)
 * and continues counting down.
 * 
 * Cycles:
 * Cycle 1: starts at t = 1, initial value = 3,  spans t in [1, 3]   (length = 3)
 * Cycle 2: starts at t = 4, initial value = 6,  spans t in [4, 9]   (length = 6)
 * Cycle 3: starts at t = 10, initial value = 12, spans t in [10, 21] (length = 12)
 * Cycle k: initial value = 3 * 2^(k-1), spans t in [start_k, start_k + initial_k - 1]
 * 
 * Mathematical Pattern:
 * Notice the sum relation inside each cycle:
 *   For any time t within a cycle:
 *   t + value = start_time + initial_value
 * 
 * For example:
 * - Cycle 1 (start = 1, initial = 3):
 *     t=1 -> val=3 (1 + 3 = 4)
 *     t=2 -> val=2 (2 + 2 = 4)
 *     t=3 -> val=1 (3 + 1 = 4)
 *     Sum = 1 + 3 = 4
 * - Cycle 2 (start = 4, initial = 6):
 *     t=4 -> val=6 (4 + 6 = 10)
 *     t=5 -> val=5 (5 + 5 = 10)
 *     t=9 -> val=1 (9 + 1 = 10)
 *     Sum = 4 + 6 = 10
 * - Cycle 3 (start = 10, initial = 12):
 *     t=10 -> val=12 (10 + 12 = 22)
 *     Sum = 10 + 12 = 22
 * 
 * Therefore:
 *   value = (start_time + initial_value) - t
 * 
 * Since start_time = initial_value - 2:
 *   start_time + initial_value = 2 * initial_value - 2 + 3...
 * Or simply reduce t while subtracting cycle lengths:
 * While t > cycle_val:
 *   t -= cycle_val
 *   cycle_val *= 2
 * Result value = cycle_val - t + 1
 * 
 * Parameters:
 *   @param {number} t - An integer representing the target time (1 <= t <= 10^12)
 * 
 * Returns:
 *   @returns {number} - The counter value displayed at time t
 * 
 * Complexity:
 *   - Time Complexity: O(log t) - Doubling cycle values reaches t in at most ~40 iterations for t = 10^12
 *   - Space Complexity: O(1)
 */
function strangeCounter(t) {
    let cycleVal = 3;

    while (t > cycleVal) {
        t -= cycleVal;
        cycleVal *= 2;
    }

    return cycleVal - t + 1;
}

// Example / Test Cases:
console.log("t = 4 :", strangeCounter(4));   // Expected: 6
console.log("t = 9 :", strangeCounter(9));   // Expected: 1
console.log("t = 10:", strangeCounter(10));  // Expected: 12
console.log("t = 17:", strangeCounter(17));  // Expected: 5 (in Cycle 3: 12 - (17 - 10) = 5)
console.log("t = 1000000000000 (10^12):", strangeCounter(1000000000000)); // Handles huge 10^12

module.exports = strangeCounter;

/**
 * Problem: Taum and B'day
 * -------------------------------------------------------------
 * Taum wants to buy `b` black gifts and `w` white gifts for Diksha.
 * - Cost of each black gift = `bc`
 * - Cost of each white gift = `wc`
 * - Cost to convert a black gift to a white gift (or vice versa) = `z`
 * 
 * Determine the minimum total cost to obtain the gifts.
 * 
 * Strategic Insight:
 * For each black gift:
 *   Option 1: Buy it directly at cost `bc`
 *   Option 2: Buy a white gift at cost `wc` and convert it to black with cost `z`: `wc + z`
 *   Optimal cost per black gift = `min(bc, wc + z)`
 * 
 * For each white gift:
 *   Option 1: Buy it directly at cost `wc`
 *   Option 2: Buy a black gift at cost `bc` and convert it to white with cost `z`: `bc + z`
 *   Optimal cost per white gift = `min(wc, bc + z)`
 * 
 * Total Minimal Cost:
 *   `b * min(bc, wc + z) + w * min(wc, bc + z)`
 * 
 * ⚠️ BigInt Warning:
 * Constraints: b, w, bc, wc, z <= 10^9.
 * Maximum possible total cost = 10^9 * 10^9 + 10^9 * 10^9 = 2 * 10^18.
 * Standard JavaScript Number.MAX_SAFE_INTEGER is 9 * 10^15 (53 bits).
 * 2 * 10^18 exceeds MAX_SAFE_INTEGER and causes precision truncation!
 * We MUST use `BigInt` for intermediate calculations.
 * 
 * Parameters:
 *   @param {number|BigInt} b - Number of black gifts
 *   @param {number|BigInt} w - Number of white gifts
 *   @param {number|BigInt} bc - Cost of a black gift
 *   @param {number|BigInt} wc - Cost of a white gift
 *   @param {number|BigInt} z - Cost to convert gift color
 * 
 * Returns:
 *   @returns {BigInt} - Minimum total cost as BigInt (or string)
 * 
 * Complexity:
 *   - Time Complexity: O(1) constant time arithmetic
 *   - Space Complexity: O(1) constant memory
 */
function taumBday(b, w, bc, wc, z) {
    const B = BigInt(b);
    const W = BigInt(w);
    const BC = BigInt(bc);
    const WC = BigInt(wc);
    const Z = BigInt(z);

    // Minimum cost to acquire one black gift
    const effectiveBC = BC < (WC + Z) ? BC : (WC + Z);

    // Minimum cost to acquire one white gift
    const effectiveWC = WC < (BC + Z) ? WC : (BC + Z);

    const totalCost = B * effectiveBC + W * effectiveWC;
    return totalCost;
}

// Example / Test Cases:
console.log("Test 1 (10, 10, 1, 1, 1) :", taumBday(10, 10, 1, 1, 1).toString()); // 20
console.log("Test 2 (5, 9, 2, 3, 4)   :", taumBday(5, 9, 2, 3, 4).toString());   // 37
console.log("Test 3 (3, 6, 9, 1, 1)   :", taumBday(3, 6, 9, 1, 1).toString());   // 12
console.log("Test 4 (7, 7, 4, 2, 1)   :", taumBday(7, 7, 4, 2, 1).toString());   // 35
console.log("Test 5 (3, 3, 1, 9, 2)   :", taumBday(3, 3, 1, 9, 2).toString());   // 12

module.exports = taumBday;

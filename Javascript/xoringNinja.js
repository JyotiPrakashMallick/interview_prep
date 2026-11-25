/**
 * Problem: Xoring Ninja
 *
 * XorSum(arr) = sum of XOR(subset) over all 2^n - 1 non-empty subsets, modulo 10^9 + 7.
 *
 * Key Insight (per-bit contribution):
 * 1. Look at a single bit position b independently.
 * 2. If NO element has bit b set, no subset XOR has bit b set -> contributes 0.
 * 3. If at least one element has bit b set, exactly HALF of all 2^n subsets have an
 *    odd number of such elements, so exactly 2^(n-1) subset XORs have bit b set.
 *    (Pair each subset with the one that toggles a fixed element having bit b:
 *     the pair always differs in bit b.)
 * 4. Therefore:
 *      XorSum = sum over set bits b of (OR of arr) of 2^b * 2^(n-1)
 *             = (arr[0] | arr[1] | ... | arr[n-1]) * 2^(n-1)
 *
 * Precision note:
 * - OR < 2^30 and 2^(n-1) mod p < 2^30, so their product can exceed 2^53.
 *   BigInt is used for the modular multiplications.
 *
 * Time Complexity: O(n + log n)  (one OR pass + fast exponentiation)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr - Array of non-negative integers
 * @returns {number} - XorSum of arr modulo 10^9 + 7
 */
function xoringNinja(arr) {
    const MOD = 1000000007n;

    // 1. OR of all elements: every bit set anywhere in arr
    let orAll = 0;
    for (const x of arr) orAll |= x;

    // 2. Compute 2^(n-1) mod p with fast exponentiation
    let result = 1n;
    let base = 2n;
    let exp = arr.length - 1;
    while (exp > 0) {
        if (exp & 1) result = (result * base) % MOD;
        base = (base * base) % MOD;
        exp >>= 1;
    }

    // 3. Multiply by the OR
    return Number((BigInt(orAll) * result) % MOD);
}

// Brute force for verification on small inputs
function xoringNinjaBrute(arr) {
    const n = arr.length;
    let sum = 0;
    for (let mask = 1; mask < (1 << n); mask++) {
        let x = 0;
        for (let i = 0; i < n; i++) if (mask & (1 << i)) x ^= arr[i];
        sum += x;
    }
    return sum % 1000000007;
}

// Verification Test Cases
if (require.main === module) {
    console.log("Example [3, 4]:", xoringNinja([3, 4])); // Expected: 14
    console.log("Sample [1, 2, 3]:", xoringNinja([1, 2, 3])); // Expected: 12
    console.log("Sample [1, 2, 4, 8]:", xoringNinja([1, 2, 4, 8])); // Expected: 120

    // Randomized check against brute force
    let ok = true;
    for (let t = 0; t < 500; t++) {
        const n = 1 + Math.floor(Math.random() * 12);
        const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 1e9));
        if (xoringNinja(arr) !== xoringNinjaBrute(arr)) { ok = false; console.log("Mismatch:", arr); break; }
    }
    console.log("Random brute-force check:", ok ? "PASS" : "FAIL");

    // Large input: n = 10^5 with values up to 10^9
    const big = Array.from({ length: 100000 }, () => 1000000000);
    console.log("Large n=1e5:", xoringNinja(big));
}

module.exports = { xoringNinja };

/**
 * Problem: AND Product (Bitwise AND of Numbers Range)
 *
 * Given two non-negative integers a and b (where a <= b < 2^32),
 * compute the bitwise AND of all integers in the inclusive range [a, b]:
 *   a & (a + 1) & ... & (b - 1) & b
 *
 * Mathematical Insight:
 * - In any range [a, b], if a bit position differs between any two numbers in the range,
 *   that bit must have transitioned from 1 to 0 or 0 to 1 at least once.
 * - Because bitwise AND produces 0 whenever any number has a 0 at that bit position,
 *   ANY bit that changes anywhere in the range [a, b] will become 0 in the final product.
 * - Therefore, the result of a & (a + 1) & ... & b is simply the
 *   LONGEST COMMON BINARY PREFIX of a and b, with all trailing positions padded with zeros!
 *
 * Implementation with BigInt:
 * Since values can reach 2^32 - 1, standard 32-bit signed bitwise operations in JavaScript
 * treat numbers with the 31st bit set as negative. Using BigInt avoids sign issues and
 * seamlessly supports full 64-bit precision.
 *
 * Algorithm (Right-Shift until equal):
 *   let shift = 0n;
 *   while (a < b) {
 *       a >>= 1n;
 *       b >>= 1n;
 *       shift++;
 *   }
 *   return (a << shift);
 *
 * Alternative (Brian Kernighan / Clear lowest set bit of b):
 *   while (b > a) {
 *       b &= b - 1n;
 *   }
 *   return b;
 * Both are optimal O(log b) / O(1) space.
 *
 * @param {number|bigint} a - Range start
 * @param {number|bigint} b - Range end
 * @returns {number|string} - Bitwise AND product
 *
 * Time Complexity: O(log(b - a)) <= 32 iterations
 * Space Complexity: O(1)
 */
function andProduct(a, b) {
    let bigA = BigInt(a);
    let bigB = BigInt(b);

    // Brian Kernighan-style range reduction:
    // Clearing the lowest set bit of bigB until bigB <= bigA
    // isolates the common prefix of bigA and bigB.
    while (bigB > bigA) {
        bigB = bigB & (bigB - 1n);
    }

    return Number(bigB);
}

// Verification Test Cases
if (require.main === module) {
    // Problem Example:
    // a = 10, b = 14:
    // 10 = 1010_2, 14 = 1110_2 -> Common prefix is '1000' = 8
    console.log("10 to 14:", andProduct(10, 14)); // Expected: 8

    // Sample Input 0:
    // 12 15 -> 12 (1100 & 1101 & 1110 & 1111 = 1100 = 12)
    // 2 3   -> 2  (0010 & 0011 = 0010 = 2)
    // 8 13  -> 8  (1000 & ... & 1101 = 1000 = 8)
    console.log("12 to 15:", andProduct(12, 15)); // Expected: 12
    console.log("2 to 3:", andProduct(2, 3));     // Expected: 2
    console.log("8 to 13:", andProduct(8, 13));   // Expected: 8

    // Large range / Edge cases:
    console.log("0 to 0:", andProduct(0, 0));     // Expected: 0
    console.log("0 to 1:", andProduct(0, 1));     // Expected: 0
    console.log("1 to 2^32 - 1:", andProduct(1, 4294967295)); // Expected: 0
}

module.exports = { andProduct };

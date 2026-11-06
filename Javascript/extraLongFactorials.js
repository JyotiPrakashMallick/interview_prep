/**
 * Problem: Extra Long Factorials
 * -------------------------------------------------------------
 * The factorial of an integer n (denoted as n!) is the product of all positive
 * integers less than or equal to n:
 *   n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
 * 
 * Challenge:
 * Factorials grow astronomically fast.
 * For example:
 *   20! = 2,432,902,008,176,640,000 (fits in 64-bit integer)
 *   25! = 15,511,210,043,330,985,984,000,000 (overflows 64-bit integer!)
 *   100! contains 158 decimal digits!
 * 
 * Standard 64-bit integers (`Number.MAX_SAFE_INTEGER` in JavaScript = 2^53 - 1 ≈ 9.007 x 10^15)
 * overflow quickly around n >= 19.
 * 
 * JavaScript Solution:
 * We use native JavaScript `BigInt` (introduced in ES2020), which supports arbitrarily
 * large integers without floating-point precision loss.
 * Alternatively, for environments without BigInt, we can implement manual big-integer
 * multiplication using an array of digits.
 * 
 * Parameters:
 *   @param {number} n - An integer (1 <= n <= 100)
 * 
 * Returns:
 *   @returns {string} - Full exact factorial string representation
 * 
 * Complexity:
 *   - Time Complexity: O(n^2) digit operations (n multiplications of numbers with up to O(n log n) bits)
 *   - Space Complexity: O(n log n) digits/bits to store the result
 */

// Primary Approach: Modern JavaScript BigInt
function extraLongFactorials(n) {
    let result = BigInt(1);

    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }

    const output = result.toString();
    console.log(output);
    return output;
}

// Alternative Manual Array Approach (for interviews where BigInt is disallowed):
function extraLongFactorialsManualArray(n) {
    // Array to store digits in reverse order (digits[0] is least significant digit)
    const digits = [1];

    for (let multiplier = 2; multiplier <= n; multiplier++) {
        let carry = 0;

        for (let i = 0; i < digits.length; i++) {
            const product = digits[i] * multiplier + carry;
            digits[i] = product % 10;
            carry = Math.floor(product / 10);
        }

        while (carry > 0) {
            digits.push(carry % 10);
            carry = Math.floor(carry / 10);
        }
    }

    // Reverse to print most significant digit first
    const output = digits.reverse().join('');
    return output;
}

// Example / Test Cases:
console.log("25! =");
extraLongFactorials(25);
// Output: 15511210043330985984000000

console.log("\n100! digits count =", extraLongFactorialsManualArray(100).length);

module.exports = { extraLongFactorials, extraLongFactorialsManualArray };

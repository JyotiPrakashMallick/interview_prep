/**
 * Problem: Cyclic Permutation of Digits (Double Number Digit Match)
 * -----------------------------------------------------------------
 * Detect 6-digit integers where doubling the number produces a permutation
 * of the original digits.
 * 
 * Condition:
 *   digits(num) == digits(2 * num)
 * 
 * Returns:
 *   @returns {number[]} - All matching 6-digit integers
 * 
 * Complexity:
 *   - Time Complexity: O(N * D log D) with N = 900,000 and D = 6
 *   - Space Complexity: O(1) auxiliary
 */
function hasSameDigits(number1, number2) {
    const digitsOne = number1.toString().split('').sort().join('');
    const digitsTwo = number2.toString().split('').sort().join('');
    return digitsOne === digitsTwo;
}

function findNumberWithDigits() { 
    const result = [];
    for (let num = 100000; num <= 999999; num++) {
        const newNum = num * 2;
        if (hasSameDigits(num, newNum)) {
            result.push(num);
        }
    }
    return result;
}

const numberWithSame = findNumberWithDigits();
console.log("Matching numbers:", numberWithSame);

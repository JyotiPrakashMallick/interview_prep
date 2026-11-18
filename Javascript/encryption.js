/**
 * Problem: Encryption
 *
 * An English text needs to be encrypted using the following scheme:
 * 1. Remove spaces from the text. Let L be the length of the string without spaces.
 * 2. Form a grid with `rows` and `columns` such that:
 *      floor(sqrt(L)) <= rows <= columns <= ceil(sqrt(L))
 *      rows * columns >= L
 *      rows * columns is minimized.
 * 3. Read the characters column by column:
 *    Each column forms a word in the encrypted message, separated by spaces.
 *
 * @param {string} s - Input string to encrypt
 * @returns {string} - Space-separated encrypted words read column-wise
 *
 * Time Complexity: O(L), where L is the length of s without spaces.
 * Space Complexity: O(L) to construct the encrypted result string.
 */
function encryption(s) {
    // 1. Remove spaces
    const cleanStr = s.replace(/\s+/g, '');
    const L = cleanStr.length;

    if (L === 0) return '';

    // 2. Compute rows and columns
    let rows = Math.floor(Math.sqrt(L));
    const cols = Math.ceil(Math.sqrt(L));

    // Ensure rows * cols >= L
    if (rows * cols < L) {
        rows = cols;
    }

    // 3. Extract column words
    const result = [];
    for (let c = 0; c < cols; c++) {
        let colWord = '';
        for (let r = 0; r < rows; r++) {
            const index = r * cols + c;
            if (index < L) {
                colWord += cleanStr[index];
            }
        }
        result.push(colWord);
    }

    return result.join(' ');
}

// Verification Test Cases
if (require.main === module) {
    const test1 = "haveaniceday";
    // L = 12. sqrt(12) = 3.464 -> rows = 3, cols = 4. 3*4 = 12 >= 12.
    // have
    // anic
    // eday
    // cols: hae and via ecy
    console.log("Test 1:", encryption(test1)); // Expected: "hae and via ecy"

    const test2 = "feedthedog";
    // L = 10. sqrt(10) = 3.162 -> rows = 3, cols = 4. 3*4 = 12 >= 10.
    // feed
    // thed
    // og
    // cols: fto eeh edg dy
    console.log("Test 2:", encryption(test2)); // Expected: "fto eeh edg dy"

    const test3 = "chillout";
    // L = 8. sqrt(8) = 2.828 -> rows = 2, cols = 3. 2*3 = 6 < 8 -> rows = 3.
    // chi
    // llo
    // ut
    // cols: clu hlt io
    console.log("Test 3:", encryption(test3)); // Expected: "clu hlt io"

    const test4 = "if man was meant to stay on the ground god would have given us roots";
    console.log("Test 4:", encryption(test4));
    // Expected: "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau"
}

module.exports = { encryption };

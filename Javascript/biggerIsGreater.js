/**
 * Problem: Bigger is Greater (Next Lexicographical Permutation)
 *
 * Given a word, create a new word by rearranging its characters such that:
 * 1. It is strictly greater than the original word lexicographically.
 * 2. It is the smallest word that meets condition 1.
 * If no such permutation exists (the string is in non-increasing order), return 'no answer'.
 *
 * Algorithm (Narayana Pandita's Next Permutation):
 * 1. Find the largest index `i` such that `arr[i] < arr[i + 1]`.
 *    If no such index exists, the entire sequence is weakly descending -> return 'no answer'.
 * 2. Find the largest index `j > i` such that `arr[i] < arr[j]`.
 * 3. Swap `arr[i]` and `arr[j]`.
 * 4. Reverse the suffix starting from index `i + 1` to the end of the array.
 *
 * @param {string} w - Input word (lowercase English letters)
 * @returns {string} - Next lexicographical permutation or 'no answer'
 *
 * Time Complexity: O(n) per word, where n is w.length.
 * Space Complexity: O(n) to operate on the character array.
 */
function biggerIsGreater(w) {
    const chars = w.split('');
    const n = chars.length;

    // Step 1: Find the rightmost pivot where chars[i] < chars[i + 1]
    let i = n - 2;
    while (i >= 0 && chars[i] >= chars[i + 1]) {
        i--;
    }

    // If no such pivot exists, the string is already the maximum permutation
    if (i < 0) {
        return 'no answer';
    }

    // Step 2: Find the smallest character to the right of pivot that is greater than chars[i]
    let j = n - 1;
    while (chars[j] <= chars[i]) {
        j--;
    }

    // Step 3: Swap pivot chars[i] with successor chars[j]
    const temp = chars[i];
    chars[i] = chars[j];
    chars[j] = temp;

    // Step 4: Reverse the suffix from index i + 1 to the end
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
        const swapTemp = chars[left];
        chars[left] = chars[right];
        chars[right] = swapTemp;
        left++;
        right--;
    }

    return chars.join('');
}

// Verification Test Cases
if (require.main === module) {
    // Sample Input 0:
    // ab -> ba
    // bb -> no answer
    // hefg -> hegf
    // dhck -> dhkc
    // dkhc -> hcdk
    console.log("ab:", biggerIsGreater("ab"));       // ba
    console.log("bb:", biggerIsGreater("bb"));       // no answer
    console.log("hefg:", biggerIsGreater("hefg"));   // hegf
    console.log("dhck:", biggerIsGreater("dhck"));   // dhkc
    console.log("dkhc:", biggerIsGreater("dkhc"));   // hcdk

    // Additional Edge Cases
    console.log("abcd:", biggerIsGreater("abcd"));   // abdc
    console.log("fedcba:", biggerIsGreater("fedcba")); // no answer
    console.log("a:", biggerIsGreater("a"));         // no answer
}

module.exports = { biggerIsGreater };

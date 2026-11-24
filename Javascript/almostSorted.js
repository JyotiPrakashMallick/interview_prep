/**
 * Problem: Almost Sorted
 *
 * Given an array of integers, determine whether the array can be sorted in ascending order
 * using only ONE of the following operations exactly once:
 * 1. Swap two elements: arr[l] and arr[r].
 * 2. Reverse one contiguous sub-segment: arr[l...r].
 *
 * Rules:
 * - If the array is already sorted, output "yes".
 * - If it can be sorted with a single operation:
 *     - If it can be sorted by swapping: output "yes" \n "swap l r" (1-based indices).
 *     - If it can be sorted by reversing: output "yes" \n "reverse l r" (1-based indices).
 *     - If both work (e.g. subarray length 2), prefer swap!
 * - If it cannot be sorted with either operation, output "no".
 *
 * Algorithm:
 * 1. Create a sorted copy of arr, say `sortedArr`.
 * 2. Compare `arr` and `sortedArr` to find all indices where they differ:
 *    Let diffIndices = [i for i in 0..n-1 where arr[i] !== sortedArr[i]].
 * 3. Case A: diffIndices.length === 0 -> already sorted -> "yes".
 * 4. Case B: diffIndices.length === 2:
 *    Let [l, r] = diffIndices.
 *    If swapping arr[l] and arr[r] results in sorted order -> "yes" \n "swap l+1 r+1".
 * 5. Case C: diffIndices.length > 2:
 *    Check if reversing the segment from diffIndices[0] to diffIndices[diffIndices.length - 1]
 *    yields `sortedArr`.
 *    - All elements strictly between l and r must be reversed in sortedArr.
 *    - If valid -> "yes" \n "reverse l+1 r+1".
 *    - Else -> "no".
 * 6. Case D: Any other mismatch count -> "no".
 *
 * @param {number[]} arr - Array of integers
 * @returns {string} - Output string with answer and operation
 *
 * Time Complexity: O(n log n) to sort or O(n) using linear scans.
 * Given n <= 100,000, O(n log n) takes ~30 ms.
 * Space Complexity: O(n) to store sorted copy and mismatch indices.
 */
function almostSorted(arr) {
    const n = arr.length;
    const sortedArr = [...arr].sort((a, b) => a - b);

    // Collect all indices where arr differs from sortedArr
    const diff = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] !== sortedArr[i]) {
            diff.push(i);
        }
    }

    // Case 1: Already sorted
    if (diff.length === 0) {
        return "yes";
    }

    const l = diff[0];
    const r = diff[diff.length - 1];

    // Case 2: Can we sort by swapping arr[l] and arr[r]?
    // Swapping only affects exactly 2 elements (diff.length === 2).
    if (diff.length === 2) {
        if (arr[l] === sortedArr[r] && arr[r] === sortedArr[l]) {
            return `yes\nswap ${l + 1} ${r + 1}`;
        }
    }

    // Case 3: Can we sort by reversing subsegment arr[l...r]?
    // For reversing to work, the subarray arr[l...r] reversed must match sortedArr[l...r]
    let canReverse = true;
    for (let i = l, j = r; i <= r; i++, j--) {
        if (arr[i] !== sortedArr[j]) {
            canReverse = false;
            break;
        }
    }

    if (canReverse) {
        return `yes\nreverse ${l + 1} ${r + 1}`;
    }

    return "no";
}

// Verification Test Cases
if (require.main === module) {
    // Example: [2, 3, 5, 4] -> yes \n swap 3 4
    console.log("--- Example ---");
    console.log(almostSorted([2, 3, 5, 4]));

    // Sample 1: [4, 2] -> yes \n swap 1 2
    console.log("\n--- Sample 1 ---");
    console.log(almostSorted([4, 2]));

    // Sample 2: [3, 1, 2] -> no
    console.log("\n--- Sample 2 ---");
    console.log(almostSorted([3, 1, 2]));

    // Sample 3: [1, 5, 4, 3, 2, 6] -> yes \n reverse 2 5
    console.log("\n--- Sample 3 ---");
    console.log(almostSorted([1, 5, 4, 3, 2, 6]));
}

module.exports = { almostSorted };

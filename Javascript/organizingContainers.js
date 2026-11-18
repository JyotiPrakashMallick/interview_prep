/**
 * Problem: Organizing Containers of Balls
 *
 * David has n containers and n types of balls, represented as an n x n matrix `container`.
 * container[i][j] represents the number of balls of type j in container i.
 *
 * In a single operation, David can swap two balls located in different containers.
 * The operation preserves the total number of balls in each container (container capacity).
 *
 * To sort balls such that each container contains only balls of a single unique type,
 * the multiset of container capacities (row sums) must match the multiset of total ball
 * counts for each type (column sums).
 *
 * @param {number[][]} container - 2D square matrix representing balls in containers
 * @returns {string} - "Possible" if containers can be sorted, otherwise "Impossible"
 *
 * Time Complexity: O(n^2) to compute row and column sums, O(n log n) to sort arrays.
 * Space Complexity: O(n) to store row and column sum arrays.
 */
function organizingContainers(container) {
    const n = container.length;
    const rowSums = new Array(n).fill(0); // Capacities of each container
    const colSums = new Array(n).fill(0); // Total count of each ball type

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rowSums[i] += container[i][j];
            colSums[j] += container[i][j];
        }
    }

    // Sort both arrays to compare distributions
    rowSums.sort((a, b) => a - b);
    colSums.sort((a, b) => a - b);

    // If container capacities match type counts exactly, sorting is possible
    for (let i = 0; i < n; i++) {
        if (rowSums[i] !== colSums[i]) {
            return "Impossible";
        }
    }

    return "Possible";
}

// Verification Test Cases
if (require.main === module) {
    // Example from problem:
    // [[1, 4], [2, 3]] -> row sums: [5, 5], col sums: [3, 7] -> Impossible
    console.log("Test 1:", organizingContainers([[1, 4], [2, 3]])); // Expected: Impossible

    // Standard HackerRank Sample 0:
    // Query 1: [[1, 1], [1, 1]] -> row sums: [2, 2], col sums: [2, 2] -> Possible
    // Query 2: [[0, 2], [1, 1]] -> row sums: [2, 2], col sums: [1, 3] -> Impossible
    console.log("Test 2:", organizingContainers([[1, 1], [1, 1]])); // Expected: Possible
    console.log("Test 3:", organizingContainers([[0, 2], [1, 1]])); // Expected: Impossible

    // Sample 1:
    // [[1, 3, 1], [2, 1, 2], [3, 3, 3]]
    // row sums: [5, 5, 9] -> sorted: [5, 5, 9]
    // col sums: [6, 7, 6] -> sorted: [6, 6, 7] -> Impossible
    console.log("Test 4:", organizingContainers([[1, 3, 1], [2, 1, 2], [3, 3, 3]])); // Expected: Impossible

    // [[0, 2, 1], [1, 1, 1], [2, 0, 0]]
    // row sums: [3, 3, 2] -> sorted: [2, 3, 3]
    // col sums: [3, 3, 2] -> sorted: [2, 3, 3] -> Possible
    console.log("Test 5:", organizingContainers([[0, 2, 1], [1, 1, 1], [2, 0, 0]])); // Expected: Possible
}

module.exports = { organizingContainers };

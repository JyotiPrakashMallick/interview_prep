/**
 * Problem: Cipher
 *
 * The message b (length n) is written k times, shifted by 0..k-1 bits, and the
 * columns are XORed to produce s (length n + k - 1). Given k and s, recover b.
 *
 * Key Insight (sliding XOR window):
 * 1. Column i of the encoding XORs together the bits b[i], b[i-1], ..., b[i-k+1]
 *    (only the indices that are >= 0):
 *      s[i] = b[i] ^ b[i-1] ^ ... ^ b[i-k+1]
 * 2. So, if we already know the previous k-1 decoded bits:
 *      b[i] = s[i] ^ (b[i-1] ^ ... ^ b[i-k+1])
 * 3. Keep the XOR of the last k-1 decoded bits in a running variable `window`:
 *      - after decoding b[i], XOR it into the window
 *      - once the window holds k bits, XOR out b[i-k+1] (XOR is its own inverse)
 * 4. Only the first n = s.length - k + 1 positions need to be decoded.
 *
 * Time Complexity: O(n)  (constant work per bit)
 * Space Complexity: O(n) for the output
 *
 * @param {number} k - Number of shifts
 * @param {string} s - Encoded binary string of length n + k - 1
 * @returns {string} - Decoded binary string of length n
 */
function cipher(k, s) {
    const n = s.length - k + 1;
    const b = new Array(n);
    let window = 0; // XOR of b[i-k+1 .. i-1]

    for (let i = 0; i < n; i++) {
        b[i] = (s.charCodeAt(i) - 48) ^ window;
        window ^= b[i];
        if (i - k + 1 >= 0) window ^= b[i - k + 1]; // drop the bit leaving the window
    }

    return b.join("");
}

// Encoder used to verify the decoder
function encode(b, k) {
    const n = b.length;
    const out = [];
    for (let i = 0; i < n + k - 1; i++) {
        let x = 0;
        for (let j = 0; j < k; j++) {
            const idx = i - j;
            if (idx >= 0 && idx < n) x ^= b.charCodeAt(idx) - 48;
        }
        out.push(x);
    }
    return out.join("");
}

// Verification Test Cases
if (require.main === module) {
    console.log("Example (k=4):", cipher(4, "1110101001")); // Expected: 1001011
    console.log("Sample 0 (k=4):", cipher(4, "1110100110")); // Expected: 1001010
    console.log("Sample 1 (k=2):", cipher(2, "1110001")); // Expected: 101111
    console.log("Sample 2 (k=3):", cipher(3, "1110011011")); // Expected: 10000101

    // Randomized round-trip check: decode(encode(b)) === b
    let ok = true;
    for (let t = 0; t < 500; t++) {
        const n = 1 + Math.floor(Math.random() * 30);
        const k = 1 + Math.floor(Math.random() * 10);
        const b = Array.from({ length: n }, () => (Math.random() < 0.5 ? "0" : "1")).join("");
        if (cipher(k, encode(b, k)) !== b) { ok = false; console.log("Mismatch:", b, k); break; }
    }
    console.log("Random round-trip check:", ok ? "PASS" : "FAIL");
}

module.exports = { cipher };

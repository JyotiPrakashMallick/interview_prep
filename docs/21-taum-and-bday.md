# 21. Taum and B'day

[⬅️ Back to Main Directory](../README.md)

---

### 📋 Problem Statement
Taum needs to purchase $b$ black gifts and $w$ white gifts for Diksha's birthday.
- Cost of buying a black gift directly = $bc$
- Cost of buying a white gift directly = $wc$
- Cost of converting a black gift to a white gift (or vice versa) = $z$

Determine the minimum total cost to obtain all required gifts.

---

### 🎨 Graphical Cartoon Animation
<p align="center">
  <img src="../assets/taum-bday.svg" alt="Taum and Bday Cartoon Animation" width="100%" />
</p>

---

### 🌲 Decision Flowchart
```mermaid
flowchart TD
    Start(["Input: b, w, bc, wc, z"]) --> ConvertBigInt["Cast all inputs to BigInt:<br/>B, W, BC, WC, Z"]
    ConvertBigInt --> BestBlack{"BC &lt; WC + Z?"}
    BestBlack -->|Yes: Direct cheaper| PickDirectB["effectiveBC = BC"]
    BestBlack -->|No: Convert cheaper| PickConvertB["effectiveBC = WC + Z"]
    PickDirectB --> BestWhite{"WC &lt; BC + Z?"}
    PickConvertB --> BestWhite
    BestWhite -->|Yes: Direct cheaper| PickDirectW["effectiveWC = WC"]
    BestWhite -->|No: Convert cheaper| PickConvertW["effectiveWC = BC + Z"]
    PickDirectW --> CalcTotal["totalCost = (B * effectiveBC) + (W * effectiveWC)"]
    PickConvertW --> CalcTotal
    CalcTotal --> Output(["Return totalCost"])
```

---

### 📐 Complexity Formulas
- **Cost Arbitrage Formula**:
  $$\begin{aligned}
  \text{cost}_{\text{black}} &= \min(bc, \, wc + z) \\
  \text{cost}_{\text{white}} &= \min(wc, \, bc + z) \\
  \text{Total Cost} &= b \times \text{cost}_{\text{black}} + w \times \text{cost}_{\text{white}}
  \end{aligned}$$
- **Integer Overflow Considerations**:
  Since $b, w, bc, wc, z \le 10^9$, the maximum possible total cost is:
  $$\text{Max Cost} = 10^9 \times 10^9 + 10^9 \times 10^9 = 2 \times 10^{18}$$
  Standard 64-bit IEEE 754 floating-point (`Number.MAX_SAFE_INTEGER` $\approx 9 \times 10^{15}$) will lose precision. Using `BigInt` guarantees exact integer calculations.
- **Time Complexity**:
  $$T = \mathcal{O}(1)$$
  *Explanation*: A constant number of comparisons, additions, and multiplications.
- **Space Complexity**:
  $$S = \mathcal{O}(1)$$
  *Explanation*: Fixed number of primitive `BigInt` variables on the stack.

---

### 💻 Solution Code
- **Solution File**: [`Javascript/taumBday.js`](../Javascript/taumBday.js)

# 7. Sales by Match (Sock Merchant)

[⬅️ Back to Main Directory](../README.md)

---

### 📋 Problem Statement
Given an array of $n$ socks represented by integer color IDs, determine how many matching pairs of identical colors can be formed.

---

### 🎨 Graphical Cartoon Animation
<p align="center">
  <img src="../assets/sales-by-match.svg" alt="Sock Merchant Cartoon Animation" width="100%" />
</p>

---

### 🌲 Decision Flowchart
```mermaid
flowchart TD
    Start([Input: Array ar of n socks]) --> Init["freqMap = { }<br/>totalPairs = 0"]
    Init --> Tally["For each sock in ar:<br/>freqMap[sock] = (freqMap[sock] || 0) + 1"]
    Tally --> PairLoop["For each count in Object.values(freqMap)"]
    PairLoop --> AddFloor["totalPairs += Math.floor(count / 2)"]
    AddFloor --> CheckDone{"All colors visited?"}
    CheckDone -->|No| PairLoop
    CheckDone -->|Yes| Finish([Return totalPairs])
```

---

### 📐 Complexity Formulas
- **Time Complexity**:
  $$T(n) = \mathcal{O}(n) + \mathcal{O}(u) = \mathcal{O}(n)$$
  *Explanation*: Where $u \le n$ is the number of distinct sock colors. Tallying takes $n$ steps and pair division takes $u$ steps.
- **Space Complexity**:
  $$S(n) = \mathcal{O}(u)$$
  *Explanation*: Hash table stores frequency keys for each distinct color $u$.

---

### 💻 Solution Code
- **Solution File**: [`Javascript/salesByMatch.js`](../Javascript/salesByMatch.js)

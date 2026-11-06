# 14. Reverse Array or String

[⬅️ Back to Main Directory](../README.md)

---

### 📋 Problem Statement
Reverse the elements of an array or string without using native `Array.prototype.reverse()`.

---

### 🎨 Graphical Cartoon Animation
<p align="center">
  <img src="../assets/reverse-array.svg" alt="Reverse Array Cartoon Animation" width="100%" />
</p>

---

### 🌲 Decision Flowchart
```mermaid
flowchart TD
    Start([Input: Array arr]) --> Ptrs["left = 0<br/>right = arr.length - 1"]
    Ptrs --> Loop{"left < right?"}
    Loop -->|No| Finish([Return reversed arr])
    Loop -->|Yes| Swap["temp = arr[left]<br/>arr[left] = arr[right]<br/>arr[right] = temp"]
    Swap --> Step["left++<br/>right--"] --> Loop
```

---

### 📐 Complexity Formulas
- **Time Complexity**:
  $$T(n) = \mathcal{O}\left(\frac{n}{2}\right) = \mathcal{O}(n)$$
  *Explanation*: Performs $\lfloor n / 2 \rfloor$ pairwise swaps.
- **Space Complexity**:
  $$S(n) = \mathcal{O}(1) \text{ in-place}$$
  *Explanation*: Only a single temporary variable is used for pointer swapping.

---

### 💻 Solution Code
- **Solution File**: [`Javascript/reverseString.js`](../Javascript/reverseString.js)

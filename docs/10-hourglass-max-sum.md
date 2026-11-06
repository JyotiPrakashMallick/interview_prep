# 10. 2D Array - Hourglass Max Sum

[⬅️ Back to Main Directory](../README.md)

---

### 📋 Problem Statement
In a $6 \times 6$ 2D integer array, an hourglass shape is defined by 7 values:
```
a  b  c
   d
e  f  g
```
Compute all 16 hourglass sums and return the **maximum** value.

---

### 🎨 Graphical Cartoon Animation
<p align="center">
  <img src="../assets/hourglass.svg" alt="Hourglass 6x6 Matrix Cartoon" width="100%" />
</p>

---

### 🌲 Decision Flowchart
```mermaid
flowchart TD
    Start([Input: 6x6 Matrix arr]) --> Init["maxSum = -Infinity<br/>i = 0"]
    Init --> RowLoop{"i < 4?"}
    RowLoop -->|No| Done([Return maxSum])
    RowLoop -->|Yes| ColInit["j = 0"]
    ColInit --> ColLoop{"j < 4?"}
    ColLoop -->|No| NextRow["i++"] --> RowLoop
    ColLoop -->|Yes| SumHourglass["top = arr[i][j] + arr[i][j+1] + arr[i][j+2]<br/>mid = arr[i+1][j+1]<br/>bot = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]<br/>sum = top + mid + bot"]
    SumHourglass --> UpdateMax{"sum > maxSum?"}
    UpdateMax -->|Yes| SetMax["maxSum = sum"] --> NextCol["j++"] --> ColLoop
    UpdateMax -->|No| NextCol
```

---

### 📐 Complexity Formulas
- **Time Complexity**:
  $$T(R, C) = (R - 2) \times (C - 2) \times 7 = 4 \times 4 \times 7 = 112 \text{ operations} = \mathcal{O}(1)$$
  *Explanation*: Strictly bounded to 16 sliding windows on a fixed $6 \times 6$ grid.
- **Space Complexity**:
  $$S(R, C) = \mathcal{O}(1)$$
  *Explanation*: Operates directly in-place on the input matrix without auxiliary structures.

---

### 💻 Solution Code
- **Solution File**: [`Javascript/hourGalss.js`](../Javascript/hourGalss.js)

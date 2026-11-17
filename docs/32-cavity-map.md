# 32. Cavity Map

[⬅️ Back to Main Directory](../README.md)

---

### 📋 Problem Statement
You are given a square map as an $n \times n$ matrix of integer strings. Each cell has a value denoting its depth.

A cell is called a **cavity** if and only if:
1. It is **not** on the border of the map ($0 < r < n - 1$ and $0 < c < n - 1$).
2. Each of the 4 adjacent cells sharing an edge (North, South, East, West) has a **strictly smaller** depth.

Find all cavities on the map and replace their depth with the uppercase character `'X'`.

---

### 🎨 Graphical Cartoon Animation
<p align="center">
  <img src="../assets/cavity-map.svg" alt="Cavity Map Cartoon Animation" width="100%" />
</p>

---

### 🌲 Decision Flowchart
```mermaid
flowchart TD
    Start(["Input: Square Grid of size n x n"]) --> Init["Create mutable copy of grid:<br/>result = grid.map(row =&gt; row.split(''))<br/>r = 1"]
    Init --> RowLoop{"r &lt; n - 1?"}
    RowLoop -->|No| FormatOutput["Format: result.map(row =&gt; row.join(''))"] --> Finish(["Return modified grid"])
    RowLoop -->|Yes| ColInit["c = 1"]
    ColInit --> ColLoop{"c &lt; n - 1?"}
    ColLoop -->|No| NextRow["r++"] --> RowLoop
    ColLoop -->|Yes| ReadNeighbors["current = grid[r][c]<br/>north = grid[r-1][c]<br/>south = grid[r+1][c]<br/>west = grid[r][c-1]<br/>east = grid[r][c+1]"]
    ReadNeighbors --> CavityCheck{"current &gt; north &amp;&amp;<br/>current &gt; south &amp;&amp;<br/>current &gt; west &amp;&amp;<br/>current &gt; east?"}
    CavityCheck -->|Yes: Strictly deeper than 4 neighbors| MarkCavity["result[r][c] = 'X'"] --> NextCol["c++"] --> ColLoop
    CavityCheck -->|No| NextCol
```

---

### 📐 Complexity Formulas
- **Time Complexity**:
  $$T(n) = \mathcal{O}(n^2)$$
  *Explanation*: We examine the interior cells in an $(n-2) \times (n-2)$ matrix. For each interior cell, exactly 4 edge neighbors are checked in $\mathcal{O}(1)$ time, yielding total time $\mathcal{O}(n^2)$.
- **Space Complexity**:
  $$S(n) = \mathcal{O}(n^2)$$
  *Explanation*: A 2D mutable matrix of size $n \times n$ is created to store and return the modified grid without corrupting the original input readings.

---

### 💻 Solution Code
- **Solution File**: [`Javascript/cavityMap.js`](../Javascript/cavityMap.js)

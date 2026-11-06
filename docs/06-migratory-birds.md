# 6. Migratory Birds

[⬅️ Back to Main Directory](../README.md)

---

### 📋 Problem Statement
Given an array of bird sightings where each number denotes a bird type id ($1 \le \text{id} \le 5$). Find the most frequently sighted bird type. In case of frequency ties, return the **smallest type id**.

---

### 🎨 Graphical Cartoon Animation
<p align="center">
  <img src="../assets/migratory-birds.svg" alt="Migratory Birds Census Cartoon" width="100%" />
</p>

---

### 🌲 Decision Flowchart
```mermaid
flowchart TD
    Start([Input: Array arr of length n]) --> Init["Allocate fixed counter:<br/>count = [0, 0, 0, 0, 0, 0]"]
    Init --> Loop["For each birdId in arr:<br/>count[birdId]++"]
    Loop --> Scan["Initialize maxFreq = 0, bestId = 1<br/>Scan id from 1 to 5"]
    Scan --> CheckMax{"count[id] > maxFreq?"}
    CheckMax -->|Yes| NewLeader["maxFreq = count[id]<br/>bestId = id"] --> NextId["id++"]
    CheckMax -->|No| NextId
    NextId --> Done{"id <= 5?"}
    Done -->|Yes| CheckMax
    Done -->|No| Out([Return bestId])
```

---

### 📐 Complexity Formulas
- **Time Complexity**:
  $$T(n) = \mathcal{O}(n) + \mathcal{O}(K) = \mathcal{O}(n) \quad \text{where } K = 5$$
  *Explanation*: A single linear pass increments counts; scanning indices $1 \dots 5$ is bounded by constant 5 operations.
- **Space Complexity**:
  $$S(n) = \mathcal{O}(1)$$
  *Explanation*: Uses a fixed-size auxiliary array of length 6 regardless of $n$.

---

### 💻 Solution Code
- **Approach 1 (Standard frequency hash map)**: [`Javascript/migratoryBirds.js`](../Javascript/migratoryBirds.js)
- **Approach 2 (Fixed 6-element frequency array)**: [`Javascript/migratoryBirdsWithLessComplexity.js`](../Javascript/migratoryBirdsWithLessComplexity.js)

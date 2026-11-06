# 12. First Duplicate Occurrence

[⬅️ Back to Main Directory](../README.md)

---

### 📋 Problem Statement
Given an array of integers, identify the first number whose duplicate is encountered as you scan from left to right. If all numbers are distinct, return `-1`.

---

### 🎨 Graphical Cartoon Animation
<p align="center">
  <img src="../assets/duplicate-checker.svg" alt="Duplicate Checker HashSet Cartoon" width="100%" />
</p>

---

### 🌲 Decision Flowchart
```mermaid
flowchart TD
    Start([Input: Array inputArray]) --> Init["hasSeen = new Set()<br/>i = 0"]
    Init --> Loop{"i < inputArray.length?"}
    Loop -->|No| NoDup([Return -1: All Unique])
    Loop -->|Yes| Current["num = inputArray[i]"]
    Current --> CheckSet{"hasSeen.has(num)?"}
    CheckSet -->|Yes| Found([Return num: First Duplicate Encountered 🚨])
    CheckSet -->|No| AddSet["hasSeen.add(num)<br/>i++"] --> Loop
```

---

### 📐 Complexity Formulas
- **Brute Force Nested Search**:
  $$T(n) = \mathcal{O}(n^2), \quad S(n) = \mathcal{O}(1)$$
- **Optimal Hash Set Lookup**:
  $$T(n) = \mathcal{O}(n), \quad S(n) = \mathcal{O}(n)$$
  *Explanation*: Hash set provides average $\mathcal{O}(1)$ insertion and lookup, completing search in at most $n$ queries.

---

### 💻 Solution Code
- **Approach 1 (Brute force nested loop)**: [`Javascript/problemNew.js`](../Javascript/problemNew.js)
- **Approach 2 (Optimal Set lookup)**: [`Javascript/problenNewSet.js`](../Javascript/problenNewSet.js)

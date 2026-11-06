# 15. Character Frequency Count

[⬅️ Back to Main Directory](../README.md)

---

### 📋 Problem Statement
Given a string, count the occurrences of each individual character and return a frequency dictionary object `{ char: count }`.
Example: `"banana"` $\rightarrow$ `{ b: 1, a: 3, n: 2 }`.

---

### 🎨 Graphical Cartoon Animation
<p align="center">
  <img src="../assets/char-count.svg" alt="Character Count Cartoon Animation" width="100%" />
</p>

---

### 🌲 Decision Flowchart
```mermaid
flowchart TD
    Start([Input: String str]) --> Init["freqMap = { }<br/>i = 0"]
    Init --> Loop{"i < str.length?"}
    Loop -->|No| ReturnMap([Return freqMap])
    Loop -->|Yes| ReadChar["char = str[i]"]
    ReadChar --> CheckExist{"freqMap[char] exists?"}
    CheckExist -->|Yes| Increment["freqMap[char]++"] --> NextChar["i++"] --> Loop
    CheckExist -->|No| Initialize["freqMap[char] = 1"] --> NextChar
```

---

### 📐 Complexity Formulas
- **Time Complexity**:
  $$T(n) = \mathcal{O}(n)$$
  *Explanation*: Traverses $n$ characters once with $\mathcal{O}(1)$ average object property lookups.
- **Space Complexity**:
  $$S(n) = \mathcal{O}(u)$$
  *Explanation*: Where $u \le n$ is the number of unique characters in string $str$ ($u \le 26$ for lowercase English alphabets).

---

### 💻 Solution Code
- **Solution File**: [`Javascript/chharCount.js`](../Javascript/chharCount.js)

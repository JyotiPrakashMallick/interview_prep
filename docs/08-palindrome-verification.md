# 8. Palindrome Verification

[⬅️ Back to Main Directory](../README.md)

---

### 📋 Problem Statement
Determine whether a given string reads identical forwards and backwards (e.g. `"racecar"`, `"121"`, `"madam"`).

---

### 🎨 Graphical Cartoon Animation
<p align="center">
  <img src="../assets/palindrome.svg" alt="Palindrome Verification Mirror Cartoon" width="100%" />
</p>

---

### 🌲 Decision Flowchart
```mermaid
flowchart TD
    Start([Input: String str]) --> Pointers["left = 0<br/>right = str.length - 1"]
    Pointers --> Bounds{"left < right?"}
    Bounds -->|No| Match([Return True: Palindrome 🎉])
    Bounds -->|Yes| CharCheck{"str[left] === str[right]?"}
    CharCheck -->|No| Mismatch([Return False: Not Palindrome ❌])
    CharCheck -->|Yes| Step["left++<br/>right--"] --> Bounds
```

---

### 📐 Complexity Formulas
- **Two-Pointer Approach**:
  $$T(n) = \mathcal{O}\left(\frac{n}{2}\right) = \mathcal{O}(n), \quad S(n) = \mathcal{O}(1)$$
  *Explanation*: Pointers converge from outer ends towards center without auxiliary heap memory.
- **Built-in String Reversal (`split.reverse.join`)**:
  $$T(n) = \mathcal{O}(n), \quad S(n) = \mathcal{O}(n)$$
  *Explanation*: Creates an intermediate array and new reversed string buffer.

---

### 💻 Solution Code
- **Approach 1 (Built-in string methods)**: [`Javascript/validatePalidrom.js`](../Javascript/validatePalidrom.js)
- **Approach 2 (Iterative reverse loop)**: [`Javascript/validatePalidromUsingFor.js`](../Javascript/validatePalidromUsingFor.js)

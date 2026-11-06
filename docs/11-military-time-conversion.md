# 11. Military Time Conversion (12h to 24h)

[⬅️ Back to Main Directory](../README.md)

---

### 📋 Problem Statement
Convert a 12-hour AM/PM timestamp string (e.g. `"07:05:45PM"`) into a 24-hour military clock string (`"19:05:45"`).

---

### 🎨 Graphical Cartoon Animation
<p align="center">
  <img src="../assets/military-time.svg" alt="Military Time Clock Cartoon" width="100%" />
</p>

---

### 🌲 Decision Flowchart
```mermaid
flowchart TD
    Start([Input: String s 'hh:mm:ssAM/PM']) --> Split["Extract modifier = s.slice(-2)<br/>[hh, mm, ss] = s.slice(0, -2).split(':')"]
    Split --> CheckMod{modifier === 'AM'?}
    CheckMod -->|Yes: AM| CheckMidnight{hh === '12'?}
    CheckMidnight -->|Yes| SetZero["hh = '00'"] --> Format["Format: `${hh}:${mm}:${ss}`"]
    CheckMidnight -->|No| Format
    CheckMod -->|No: PM| CheckNoon{hh === '12'?}
    CheckNoon -->|Yes| Format
    CheckNoon -->|No| Add12["hh = String(Number(hh) + 12)"] --> Format
    Format --> Output([Return 24-Hour Military String])
```

---

### 📐 Complexity Formulas
- **Time Complexity**:
  $$T(n) = \mathcal{O}(1)$$
  *Explanation*: Slices and parses a string of constant length (exactly 10 characters).
- **Space Complexity**:
  $$S(n) = \mathcal{O}(1)$$
  *Explanation*: Allocates fixed substrings of size 2.

---

### 💻 Solution Code
- **Solution File**: [`Javascript/militaryTimeConverstion.js`](../Javascript/militaryTimeConverstion.js)

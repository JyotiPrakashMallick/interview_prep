# 9. Prime Number Validator & Filter

[⬅️ Back to Main Directory](../README.md)

---

### 📋 Problem Statement
Determine if an integer $N$ is prime (divisible only by 1 and itself) or filter an array of numbers to extract all primes.

---

### 🎨 Graphical Cartoon Animation
<p align="center">
  <img src="../assets/prime-number.svg" alt="Prime Number Validator Cartoon" width="100%" />
</p>

---

### 🌲 Decision Flowchart
```mermaid
flowchart TD
    Start([Input: Number N]) --> Guard{"N <= 1 || !Number.isInteger(N)?"}
    Guard -->|Yes| NotPrime([Return: Not Prime ❌])
    Guard -->|No| EvenCheck{"N === 2?"}
    EvenCheck -->|Yes| Prime([Return: Prime Number 👑])
    EvenCheck -->|No| Div2{"N % 2 === 0?"}
    Div2 -->|Yes| NotPrime
    Div2 -->|No| Boundary["boundary = floor(sqrt(N))<br/>factor = 3"]
    Boundary --> CheckBound{"factor <= boundary?"}
    CheckBound -->|No| Prime
    CheckBound -->|Yes| ModuloCheck{"N % factor === 0?"}
    ModuloCheck -->|Yes| NotPrime
    ModuloCheck -->|No| StepFactor["factor += 2"] --> CheckBound
```

---

### 📐 Complexity Formulas
- **Time Complexity**:
  $$T(N) = \mathcal{O}(\sqrt{N})$$
  *Explanation*: Any factor pair $a \times b = N$ requires $\min(a, b) \le \sqrt{N}$. If no divisor is found in $[2, \lfloor\sqrt{N}\rfloor]$, $N$ is guaranteed prime.
- **Space Complexity**:
  $$S(N) = \mathcal{O}(1)$$
  *Explanation*: Constant scalar memory for loop index and square root boundary.

---

### 💻 Solution Code
- **Solution File**: [`Javascript/validatePrimeNumber.js`](../Javascript/validatePrimeNumber.js)

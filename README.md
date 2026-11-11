# 🎯 Coding Interview Preparation Handbook

Welcome to the **Coding Interview Preparation** guide! This repository is carefully crafted to help candidates master algorithmic problem-solving and technical coding interviews through clean code, intuitive visual breakdowns, embedded animated cartoon diagrams, rigorous decision flowcharts, and exact mathematical Time & Space complexity formulations.

---

## 📌 Repository Mission & Objectives

1. **Intuitive Visual Mental Models**: Replace walls of text with memorable animated cartoon diagrams and flowcharts for every single problem.
2. **Systematic Complexity Proofs**: Provide exact mathematical formulas for Big-O Time Complexity ($T(n)$) and Space Complexity ($S(n)$).
3. **Structured Interview Decision Trees**: Model algorithmic branching, base cases, and edge case handling with GitHub-rendered Mermaid flowcharts.
4. **Optimized Solutions**: Provide clean, tested JavaScript implementations with benchmarked comparisons (e.g., Brute Force vs. Hash Maps).
5. **Modular Architecture**: Each problem has its own dedicated documentation page in [`docs/`](docs/) with full explanations, interactive diagrams, and direct links to solution code.

---

## 📚 Complete Problem Directory & Quick Navigation

Click on any problem name below to open its dedicated documentation page with cartoon animations, Mermaid decision flowcharts, and detailed complexity proofs:

| # | Problem | Domain / Pattern | Time Complexity $T(n)$ | Space Complexity $S(n)$ | Cartoon | Problem Guide | Solution Code |
|---|---|---|:---:|:---:|:---:|:---:|---|
| 1 | **Cats and a Mouse** | Math / 1D Distance | $\mathcal{O}(1)$ | $\mathcal{O}(1)$ | 🐱 🐭 🐱 | [📖 View Guide](docs/01-cats-and-a-mouse.md) | [`catsAndMouse.js`](Javascript/catsAndMouse.js) |
| 2 | **Day of the Programmer** | Calendar / Modular Arithmetic | $\mathcal{O}(1)$ | $\mathcal{O}(1)$ | ⏳ 🇷🇺 📅 | [📖 View Guide](docs/02-day-of-the-programmer.md) | [`dayOfProgrammerWay1.js`](Javascript/dayOfProgrammerWay1.js) & [`dayOfProgrammerWay2.js`](Javascript/dayOfProgrammerWay2.js) |
| 3 | **Divisible Sum Pairs** | Remainder Hashing / Two Pointers | $\mathcal{O}(n)$ | $\mathcal{O}(k)$ | 💖 🔢 ➗ | [📖 View Guide](docs/03-divisible-sum-pairs.md) | [`divisibleSumPairs.js`](Javascript/divisibleSumPairs.js) |
| 4 | **Drawing Book** | Math / Symmetrical Page Flipping | $\mathcal{O}(1)$ | $\mathcal{O}(1)$ | 📖 ⏩ ⏪ | [📖 View Guide](docs/04-drawing-book.md) | [`drawingBook.js`](Javascript/drawingBook.js) |
| 5 | **Electronics Shop** | Search Space / Two Pointers | $\mathcal{O}(n \cdot m)$ | $\mathcal{O}(1)$ | ⌨️ 💾 💵 | [📖 View Guide](docs/05-electronics-shop.md) | [`electronicsShop.js`](Javascript/electronicsShop.js) |
| 6 | **Migratory Birds** | Frequency Array / Tie-Breaking | $\mathcal{O}(n)$ | $\mathcal{O}(1)$ | 🦅 👑 📊 | [📖 View Guide](docs/06-migratory-birds.md) | [`migratoryBirds.js`](Javascript/migratoryBirds.js) & [`migratoryBirdsWithLessComplexity.js`](Javascript/migratoryBirdsWithLessComplexity.js) |
| 7 | **Sales by Match** | Frequency Map / Pairing Division | $\mathcal{O}(n)$ | $\mathcal{O}(u)$ | 🧦 🧺 ❤️ | [📖 View Guide](docs/07-sales-by-match.md) | [`salesByMatch.js`](Javascript/salesByMatch.js) |
| 8 | **Palindrome Verification** | Two Pointers / String Reversal | $\mathcal{O}(n)$ | $\mathcal{O}(1)$ | 🪞 ✨ 🔄 | [📖 View Guide](docs/08-palindrome-verification.md) | [`validatePalidrom.js`](Javascript/validatePalidrom.js) & [`validatePalidromUsingFor.js`](Javascript/validatePalidromUsingFor.js) |
| 9 | **Prime Number Validator** | Math / Square Root Boundary | $\mathcal{O}(\sqrt{N})$ | $\mathcal{O}(1)$ | 🛡️ 👑 🔢 | [📖 View Guide](docs/09-prime-number-validator.md) | [`validatePrimeNumber.js`](Javascript/validatePrimeNumber.js) |
| 10 | **2D Hourglass Max Sum** | 2D Arrays / Fixed Window Convolution | $\mathcal{O}(1)$ | $\mathcal{O}(1)$ | ⏳ 🪟 🏆 | [📖 View Guide](docs/10-hourglass-max-sum.md) | [`hourGalss.js`](Javascript/hourGalss.js) |
| 11 | **Military Time Conversion** | String Slicing / Modulo Arithmetic | $\mathcal{O}(1)$ | $\mathcal{O}(1)$ | ⏰ ☀️ 🪖 | [📖 View Guide](docs/11-military-time-conversion.md) | [`militaryTimeConverstion.js`](Javascript/militaryTimeConverstion.js) |
| 12 | **First Duplicate Occurrence** | Hash Set / Sliding Membership | $\mathcal{O}(n)$ | $\mathcal{O}(n)$ | 🔍 🎟️ 🚨 | [📖 View Guide](docs/12-first-duplicate-occurrence.md) | [`problemNew.js`](Javascript/problemNew.js) & [`problenNewSet.js`](Javascript/problenNewSet.js) |
| 13 | **Bracket Combinations** | Catalan Numbers / Divide & Conquer | $\mathcal{O}\left(\frac{4^n}{n^{3/2}}\right)$ | $\mathcal{O}(n)$ | 🎋 🎭 🏆 | [📖 View Guide](docs/13-bracket-combinations.md) | [`bracket.js`](Javascript/bracket.js) |
| 14 | **Reverse Array / String** | In-Place Two Pointers / Iteration | $\mathcal{O}(n)$ | $\mathcal{O}(1)$ | 🔄 🤸 📦 | [📖 View Guide](docs/14-reverse-array-or-string.md) | [`reverseString.js`](Javascript/reverseString.js) |
| 15 | **Character Frequency Count** | Hash Map / Occurrence Counting | $\mathcal{O}(n)$ | $\mathcal{O}(u)$ | 🍌 📊 🔤 | [📖 View Guide](docs/15-character-frequency-count.md) | [`chharCount.js`](Javascript/chharCount.js) |
| 16 | **Cyclic Permutation Digits** | Number Theory / Anagram Sorting | $\mathcal{O}(N \cdot D \log D)$ | $\mathcal{O}(D)$ | 🔢 ⚡ 🔀 | [📖 View Guide](docs/16-cyclic-permutation-digits.md) | [`question.js`](Javascript/question.js) & [`sixDigit.js`](Javascript/sixDigit.js) |
| 17 | **Counting Valleys** | Path Traversal / Sea-Level Tracking | $\mathcal{O}(n)$ | $\mathcal{O}(1)$ | 🥾 🌊 🏔️ | [📖 View Guide](docs/17-counting-valleys.md) | [`countingValleys.js`](Javascript/countingValleys.js) |
| 18 | **Extra Long Factorials** | Arbitrary-Precision Math / BigInt | $\mathcal{O}(n^2)$ | $\mathcal{O}(n \log n)$ | 💥 🦸 🔢 | [📖 View Guide](docs/18-extra-long-factorials.md) | [`extraLongFactorials.js`](Javascript/extraLongFactorials.js) |
| 19 | **Non-Divisible Subset** | Remainder Bucketing / Greedy Choice | $\mathcal{O}(n + k)$ | $\mathcal{O}(k)$ | ⚔️ 🥊 🛡️ | [📖 View Guide](docs/19-non-divisible-subset.md) | [`nonDivisibleSubset.js`](Javascript/nonDivisibleSubset.js) |
| 20 | **Queen's Attack II** | 8-Direction Ray-Casting / Distance Trimming | $\mathcal{O}(k)$ | $\mathcal{O}(1)$ | 👑 ♟️ 🏹 | [📖 View Guide](docs/20-queens-attack-2.md) | [`queensAttack.js`](Javascript/queensAttack.js) |
| 21 | **Taum and B'day** | Math / Cost Arbitrage & BigInt | $\mathcal{O}(1)$ | $\mathcal{O}(1)$ | 🎁 🪄 🤍 | [📖 View Guide](docs/21-taum-and-bday.md) | [`taumBday.js`](Javascript/taumBday.js) |
| 22 | **Modified Kaprekar Numbers** | Number Theory / Digit Splitting | $\mathcal{O}((q-p) \cdot d)$ | $\mathcal{O}(k)$ | ✂️ 🔢 ➕ | [📖 View Guide](docs/22-kaprekar-numbers.md) | [`kaprekarNumbers.js`](Javascript/kaprekarNumbers.js) |
| 23 | **Beautiful Triplets** | Hash Map / Frequency Counting | $\mathcal{O}(n)$ | $\mathcal{O}(n)$ | 💎 🦘 🔢 | [📖 View Guide](docs/23-beautiful-triplets.md) | [`beautifulTriplets.js`](Javascript/beautifulTriplets.js) |
| 24 | **Minimum Distances** | Hash Map / Last-Seen Index | $\mathcal{O}(n)$ | $\mathcal{O}(n)$ | 📏 👯 🔍 | [📖 View Guide](docs/24-minimum-distances.md) | [`minimumDistances.js`](Javascript/minimumDistances.js) |
| 25 | **Halloween Sale** | Simulation / Clamped Arithmetic Sequence | $\mathcal{O}(s / m)$ | $\mathcal{O}(1)$ | 🎃 🎮 💰 | [📖 View Guide](docs/25-halloween-sale.md) | [`halloweenSale.js`](Javascript/halloweenSale.js) |
| 26 | **The Time in Words** | String Building / Lookup Table | $\mathcal{O}(1)$ | $\mathcal{O}(1)$ | 🕔 🔤 🗣️ | [📖 View Guide](docs/26-time-in-words.md) | [`timeInWords.js`](Javascript/timeInWords.js) |
| 27 | **Chocolate Feast** | Simulation / Wrapper Exchange | $\mathcal{O}(\log_m(n/c))$ | $\mathcal{O}(1)$ | 🍫 🔁 🎁 | [📖 View Guide](docs/27-chocolate-feast.md) | [`chocolateFeast.js`](Javascript/chocolateFeast.js) |

---

## 🚀 How to Practice with this Repository

1. **Browse the Problem Directory**: Use the table above to pick an algorithm or pattern you want to prepare.
2. **Review the Dedicated Guide**: Click **[📖 View Guide]** to open the problem's standalone markdown page with its:
   - Problem Statement and Edge Cases
   - Animated Cartoon Diagram (for intuitive mental modeling)
   - Decision Flowchart (step-by-step logic and condition branching)
   - Big-O Time & Space Complexity proofs
3. **Inspect & Run the Code**: Click the **Solution Code** link to inspect the commented JavaScript file, or run it locally using Node.js:
   ```bash
   node Javascript/queensAttack.js
   ```
4. **Implement Independently**: Try re-coding the solution from memory, articulating the Time and Space trade-offs aloud as you would in a real technical interview!

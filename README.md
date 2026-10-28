# 🎯 Coding Interview Preparation Handbook

Welcome to the **Coding Interview Preparation** guide! This repository is designed to help software engineers, students, and interview candidates master algorithmic problem-solving through clean, well-documented solutions, visual intuition, and rigorous complexity breakdowns.

---

## 📌 Repository Mission & Objectives

The primary goal of this repository is to:
1. **Demystify Core Algorithmic Patterns**: Provide visual representations and mental models for classic coding problems.
2. **Standardize Interview Communication**: Model how to explain logic, assumptions, edge cases, and trade-offs.
3. **Offer High-Quality Solutions**: Present well-documented JavaScript solutions with explicit Big-O Time & Space complexities.
4. **Fast Revision for Candidates**: Serve as a visual cheat sheet before technical screenings.

---

## 📚 Problem Directory & Quick Navigation

| # | Problem | Domain / Pattern | Time Complexity | Space Complexity | Solution File |
|---|---|---|:---:|:---:|---|
| 1 | [Cats and a Mouse](#1-cats-and-a-mouse) | Math / Distance | $O(1)$ | $O(1)$ | [`catsAndMouse.js`](Javascript/catsAndMouse.js) |
| 2 | [Day of the Programmer](#2-day-of-the-programmer) | Calendar / Edge Cases | $O(1)$ | $O(1)$ | [`dayOfProgrammer.js`](Javascript/dayOfProgrammer.js) & [`dayOfProgrammerII.js`](Javascript/dayOfProgrammerII.js) |
| 3 | [Divisible Sum Pairs](#3-divisible-sum-pairs) | Two Pointers / Remainder Math | $O(n^2) \rightarrow O(n)$ | $O(1)$ | [`divisibleSumPairs.js`](Javascript/divisibleSumPairs.js) |
| 4 | [Drawing Book](#4-drawing-book-page-count) | Math / Page Flipping | $O(1)$ | $O(1)$ | [`drawingBook.js`](Javascript/drawingBook.js) |
| 5 | [Electronics Shop](#5-electronics-shop) | Optimization / Search Space | $O(n \times m)$ | $O(1)$ | [`electronicsShop.js`](Javascript/electronicsShop.js) |
| 6 | [Migratory Birds](#6-migratory-birds) | Frequency Map / Hash Table | $O(n)$ | $O(1)$ | [`migratoryBirds.js`](Javascript/migratoryBirds.js) & [`migratoryBirdsWithLessComplexity.js`](Javascript/migratoryBirdsWithLessComplexity.js) |
| 7 | [Sales by Match](#7-sales-by-match-sock-merchant) | Frequency Map / Pairing | $O(n)$ | $O(u)$ | [`salesByMatch.js`](Javascript/salesByMatch.js) |

---

## 🧩 Visual Problem Breakdowns & Solutions

### 1. Cats and a Mouse

#### 📋 Problem Statement
Two cats and a mouse are positioned at coordinates on a 1D line:
- Cat A starts at position $x$.
- Cat B starts at position $y$.
- Mouse C starts at position $z$.

Both cats travel at the same constant speed towards the mouse. If both cats arrive at the mouse simultaneously, they clash, allowing Mouse C to escape. Determine which entity prevails: `"Cat A"`, `"Cat B"`, or `"Mouse C"`.

#### 🖼️ Visual Presentation
```
   [Cat A (x)]                  [Mouse C (z)]            [Cat B (y)]
───●────────────────────────────●────────────────────────●──────────►
   │◄────── distA = |z - x| ───►│◄───── distB = |z - y| ─►│
```

```mermaid
flowchart TD
    Start([Input: x, y, z]) --> Calc["Calculate Distances:<br/>distA = |z - x|<br/>distB = |z - y|"]
    Calc --> CheckDist{Compare distA vs distB}
    CheckDist -->|distA == distB| MouseC["Both arrive together!<br/>Cats fight -> Mouse escapes<br/><b>Return 'Mouse C'</b>"]
    CheckDist -->|distA < distB| CatA["Cat A is closer<br/><b>Return 'Cat A'</b>"]
    CheckDist -->|distB < distA| CatB["Cat B is closer<br/><b>Return 'Cat B'</b>"]
```

#### 💡 Key Takeaway
- **Formula**: Simple absolute difference `Math.abs(z - x)` vs `Math.abs(z - y)`.
- **Complexity**: $O(1)$ Time, $O(1)$ Space.
- **Source Code**: [`catsAndMouse.js`](Javascript/catsAndMouse.js)

---

### 2. Day of the Programmer

#### 📋 Problem Statement
Given a year in Russia between 1700 and 2700, find the date of the **256th day** (`dd.mm.yyyy`).
Russia shifted calendar systems across three eras:
1. **Julian Calendar (1700 – 1917)**: Leap year if `year % 4 === 0`.
2. **Transition Year (1918)**: Day after Jan 31 was Feb 14 (13 days omitted).
3. **Gregorian Calendar (1919 – present)**: Leap year if `year % 400 === 0` OR (`year % 4 === 0` and `year % 100 !== 0`).

#### 🖼️ Visual Presentation
```
Days in Jan - Aug (8 months):
┌─────────────────────────┬───────────────────┬──────────────────────┬─────────────┐
│ Era / Year Type         │ Days (Jan to Aug) │ Calculation to Day 256│ Date Result │
├─────────────────────────┼───────────────────┼──────────────────────┼─────────────┤
│ Leap Year               │ 244 days          │ 256 - 244 = 12       │ 12.09.YYYY  │
│ Non-Leap Year           │ 243 days          │ 256 - 243 = 13       │ 13.09.YYYY  │
│ Transition (1918)       │ 230 days          │ 256 - 230 = 26       │ 26.09.1918  │
└─────────────────────────┴───────────────────┴──────────────────────┴─────────────┘
```

```mermaid
flowchart TD
    Start([Year Input]) --> Check1918{Year == 1918?}
    Check1918 -->|Yes| Transition["Special 1918 Transition<br/>Feb lost 13 days<br/><b>'26.09.1918'</b>"]
    Check1918 -->|No| CheckEra{Year < 1918?}
    CheckEra -->|Julian Era| JulianCheck{"year % 4 == 0?"}
    CheckEra -->|Gregorian Era| GregCheck{"year % 400 == 0 OR<br/>(year % 4 == 0 AND year % 100 != 0)?"}
    JulianCheck -->|Leap| LeapResult["Leap Year (Feb = 29 days)<br/><b>'12.09.YYYY'</b>"]
    JulianCheck -->|Non-Leap| NormResult["Regular Year (Feb = 28 days)<br/><b>'13.09.YYYY'</b>"]
    GregCheck -->|Leap| LeapResult
    GregCheck -->|Non-Leap| NormResult
```

#### 💡 Key Takeaway
- Avoid manual month-by-month counting in interviews; the 256th day **always** falls in September (month 09).
- **Complexity**: $O(1)$ Time, $O(1)$ Space.
- **Source Code**: [`dayOfProgrammer.js`](Javascript/dayOfProgrammer.js) (iterative) | [`dayOfProgrammerII.js`](Javascript/dayOfProgrammerII.js) (constant arithmetic)

---

### 3. Divisible Sum Pairs

#### 📋 Problem Statement
Given an array of integers `ar` of size `n` and a positive integer `k`, count the number of pairs $(i, j)$ such that:
$$i < j \quad \text{and} \quad (ar[i] + ar[j]) \pmod k = 0$$

#### 🖼️ Visual Presentation
```
Example: ar = [1, 3, 2, 6, 1, 2],  k = 3

   Index:   0    1    2    3    4    5
   Value:  [1]  [3]  [2]  [6]  [1]  [2]
            │    │    │    │    │    │
            └────┼───►│    │    │    │  --> 1 + 2 = 3 (divisible by 3) ✓
            │    │    │    │    │    └──> 1 + 2 = 3 (divisible by 3) ✓
                 └────┼───►│    │    │  --> 3 + 6 = 9 (divisible by 3) ✓
                      │    │    └───►│  --> 2 + 1 = 3 (divisible by 3) ✓
                           └────┼───►│  --> 6 + 1 = 7 (not divisible)
                                └────┴──> 1 + 2 = 3 (divisible by 3) ✓
   Total Pairs = 5
```

```mermaid
flowchart LR
    subgraph Nested_Approach["Brute Force: O(n²)"]
        A["For i = 0 to n-1"] --> B["For j = i+1 to n-1"]
        B --> C{"(ar[i] + ar[j]) % k == 0"}
        C -->|Yes| D["count++"]
    end
    subgraph Optimal_Approach["Frequency / Remainder Map: O(n)"]
        E["remainder = ar[i] % k"] --> F["needed = (k - remainder) % k"]
        F --> G["count += freq[needed]"]
        G --> H["freq[remainder]++"]
    end
```

#### 💡 Key Takeaway
- While the nested loop is simple ($O(n^2)$), mentioning the $O(n)$ remainder frequency bucket approach demonstrates senior-level optimization skills.
- **Source Code**: [`divisibleSumPairs.js`](Javascript/divisibleSumPairs.js)

---

### 4. Drawing Book (Page Count)

#### 📋 Problem Statement
A book has `n` pages. Page 1 is always on the right side. Every two subsequent pages are printed on opposite sides of a single leaf:
- Page `(2, 3)` are revealed on Turn 1.
- Page `(4, 5)` are revealed on Turn 2, and so on.

A student wants to reach page `p`. They can start turning from the front (page 1) or from the back (page `n`). Find the minimum number of page turns required.

#### 🖼️ Visual Presentation
```
Book Layout:
 Turn 0:     [ Blank | 1 ]
 Turn 1:     [   2   | 3 ]
 Turn 2:     [   4   | 5 ]
 ...
 Turn k:     [  2k   | 2k+1 ]

From Front:  floor(p / 2)
From Back:   floor(n / 2) - floor(p / 2)
```

```mermaid
flowchart TD
    Start([Input: Total pages n, Target page p]) --> TurnsFront["Turns from Front:<br/><b>Math.floor(p / 2)</b>"]
    Start --> TurnsBack["Turns from Back:<br/><b>Math.floor(n / 2) - Math.floor(p / 2)</b>"]
    TurnsFront --> Compare{"Math.min(front, back)"}
    TurnsBack --> Compare
    Compare --> Result([Return Minimum Page Turns])
```

#### 💡 Key Takeaway
- Both page $2k$ and $2k+1$ require exactly $k$ turns from the front.
- **Complexity**: $O(1)$ Time, $O(1)$ Space.
- **Source Code**: [`drawingBook.js`](Javascript/drawingBook.js)

---

### 5. Electronics Shop

#### 📋 Problem Statement
A buyer wants to purchase **exactly one keyboard** and **exactly one USB drive** with a given budget $b$.
Given keyboard prices and USB drive prices:
- Maximize the total spend: $\max(\text{keyboards}[i] + \text{drives}[j])$ such that total $\le b$.
- If no combination is within budget, return `-1`.

#### 🖼️ Visual Presentation
```
Keyboards: [40, 50, 60]
Drives:    [5, 8, 12]
Budget:    b = 60

Matrix of Combinations:
          D: 5      D: 8     D: 12
        ┌────────┬────────┬────────┐
K: 40   │   45   │   48   │   52   │
K: 50   │   55   │   58   │   62 (x)│
K: 60   │   65(x)│   68(x)│   72 (x)│
        └────────┴────────┴────────┘
Best affordable spend: 58 (Keyboard 50 + Drive 8)
```

```mermaid
flowchart TD
    Start([Input: keyboards, drives, budget b]) --> Init["maxSpend = -1"]
    Init --> LoopK["Iterate each Keyboard k"]
    LoopK --> LoopD["Iterate each Drive d"]
    LoopD --> Check{"cost = k + d<br/>cost <= b AND cost > maxSpend?"}
    Check -->|Yes| Update["maxSpend = cost"]
    Check -->|No| NextPair[Continue Search]
    Update --> NextPair
    NextPair --> Done{Checked all pairs?}
    Done -->|No| LoopD
    Done -->|Yes| Output([Return maxSpend])
```

#### 💡 Key Takeaway
- $O(n \times m)$ brute force is acceptable for smaller constraints ($n, m \le 1000$).
- Can be optimized to $O(n \log n + m \log m)$ by sorting one array ascending and the other descending, then applying a two-pointer scan.
- **Source Code**: [`electronicsShop.js`](Javascript/electronicsShop.js)

---

### 6. Migratory Birds

#### 📋 Problem Statement
You are given an array of bird sightings, where each number denotes a bird type id ($1 \le \text{id} \le 5$). Find the most frequently sighted bird type. If there is a tie between multiple types, return the **smallest type id**.

#### 🖼️ Visual Presentation
```
Sightings: [1, 4, 4, 4, 5, 3, 1, 1]

Frequency Count:
 Bird Type 1: ███ (3 sightings)  <-- TIE (count = 3)
 Bird Type 2: 
 Bird Type 3: █   (1 sighting)
 Bird Type 4: ███ (3 sightings)  <-- TIE (count = 3)
 Bird Type 5: █   (1 sighting)

Tie Break: Min(Type 1, Type 4) => Return Type 1
```

```mermaid
flowchart LR
    Input["Array: [1, 4, 4, 4, 5, 3, 1, 1]"] --> Count["Fixed Array count[6]<br/>index: 1..5"]
    Count --> Tally["count[1] = 3<br/>count[2] = 0<br/>count[3] = 1<br/>count[4] = 3<br/>count[5] = 1"]
    Tally --> Scan["Scan index 1 -> 5 for Max:<br/>First encountered highest count wins"]
    Scan --> Result(["Result: 1"])
```

#### 💡 Key Takeaway
- Since bird types are strictly bounded ($1$ through $5$), a static array of size 6 gives $O(n)$ time and $O(1)$ extra space.
- Scanning indices from 1 to 5 naturally breaks ties by picking the lowest ID first.
- **Source Code**: [`migratoryBirds.js`](Javascript/migratoryBirds.js) | [`migratoryBirdsWithLessComplexity.js`](Javascript/migratoryBirdsWithLessComplexity.js)

---

### 7. Sales by Match (Sock Merchant)

#### 📋 Problem Statement
Given an array representing the colors of $n$ socks, determine how many matching pairs of socks can be formed.

#### 🖼️ Visual Presentation
```
Pile of Socks: [10, 20, 20, 10, 10, 30, 50, 10, 20]

Group by Color:
 Color 10: 🧦 🧦 🧦 🧦  --> 4 socks  --> 4 / 2 = 2 pairs  ✓✓
 Color 20: 🧦 🧦 🧦     --> 3 socks  --> 3 / 2 = 1 pair   ✓
 Color 30: 🧦           --> 1 sock   --> 1 / 2 = 0 pairs
 Color 50: 🧦           --> 1 sock   --> 1 / 2 = 0 pairs

Total Matching Pairs = 2 + 1 = 3 pairs
```

```mermaid
flowchart TD
    Start([Input: Sock Array ar, size n]) --> Map["Count occurrences of each color:<br/>colorMap[color]++"]
    Map --> Sum["totalPairs = 0"]
    Sum --> Loop["For each count in colorMap:<br/>totalPairs += floor(count / 2)"]
    Loop --> Output([Return totalPairs])
```

#### 💡 Key Takeaway
- For each unique color $c$ with count $k$, pairs = $\lfloor k / 2 \rfloor$.
- **Complexity**: $O(n)$ Time, $O(u)$ Space (where $u$ is unique colors).
- **Source Code**: [`salesByMatch.js`](Javascript/salesByMatch.js)

---

## 🚀 How to Practice with this Repository

1. **Read the Problem Statement**: Understand constraints and edge cases.
2. **Review the Visual Model**: Conceptualize the diagram before writing code.
3. **Trace the Algorithm**: Check the Mermaid flowchart to follow execution steps.
4. **Implement**: Try writing your own solution, then compare against the repository solutions.
5. **Analyze Complexity**: Articulate why the solution runs in $O(n)$ or $O(1)$.

---
label: mult-inv-ex
name: Existence of Multiplicative Inverse
dependencies:
  - bezout
---

Let $n$ be a positive integer. An integer has a multiplicative inverse modulo $n$ if and only if it is coprime to $n$. If an inverse exists, it is unique up to congruence modulo $n$.

#### Proof
Let $n$ be a positive integer and $a$ any integer. There is a multiplicative inverse of $a$ modulo $n$ if and only if there exists integers $x,y$ with $ax + ny = 1$. By Bezout's theorem, this is true exactly if $a$ and $n$ are coprime. If the integers $x$ and $y$ are both multiplicative inverses of $a$ modulo $n$, then we have $ax \equiv ay \equiv 1\pmod{n}$, hence $n\mid a(x-y)$. But since $a$ and $n$ are coprime, this implies that $x\equiv y\pmod{n}$.

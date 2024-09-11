---
label: tautient-props
name: Properties of the Euler Tautient Function
dependencies:
  - tautient
---

Let $p$ be a prime, $n$ a positive integer and $a,b$ two coprime integers. The following hold true:

1. $\varphi(p^n) = p^n - p^{n-1}$
2. $\varphi(ab) = \varphi(a)\varphi(b)$

#### Proof

For the first property, let $p$ be a prime and $n$ a positive integer. A positive integers at most $p^n$ is coprime to $p^n$ if and only if it is not divisible by $p$. Since there are $p^{n-1}$ integers in this range divisible by $p$, the desired result follows.

For the second propery, note that by the Chinese Remainder Theorem, the positive integers up to $ab$ are in direct correspondence with pairs of congrunece classes of $a$ and $b$. Any such integer is coprime to $ab$ if and only if its corresponding congruence class modulo $a$ is coprime to $a$ and its corresponding congruence class moulo $b$ is coprime to $b$. Hence the total number of pairs of congruence classes satifying this condition is exactly $\varphi(a)\varphi(b)$.
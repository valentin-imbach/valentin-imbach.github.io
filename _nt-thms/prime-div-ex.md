---
label: prime-div-ex
name: Existence of Prime Divisor
dependencies:
  - prime
---

Every integer $n\geq 2$ has a prime divisor.

#### Proof.
Let $n\geq 2$ and consider the set $A$ of positive divisors of $n$, exclusing $1$. Since $n\geq 2$ we have $n\in A$ and hence $A$ is non-empty. Thus, by the well-ordering principle, there is a smallest integer $a\in A$. It suffices to show that $a$ is prime. If not, then there is an integer $b$ with $1 < b < a$ and $b\mid a$. But then also $b\mid n$ and hence $b\in A$, contradicting the minimality of $a$.
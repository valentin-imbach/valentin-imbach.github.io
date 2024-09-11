---
label: wilson
name: Wilson's Theorem
dependencies:
  - mult-inv-ex
---

For any prime $p$, we have $(p-1)! \equiv -1\pmod{p}$.

#### Proof

By the Existsence of Multiplicative Inverse, we know that any integer in the sequence $1,2,\dots,p-1$ has a multipicative inverse modulo $p$ also in this sequence. If some integer $a$ in this sequence is its own multiplicative inverse modulo $p$, then $a^2\equiv 1\pmod{p}$ and $p\mid a^2-1 = (a-1)(a+1)$. Thus this is only the case for $a = 1, p-1$. Since The remaining terms now pair 
---
label: 1-mod-lem
name: $1$ mod $2^{n+1}$ Lemma
dependencies:
  - ord
---

Let $a,b$ be integers and $n$ a positive integer. If $p$ is an odd prime with $p\nmid a,b$ and $p\mid a^{2^n} + b^{2^n}$, then we have $p\equiv 1\pmod{2^{n+1}}$.

#### Proof.
We have $a^{2^n}\equiv -b^{2^n}\pmod{p}$. Since $p\nmid b$, we can multiply both sides by a multiplicative inverse $c$ of $a$ to obtain $(ac)^{2^n}\equiv -1\pmod{p}$ and squaring this equivalence we find

$$(ac)^{2^{n+1}}\equiv 1\pmod{p}.$$

Now let $d$ be the order of $ac$ modulo $p$. We have $p\mid 2^{n+1}$ but also $p\nmid $2^n$ by the first equivalence, since $-1 \nequiv 1\pmod{p}$ using the assumption that $p$ is odd. This implies $d = \2^{n+1}$. Moreover, we have $d\mid \varphi(p)$, allowing us to conclude $2^{n+1} = d\mid \varphi(p) = p-1$, hence $p \equiv 1 \pmod{2^{n+1}}$.
---
label: prim-root-prime-pow
name: Primitive Roots of Prime Powers
dependencies:
  - prim-root-prime
---

Every odd prime power has a primitive root.

#### Proof.

Let $p$ be an odd prime and $k$ a positive integer, with the aim to show that $p^k$ has a primitive root. The case $k = 1$ is alrady done in the Primitive Root of Primes Theorem. For $k \geq 2$, let $a$ be a primitive root of $p$. To show that the order of $a$ modulo $p^k$ is equal to $\varphi(p^k) = (p-1)p^{k-1}$, it suffices to show that

$$a^{(p-1)p^{k-1}/q} \not\equiv 1\pmod{p^k}$$

for each prime divisor $q$ of $(p-1)p^{k-1}$. If $q\mid p-1$, then we have

$$a^{(p-1)p^{k-1}/q} = (a^{(p-1)/q})^{p^{k-1}} \equiv a^{(p-1)/q} \not\equiv 1\pmod{p},$$

using Euler Fermat and the assumption that $a$ is a primitive root modulo $p$. If instead $q = p$ and $a^{(p-1)p^{k-2}}\equiv 1\pmod{p^k}$, replace $a$ by $a+p$, which is still a primitive root modulo $p$, and note that

$$(a+p)^{(p-1)p^{k-2}} \equiv a^{(p-1)p^{k-2}} + (p-1)p^{k-2}a^{(p-1)p^{k-2}-1}p \equiv 1 - p^{k-1}a^{(p-1)p^{k-2}-1} \not\equiv 1 \pmod{p^k},$$

where we used the fact that for all intgers $2\leq t\leq k$

$$p^{k-t}\mid \binom{(p-1)p^{k-2}}{t}$$

since $p$ is odd.

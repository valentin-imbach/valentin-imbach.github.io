---
label: prim-root-ex
name: Existence of Primitive Roots
dependencies:
  - prim-root-prime-pow
---

Let $n$ be a positive integer. There is a primitive root modulo $n$ if and only if either

- $n\in \\{1,2,4\\}$
- $n = p^k$ where $p$ is and odd prime and $k$ a positive integer
- $n = 2p^k$ where $p$ is and odd prime and $k$ a positive integer

#### Proof.

The cases $n\in\\{1,2,4\\}$ are easily checked, case where $n$ is a prime power is given by the Primitive Roots Modulo Primes Theorem. If $n=2p^k$ where $p$ is and odd prime and $k$ a positive integer, let $a$ be a prmitive root modulo $p^k$. Since $\varphi(n) = (p-1)p^{k-1} = \varphi(p^k)$, we immediately find that $a$ is also a primitive root modulo $n$.

Conversely, let $n$ be a positive integer and let $a$ be an integer coprime to $a$. If $n$ is divisible by two odd primes $p$ and $q$, then there are two coprime integers $n_p$ and $n_q$ such that $n = n_pn_q$ and $p\mid n_p, q\mid n_q$. Now we have

$$a^{\varphi(n)/2} = a^{\varphi(n_p)\varphi(n_q)/2} \equiv (a^\varphi(n_p))^{\varphi(n_q)/2} \equiv 1\pmod{n_p}$$

by Euler Fermat and similarly $a^{\varphi(n)/2} \equiv 1\pmod{n_q}$, thus $a^{\varphi(n)/2}\equiv 1\pmod{n}$, implying that there is no primitive root modulo $n$. If $n=4p^k$ for an odd prime $p$ and a positive integer $k$, then we have

$$a^{\varphi(n)/2} \equiv a^{(p-1)p^{k-1}} \equiv 1\pmod{p^k}$$

and similarly

$$a^{\varphi(n)/2} \equiv a^{(p-1)p^{k-1}} \equiv (a^2)^{(p-1)p^{k-1}/2} \equiv 1^{(p-1)p^{k-1}/2} \equiv 1 \pmod{4}.$$

Thus again $a^{\varphi(n)/2}\equiv 1\pmod{n}$ and there is no primitive root modulo $n$. The only remaining case to exclude is where $n=2^k$ for an integer $k\geq 3$. We show that $a^{2^{k-2}}\equiv 1\pmod{2^k}$ by induction on $k$, where the case $k = 3$ is easily checked. Now for $k\geq 4$ we have

$$a^{\varphi(n)/2} = a^{2^{k-2}} = \left(a^{2^{k-3}}\right)^2 \equiv \begin{cases}
1^2 \equiv 1 &\pmod{n}\\
(1+2^{k-1})^2 \equiv 1 &\pmod{n}
\end{cases}.$$
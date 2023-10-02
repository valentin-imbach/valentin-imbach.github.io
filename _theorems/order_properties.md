---
name: Properties of the Order
---


Let $a$ be an integer and $n$ a positive integer coprime to $a$. Let $d$ be the order of $a$ modulo $n$. Then,

1. For any non-negative integer $k$, we have $a^k\equiv 1\pmod{n}$ if and only if $d\mid k$
2. $d\mid \varphi(n)$

#### Proof

Let $k$ be an non-negative integer. If $d\mid k$, then there is an integer $k'$ such that $r = kk'$. But now

$$a^k = a^{dk'} = (a^d)^{k'} \equiv 1^{k'} = 1\pmod{n}.$$

Conversely, if $a^k \equiv 1\pmod{n}$ then, by Euclidean-Division, there are integers $q$ and $r$ wuch that $k = qd+r$ and $0\leq r < d$. Now

$$1\equiv a^k = a^{qd+r} = (a^d)^qa^r\equiv 1^qa^r\equiv a^r\pmod{n}$$

and if $r > 0$ this would contradict minimality of $d$. Hence $r = 0$ and $d\mid k$.
The second property folows directly from the first, together with the Euler-Fermat Theorem.
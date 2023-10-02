---
name: Bézout's Theorem
---

Let $a,b,n$ be integers. There exists integers $x,y$ with

$$xa + yb = n$$

if and only if $\gcd(a,b)\mid n$

#### Proof.
For one implication, let $a,b,n,x,y$ be integers such that $xa + yb = n$ and set $d = \gcd(a,b)$. Since $d$ divides both $a$ and $b$, we have $d\mid xa + yb = n$. For the other direction, let $a,b$ be integers and consider the set

$$S = \{n\in\mathbb{N}:\exists\ x,y\in\mathbb{Z}\ xa + yb = n\}.$$

The statement follows immediately if $a$ is zero, otherwise clearly $\|a\|\in S$ and hence $S$ is non-empty. Thus, by the well-ordering principle, there is a least integer $d\in S$ and integers $x,y$ with $xa + yb = d$. By euclidean division, there are integers $q,r$ with $a = qd + r$ and $0 \leq r < d$. If $r > 0$, then

$$r = a - qd = a - q(xa + yb) = (1-qx)a + (-qy)b \in S$$

contradicting minimality of $d$. Thus, $r = 0$ and $d\mid a$. Similarly $d\mid b$ and hence $d$ is a common divisor of $a$ and $b$. But by the first implication we must have $\gcd(a,b)\mid d$ implying $d = \gcd(a,b)$. Now if $n$ is divisibly by $d$, there is san integer $k$ with $n = kd$ and we have $n = k(xa + yb) = (kx)a + (ky)b$.
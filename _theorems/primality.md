---
name: Prime Lemma
---

Let $a,b$ be integers and $p$ a prime. If $p\mid ab$ then either $p\mid a$ or $p\mid b$.

#### Proof.
Assume that $p\nmid a$. Hence, $\gcd(a,p) = 1$ and by Bézout's Theorem there are integers $x,y$ with $xa + yp = 1$. Multiplying this equation by $b$ we find $xab + ypb = b$ and since $p\mid ab$ we conclude that $p$ must divide both sides of this equation, hence $p\mid b$.
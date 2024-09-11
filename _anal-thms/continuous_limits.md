---
name: Bolzano-Weierstrass
---

Let $(M, d)$ and $(M', d')$ be two metric spaces and $f:M\to M'$ a function. Then $f$ is continuous if and only if for every sequence $a_1,a_2\dots$ converging to some $a$ in $M$, the sequence $f(a_1),f(a_2),\dots$ converges to $f(a)$ in $M'$.

#### Proof.
Let $(M, d)$ and $(M', d')$ be two metric spaces and $f:M\to M'$ a function.

Assuming that $f$ is continuous, consider a sequence $a_1,a_2\dots$ converging to $a$ in $M$. By continuity of $f$ at $a$, for every real $\varepsilon > 0$ there is some real $\delta > 0$ such that for all $x\in M$ with $d(x,a) < \delta$ we have $d'(f(x), f(a)) < \varepsilon$. But by convergence, there is some positive integer $N$ such that $d(a_n, a) < \delta$ for all $n\geq N$. Thus we have $d'(f(a_n), f(x)) < \varepsilon$ for all $n\geq N$, meaning that the sequence $f(a_1),f(a_2),\dots$ converges to $f(a)$ in $M'$.

Conversely, if $f$ is not continuous at some $x\in M$, there must be some real $\varepsilon > 0$ such that for each real $\delta > 0$ we can find a point $y\in M$ with $d(x, y) < \delta$ but $d(f(x), f(y)) \geq \varepsilon$. Define a sequence $a_1, a_2,\dots$ where $a_i$ is a witness of $y$ for $\delta = 1/i$ for each $i\geq 1$. This sequence converges to $x$ in $M$, however $f(a_1),f(a_2),\dots$ clealry does not converge to $f(x)$, since every term is at least $\varepsilon > 0$ away from that point.
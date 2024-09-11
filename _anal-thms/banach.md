---
name: Contraction Mapping Theorem
---

Let $(M,d)$ be a non-empty, complete metric sapce and let $f:M\to M$ be a contraction. Then $f$ has exactly one fixed point.

#### Proof.

Let $(M,d)$ be a non-empty, complete metric space and let $f:M\to M$ be a contraction. Since $M$ is non-empty, there is some $a_1\in M$. Now consider the sequence $a_1,a_2,\dots$ where $a_{i+1} = f(a_i)$ for all $i > 1$. Since $f$ is a retraction, there is some real $K < 1$ with $d(f(x), f(y)) \leq Kd(x,y)$ for all $x,y\in M$. Repeatedly applying this inequality, we find that $d(a_{n+1}, a_n) < K^{n-1}d(a_2,a_1)$ for all positive integers $n$. Now using the triangle inequality, we deduce that

$$d(a_n, a_1) \leq d(a_2,a_1)(K^{n-2} + K^{n-3} + \cdots + 1) = d(a_2,a_1)\frac{1-K^{n-1}}{1-K}$$

is bounded from above by some real $R$. Pick any real $\varepsilon > 0$. For positive integers $n > m \geq N$, with $N$ usfficiently large, we now have

$$d(a_n, a_m) \leq K^{m-1}d(a_n-m+1,a_1) \leq K^{m-1}R < \varepsilon$$

and thus the sequence is Cauchy. By completeness, it must thus converge to some $a\in M$. If $f(a)\neq a$, let $N$ be such that $d(a_n, a) < d(f(a), a)/2$ for all $n\geq N$. But now

$$d(a_{n+1}, f(a)) = d(f(a_n), f(a)) \leq d(a_n, a) \leq d(f(a), a)/2$$

which togetehr with $d(a_{n+1}, a) < d(f(a), a)/2$ contradicts the triangle inequality. Thus, $a$ is a fixed point of $f$. To show uniqueness, assume that $a,b\in M$ with $f(a) = a$ and $f(b) = b$. But now,

$$d(a,b) = d(f(a), f(b)) < Kd(a,b),$$

implying that $a = b$.

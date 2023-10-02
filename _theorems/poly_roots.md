---
name: Polynomial Roots Lemma
---

Let $P$ be an integer polynomial of degree $n\geq 1$. Then, the congruence

$$P(x) \equiv 0\pmod{p}$$

has at most $n$ solutions up to congruence modulo $p$.

#### Proof.

We induct on $n$, with the case $n=1$ being trivial. For $n\geq 2$, if there are no solutions we are done, else let $a$ be a solution. Now, by Polynomial Division, there are integer Polynomials $P$ and $Q$ such that $P = Q(x-a) + R$ and $\deg(R) < \deg(x-a) = 1$. Thus $R$ is constant. Now by assumption $0 \equiv P(a) = Q(a-a) + R = R\pmod{p}$. If $b$ is any solution to $P(x) \equiv 0\pmod{p}$, then $p\mid P(b) - R = Q(b)(b-a)$ and by the Prime Lemma either $a\equiv b\pmod{p}$ or $Q(b)\equiv 0\pmod{p}$. But $\deg(Q) = n-1$ and therefore by the induction hyposthesis the second case can only occur for at most $n-1$ diferent $b$, up to congruence modulo $p$. The desired result follows.
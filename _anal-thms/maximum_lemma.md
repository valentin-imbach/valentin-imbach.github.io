---
name: Maximum Lemma
---

Let $(M, d)$ be a metric space and let $f:M\to \mathbb{R}$ be a continuous function. If $A\subset M$ is non-empty and compact, then $f$ attains a maximum on $A$.

#### Proof.
Let $(M, d)$ be a metric space and let $f:M\to \mathbb{R}$ be a continuous function. Let $A\subset M$ be non-empty and compact. If $f(A)$ is bounded from above, let $x = \sup(f(a))$. Thus, for every positive integer $n$, we can pick $a_n\in A$ be such that $f(a) > x-1/n$. Since $A$ is compact, the sequence $a_1,a_2,\dots$ must have a subsequence $b_1,b_2,\dots$ converging to $b\in A$. But since $f(a_1),f(a_2),\dots$ converges to $x$, so must the sequence $f(b_1), f(b_2),\dots$. But by continuity of $f$, the latter also converges to $f(b)$. By uniqueness of limits we thus have $f(b) = x$ and we concldue that $f$ attains a maximum at $b$.
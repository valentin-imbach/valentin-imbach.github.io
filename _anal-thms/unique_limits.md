---
name: Uniqueness of Limits
---

Every sequence in a metric space converges to at most one limit.

#### Proof.
Let $(M, d)$ be a metric space and let $a_1,a_2,\dots$ be a sequence in $M$ converging to both $a, a'\in M$. Assuming $a\neq a'$, we have $d(a, a') > 0$. By definition of convergence there are positive intgers $N$ and $N'$ such that $d(a_n, a) < d(a, a')/2$ for all $n\geq N_a$ and similarly $d(a_n, a') < d(a, a')/2$ for all $n\geq N'$. But now we have $d(a, a_n) + d(a_n, a') < d(a, a')$ when $n \geq \max(N,N')$, contradicting the triangle inequality. Thus $a = a'$.
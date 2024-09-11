---
name: Bolzano-Weierstrass Lemma
---

Every sequence of real numbers contains either an increasing or a decreasing subsequence.

#### Proof.
Let $a_1,a_2,\dots$ be a sequence of real numbers. We call the term $a_k$ of the seuqnece a *peak* if for all $i\geq k$ we have $a_i \leq a_k$. If we have infinitely many peaks, the subsequence they form is decreasing and we are done. Else, let $b_1$ be a term of the sequence beyond the last peak. For each $i\geq 1$ we now inductively pick $b_{i+1}$ to be a term after $b_i$ with $b_{i+1} > b_i$. This is always possible since $b_i$ is never a peak. Thus we found an increasing subsequence.
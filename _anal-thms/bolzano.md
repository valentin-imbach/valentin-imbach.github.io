---
name: Bolzano-Weierstrass
---

A subset of $\mathbb{R}^n$ is compact if and only if it is closed and bounded.

#### Proof.
Let $A$ be a compact subset of $\mathbb{R}^n$.


If $A$ is not bounded, we can pick $a_i\in A$ such that $d(a_i, 0) > i$ for all $i\geq 1$. By compactness, this seuqence must converge to some $a\in A$, implying that there is a positive integer $N$ with $d(a_n, a) < 1$ for all $n\geq N$. But now for $i \geq \max(d(a_N, 0) + 2, n)$ we have $d(a_i, 0) > d(a_N, a) + d(a_i, a) + d(a_N, 0)$, contradicting the triangle inequality.


If $A$ is not closed, there is a sequence in $A$ that converges to $x\in\mathbb{R}^n\setminus A$. Thus any convergent subsequence of this sequence must also converge to $x\not\in A$, contradicting compactness.

We now induct on $n\geq 1$. For $n = 1$, any sequence in $A\subset \mathbb{R}$ has a monotone subsequence by the Bolazno-Weierstrass Lemma which will converge by the ?? Lemma. For $n\geq 2$, we can first pass to a subsequence converging in one of the coordinates. The projection of this sequence into $\mathbb{R}^{n-1}$ by excluding that coordiante is still closed and bounded by ??. Thus we can find a subsequence ...
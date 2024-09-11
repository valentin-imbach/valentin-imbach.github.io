---
title: Proof by Density
---

Assume that there are only finitely many primes $p_1 < p_2 < \cdots < p_n$ and consider any positive integer $N$. By the fundamental theorem of arithmetic, the positive integers up to $N$ all have a unique prime factorisation of the form
$$p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_n^{\alpha_n},$$
where the $\alpha_1,\slpha_2,\dots,\alpha_n$ are non-negative intgers, each at most $\log_2(N)$. For large enguh $N$ however, the number of possible such prime factoerisations is at most $\log_2(N)^n < N$ and by the pigenhole principle two distinct integers in this range have the same prime factorisation, a contradiction.
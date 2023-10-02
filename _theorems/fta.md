---
name: Fundamental Theorem of Arithmatic
---

Every positive integer $n$ can be written uniquely as a (possibly empty) product $p_1^{e_1}p_2^{e_2}\cdots p_r^{e_r}$ where $p_1 < p_2 < \cdots < p_r$ are distinct primes and $e_1,e_2,\dots,e_r$ are positive integers.

#### Proof.
We induct on $n$. The case $n = 1$ is trivially true, now assume $n\geq 2$. If $n$ is prime, the result is immediate. Oherwise, we can write $n = ab$ for integers $1 < a,b < n$. By induction, each of $a,b$ can be written as a product in the desired form. Combining terms we find a corresponding product for $n$. For uniqueness, consider the set $S$ of positive integers that can be represented as such a product in more than one way. Assuming that $S$ is non-empty, let $m$ be its least element and let

$$p_1^{e_1}p_2^{e_2}\cdots p_r^{e_r} = m = q_1^{f_1}q_2^{f_2}\cdots q_s^{f_s}$$

be two distinct such representations. If $r = 0$, then $m = 1$ implying $s = 0$ and the two representations are identical. Hence $r > 0$ and settying $p = p_1$ we have $p\mid m = q_1^{f_1}q_2^{f_2}\cdots q_s^{f_s}$. By repeated application of the Primality Lemma, it follows that $p\mid q_i$ for some $1\leq i \leq s$, implying that $p = q_i$. But now $m/p$ can be represented in two differenrt ways as a product in the desired form, namely

$$p_1^{e_1 - 1}p_2^{e_2}\cdots p_r^{e_r} = m/p = q_1^{f_1}q_2^{f_2}\cdots q_i^{f_i - 1}\cdots q_s^{f_s}.$$

Since $m/p < m$ this contradicts the minimality of $m$.
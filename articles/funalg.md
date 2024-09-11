
### Fundamental Theorem of Algebra

**Lemma 1.**
For every complex polynomial $P$ and every integer $k$, there is some real number $R$ such that $|P(z)| > k$ for every compelx number $z$ with $|z| > R$.

**Proof.**
Let $P(z) = a_n z^n + a_{n-1} z^{n-1} + \cdots + a_1 z + a_0$ where the $a_i$ are complex numbers with $a_n\neq 0$. By the triangle inequality,
$$|P(z)| \geq |a_n z^n| - |a_{n-1} z^{n-1}| - \cdots - |a_1 z| - |a_0| = |z^n|(|a_n| - |a_{n-1}/z| - \cdots - |a_1/z^{n-1}| - |a_0/z^n|)$$ for all $z\neq 0$.
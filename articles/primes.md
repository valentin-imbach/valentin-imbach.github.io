---
layout: page
title: Infinitude of the Primes
---

### 1. By Euclid

Assume that there are only finitely many primes and denote by $P$ their product.
By the fundamental theorem of arithmetic, there is a prime factor $p$ of $P+1$.
We must have $p\mid P$ and $p\mid P+1$, thus also $p\mid 1$, a contradiction.

### 2. By Topology

We call a set $A \subseteq \mathbb{Z}$ *open* if there exists a non-zero $a\in \mathbb{Z}$ with

\begin{equation}
    n\in A \iff n + a\in A
\end{equation}

for all $n\in\mathbb{Z}$. The following properties are easy to verify:
- If $A$ is an open set witnessed by $a$, then $\mathbb{Z}\setminus A$ is also open witnessed by $a$.
- If $A$ and $B$ are open sets witnessed by $a$ and $b$,
then $A\cup B$ is open, witnessed by $ab$.
- For any non-zero $n\in \mathbb{Z}$, the set $n\mathbb{Z} = \\{nk \mid k\in \mathbb{Z}\\}$ is open, witnessed by $n$.

Assume that there are finitely many primes $p_1,p_2,\dots,p_k$.
Then, the set

\begin{equation}
    P = p_1\mathbb{Z} \cup p_2\mathbb{Z} \cup \cdots \cup p_k\mathbb{Z}
\end{equation}

is open.
By the fundamental theorem of arithmetic, every integer except $\pm 1$ has some prime divisor.
Thus, $P = \mathbb{Z} \setminus \\{-1, 1\\}$.
But $\mathbb{Z}\setminus P = \\{-1,1\\}$ is clearly not open, a contradiction.

### 3. By Density

Assume that there are only finitely many primes $p_1, p_2, \dots, p_n$.
Let $N$ be a positive integer, to be chosen later.
By the fundamental theorem of arithmetic, every positive integer $k \leq N$ has a unique prime factorisation of the form

\begin{equation}
    k = p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_n^{\alpha_n},
\end{equation}

where $\alpha_1,\alpha_2,\dots,\alpha_n$ are non-negative integers, each at most $\log_2(N)$.
However, there are at at most $(\log_2(N))^n$ different such factorisations.
But $(\log_2(N))^n < N$ for large enough $N$, contradicting uniqueness of the prime factorisations.

### 4. By Trigonometry

Assume that there are infinitely many primes $p_1,p_2,\dots, p_n$ and consider the products

\begin{equation}
    P = p_1p_2\cdots p_n \quad\text{and}\quad
    S = \sin\left(\frac{\pi}{p_1}\right)\cdot  \sin\left(\frac{\pi}{p_2}\right) \cdots \sin\left(\frac{\pi}{p_n}\right).
\end{equation}

Since $0 < \pi/p_i < \pi$ for all $i$, each factor of $S$ is positive and thus $S > 0$.
Since sine is periodic with period $2\pi$, and every $p_i$ divides $P$, we also have

\begin{equation}
    S = \sin\left(\frac{\pi(1 + 2P)}{p_1}\right)\cdot  \sin\left(\frac{\pi(1+2P)}{p_2}\right) \cdots \sin\left(\frac{\pi(1+2P)}{p_n}\right).
\end{equation}

By the fundamental theorem of arithmetic, $2P+1$ has some prime divisor $p_k$.
But now, the corresponding factor in the above product is zero, contradicting $S > 0$.

### 5. By Mersenne

Assume there are only finitely many primes $p_1,p_2,\dots,p_n$ and consider the set

\begin{equation}
    M = \\{2^{p_1}-1,\ 2^{p_2}-1,\ \dots,\ 2^{p_n}-1\\}.
\end{equation}

For any integers $m \geq n \geq 1$, observe that

\begin{equation}
    (2^{m-n}-1)2^n = 2^m - 2^n = (2^m - 1) - (2^n - 1).
\end{equation}

Since $\gcd(2^m-1, 2^n-1)$ is odd and divides the right-hand-side of the above, it must also divide $2^{m-n}-1$.
Following Euclid's algorithm, we can repeatedly apply this fact to deduce

\begin{equation}
    \gcd(2^m-1, 2^n-1) \mid 2^{\gcd(m,n)} - 1
\end{equation}

It follows that for $1\leq i < j \leq n$, we have

\begin{equation}
    \gcd(2^{p_i}-1,\ 2^{p_j}-1) \mid 2^{\gcd(p_i,p_j)}-1 = 1.
\end{equation}

This implies that no two numbers in $M$ have a prime factor in common.
But since there are only $|M| = n$ many primes,
each number in $M$ must be the power of a different prime.
However, $2^{11} − 1 = 2047 = 23 \times 89$ is not, a contradiction.

### 6. By Fibonacci

The *Fibonacci sequence* is the sequence $F_0, F_1, F_2,\dots$ with $F_0 = 0, F_1 = 1$ and

\begin{equation}
    F_{n+2} = F_{n+1} + F_n
\end{equation}

for all $n\geq 0$. By induction is it not hard to prove that for all $m,n\geq 1$

\begin{equation}
    F_{m+n}=F_m F_{n+1} + F_{m-1} F_n.
\end{equation}

It follows that for $m\geq n\geq 1$, we have $gcd(F_m, F_n) \mid F_{m-n}$.
Following Euclid's algorithm, we conclude that

\begin{equation}
    \gcd(F_m,F_n) \mid F_{\gcd(m,n)}.
\end{equation}

Now assume that there only finitely many primes $p_1, p_2, \dots, p_n$ and consider the set

\begin{equation}
    F = \\{F_{p_1}, F_{p_2}, \dots, F_{p_n} \\}.
\end{equation}

For any $1\leq i < j \leq n$, we have

\begin{equation}
    \gcd(F_{p_i},F_{p_j}) \mid F_{\gcd(p_i,p_j)} = F_1 = 1.
\end{equation}

Thus, no two numbers in $F$ have a common prime divisor.
But because we only have $|F| = n$ many primes, each number in $F$ must be a prime power.
However, $F_{19} = 4181 = 37\times 113$.

### 7. By Euler

Assume that there are only finitely many primes $p_1,p_2,\dots$ and consider the product

\begin{equation}
    P = \frac{p_1}{p_1-1}\cdot \frac{p_2}{p_2-1}\cdots \frac{p_n}{p_n-1}.
\end{equation}

Note that for any $p \geq 2$ we have

\begin{equation}
    \frac{p}{p - 1} = \frac{1}{1-1/p} = 1 + \frac{1}{p} + \frac{1}{p^2} + \frac{1}{p^3} + \dots
\end{equation}

After expanding the expression for $P$ using the above, the terms in the resulting sum are exactly

\begin{equation}
    \frac{1}{p_1^{\alpha_1} p_2^{\alpha_2} \cdots p_n^{\alpha_n}},
\end{equation}

where $\alpha_1,\alpha_2,\dots, \alpha_n$ range over all non-negative integers.
By the fundamental theorem of arithmetic, the denominator of the above attains every positive integer exactly ones.
But now we have

\begin{equation}
    P = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \cdots
    > 1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{4} + \frac{1}{8} + \cdots
\end{equation}

is a divergent sum, a contradiction.

### 8. By Lagrange

Assume that $p$ is the largest prime.
By the fundamental theorem of arithmetic, there is a prime divisor $q$ of $2^p - 1$. 
Consider $G$, the multiplicative group of the $q-1$ units in $\mathbb{Z}_q$.
The order of $2$ in $G$ divides $p$, but it cannot be $1$, thus must be $p$.
By Lagrange's theorem, the order of any element must divide the size of the group, and we deduce $p\mid q-1$.
But now $p\leq q-1$ contradicts maximality of $p$.


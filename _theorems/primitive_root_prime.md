---
name: Primitive Roots of Primes
---

Every prime has a primitive root.

#### Proof.

Let $d$ be a positive divisor of $p-1$ and denote by $s_d$ the number of integers $1\leq k\leq p-1$ that have order $d$ modulo $p$. Since the order of ony integer modulo $p$ divides $\varphi(p) = p-1$, we have

$$\sum_{\substack{d\in\mathbb{N}\\d\mid p-1}}s_d = p-1.$$

Now if $s_d > 0$ for some $d$, let $1\leq a\leq p-1$ be an integer with order $d$ modulo $p$. The integers

$$a, a^2, a^3,\dots, a^{d-1}, a^d = 1$$

are all distinct modulo $p$, since if $a^i\equiv a^j\pmod{p}$ for some $1\leq i<j\leq d$ then $a^{j-i}\equiv 1$ with $0 < j-i < d$, contradicting the assumption that $d$ is the order of $a$. Moreover, all of the above integers are solutions to the equation

$$x^d - 1 \equiv 0\pmod{n}$$

and by the Polynomial Roots Lemma they are the only ones up to congrunce modulo $p$. Since every integer with order $d$ modulo $p$ must be a solution of this equation, the only candidates are the integers in the above list. Now if $1\leq i\leq d$ is an integer with $\gcd(i, d) > 1$, then $d\mid id/\gcd(i,d)$ and $(a^i)^{d/\gcd(i,d)} \equiv 1\pmod{p}$, hence $a^i$ does not have order $d$ modulo $p$. Thus, we conclude that $s_d\leq \varphi(d)$. But now

$$p-1 = \sum_{\substack{d\in\mathbb{N}\\d\mid p-1}}s_d \leq \sum_{\substack{d\in\mathbb{N}\\d\mid p-1}}\varphi(d) = p-1$$

by the Tautient Lemma, and therefore we must have equality in each term. We conclude that $s_d = \varphi(d)$ and in particular $s_{p-1} = \varphi(p-1) > 0$ implying that $p$ has a primitive root.